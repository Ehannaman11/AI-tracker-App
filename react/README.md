# App Introduction
This app is mostly built for a phone currently. I will adapt it later to also work for a computer. 
This app is about managing AI, and using it more effectively. It tracks what you type and compares your prompts to the research done about how to use AI more effectively, and gives you tips and tricks on how you can use it more effectively. The goal is to help people control AI, not have them be controlled by AI, or have the false sense that they have learned something, but really learn that thing. 

# Answers and Questions for step 6
Answers are in parenthesis.
Need:
What do you use AI for, and what is annoying about it?

(I currently just try to improve based on my own knowledge, but it doesn’t always mean I am getting better, I just think I am getting better, or see only the improvements I see, not what improvements could be made. )

Value:
If using AI better was solved for you in an app, what are a few words you would use to describe what you want from the app? Why?

(Simple and Easy. I wanted the app to be simple and easy, and currently it is very straightforward because people don’t want something crazy complicated that makes you jump through hoops with this kind of app. You just want to track how well you are using AI so that you can do better, and you want a spot to see how well its going.)

Persona: 
How often does using AI correctly come up for you, and what have you tried to help figure it out better?

(I think they will say it comes up every now and then, but mostly when they think about it when people talk to them in class, like teachers, about how to use AI correctly. Also I think they probably haven’t tried much beyond messing around with it themselves.)

Capability:
I am going to show you this screen for 5 seconds. What does this product do?

(Helps you know how you can use AI better)



# Screen 1
This screen is just an introduction screen. It simply states what the app is for, and gives the user a button to start tracking. 

# Screen 2
This is the configuration screen. It gives the user an option of how long they would like the app to track you for. 

# Screen 3
This screen is the screen that will be up for most of the time. It's purpose is to show the user how much time is left in the tracking, and also to show you tips and tricks on how you can improve. It also shows you a few key statistics, and allows you to end the tracking whenever you would like. 

# What I changed/Design Justification
Initially I changed a lot. I wanted it to be spaced out nicely, and make everything flow well, so that the user would naturally be drawn to the next step for starting the tracking. I chose similar colors, the white text and green buttons, to encourage people to click the button, and also encourage their eyes to read what needed to be read so they understand what my app does. I lowered the opacity on some of the logos so it wouldn't stand out too much, and grouped the tips so that there wouldn't be too much text on the third screen so it was easier to look at. I also put a divider line under the tip and above the stats to group them better. I also made the button for the stop tracking a bit sharper than the other buttons, so that it would look less appealing, and also stand out more so that people would notice it. I changed the buttons opacity as well, so that they wouldn't distract too much from the text of the page, but still gave them an outline so they would be clearly recognizable as buttons still. I also had to have AI reduce wording quite a bit, but later added a bit more to the main landing page so that people would know that they would get feedback from this app, that it wasn't just tracking for no reason. My main focus as far as the principles are concerned, was KISS, Keep It Simple Stupid. 

# First Read
I think currently it is not the most clear what you are tracking, I think adding some text to better explain that could be nice, expecially to page 2. I think everything earns its place pretty well though, but it doesn't function super well as a computer web app, it definitly seems like a phone app. It can navigate correctly. 

# AI Tracker

React + Vite version of the three widget screens (Landing → Setup → Session).

## Run it

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Structure

```
src/
  main.jsx           entry point
  App.jsx            switches between the three screens, holds the chosen session length
  index.css          shared tokens (colors/fonts) + the .screen/.btn/.lockup base styles
  Logo.jsx           the "AI Tracker" wordmark, shared by all three screens
  screens/
    Landing.jsx / .css   screen 1 — intro + Start Tracking
    Setup.jsx   / .css   screen 2 — pick 30 min / 1 hour / variable
    Session.jsx / .css   screen 3 — live clock, rotating tip, stats, Stop Tracking
```

## Notes

- The countdown and tip rotation are wired up with real React state — no more static labels.
- Session data (grade, elapsed prompts, follow-ups) is still hardcoded sample data in `Session.jsx` — swap it for real tracking data whenever that's ready.
- Screen switching is local component state in `App.jsx`, not a router — simple for a 3-screen widget. If this grows into more pages, `react-router-dom` is the natural next step.
