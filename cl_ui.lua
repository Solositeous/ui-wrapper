exports("uiCreateCustom", function(identifier, addon, htmladd)
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
end
