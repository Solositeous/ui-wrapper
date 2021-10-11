fx_version 'adamant'

game 'gta5'

client_scripts {
	'cl_ui.lua',
	'@es_extended/client/wrapper.lua',
	'esx_menu_list/client/main.lua',
	'esx_menu_default/client/main.lua',
	'esx_menu_dialog/client/main.lua',
}

files {
	'esx_menu_default/html/ui.html',
	'esx_menu_default/html/css/app.css',
	'esx_menu_default/html/js/mustache.min.js',
	'esx_menu_default/html/js/app.js',
	'esx_menu_list/html/ui.html',
	'esx_menu_list/html/css/app.css',
	'esx_menu_list/html/js/mustache.min.js',
	'esx_menu_list/html/js/app.js',
	'esx_menu_list/html/fonts/pdown.ttf',
	'esx_menu_list/html/fonts/bankgothic.ttf',
	'esx_menu_dialog/html/ui.html',
	'esx_menu_dialog/html/css/app.css',
	'esx_menu_dialog/html/js/mustache.min.js',
	'esx_menu_dialog/html/js/app.js',
	'esx_menu_dialog/html/fonts/pdown.ttf',
	'esx_menu_dialog/html/fonts/bankgothic.ttf',
}

dependencies {
	'es_extended'
}