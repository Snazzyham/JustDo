## An Experiment with React Native and styled-components

### Backstory 
Yes, I know that building a to-do list app to test out a new framework or tool is a little overdone. In fact, [there are many articles](https://medium.freecodecamp.com/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d) where people argue about this said fact. 

So why _**did**_ I build a todo app? Well, I used to use Wunderlist, but that had way too many features and I just got bored of it, so I switched to Trello. I really like using Trello for my bigger, project based tasks. However, I missed the simplicity of just being able to open up a todo list app and type stuff that needed to get done that day or the next day. 

Until I found BreakList. BreakList was great, it was clean, it didn't have logins, it just let you open up and start typing. It had some other stuff that I didn't use, such as a timer for tasks, and a separate list for breaks _(hence the name)_, but the UI was good enough such that even though I didn't use those features, they didn't get in the way. 

However, as an homage to Shakespearean drama, if it seems too good, it probably is. With BreakList, everytime I opened up the app from memory, adding a task would crash it. I contacted the developer, who apologised for it and told me that he hadn't updated it in a long time, and it didn't seem like he had any plans to update it any time soon. It's not his fault, it's a side project, you get busy with other things and you move on. That's what side projects are there for, to help you practice your skills. 

So anyway, I needed to learn React Native anyway for a work thing, and what better way then to build an app I actually need, even if it is a to-do list app. 

The UI of this app was heavily inspired by BreakList, with the colors being pretty much a direct ripoff from the [Spectrum team](https://spectrum.chat). 

Here's what the app looks like:

![](./screenshot.gif) 

Here's what it does:

- Add todos
- Mark as complete
- Long press to delete 
- sort by active, complete or all
- persist state using [redux-offline](https://github.com/jevakallio/redux-offline)

For now, the app isn't really available anywhere. If you want to try it out, you can find it on Expo (which is a little React Native app publishing platform) under `@snazzyham/justdo`. If you'd like the APK hit me up on [twitter](https://twitter.com/snazzyham) or email me: snazzyham [at] gmail [dot] com. 