# ui-wrapper
UI Wrapper for FiveM

No idea if this has been done before or not but I made this script to allow multiple UI's inside one addon


How To Use:
Inside your addon at the top of the client side script use the below.
```
exports['ui-wrapper']:uiCreateCustom("Scoreboard", "jones-scoreboard", "ui/scoreboard.html") -- first argument is the identifier (this needs to be uniqued), second argument is the addon name so what you put after start in cfg, the third argument is the location inside the addon where the html file is located.
```
With this script you will need to change the SendNUIMessage to include addon = "identifier". For example
```
SendNUIMessage({
  addon = "Scoreboard",
  players = 10,
  playerid = 1,
})
```
This will tell the wrapper to send the nui message to the Scoreboard iframe.

I am happy to take any optimisations or suggestions for changes to this script. It was made for a custom framework and thought I would release it to help people who might also be having the same issue I had.

# To-Do
* Create UI → Lua handler

# For Support Please go to our discord https://discord.gg/2hNNkA5t7Z
