;
(function(global) {
	// 定义命名空间
	var mayDom = {};

	// 根据class获取元素节点
	mayDom.getEleListByClassName = (function(className, node) {

		if (document.getElementsByClassName != undefined) {
			// return document.getElementsByClassName(className);
			return function(className, node) {
				var pNode = node || document;
				return pNode.getElementsByClassName(className);
			};
		} else {
			return function(className, node) {
				var pNode = node || document,
					domList = [],
					classPatter = new RegExp(className),
					optionDom = pNode.getElementsByTagName("*"),
					len = optionDom.length;

				while (len--) {
					if (classPatter.test(optionDom[len].className)) {
						domList.push(optionDom[len]);
					}
				}

				return domList.reverse();
			};

		}

	})();

	// 获取某元素的上一个兄弟元素节点
	mayDom.getPreEleSibling = function(node) {

		do {
			node = node.previousSibling;
			if (node == null) {
				return node;
			}
		} while ((node.nodeType != 1))
		return node;
	};

	// 获取某元素的下一个兄弟元素节点
	mayDom.getNextEleSibling = function(node) {

		do {
			node = node.nextSibling;
			if (node == null) {
				break;
			}
		} while (node.nodeType != 1)
		return node;
	};

	// 获得某元素节点的孩子元素节点
	mayDom.getChildEleList = function(node) {
		var domList = [],
			childs = node.childNodes,
			len = childs.length;
		while (len--) {
			var curChild = childs[len];
			if (curChild.nodeType === 1) {
				domList.push(curChild);
			}
		}
		return domList.reverse();

	};

	// 获得某元素节点的第一个元素节点
	mayDom.getFirstChildEle = function(node) {
		var childList = this.getChildEleList(node);

		return childList[0];
	};

	// 获得某元素节点的第一个元素节点
	mayDom.getLastChildEle = function(node) {
		var childList = this.getChildEleList(node);

		return childList[childList.length - 1];
	};
	// 判断某元素是否有指定类名
	mayDom.hasClass = function(node, className) {
		var classList = node.className.split(/\s+/), //得到以类名为元素的数组
			len = classList.length;
		//如果已有指定类则返回
		while (len--) {
			if (classList[len] == className) {
				return true;
			}
		}

		return false;
	};
	// 给某元素节点添加类名
	mayDom.addClass = function(node, className) {
		if (!this.hasClass(node, className)) {
			node.className = node.className + " " + className;
		}

	};

	// 移除某元素节点的某个类名
	mayDom.removeClass = function(node, className) {
		var classList = node.className.split(/\s+/),
			len = classList.length;
		while (len--) {
			if (classList[len] == className) {
				classList.splice(len, 1);
			}
		}
		node.className = classList.join(' ');
	};

	// 暴露接口
	global.mayDom = mayDom;

})(window);