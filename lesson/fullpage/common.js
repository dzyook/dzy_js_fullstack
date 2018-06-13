// 截流throttle,在规定时间只执行一次,先执行 debounce,在规定时间执行一次,后执行 防抖都为解决高频事件而来 scroll mousewhell mousemover mousemove touchemove onresize
class PureFullPage {
    // options 插件配置
    constructor(options) {
        // 1.手动计算page高度
        // #PureFullPage高度?
        const defaultOptions = {
            isShowNav:true,
            delay:1000,
            //每次turnpage callback
            definePages:() => {}
        }
        // this.options = Object.assign(defaultOptions,options);
        this.container = document.getElementById('pureFullPage');
        this.viewHeight = document.documentElement.clientHeight;
        this.DELAY = options.delay==null?defaultOptions.delay:options.delay;
        this.currentPosition = 0;
        this.currentPage = 0;
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
        const handleMouseWheel = utils.throttle(this.scrollMouse,this,this.DELAY);
        if(navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
            document.addEventListener('mousewheel',handleMouseWheel,false); //为鼠标转轮添加事件
        }else {
            document.addEventListener('DOMMouseScroll',handleMouseWheel,false);
        }
        // 事件处理函数交由对象的方法来执行
        window.addEventListener('resize',this.handleWindowRisize.bind(this),false);
    }

    handleWindowRisize(event) {
       //对象的方法,肯定有需要找到对象
       //this 代表对象
       //防抖
       
       utils.debounce(this.getNewPosition,this,event,this.DELAY);    
    }
    getNewPosition(){
        this.viewHeight = document.documentElement.clientHeight;
        this.container.style.height = `${this.viewHeight}px`;
        this.container.style.top = `-${this.currentPage*this.viewHeight}px`;
    }
    //滚轮事件处理函数
    scrollMouse(event){
        // console.log(event);
        const delta = utils.getWheelDelta(event);
        if(delta > 0){
            // 向上滚
            this.goUp();
        } else {
            // 向下滚
            this.goDown();
        }
        // console.log(this.currentPosition);
    }
    goUp(){
        if(this.currentPage==0) {
            return
        }
        this.currentPage--;
        this.container.style.top = `-${this.currentPage*this.viewHeight}px`;
        
    }
    goDown(){
        if(this.currentPage==2) {
            return
        }
        this.currentPage++;
        this.container.style.top = `-${this.currentPage*this.viewHeight}px`;
    }
}