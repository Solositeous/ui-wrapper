local uiCreateCustom = {}

exports("uiCreateCustom", function(identifier, addon, htmladd)
	if uiCreateCustom[identifier] then print("uiCreateCustom Identifier already in use") return end
	uiCreateCustom[identifier] = true
	Citizen.CreateThread(function()
		Wait(5000)
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
	if uiRegisterCallback[identifier] then print("uiRegisterCallback Identifier already in use") return end
	RegisterNUICallback(identifier..":"..name, func)
	uiRegisterCallback[identifier] = true
end)

RegisterNUICallback("post", function(data)
	SendNUIMessage({
		addon = "ui-post",
		table = data,
	})
end)