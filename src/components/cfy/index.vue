<template>
    <div class="index">
        <header>
            <van-nav-bar title="专医(挂号网)-互联网医院在线诊疗平台" fixed/>
        </header>
        <div class="banner" v-show="showBanner">
            <van-row type="flex" align="center" justify="space-between">
                <van-col span="3">
                    <span class="banner-close" @click="closeBanner"></span>
                </van-col>
                <van-col span="5">
                    <img src="../../../public/images/index/banner-logo.png" alt="" width="46" height="42">
                </van-col>
                <van-col span="10">
                    <p>上客户端，领专属好礼</p>
                </van-col>   
                <van-col span="6">
                    <a href="javascript:;">立即领取</a>
                </van-col>
            </van-row>
        </div>
        <div class="search">
            <van-row type="flex" align="center">
                <van-col span="22">
                    <van-row type="flex" align="center">
                        <van-col span="6">
                            <van-dropdown-menu>
                                <van-dropdown-item
                                 v-model="searchType" :title="searchType" :options="searchTypeList" />
                            </van-dropdown-menu>
                        </van-col>
                        <van-col span="18">
                            <van-search placeholder="请输入搜索关键词" v-model="searchVal" />
                        </van-col>
                    </van-row>
                </van-col>
                <van-col span="2" class="qiandao">
                    <i></i>
                    <span></span>
                </van-col>
            </van-row>
        </div>
        <div class="index-content">
            <div class="index-content-top1">
                <van-row type="flex" justify="space-between" gutter="18">
                    <van-col span="12">
                        <div class="jswz">
                            <h2 @click="go_jswz">极速问诊 <img src="../../../public/images/index/k.png"></h2>
                            <p>三甲专家/<span>3分钟</span>接诊</p>
                        </div>
                    </van-col>
                    <van-col span="12">
                        <router-link to="goGuahao" style="color:#000">
                            <div class="qgh">
                                <h2>去挂号</h2>
                                <p>全国<span>3200家</span>重点医院</p>
                            </div>
                        </router-link>
                    </van-col>
                </van-row>
            </div>
            <div class="index-content-top2">
                <van-row type="flex" align="center">
                    <van-col span="8">
                        <div class="pic">
                            <img src="../../../public/images/index/top2-icon-1.png">
                        </div>
                        <h3>专家问诊</h3>
                        <p><span>31万</span>医生问诊</p>
                    </van-col>
                    <van-col span="8">
                        <div class="pic">
                            <img src="../../../public/images/index/top2-icon-2.png">
                        </div>
                        <h3>一病多问</h3>
                        <p>一次看<span>5位</span>专家</p>
                    </van-col>
                    <van-col span="8">
                        <div class="pic">
                            <img src="../../../public/images/index/top2-icon-3.png">
                        </div>
                        <h3>专家问诊</h3>
                        <p>极速送药 <span>1小时达</span></p>
                    </van-col>
                </van-row>
            </div>
            <div class="index-content-top3">
                <img src="../../../public/images/index/vip.png">
            </div>
            <div class="index-content-item index-content-tsfw hide-scroll">
                <div class="title">
                    <van-row type="flex" justify="space-between" align="center">
                        <van-col span="10">
                            <h2>特色服务</h2>
                        </van-col>
                        <van-col span="4" class="more">
                            <span>全部</span>
                            <img src="../../../public/images/index/right-jt.png" width="10" height="15">
                        </van-col>
                    </van-row>
                </div>
                <div class="list">
                    <div class="warp">
                        <div class="item">
                            <img src="../../../public/images/index/tsfw-list-1.png">
                            <p>私人医生</p>
                        </div>
                        <div class="item">
                            <img src="../../../public/images/index/2.png">
                            <p>三甲体检</p>
                        </div>
                        <div class="item">
                            <img src="../../../public/images/index/3.png">
                            <p>海外就医</p>
                        </div>
                        <div class="item">
                            <img src="../../../public/images/index/4.png">
                            <p>妈咪宝贝</p>
                        </div>
                        <div class="item">
                            <img src="../../../public/images/index/5.png">
                            <p>肝病中心</p>
                        </div>
                        <div class="item">
                            <img src="../../../public/images/index/6.png">
                            <p>保险平台</p>
                        </div>
                        <div class="item">
                            <img src="../../../public/images/index/7.png">
                            <p>病友群</p>
                        </div>
                        <div class="item">
                            <img src="../../../public/images/index/8.png">
                            <p>膏方节</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="index-content-item index-content-zbzk">
                <div class="title">
                    <van-row type="flex" justify="space-between" align="center">
                        <van-col span="10">
                            <h2>专病专科</h2>
                        </van-col>
                        <van-col span="4" class="more">
                            <span>更多</span>
                            <img src="../../../public/images/index/right-jt.png" width="10" height="15">
                        </van-col>
                    </van-row>
                </div>
                <div class="list">
                    <van-row>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-1.png" class="item-img">
                                <p>糖尿病</p>
                            </div>
                        </van-col>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-2.png" class="item-img">
                                <p>儿童期哮喘</p>
                            </div>
                        </van-col>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-3.png" class="item-img">
                                <p>辅助生殖</p>
                            </div>
                        </van-col>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-4.png" class="item-img">
                                <p>医疗美容</p>
                            </div>
                        </van-col>
                    </van-row>
                </div>
                <div class="list">
                    <van-row>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-5.png" class="item-img">
                                <p>心血管内科</p>
                            </div>
                        </van-col>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-6.png" class="item-img">
                                <p>男科</p>
                            </div>
                        </van-col>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-7.png" class="item-img">
                                <p>肿瘤</p>
                            </div>
                        </van-col>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-8.png" class="item-img">
                                <p>消化肝病</p>
                            </div>
                        </van-col>
                    </van-row>
                </div>
                <div class="list">
                    <van-row>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-9.png" class="item-img">
                                <p>普外科</p>
                            </div>
                        </van-col>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-10.png" class="item-img">
                                <p>泌尿外科</p>
                            </div>
                        </van-col>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-11.png" class="item-img">
                                <p>消化内科</p>
                            </div>
                        </van-col>
                        <van-col span="6">
                            <div class="item">
                                <img src="../../../public/images/index/zbzk-item-12.png" class="item-img">
                                <p>呼吸内科</p>
                            </div>
                        </van-col>
                    </van-row>
                </div>
            </div>
             <div class="index-content-item index-content-rmtj">
                <div class="title">
                    <van-row type="flex" justify="space-between" align="center">
                        <van-col span="10">
                            <h2>热门推荐</h2>
                        </van-col>
                    </van-row>
                </div>

                <!-- 天气 -->
                <weather></weather>



                <div class="list">
                    <div class="list-title">
                        <h3>健康号精选</h3>
                        <rmtj-item v-for="(item,i) of rmtj_items" :key="i" :item="item"></rmtj-item>
                    </div>
                </div>
             </div>
             <div class="index-content-item index-content-jksc">
                <div class="title">
                    <van-row type="flex" justify="space-between" align="center">
                        <van-col span="10">
                            <h3>健康商城</h3>
                        </van-col>
                        <van-col span="4" class="more">
                            <span>更多</span>
                            <img src="../../../public/images/index/right-jt.png" width="10" height="15">
                        </van-col>
                    </van-row>
                </div>
                <div class="list">
                    <van-row>
                        <van-col span="24">
                            <img src="../../../public/images/index/健康商城/1.png">
                        </van-col>
                        <van-col span="24">
                            <img src="../../../public/images/index/健康商城/2.png">
                        </van-col>
                        <van-col span="24">
                            <img src="../../../public/images/index/健康商城/3.png">
                        </van-col>
                    </van-row>
                </div>
             </div>
             <!-- 爱心义诊 -->
             <div class="index-conent-item">
                 <love></love>
             </div>
             <!-- 一病多问 -->
             <div class="index-content-item">
                 <!-- 懒加载数据 -->
                <van-list v-model="isloading" finished-text="没有更多了" @load="onLoad" :finished="finished">
                    <van-cell  v-for="(item,index) of list" :key="index" style="padding:0">
                        <one-by-more :item="item"></one-by-more>
                        <!-- 随机生成广告 -->
                        <div class="small-banner" v-show="index % 3 == 0">
                            <img 
                            :src="
                            require(`../../../public/images/index/广告图片/b-0${parseInt(1+Math.random()*3)}.png`)">
                        </div>
                    </van-cell>
                </van-list>
             </div>    
        </div>

    </div>
</template>

<script>
import rmtj_item from "./rmtj_item"
import love from "./love"
import oneByMore from "./oneByMore"
import weather from '../wtq/weather'
// 假数据文件
import oneByMore_json from "./json/oneByMore.js"

export default {
    data(){
        return{
            searchType : "请选择分类",
            searchTypeList: [
                { text: '医院', value: 0 },
                { text: '药品', value: 1 },
                { text: '科室', value: 2 },
                { text: '医生', value: 2 }
            ],
            searchVal : "",
            showBanner : true,
            rmtj_items : [
                {title : "空腹不能吃香蕉喝牛奶" ,subtitle : "真相往往与你想的不一样" , pic : require("../../../public/images/index/热门推荐/1.jpg")},
                {title : "为什么会出现莫名的淤青？" ,subtitle : "真的有“鬼掐青”？" , pic : require("../../../public/images/index/热门推荐/2.jpg")},
                {title : "为母则刚是最毒的鸡汤" ,subtitle : "新手妈妈别硬抗" , pic : require("../../../public/images/index/热门推荐/3.jpg")},
            ],
            oneByMore_json : oneByMore_json,
            list : [],
            finished : false,
            isloading : false
        }
    },
    methods : {
        // 跳到极速问诊
        go_jswz(){
            this.$router.push("/jswz");
        },
        // 关闭头部广告
        closeBanner(){
            this.showBanner = false;
        },
        //加载更多
         onLoad() {
             console.log(this.list.length);
            // 异步更新数据
            setTimeout(() => {
                this.list.push(this.oneByMore_json[this.list.length]);      
                // 加载状态结束
                this.isloading = false;
            
                // 数据全部加载完成
                if (this.list.length >= this.oneByMore_json.length) {
                    console.log(2);
                    this.finished = true;
                }
            }, 500 + Math.random() * 2000);
        },
    },
    components : {
        "rmtj-item" : rmtj_item,
        "love" : love,
        "one-by-more" : oneByMore,
        "weather" : weather
    }

}
</script>

<style scoped>
    header{
        height: 46px;
    }

    .banner .banner-close{
        position: relative;
        display: block;
        width:17px;
        height: 17px;
        border-radius: 50%;
        border: 1px solid #fff;
    }
    .banner .banner-close::before,.banner .banner-close::after{
        content: "";
        position: absolute;
        width: 12px;
        height: 1px;
        left: 2px;
        top: 8px;
        background: #fff;
        transform : rotate(45deg);
    }

    .banner{
        background: #83889a;
        padding: .732824rem;
        font-size: 14px;
        color: #fff;
        transition: .8s;
    }

    .banner .banner-close::after{
        width: 1px;
        height: 12px;
        left: 8px;
        top: 2px;
    }

    .banner a{
        display: block;
        width: 90px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 30px;
        background: #ff7e3b;
        color: #fff;
    }

    .qiandao>i,.qiandao>span{
        display: block;
        width: 26px;
    }

    .qiandao>i{
        background: url("../../../public/images/index/qiandao-top.png") no-repeat 0 0;
        height: 18px;
        background-size: cover;
        animation: iconrotate 5s ease infinite;
    }

    .qiandao>span{
        background: url("../../../public/images/index/qiandao-text.png") no-repeat 0 0;
        height: 14px;
        background-size: cover;
    }

    .search{
        background-color: #fff;
    }

    .index-content{
        padding: 0 .916031rem;
    }

    .index-content .index-content-top1{
        padding: 0.8rem 0 1.3rem 0;
    }

    .index-content .index-content-top1 .jswz,.index-content .index-content-top1 .qgh{
        background: url("../../../public/images/index/top1-bg.png") no-repeat;
        background-size: 4.253435rem;
        background-position: 100% 100%;
        box-shadow: -0.08533333rem 0.17066667rem 0.68266667rem -0.04266667rem rgba(20,19,51,.1);
        border-radius: .610687rem;
        padding: 1.3rem .48855rem 1.8rem .916031rem;
    }

    .index-content .index-content-top1 .qgh{
        background-image: url("../../../public/images/index/top1-bg-2.png");
    }

    .index-content .index-content-top1 .jswz p,.index-content .index-content-top1 .qgh p{
        font-size: .916031rem;
    }

    .index-content .index-content-top1 .jswz span{
        color: #fd854f;
        font-weight: bold;
    }

    .index-content .index-content-top1 .jswz img{
        width: 2.442748rem;
        height:.916031rem;
    }

    .index-content .index-content-top1 .qgh span{
        color: #3f86ff;
        font-weight: bold;
    }

    .index-content .index-content-top2{
        text-align: center;
    }

    .index-content .index-content-top2 .pic{
        width: 2.6rem;
        height: 2.6rem;
        padding: .610687rem;
        border-radius: 50%;
        background: #e8f0fe;
        margin: auto;
    }

    .index-content .index-content-top2 img{
        width: 100%;   
    }

    .index-content .index-content-top2 h3{
        margin: .48855rem 0 .305344rem 0;
    }

    .index-content .index-content-top2 p{
        font-size: .832824rem;
        color: #83889a;
    }

    .index-content .index-content-top2 span{
        color: #3f86ff;
    }

    .index-content .index-content-top2 .van-col:last-child span{
        color: #fd854f;
    }

    .index-content .index-content-top3{
        margin: 1.2rem 0 0 0;
    }

    .index-content .index-content-top3 img{
        width: 100%;
        height: 3.80687rem;
    }

    .index-content .index-content-item .title span{
        color: #666;
    }

    .index-content .index-content-item .title img{
        margin-left: .305344rem;
        transform: translateY(-1px); 
    }

    .index-content .index-content-item .title .more{
        text-align: right;
    }

    .index-content .index-content-tsfw .list{
        width: 100%;
        overflow-x: auto;
        padding-bottom: 2.832061rem;    
        margin-top: .916031rem;
    }
    .index-content .index-content-tsfw .warp{
        display: inline-flex;
    }

    .index-content .index-content-tsfw.hide-scroll{
        height: 7.328244rem;
        overflow-y: hidden;
    }

    .index-content .index-content-tsfw .item{
        display: inline-block;
        width: 5rem;    
        text-align: center;
        margin-right: .9rem;
        font-size: .732824rem;
        color: #666;
    }

    .index-content .index-content-tsfw .item img{
        width: 2.221374rem;
    }

    .index-content .index-content-zbzk .list{
        text-align: center;
        font-size: .616031rem;
        color: #666;
        margin: .48855rem 0;
    }

    .index-content .index-content-zbzk .item-img{
        width: 2.232061rem;
        height: 2.232061rem;
        margin-bottom: .305344rem;
    }

    .index-content .index-content-zbzk .list .item{
        width: 5.10687rem;
        height: 5.10687rem;
        margin: auto;
        padding: .610687rem;
        background: #f5f9ff;
        box-sizing: border-box;
        border-radius: .805344rem;
    }

    .index-content  .index-content-rmtj .list{
        box-shadow: 0 0.256rem 0.59733333rem 0.34133333rem rgba(20,19,51,.06);
        box-sizing: border-box;
        padding: 1.2rem;
        border-radius: .88855rem;
        margin-top: .610687rem;
        
    }

    .index-content .index-content-jksc{
        margin: .916031rem 0;
        box-shadow: 0 0.256rem 0.59733333rem 0.34133333rem rgba(20,19,51,.06);
        border-radius: .9375rem;
        box-sizing: border-box;
        padding: .9375rem;
    }

    .index-content .index-content-jksc .list img{
        width: 100%;
        margin-top: .68855rem;
    }

    .index-content .index-content-jksc .list div{
        border-radius: 1.305344rem;
    }

    .index-content .index-content-jksc .list div div{
        background-color: #fff;
        padding: 5px 10px;
    }

    .small-banner{
        margin: .9375rem 0;
    }

    .small-banner img{
        width: 100%;
        height: 100%;
        border-radius: .9375rem;
    }

    /*重写的vant样式 */
    .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
        border-width: 0;
    }

    .van-nav-bar__title{
        font-size: 1.099237rem;
        color: #28354c;
        font-weight: 500;
    }
    .van-cell__value,.van-cell{
        overflow: visible;
    }

    .list .van-row{
        width: 100%;
    }

    /* 动画 */
    @keyframes iconrotate{
        /* 签到动画 */
        0%{
            transform: rotateY(180deg);
        }

        25%{
            transform: rotateY(360deg);
        }

        50%{
            transform: rotateY(180deg);
        }

        100%{
            transform: rotateY(180deg);
        }
    }
</style>
