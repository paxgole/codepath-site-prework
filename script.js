// Global Variables
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.7; // must be between 0.0 and 1.0
var guessCounter = 0;
var pattern = [];
var nowPlaying = 0
var clueHoldTime = 1000; // how long to hold each clue's light/sound
var attempts = 3;
var patternLength = 8;
// sound functions
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();


// Global Constants
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence
const freqMap = // do re mi fa so la ti do!
{
    1: 261,
    2: 295,
    3: 329,
    4: 345,
    5: 392,
    6: 429,
    7: 490,
    8: 520
};
const inactiveButtonVals = ['𓃠','𓃭','𓅓','𓃹','𓃰','𓆉','𓆏','𓆜']; // placeholders
const activeButtonVals = [' do  ',' re  ',' mi  ',' fa  ',' so  ',' la  ',' ti  ',' do  ']; // solfage, but fancy :)
const solfage = ['do','re','mi','fa','so','la','ti','do'] // plaintext for copying
// '𝕕𝕠','𝕣𝕖','𝕞𝕚','𝕗𝕒','𝕤𝕠','𝕝𝕒','𝕥𝕚','𝕕𝕠'
// '∂σ','яє','мι','ƒα','ѕσ','ℓα','тι','∂σ'
// 'ᴅᴏ','ʀᴇ','ᴍɪ','ꜰᴀ','ꜱᴏ','ʟᴀ','ᴛɪ','ᴅᴏ'
// 'do','re','mi','fa','so','la','ti','do'
// ' do  ',' re  ',' mi  ',' fa  ',' so  ',' la  ',' ti  ',' do  '


// Functions

function setPattern()
{
    let pattern = Array.from('0'.repeat(patternLength)); // original code from: https://stackoverflow.com/a/28599347
    for (var i = 0; i < pattern.length; i++)
    {
        pattern[i] = (Math.floor(Math.random() * 7) + 1);
    }
    console.log("pattern set: ", pattern);
    return pattern;
}


// Start / Stop

function startGame()
{
    // initialize game variables
    attempts = 3;
    progress = 0;
    gamePlaying = true;
    pattern = setPattern();
    clueHoldTime = 1000;
  
    // swap the Start and Stop buttons
    document.getElementById("startButton").classList.add("hidden");
    document.getElementById("stopButton").classList.remove("hidden");
    // begin game
    document.getElementById('gameStatus').innerText = "Currently Playing: Turn #" + (progress+1);
    document.getElementById('gameStatus').style.textDecoration = "solid underline LightSkyBlue 4px";
    playClueSequence();
}

function stopGame()
{
    gamePlaying = false;
  
    // swap the Stop and Start buttons
    document.getElementById("stopButton").classList.add("hidden");
    document.getElementById("startButton").classList.remove("hidden");
}


// Make buttons light / unlight

function lightButton(btn) // change button content ONLY during clue
{
    document.getElementById("b"+btn).classList.add("lit");
    document.getElementById("b"+btn).innerText = activeButtonVals[btn-1];
}

function clearButton(btn) // reset so solfage does not show during user press
{
    document.getElementById("b"+btn).classList.remove("lit");
    document.getElementById("b"+btn).innerText = inactiveButtonVals[btn-1];
}


// Playing the clues

function playClueSequence()
{
    guessCounter = 0;
    console.log("\nplaying clues event:\n");
    let delay = nextClueWaitTime; // set delay to initial wait time
    for (let i = 0 ; i <= progress ; i++) // for each clue that is revealed so far
    {
        console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
        setTimeout(playSingleClue,delay,pattern[i], i); // set a timeout to play that clue
        delay += clueHoldTime;
        delay += cluePauseTime;
    }
    clueHoldTime = clueHoldTime - 80;
    console.log("\n");
}


// Game win / loss states

function loseGame()
{
    document.getElementById('gameStatus').innerText = "Game Over. You lost. Click Start to play again.";
    document.getElementById('gameStatus').style.textDecoration = "solid underline LightSalmon 4px";
    stopGame();
}

function winGame(patternString)
{
    document.getElementById('gameStatus').innerText = "You won! Here's the full melody:\n" + patternString + "\nClick start to play again.";
    document.getElementById('gameStatus').style.textDecoration = "solid underline LightSeaGreen 4px";
    patternLength++;
    stopGame();
}

function warningGame()
{
    var text = document.getElementById('gameStatus').innerText;
    document.getElementById('gameStatus').innerText = "Warning. You made an error. You have " + (attempts) + " guesses remianing.\nCurrently Playing: Turn #" + (progress+1);
}


// Validate attempts

function guess(btn)
{
    console.log("\nbutton pressed event: ");
    console.log("user guessed: " + btn);
    console.log("curr prog: " + progress);
    console.log("current guesscounter: " + guessCounter);
    console.log("attempts left: " + attempts);
  
    if (!gamePlaying)
    {
        return;
    }
  
    if (btn == pattern[guessCounter]) // correct
    {
        console.log("correct guess.");
        document.getElementById('gameStatus').style.textDecoration = "solid underline LightSkyBlue 4px";
      
        if (guessCounter != progress) // NOT last in current sequence
        {
            guessCounter++;
        }
        else // YES last in current sequence
        {
            if (progress == (pattern.length - 1)) // end of entire game
            {
                playFullStream();
                return;
            }
            progress++;
            playClueSequence();
        }
        document.getElementById('gameStatus').innerText = "Correct!\nCurrently Playing: Turn #" + (progress+1);
    }
  
    else if (btn != pattern[guessCounter]) // wrong
    {
        attempts--; // decrement an attempt
        document.getElementById('gameStatus').innerText = "";
        document.getElementById('gameStatus').style.textDecoration = "solid underline LightSalmon 4px";
        console.log("attempted: " + btn);
        console.log("correct: " + pattern[guessCounter]);
        if (attempts == 0)
        {
            console.log("wrong guess. you fail!")
            loseGame();
            return;
        }
        warningGame();
        playClueSequence();
    }
    
    console.log("\n");
}



// Sound functions

function playSingleClue(btn, i)
{
    lightButton(btn);
    playTone(btn,clueHoldTime, i);
    setTimeout(clearButton,clueHoldTime,btn);
}


function playFullStream()
{
    console.log("PLAYING FINAL STREAM");
    var patternString = "";
    let delay = nextClueWaitTime; // set delay to initial wait time
    for (let i = 0 ; i <= progress ; i++) // for each clue that is revealed so far
    {
        console.log("play single clue: " + pattern[i] + " in " + delay + "ms - fullStream");
        setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
        delay += clueHoldTime;
        delay += cluePauseTime;
        patternString += solfage[pattern[i]-1] + " ";
    }
    winGame(patternString);
}

function playTone(btn,len, i)
{
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    context.resume();
    tonePlaying = true;
    setTimeout(function()
    {
        stopTone(btn, i)
    },  len);
}

function startTone(btn)
{
    if(!tonePlaying)
    {
        context.resume();
        o.frequency.value = freqMap[btn];
        g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
        context.resume();
        tonePlaying = true;
        var audio = document.getElementById("audio"+btn)
        audio.volume = 0.5; // half the volume to blend with tone
        audio.currentTime = 0.1; // go back to beginning-ish (audio files kinda start after a small delay)
        audio.play(); // play audio clip
    }
}

function stopTone(btn, i)
{
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.25); // dont stop playing instantly, let it fade out a bit
    tonePlaying = false;
    document.getElementById("audio"+btn).pause(); // pause audio clip - very abrupt interval! must fix in next version :(
    if ((i == progress) && (gamePlaying == true)) // if last in current sequence
    {
        console.log("nowplaying #:" + i);
        document.getElementById('gameStatus').innerText += "\nYour turn.";
    }
}

// Page Initialization
// Init Sound Synthesizer
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);
