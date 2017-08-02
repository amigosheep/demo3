$(function(){
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        keyboardControl:true,
        mousewheelControl:true,

        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); //初始化完成开始动画    
        }, 
        onSlideChangeStart:function(swiper){
            $("#header").hide();
        },//swiper从当前slide开始过渡到另一个slide时执行。触摸情况下，如果释放slide时没有达到过渡条件而回弹时不会触发这个函数
        onSlideChangeEnd: function(swiper){ 
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            if(swiper.activeIndex==0){
                $("#header").css("background","rgba(215,215,215,0.8)");
                $("#header ul li,a").css("color","#555");
                // $("header").hide();
                $("#header").slideDown(500);
            }else{
                $("#header").css("background","rgba(000,000,000,0.8)");
                $("#header ul li,a").css("color","#fff");
                // $("header").hide();
                $("#header").slideDown(500);
            }
        } 
    });
    var loginName=localStorage.getItem("nowlogin");//获取登录时纪录的localStorage
    if (loginName) {//如果是通过登录界面进入主页
        $(".a_login").html(loginName);
        $(".a_register").html("");
        
        $(".leave").css("display","block");
        $(".leave").click(function(){
            localStorage.removeItem("nowlogin");
            $(".a_register").html(" 注册");
            $(".leave").css("display","none");
            $(".a_login").html("登录 /");
            
        });
    }else{//如果是直接打开主页
        $(".leave").css("display","none");
       
    }
});