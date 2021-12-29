local uiCreateCustom = {}

exports("uiCreateCustom", function(identifier, addon, htmladd)
	if uiCreateCustom[identifier] then print("uiCreateCustom Identifier already in use") return end
	uiCreateCustom[identifier] = true
	Citizen.CreateThread(function()
		Wait(2000)
		SendNUIMessage({
			addon = "ui",
			table = {
				identifier = identifier,
				addonname = addon,
				htmladd = htmladd,
			},
		})
	end)
end)

exports("uiSendMessage", function(identifier, table)
	SendNUIMessage({
		addon = identifier,
		table = table,
	})
end)

local uiRegisterCallback = {}

exports("uiRegisterCallback", function(identifier, name, func)
	if uiRegisterCallback[identifier..":"..name] then print("uiRegisterCallback Identifier already in use") return end
	RegisterNUICallback(identifier..":"..name, func)
	uiRegisterCallback[identifier..":"..name] = true
end)

RegisterNUICallback("post", function(data)
	SendNUIMessage({
		addon = "ui-post",
		table = data,
	})
end)

exports("uiSetFocus", function(identifier, keyboard, mouse)
	SetNuiFocus(keyboard, mouse)
	SendNUIMessage({
		addon = "ui-focus",
		table = {
			identifier = identifier,
			focus = mouse
		},
	})
end)

exports("uiDisableAll", function()
	SendNUIMessage({
		addon = "controls",
		table = {
			control = "hideAll",
		}
	})
end)

exports("uiEnableAll", function()
	SendNUIMessage({
		addon = "controls",
		table = {
			control = "showAll",
		}
	})
end)

exports("uiEnable", function(identifier)
	SendNUIMessage({
		addon = "controls",
		table = {
			identifier = identifier,
			control = "show",
		}
	})
end)

exports("uiDisable", function(identifier)
	SendNUIMessage({
		addon = "controls",
		table = {
			identifier = identifier,
			control = "hide",
		}
	})
end)