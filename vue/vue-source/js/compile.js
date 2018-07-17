class Compile {
  constructor(el, vm) {
    this.vm = vm;
    this.el = document.querySelector(el);//获取el的元素
    // console.log(this.el)
    // 文档碎片
    // 模板无法编译，过程，从外到内，编译出来的一段的html node append 
    // 到 this.el,性能很低,代替this.el,新的主人，
    // 最后再一次性的更新到真实的DOM
    this.fragment = null;
    this.init();
  }
  init() {
    // this.el 它将被编译后的html 替换
    if(this.el) {
      this.fragment = this.nodeToFragment(this.el);
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
    }else {
      console.log('DOM元素不存在')
    }
  }
  // 递归调用，一层层往里走，
  compileElement(el) {
    // console.log(el)
    var childNodes = el.childNodes;//返回fragment 子节点集合  
    // console.log(childNodes);
    [].slice.call(childNodes).forEach(node => { //伪数组 需要借助[]的方法
      console.log(node)
      // console.log(node.nodeType)
      var reg = /\{\{(.*)\}\}/
      var text = node.textContent //文本内容
      // console.log(this.isTextNode(node) && reg.test(text))
      if(this.isElementNode(node)){ //获取元素节点
        console.log('运行了')
        this.compile(node)
      }else if(this.isTextNode(node) && reg.test(text)) { //获取文本节点
        console.log('运行了2')
        // console.log(node,reg.exec(text)[1])
        this.compileText(node, reg.exec(text)[1]);
      }

      if(node.childNodes && node.childNodes.length) {
        // this.compileElement(node);
      }
    })
  }
  compileText(node, Exp) {
    var initText = this.vm[Exp];//获取key:Exp 的value
    // console.log(node.textContent,initText)
    this.updateText(node,initText);//将{{key}}替换为对应的value
  }
  updateText(node,value) {
    node.textContent = typeof value === 'undefined'?'':value
  }
  compile (node) {
    var nodeAttrs = node.attributes;
    console.log(nodeAttrs)
    Array.prototype.forEach.call(nodeAttrs, attr => {
      var attrName = attr.name;
      if(this.isDirective(attrName)) {
        var exp = attr.value
        var dir = attrName.substring(2)
        if(this.isEventDiretive(dir)) {
          this.compileEvent(node, this.vm, exp, dir)
        } else {
          // v-model
        }
      }
    })
  }
  compileEvent (node, vm, exp, dir) {
    // 什么事件? event
    // callback?
    // addEventListener
    const eventType = dir.split(':')[1]
    var cb = vm.methods && vm.methods[exp]
    console.log(cb)
    if (eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false)
    }
  }
  isDirective (attr) {
    return attr.indexOf('v-') == 0
  }
  isEventDiretive (dir) {
    return dir.indexOf('on:') == 0
  }
  isElementNode(node) {
    return node.nodeType == 1;//判断是否为元素节点
  }
  isTextNode(node) {
    // console.log(node.nodeType)
    return node.nodeType == 3; //判断是否为文本节点
  }
  nodeToFragment(el) {
    // console.log(el)
    var fragment = document.createDocumentFragment();
    var child = el.firstChild;
    // console.log(child)
    while(child) {
    //       DocumentFragment节点不属于文档树，继承的parentNode属性总是null。它有一个很实用的特点，当请求把一个DocumentFragment节点插入文档树时，插入的不是DocumentFragment自身，而是它的所有子孙节点。这个特性使得DocumentFragment成了占位符，暂时存放那些一次插入文档的节点。它还有利于实现文档的剪切、复制和粘贴操作。 
    // 另外，当需要添加多个dom元素时，如果先将这些元素添加到DocumentFragment中，再统一将DocumentFragment添加到页面，会减少页面渲染dom的次数，效率会明显提升。
      fragment.appendChild(child) //把所有节点放去fragment
      child = el.firstChild
      // console.log(child) 
    }
    // console.log(fragment,child)
    return fragment;
  }
}
