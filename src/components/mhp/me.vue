<template>
    <div class="me-container">
        <!-- 1.标题 -->
        <header>
            <van-nav-bar class="me-title" title="我" left-arrow @click-left="onClickLeft"  fixed/>
        </header>
        <!-- 2.用户信息 -->
        <div class="user-info">
            <!-- 2.1设置按钮 -->
            <van-row>
                <van-col class="set" offset="22" span="2">
                    <img class="set-img" src="../../../public/images/me/me/icon-set.png" alt="">
                </van-col>
            </van-row>
            <!-- 2.2头像和说明信息 -->
            <van-row class="all-info" type="flex" justify="center">
                <van-col class="avator" span="6">
                    <img src="../../../public/images/me/me/q.png" alt="">
                </van-col>
                <van-col class="info" span="18">
                    <p>用户zy13800000000</p>
                    <h4>完善信息</h4>
                    <div>
                        <img src="../../../public/images/me/me/gift.gif" alt="">
                        领取Lv2福利
                    </div>
                </van-col>
            </van-row>
            <!-- 2.3vip -->
            <van-row class="vip-ad" type="flex" justify="space-between" >
                <van-col class="vip-img" span="4">
                    <img src="../../../public/images/me/me/Mr.png" alt="">
                </van-col>
                <van-col class="vip-text" span="6">
                    <span>健康VIP会员</span>
                </van-col>
                <van-col span="12">
                    <van-swipe :autoplay="3000" style="height: 2rem; width:12.5rem" vertical :show-indicators="false">
                        <van-swipe-item>
                            <div class="van-ellipsis car-text">每天只需0.5元/天，一年预计可省1510元</div>
                        </van-swipe-item>
                        <van-swipe-item>
                            <div class="van-ellipsis car-text">解锁专家号源实时提醒，挂号不再难</div>
                        </van-swipe-item>
                    </van-swipe>
                </van-col>
                <van-col span="2" class="r-arrow">
                    <img src="../../../public/images/me/me/r.png" alt="">
                </van-col>
            </van-row>
        </div>
        <!-- 3.优惠券说明 -->
        <div>
        <van-row type="flex" justify="space-around" class="quan">
            <van-col span="6" class="quan-item">
                <p>0</p>
                <span>优惠券(张)</span>
            </van-col>
            <van-col span="6" class="quan-item">
                <p>10</p>
                <span>健康币(个)</span>
                <p class="healthy">签到领福利喽</p>
            </van-col>
            <van-col span="6" class="quan-item">
                <p>****</p>
                <span>健康账户(元)</span>
                <p class="healthy">理财/红包/充值</p>
            </van-col>
        </van-row>
        </div>
        <!-- 4.我的订单 -->
        <div>
            <van-nav-bar class="tool-title" z-index=-1 title="我的订单"/>
            <van-row class="tool-con myorder" type="flex" justify="center">
                <orderItem v-for="(l,i) of list.slice(0,4)" :key="i" :item="l"></orderItem>
            </van-row>
        </div>
        <!-- 5.常用工具 -->
        <div class="tool">
            <!-- 2.1标题 -->
            <van-nav-bar class="tool-title" z-index=-1 title="常用工具"/>
            <van-row class="tool-con myorder" type="flex" justify="center">
                <orderItem v-for="(l,i) of list.slice(4,8)" :key="i" :item="l" @click="getMore($event)"></orderItem>
            </van-row>
            <van-row class="tool-con myorder" type="flex" justify="center">
                <orderItem v-for="(l,i) of list.slice(8,12)" :key="i" :item="l"></orderItem>
            </van-row>
        </div>
        <!-- 6.我的社区 -->
        <div class="tool">
            <!-- 2.1标题 -->
            <van-nav-bar class="tool-title" z-index=-1 title="我的社区"/>
            <van-row class="tool-con myorder" type="flex" justify="center">
                <orderItem v-for="(l,i) of list.slice(12,16)" :key="i" :item="l"></orderItem>
            </van-row>
        </div>
        <!-- 7.健康档案 -->
        <div class="health-da">
            <van-nav-bar class="tool-title" z-index=-1 title="健康档案"/>
            <img src="../../../public/images/me/me/empty-new.png" alt="">
            <div>
                <p>请添加联系人，进行健康档案管理</p>
                <div class="add">添加家庭联系人</div>
            </div>
        </div>
    </div>
</template>
<script>
import "../../assets/css/animate.css"
import config from "../../assets/js/config.js"
import orderItem from "./moreCpt/orderItem"
import checkLogin from "../../assets/apis/user/checkLogin.js"
export default {
    data() {
        return {
            list:[
                {text:"我的预约",path:"http://127.0.0.1:8081/images/me/me/icon-book.png"},
                {text:"我的问诊",path:"http://127.0.0.1:8081/images/me/me/icon-consult.png"},
                {text:"服务包订单",path:"http://127.0.0.1:8081/images/me/me/icon-order.png"},
                {text:"商品订单",path:"http://127.0.0.1:8081/images/me/me/icon-order2.png"},
           
                {text:"家庭联系人",path:"http://127.0.0.1:8081/images/me/me/icon-patients.png"},
                {text:"关注收藏",path:"http://127.0.0.1:8081/images/me/me/icon-star.png"},
                {text:"我的医生",path:"http://127.0.0.1:8081/images/me/me/icon-doctor.png"},
                {text:"会员福利",path:"http://127.0.0.1:8081/images/me/me/icon-member.png"}, 

                {text:"我的课程",path:"http://127.0.0.1:8081/images/me/me/icon-course.png"},
                {text:"会员好友",path:"http://127.0.0.1:8081/images/me/me/BJh154243448.png"},
                {text:"帮助反馈",path:"http://127.0.0.1:8081/images/me/me/icon-help.png"},
                {text:"更多",path:"http://127.0.0.1:8081/images/me/me/icon-more.png"},      

                {text:"我的关注",path:"http://127.0.0.1:8081/images/me/me/icon-sns-watch.png"},
                {text:"我的提问",path:"http://127.0.0.1:8081/images/me/me/icon-sns-question.png"},
                {text:"我的发帖",path:"http://127.0.0.1:8081/images/me/me/icon-sns-post.png"},
                {text:"更多",path:"http://127.0.0.1:8081/images/me/me/icon-sns-more.png"},        
            ],
        }
    },
    created(){
        if(checkLogin()){
            this.$toast("登录成功！")
        }else{
            this.$router.push("/login")
        };
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        getMore(e){
            console.log("11")
        }
    },
    components:{
        "orderItem":orderItem,
    },
}
</script>
<style scoped>
    .healthy{
        animation: bounce 3s infinite;
        color:#fff;
        background: chocolate;
        font-size: .654962rem !important;
        height:1.221374rem;
        line-height: 1.221374rem;
        text-align: center;
        padding:0 !important;
        font-weight: normal !important;
        z-index: 999;
    }
    .healthy::before{
        content:"";
        border:.305344rem solid transparent;
        border-bottom-color: chocolate;
        position:absolute;
        left:50%;
        top: -0.625344rem;
    }
    .me-title{
        width:100%;
    }
    .tool-title{
        border-bottom: .061069rem solid #eee;
    }
    .tool-con{
        height: 6.290076rem;
        background: #fff;
        border-bottom: .061069rem solid #eee;
    }
    .user{
        height:11.419847rem;
    }
    .user-info{
        background: url("../../../public/images/me/me/OXn.png");
        height:11.419847rem;
        margin-top:2.931298rem;
        padding:0 0.421374rem;
    }
    .set{
        padding-top:.821374rem;
    }
    .set-img{
        width:1.526718rem;
        height:1.526718rem;
        margin-bottom: .916031rem;
    }
    .avator>img{
        margin-left: .916031rem;
        border-radius: 50%;
    }
    .all-info{
        color:#fff;
    }
    .info>p{
        font-size: 1.177099rem;
    }
    .info>h4{
        font-size: .854962rem;
        font-weight: normal;
    }
    .info>div{
        width: 7.022901rem;
        height:1.821374rem;
        border-radius: .916031rem;
        background: rgba(0,0,0,.1);
        line-height: 1.821374rem;
        padding:0 .610687rem;
        font-size: .732824rem;
        margin-top: .610687rem;
    }
    .info>div>img{
        width: 1.238168rem;
        height:1.238168rem;
        border-radius: 50%;
        padding-bottom: .105344rem;
    }
    .vip-ad{
        background: url("../../../public/images/me/me/OLY.png") repeat-y  ;
        background-size: 93% 100%;
        background-position: center;
        width:96.5%;
        margin-top: 0.921374rem;
        padding:.210687rem .510687rem;
    }
    .vip-img{
        width:1.532061rem;
    }
    .vip-img>img{
        width:1.221374rem;
        height:1.221374rem;
        margin-top:.510687rem;
        margin-left: 0.821374rem;
    }
    .vip-text{
        font-size: 1.077099rem;
        font-weight: 600;
        color:#6b331a;
        margin-top:.38855rem;
        width:30%;
    }
    .car-text{
        margin-top: .510687rem; 
        font-size: .754962rem;
        color:#6b331a;
    }
    .r-arrow>img{
        width:1.221374rem;
        height:1.221374rem;
        margin-top:.410687rem;
        margin-left:-0.88855rem;
    }
    .quan{
        height:4.819084rem;
        background: #fff;
        margin-bottom: .610687rem;
    }
    .quan-item{
        text-align: center;
        line-height: 200%;
    }
    .quan-item>p{
        font-size: 1.099237rem;
        padding-top:.610687rem;
    }
    .quan-item>span{
        font-size:.732824rem;
        color:#83889a;
    }
    .myorder{
        margin-bottom: .610687rem;
        text-align: center;
        line-height:200%;
    }
    .health-da{
        text-align: center;
    }
    .health-da img{
        width: 3.847328rem;
        height:3.847328rem;
        margin: 1.621374rem auto;
    }
    .health-da>div>p{
        font-size: .854962rem;
        color:#83889a;
    }
    .health-da>div>.add{
        border: .061069rem solid #3f86ff;
        color:#3f86ff;
        width:35%;
        height: 1.221374rem;
        line-height: 1.221374rem;
        margin: 1.610687rem auto;
        padding:.48855rem 0;
        border-radius: 1.216031rem;
    }
</style>
