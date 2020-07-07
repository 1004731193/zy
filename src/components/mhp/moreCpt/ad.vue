<template> 
    <div class="ad-container">
        <!-- 1.底部小图标 -->
        <div class="zy-logo">
            <ul class="me-list" :style="!my_list_bool ? my_list_1 : my_list_2" @click="activeLi">
                <li data-i="0" :class="{active : liStyle[0]}" @click="goIndex">首页</li>
                <li data-i="1" :class="{active : liStyle[1]}">在线问诊</li>
                <li data-i="2" :class="{active : liStyle[2]}">疾病导诊</li>
                <li data-i="3" :class="{active : liStyle[3]}">我的关注</li>
                <li data-i="4" :class="{active : liStyle[4]}">频道导航</li>
                <li data-i="5" :class="{active : liStyle[5]}">个人中心</li>
            </ul>
            <img src="../../../../public/images/me/login/weiyi-logo-blue.png"  @click="toggleMyList">
        </div>
        <!-- 2.底部可关闭的广告 -->
        <div v-show="ad" class="ad">
            <img src="../../../../public/images/me/login/download-default.png" alt="">
            <van-icon class="close" name="close" @click="onAd"/>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            ad:true,
            show:false, 
            my_list_bool : false,
            my_list_1 : {opacity : 0,"margin-left" : "10px"},
            my_list_2 : {opacity : 1,"margin-left" : "0px"},
            liStyle : [false,false,false,false,false,false] 
        }
    },
    methods: {
        onAd(){
            this.ad=false;
        },
        toggleMyList(){
            this.my_list_bool = !this.my_list_bool;
        },
        activeLi(e){
            var index = e.target.dataset.i;
            for(var i = 0; i < this.liStyle.length; i++){
                if(i == index){
                    this.liStyle.splice(i,1,true);
                }else{
                    this.liStyle.splice(i,1,false);
                }
            }
        },
        goIndex(){
            setTimeout(()=>{
                this.$emit("goIndex",0);
            },800);
        }
    },
}
</script>
<style scoped>
    a{
        color: #000;
    }
    .zy-logo{
        position: fixed;
        bottom: 6.875rem;
        left: .625rem;
    }

    .me-list{
        
        /* box-sizing: border-box; */
        position: absolute;
        top: -255px;
        left: 5px;
        width: 100px;
        text-align: left;
        transition: .4s ease-out;
        border: 1px solid #2f7fe2;   
        border-radius: .5rem;
        background: #fff;
        z-index: 999;
    }

    .me-list>li{
        padding: 0 15px;
        font-size: 14px;
        height:40px;
        line-height: 40px;
    }

    .me-list>li.active{
        background-color: #2f7fe2;
        color: #fff;
    }

    .me-list>li:not(:last-child){
        border-bottom: 1px solid rgba(48,127,226,.3);        
    }

    .me-list>li:last-child{
        padding-bottom: 0;
    }
    
    .me-list::before{
        content: "";
        position: absolute;
        border:6px solid transparent;
        border-top-color: #2f7fe2;
        bottom: -12px;
        left:10px;
    }
    .me-list::after{
        content: "";
        position: absolute;
        border:6px solid transparent;
        border-top-color: #fff;
        bottom: -10px;
        left: 10px;
    }

    .zy-logo>img{
        width: 2.748092rem;
        height: 2.748092rem;
    }
    .ad{
        position: fixed;
        bottom:0;
        width:100%;
        z-index: 50;
        display: flex;
        justify-content: flex-start;
    }
    .ad img{
        width:100%;
        height:3.969466rem;
    }
    .ad .close{
        position: relative;
        z-index: 4;
        right:97%;
        margin-top: 6%;
        color:#fff;
    }
</style>