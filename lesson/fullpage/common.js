class PureFullPage {
    constructor(options) {
        // 1.手动计算page高度
        // #PureFullPage高度?
        this.container = document.getElementById('pureFullPage');
        this.viewHeight = document.documentElement.clientHeight;
        this.init();
    }
    init() {
        this.container.style.height = `${this.viewHeight}px`;//this.viewHeight +'px'
        // mousewheel 截流
        // 事件监听 浏览器嗅探
        // mousewheel
        // firefox DOMMouseScroll
        // this.scrollMouse 方法,负责滚动 执行太频繁
        // throttle 在规定时间里只执行一次
        // 重新返回一个函数,handleMouseWheel,闭包,
        // 将this,scrollMouse 封到内部
        // this, 函数执行的context 
        // 1000 delay 推迟下执行
        const handleMouseWheel = utils.throttle(this.scrollMouse,this,1000);
        if(navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
            document.addEventListener('mousewheel',handleMouseWheel,false); //为鼠标转轮添加事件
        }else {
            document.addEventListener('DOMMouseScroll',handleMouseWheel,false);
        }
    }
    //滚轮事件处理函数
    scrollMouse(){
        console.log('scroll');
    }
}