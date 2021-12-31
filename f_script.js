$(function () {
	var uiList = [];
	
	function updateScale() {
		var scalex = ($("#ui-html").width() / 1920);
		var scaley = ($("#ui-html").height() / 1080);
		$(".ui-body").css({"transform-origin-x": 0, "transform-origin-y": 0});
		if (scalex > scaley) {
			scalex = scaley
			var x = ($("#ui-html").width() / scalex) - 1920;
			var y = ($("#ui-html").height() / scaley) - 1080;
			$(".ui-body").css({"transform-origin-x": x, "transform-origin-y": y});
		} else if (scaley > scalex) {
			scaley = scalex
			var x = ($("#ui-html").width() / scalex) - 1920;
			var y = ($("#ui-html").height() / scaley) - 1080;
			$(".ui-body").css({"transform-origin-x": x, "transform-origin-y": y});
		}
		$(".ui-body").css("transform", "scale("+scalex+", "+scaley+")")
		.width("1920px")
		.height("1080px");
	}

	updateScale();

	window.addEventListener("message", event => {
		updateScale();
		var data = event.data;
		var skip = false;
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
				.attr("name", data.table.addonname+"/"+data.table.identifier)
				.attr("id", data.table.identifier)
				.attr("allow", "microphone *; camera *;")
				.attr("tabindex", "-1")
				.attr("style", "visibility: visible; z-index: 0;")
				.appendTo(".ui-body");
				uiList.push(data.table.identifier);
			}
		} else if (data.addon == "ui-post") {
			$.post("https://ui-wrapper/" + data.table.identifier + ":" + data.table.name, JSON.stringify(data.table.args));
		} else if (data.addon == "ui-focus") {
			if (data.table.focus) {
				$("#" + data.table.identifier).attr("style", "z-index: 999;");
			} else {
				$("#" + data.table.identifier).attr("style", "z-index: 0;");
			}
		} else if (data.addon == "controls") {
			if (data.table.control == "hide") {
				$("#" + data.table.identifier).hide();
			} else if (data.table.control == "show") {
				$("#" + data.table.identifier).show();
			} else if (data.table.control == "showAll") {
				uiList.forEach(function(item, index) {
					$("#" + item).show();
				})
			} else if (data.table.control == "hideAll") {
				uiList.forEach(function(item, index) {
					$("#" + item).hide();
				})
			}
		} else if (data.addon != null) {
			try {
				$("#" + data.addon)[0].contentWindow.postMessage(data.table, "*");
			} catch(err) {
			}
		}
	});

	window.addEventListener('keydown', function (event) {
		uiList.forEach(function(item, index) {
			$("#" + item)[0].contentWindow.dispatchEvent(
				new KeyboardEvent('keydown', {key: event.key})
			);
		});
	});
});
