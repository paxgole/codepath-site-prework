# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Pax Gole**

Time spent: **15-25** active hours spent in total<br><sub>(glitch showed about 25 in total but some of that is time I left it online while doing other tasks, but 15-25 is where the answer is somewhere)</sub>

Link to project: [gentle-periodic-moose](https://gentle-periodic-moose.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn (hopefully in the next iteration!)

The following **additional** features are implemented:

* [X] Added a 'status' element below the buttons - it alerts user when to start playing after playing the last tone in the current turn, displays game win/loss status at end, and shows the number of attempts left with a warning when an error is made. This is meant to replace the clunky 'alert'.
* [X] Replays the sound (with lights) if won.
* [X] Increases difficulty after a win by making the next pattern length 9, then 10, etc. (Only after wins though!)

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Gif 1 - Win! P1](https://cdn.glitch.global/86d0b98f-e6c7-4083-b062-052c852812be/codepathgifpart1.gif?v=1648763084835)
![Gif 2 - Win! P2](https://cdn.glitch.global/86d0b98f-e6c7-4083-b062-052c852812be/codepathgifpart2.gif?v=1648763089109)
![Gif 3 - Win! P3](https://cdn.glitch.global/86d0b98f-e6c7-4083-b062-052c852812be/codepathgifpart3.gif?v=1648763092036)
![Gif 4 - Lose!](https://cdn.glitch.global/86d0b98f-e6c7-4083-b062-052c852812be/codepathgifpart4.gif?v=1648763094300)

-------

## Reflection Questions

**1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.**

**Assets**:
- [Link](https://github.com/wcgbg/solfege-samples) to Solfege Samples used along with the Audiocontext audio - specifically the ones based off of Chengdu's voice (who is that project's creator)
- [Link](https://rubjo.github.io/victor-mono/) to the Victor Mono font used. It is very pretty!
- [Link](https://freesvg.org/musical-notes-background) to the SVG image used on the back of the music buttons.
- [Link](https://fonts.google.com/specimen/Zilla+Slab+Highlight) to other imported font, 'Zilla Slab Highlight' from Google.

**Tools**:
- [Link](https://coolors.co/palette/fbf8cc-fde4cf-ffcfd2-f1c0e8-cfbaf0-a3c4f3-90dbf4-8eecf5-98f5e1-b9fbc0) to color palette base used for the buttons. I've used Coolers before for artwork so I knew I could rely on it again. I modified the colors a bit and added a 'active' color version for each button as well.
- [Link](https://boxy-svg.com/) to Boxy, the svg editor I used to make the image translucent and experiment with colors.

**References**:
- [Link](https://developer.mozilla.org/en-US/) to MDN Web Docs created by Mozilla - referenced regularly for all 3 files, especially CSS.
- [Link](https://www.w3schools.com/) to W3Schools - also referenced for all 3 files but specifically for HTML
- [Link](https://www.compart.com/en/unicode) to CompArt - used to find the cool Unicode hieroglyphs used on the buttons
- [Link](https://css-tricks.com/) to CSS Tricks, a site I used for all kinds of CSS reference, especially for the background colors and image stuff.
- And of course, a variety of my little questions were answered by [Stack Overflow](https://stackoverflow.com/). I don't like copying code but if I do copy something with very little modification I try to remember to give an inline credit.

I also had my non-technical friends & family play the game to give me some feedback on the usability. I did ask them not to give me any ideas just uet (before the submission) but if something was glaringly obvious to let me know - they suggested a 'dark mode' which I begrudgingly agreed to implement in the future.

<sub> Disclaimer: I did not show it to my technical friends & family yet as they naturally are inclined to see the source code and give me advice but I wanted to make sure it was fully my work.</sub>

<br>

**2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)**

My main challenge was getting comfortable with repeatedly modifying all 3 pages at the same time to implement one new feature. Moving through the pages only got more frustrating when I had a bug and I couldn't figure out either where it was coming from or how to get the other two files to calm down while I debug. It definitely wasn't pleasant when I was fixing a bug that would make the tones play on a loop until I'd exit the app!
At one point I kind of just got into a rhythm of modifying the HTML then CSS then JS then cycling a couple times and testing right after JS so I knew I had set variables to print to console while testing. I realized if I took the time to first find the source without getting annoyed at my own code beforehand
then the whole process would be over quickly.
It was easier with practice and getting into a flow state of mind, but ultimately the thing that helped was just downloading the project and editing it through my editor of choice since I could put the html and css next to each other while editing. I also learned that the local html file could be opened and it works just as well as a website while testing in my browser, and then I just updated glitch with the files by copy pasting when I was done.

Another (smaller) challenge was resisting the urge to go ham with the page design - especially the Unicode! I think the visual modification was my favorite part of the whole thing, especially learning about the 'element status' concept in HTML and trying not to add a different visual to every little thing (aka "when clicked" or "on hover"). This was also the case with the solfage sounds and font (in the javascript file you can see the different styles I tried and saved!). I simply could not settle on the aesthetic I wanted but it came together in the end and I am very glad with how it looks. I think the Victor Mono font really tied it together!

<br>

**3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)**

- What is the process if you're developing frontend in a team - does one person handle the styling, one person is primarily on scripting, etc.? It doesn't seem to make sense to me personally since it was all interconnected for me.
- How do you manage the fact that not everyone has a great browser, or that even if you do have a great browser maybe your computer can't handle some of the crazy things the browser does? My laptop was often running hotter than I expected during the project, which I haven't experienced much before even with math-heavy programs. So specifically, how do you make it so that the app is pretty but can also be pretty on a slow computer?
- Going off of the last question, how do developers handle accessibility? Do they label all HTML elements or are the names generated from the HTML class names by a screenreader used for someone with low vision for example? What kinds of tools do developers use to make all their websites as accessible as possible?
- How much is too much? I had way too much fun adding customizations but how do teams decide to stop obsessing over the design and adding more features?
- How does security play into the development process? This is more of a general question about the role of security in the web developement process, since I've been thinking more and more about it during my Cybersecurity course.

<br>

**4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)**

It would be fun to add more complex levels to the game, where each win makes the game create a level of higher difficulty (not just in length of the pattern). I'd also have to write in the logic for generating the extra button symbols and colors, and that would be another rabbithole of understanding color theory. (I suppose the game [I Love Hue](http://i-love-hue.com/) would be worth looking into as a reference!) I'm not sure about the frequency map and how more frequencies could be generated to be pleasant when there's a lot of buttons made at a higher level, but figuring that out would be pretty awesome, as well as some kind of 'pleasantness check' for the resulting sound.

I think if I wanted to add any more cool features I'd want to rewrite most of the functions since many of them would modify each other's domains and I'd have to redesign the app to make sure they stay in their domain in case something breaks.

To be very honest, I had a lot of fun doing this and I think I will keep working on it in a separate repository to try and add these new feature ideas when I have free time. **I hope that free time is during the summer after my Codepath internship hours!**

-------

## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/152mlKTc-Qrx5YYi1Ir38GWu_fE21ZPCf/view?usp=sharing)
I want to apologize for my minor twitching, I did my best to prevent it and I hope it is not off-putting, but sometimes my face tics are very visible - especially when I'm really engaged in something :) Thank you for understanding, and thank you for watching!! :D


## License

    Copyright Pax Gole

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.