$(function () {
	var uiList = [];
	window.addEventListener('message', event => {
		var data = event.data
		var skip = false
		if (data.addon == "ui") {
			if (data.identifier != null) {
				uiList.forEach(function(item, index) {
					if (data.identifier == item) {
						skip = true;
					}
				})
				if (skip) return false;
				$("<iframe>")
				.attr("src", "nui://"+data.addonname+"/"+data.htmladd)
				.attr('name', data.addonname+"/"+data.identifier)
				.attr('id', data.identifier)
				.attr('allow', "microphone *; camera *;")
				.attr('tabindex', "-1")
				.attr('style', "visibility: visible; z-index: 0;")
				.appendTo('.ui-body');
				uiList.push(data.identifier);
			}
		} else if (data.addon != null) {
			$(".ui-body").children("iframe").each(function () {
				event = JSON.parse(JSON.stringify(event));
				if (data.addon == $(this).context.id) {
					$(this).context.contentWindow.postMessage(data, "*");
				}
			})
		}
	});
});