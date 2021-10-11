$(function () {
	var uiList = [];
	window.addEventListener('message', event => {
		var data = event.data
		var skip = false
		if (data.addon == "ui") {
			if (data.table.identifier != null) {
				uiList.forEach(function(item, index) {
					if (data.table.identifier == item) {
						skip = true;
					}
				})
				if (skip) return false;
				$("<iframe>")
				.attr("src", "nui://"+data.table.addonname+"/"+data.table.htmladd)
				.attr('name', data.table.addonname+"/"+data.table.identifier)
				.attr('id', data.table.identifier)
				.attr('allow', "microphone *; camera *;")
				.attr('tabindex', "-1")
				.attr('style', "visibility: visible; z-index: 0;")
				.appendTo('.ui-body');
				uiList.push(data.table.identifier);
			}
		} else if (data.addon == "ui-post") {
			$.post('http://ui-wrapper/' + data.table.identifier + ":" + data.table.name, JSON.stringify(data.table.args));
		} else if (data.addon != null) {
			$(".ui-body").children("iframe").each(function () {
				if (data.addon == $(this).context.id) {
					$(this).context.contentWindow.postMessage(data.table, "*");
				}
			})
		}
	});
});
