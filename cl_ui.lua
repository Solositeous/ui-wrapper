exports('uiCreateCustom', function(identifier, addon, htmladd)
	Citizen.CreateThread(function()
		Wait(5000)
		SendNUIMessage({
			addon = "ui",
			identifier = identifier,
			addonname = addon,
			htmladd = htmladd,
		})
	end)
end)