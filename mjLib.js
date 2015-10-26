
// 根据class获取元素节点
function getEleListByClassName(className,node){

    var oparent_dom,
        domList=[],
        classPatter=new RegExp(className);

    if(document.getElementsByClassName!=undefined){
        return document.getElementsByClassName(className);
    }else{
        if(node==undefined){
            oparent_dom=document.body.getElementsByTagName("*");
        }else{
            oparent_dom=node.getElementsByTagName("*");
        }
        for(var i=0;i<oparent_dom.length;i++){
            if(classPatter.test(oparent_dom[i].className)){
                domList.push(oparent_dom[i]);
            }
        }
        return domList;
    }
}

// 获取某元素的上一个兄弟元素节点
function getPreEleSibling(node){

    do{
        node=node.previousSibling; 
        if(node==null){
            break;
        }
    }while((node.nodeType!=1))
    return node;
}

// 获取某元素的下一个兄弟元素节点
function getNextEleSibling(node){
    
    do{
        node=node.nextSibling;
        if(node==null){
            break;
        }
    }while(node.nodeType!=1)
    return node;
}

// 获得某元素节点的孩子元素节点
function getChildEleList(node){
    var domList=[],
        childs=node.childNodes;

    for(var i=0;i<childs.length;i++){
        if(childs[i].nodeType==1){
            domList.push(childs[i]);
        }
    }
    
    return domList;
    
}

// 获得某元素节点的第一个元素节点
function getFirstChildEle(node){
    var childList=getChildEleList(node);

    return childList[0];
}

// 获得某元素节点的第一个元素节点
function getLastChildEle(node){
    var childList=getChildEleList(node);

    return childList[childList.length-1];
}

// 给某元素节点添加类名
function addClass(node,className){
    var classList=node.className.split(/\s+/);
    for(var i=0;i<classList.length;i++){
        if(classList[i]==className){
            return;
        }
    }
    if(i==classList.length){
        // 如果该node的clasa为空,就直接把className赋值给class属性
        if(new RegExp("").test(node.className)){
            node.className=className;
        }else{
            node.className=node.className+" "+className;
        }
    }

}

// 移除某元素节点的某个类名
function removeClass(node,className){
    var classList=node.className.split(/\s+/);
    for(var i=0;i<classList.length;i++){
        if(classList[i]==className){
            classList.splice(i,1,"");
        }
    }

   node.className=classList.toString().replace(",","");
}




