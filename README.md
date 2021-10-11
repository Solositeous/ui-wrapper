# ui-wrapper

UI Wrapper for FiveM

No idea if this has been done before or not but I made this script to allow multiple UI's inside one addon

How To Use:
Inside your addon at the top of the client side script use the below.

```
exports['ui-wrapper']:uiCreateCustom("Scoreboard", "jones-scoreboard", "ui/scoreboard.html") -- first argument is the identifier (this needs to be uniqued), second argument is the addon name so what you put after start in cfg, the third argument is the location inside the addon where the html file is located.
```

SendNUIMessage has changed. Below will show you a before and after.

```
Change This:
SendNUIMessage({
	players = 10,
	playerid = 1,
})

To This:
exports['ui-wrapper']:uiSendMessage("Scoreboard", {
	players = 10,
	playerid = 1,
})
```

This will tell the wrapper to send the nui message to the Scoreboard iframe.

Last thing that you need to do to get this working. In your addons fxmanifest.lua make sure to add files {} and inside the {} add all the files that are ui related. Eg.

```
files {
	'ui/scoreboard.html',
	'ui/js/script.js',
	'ui/css/style.css',
	'ui/png/logo.png',
}
```
If you dont add this then the client will be given an empty html file and it wont display anything

Sending and Receiving NUI Callbacks have been reworked as well. To send a post back to the script you will need to use the bellow. This code goes in the js code of the html file.

```
exports.ui-wrapper.uiPostMessage("Scoreboard", "players", {
	players = 10,
	playerid = 1,
});
```

You will also need to make the callback on the client side to be able to handle that post message.

```
exports['ui-wrapper']:uiRegisterCallback("Scoreboard", "players", function(data, cb)
	print(json.encode(data))
	cb("received callback")
end)
```

Everything above this is example code. Make sure to replace it with your own inputs.

# Functions
```
exports['ui-wrapper']:uiCreateCustom(identifier, addonname, htmllocation) -- lua
exports['ui-wrapper']:uiSendMessage(identifier, table) -- lua
exports.ui-wrapper.uiPostMessage(identifier, callbackname, table) -- js
exports['ui-wrapper']:uiRegisterCallback(identifier, name, func) -- lua
```

# I have now included an example

In this example is 3 addons. 1 being this ui-wrapper and the other 2 are 2 ways you can merge addons and use this script.

I am happy to take any optimisations or suggestions for changes to this script. It was made for a custom framework and thought I would release it to help people who might also be having the same issue I had.

# To-Do

-   Create UI → Lua handler
-   Example Script

# For Support Please go to our discord https://discord.gg/2hNNkA5t7Z
