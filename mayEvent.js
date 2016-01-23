;
(function(global) {
	var mayEvent = {};

	// 添加事件
	mayEvent.addEvent = (function() {
		if (document.addEventListener) {
			return function(dom, type, handler) {
				dom.addEventListener(type, handler, false);
			};
		} else if (document.attachEvent) {
			return function(dom, type, handler) {
				dom.attachEvent("on" + type, handler);
			};
		} else {
			return function(dom, type, handler) {
				dom["on" + type] = handler;
			};
		}
	})();

	// 删除事件
	mayEvent.delEvent = (function() {
		if (document.removeEventListener) {
			return function(dom, type, handler) {
				dom.removeEventListener(dom, type, handler);
			};
		} else if (document.detachEvent) {
			dom.detachEvent("on" + type, handler);
		} else {
			dom["on" + type] = null;
		}
	})();

	// 获得事件对象
	mayEvent.getEvent = function(event) {
		return event ? event : window.event;
	};

	// 获得触发事件的目标
	mayEvent.getTarget = function() {
		var ev = this.getEvent(event);
		return ev.target || ev.srcElement;
	};

	// 取消事件冒泡
	mayEvent.cancelBubble = function(ev) {
		if (ev.stopPropagation) {
			ev.stopPropagation();
			return function() {
				ev.stopPropagation();
			};
		} else if (ev.cancelBubble) {
			ev.cancelBubble = true;
			return function() {
				ev.cancelBubble = true;
			};
		}
	};
	// 阻止默认事件
	mayEvent.preventDefault = function(ev) {

		if (typeof ev.preventDefault === 'function') {
			ev.preventDefault();
			return function(ev) {
				ev.preventDefault();
			};

		} else if (typeof ev.returnValue === 'boolean') {
			ev.returnValue = false;
			return function(ev) {
				ev.returnValue = false;
			};

		}
	};

	// 暴露接口
	global.mayEvent = mayEvent;
})(window);