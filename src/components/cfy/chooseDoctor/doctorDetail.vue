<template>
    <div class="doctorDetail">
        <div class="title">
            <van-nav-bar title="预约挂号" left-arrow fixed @click-left="goBack"/>
        </div>
        <div class="doc-title">
            <van-row>
                <van-col span="4" class="doc-logo">
                    <img :src="detail.pic">
                </van-col>
                <van-col span="14">
                    <div class="name">
                        <span>{{detail.name}}</span>
                        <span>{{detail.department}}</span>
                    </div>
                    <div class="pf">
                        <p>
                            <span>预约量: <i>{{detail.detailid}}</i></span>
                            <span>评分: <i>{{parseInt(1+Math.random()*9) + "." + parseInt(1+Math.random()*9)}}</i></span>
                        </p>
                    </div>
                    <div class="tag">
                        <van-tag plain round>{{detail.city}}</van-tag>
                        <van-tag plain round>{{detail.province ? detail.province : detail.summary}}</van-tag>
                        <van-tag plain round>{{detail.secdepartment}}</van-tag>
                    </div>
                </van-col> 
                <van-col span="5" class="gz">
                    <span>预约规则</span>
                </van-col>
            </van-row>
        </div>
        <div class="h-title">
            <van-collapse v-model="activeNames">
                <van-collapse-item name="1">
                    <div slot="title">
                        <van-row class="h-title-1">
                            <van-col span="20">
                                <b>中国人民解放军总医院301医院</b>
                                - 耳鼻咽喉头颈外科
                            </van-col>
                            <van-col span="4">
                                <van-tag plain type="primary">可预约</van-tag>
                            </van-col>
                        </van-row>
                    </div>
                    <van-row class="h-cont">
                        <van-col span="1" class="month">
                            十二月
                        </van-col>
                        <van-col span="19" class="yy-time">
                            <p>2019-12-23 周一 下午 <b>27天后</b></p>
                            <p>专家门诊-[微医平台] <b>100.00元</b></p>
                        </van-col>
                        <van-col span="4">
                            <router-link to="/order" class="goOrder">预约</router-link>
                        </van-col>
                    </van-row>
                    <van-collapse-item title="显示全部排版" name="2" style="text-align:center;padding:0;">
                        <van-row class="h-cont">
                            <van-col span="19" class="yy-time">
                                <p>2019-12-23 周一 下午 <b>27天后</b></p>
                                <p>专家门诊-[微医平台] <b>100.00元</b></p>
                            </van-col>
                            <van-col span="4">
                                <router-link to="/" class="goOrder">预约</router-link>
                            </van-col>
                        </van-row>
                        <van-row class="h-cont">
                            <van-col span="19" class="yy-time">
                                <p>2019-12-23 周一 下午 <b>27天后</b></p>
                                <p>专家门诊-[微医平台] <b>100.00元</b></p>
                            </van-col>
                            <van-col span="4">
                                <router-link to="/" class="goOrder">预约</router-link>
                            </van-col>
                        </van-row>
                        <van-row class="h-cont">
                            <van-col span="19" class="yy-time">
                                <p>2019-12-23 周一 下午 <b>27天后</b></p>
                                <p>专家门诊-[微医平台] <b>100.00元</b></p>
                            </van-col>
                            <van-col span="4">
                                <router-link to="/" class="goOrder">预约</router-link>
                            </van-col>
                        </van-row>
                        <van-row class="h-cont">
                            <van-col span="19" class="yy-time">
                                <p>2019-12-23 周一 下午 <b>27天后</b></p>
                                <p>专家门诊-[微医平台] <b>100.00元</b></p>
                            </van-col>
                            <van-col span="4">
                                <router-link to="/" class="goOrder">预约</router-link>
                            </van-col>
                        </van-row>
                    </van-collapse-item>
                </van-collapse-item>
                
            </van-collapse>
        </div>
        <div class="commend">
            <div class="top1">
                <van-nav-bar :left-text="`患者评价(${ parseInt(50 + Math.random() * 500)})`" right-text=">"/>
            </div>
            <div class="top2">
                <p>患者对医生的主要印象是：经验丰富，热情亲切</p>
            </div>
            <div class="top3">
                <div>
                    <p>
                        <span>阿砍</span>
                        <van-rate v-model="starCount" />
                    </p>
                    <span>2019-04-09</span>
                </div>
                <p><span>确诊疾病:</span> 尚未确诊</p>
                <p>{{detail.name}}非常好的，医术精湛，态度和蔼。</p>
            </div>
            <div class="top4">
                <p>你可能还想了解</p>
                <div class="maybe-dlist">
                    <ditem v-for="(item,i) of randoms" :key="i" :item="item"></ditem>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ditem from "./ditem.vue"
import ditem_test from "./ditem_test.js"
export default {
    data(){
        return {
            activeNames : ["1"],
            starCount : 5,
            list : ditem_test,
            randoms : [],
            detail : {}
        }
    },
    components : {
        "ditem" : ditem
    },
    created(){
        var did  = this.$store.getters.getOrderStep.did;
        if(!did) did=61293;

        //获取医生详情
         $.ajax({
            url : `https://api.jisuapi.com/hospital/detail?detailid=${did}&appkey=90b47e2a6f6c02d3`,
            type : "GET",
            dataType : "jsonp",
            success: data=>{  
                this.detail = data.result;
                this.$store.commit("setDoctorDetail",data.result);
                console.log(this.detail);
                var orderStep = this.$store.getters.getOrderStep;
                var hospitalDetail = this.$store.getters.getHospitalDetail;
                var doctorDetail = this.$store.getters.getDoctorDetail;

                console.log(orderStep,hospitalDetail,doctorDetail);
            }
        });

        for(var i = 0; i < 3; i++){
            var num = parseInt(0 + Math.random() * this.list.length);
            this.randoms.push(this.list[num]);
        }
    },
    methods : {
        goBack(){
            this.back(this);
        },
       
    }
}
</script>

<style scoped>
    i{
        font-style: normal;
    }
    
    .doc-title{
        margin-top: 46px;
        min-height: 10rem;
        background:url("../../../../public/images/qgh/doctorDetail-bg.png");
        background-size: cover;
        color: #fff;
        box-sizing: border-box;
        padding: 1.221374rem;
        padding-top: 2.5rem;
        position: relative;
    }
    .doc-logo{
        margin-right: .956031rem;
    }
    .doc-logo img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-sizing: border-box;
        border: 2px solid #fff;
    }

    .doc-title .name{
        margin-bottom: .410687rem;
    }

    .doc-title .name>span:first-child{
        font-size: 1.399237rem;
        margin-right: .88855rem;
    }

    .doc-title .pf i{
        font-size: 1.221374rem;
    }
    .doc-title .pf span{
        font-size: .916031rem;
    }
    .doc-title .pf span:last-child{
        margin: 0 1rem;
    }

    .tag{
        display: flex;
        justify-content: space-around;
        margin-top: .610687rem;
    }

    .tag .van-tag{
        background: rgba(255, 255, 255, .2);
        color: #fff;
        border: 0;
        /* margin-right: .48855rem; */
    }

    .doc-title .gz{
        position: absolute;
        background: rgba(0, 0, 0, .2);
        text-align: center;
        border-top-left-radius: .88855rem;
        border-bottom-left-radius: .88855rem;
        padding: .405344rem 0;
        font-size: 13px;
        right: 0;
        top: 18px;
    }

    .doc-title .gz::after{
        content: ">";
    }

    .h-title{
        margin: .610687rem 0 .916031rem 0;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }

    .h-title .h-title-1 b{
        font-size: 1.099237rem;
    }

    .h-title .h-cont{
        color: #333;
    }

    .h-title .h-cont .yy-time p:first-child b{
        background: #eee;
        padding: 0 .305344rem;
        border-radius: .505344rem;
        color: #83889a;
    }

    .h-title .h-cont .yy-time p:last-child b{
        color: #ff695c;
        font-weight: normal;
    }

    .h-cont .month{
        background: #ebf2ff;
    }

    .h-cont{
        display: flex;
        align-items: center;
        text-align: left;
        margin: 10px 0;
        border-bottom: 1px solid #ddd;
        padding-bottom: 8px;
    }

    .yy-time{
        margin-left: 1.221374rem;
    }

    .yy-time p:last-child{
        margin-top: 5px;
    }

    .goOrder{
        display: block;
        width: 100%;
        background: #3f86ff;
        padding: 8px 0;
        border-radius: 15px;
        text-align: center;
        color: #fff;
        line-height: 1.5;
    }

    .commend{
        background: #fff;
        margin-bottom: 15px;
    }

    .commend .top2,.commend .top3{
        padding: .977099rem;
        color: #888;
    }

    .commend .top3{
        /* display: flex; */
    }

    .commend .top3>div>p{
        display: flex;
        align-items: center;
    }

    .commend .top3>div>p>span{
        margin-right: .916031rem;
    }

    .commend .top3>p{
        font-size: .916031rem;
        margin-top: 5px;
    }

    .commend .top3>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .commend .top4{
        padding: .977099rem;
    }
</style>
