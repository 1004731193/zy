<template>
  <div>
    <van-nav-bar
      title="医院主页"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../../public/images/h_main/banner1.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/images/h_main/banner2.png">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/images/h_main/banner3.jpg">
      </van-swipe-item>
    </van-swipe>
    <div class="detail">
      <div class="left">
        <div>
          <span class="name">{{result.hospital}}</span>
          <span class="type">{{result.level ? result.level : "暂无"}}</span>
        </div>
        <div>
          <span class="time">{{result.type}}</span>
          <span class="orders">负责人: {{result.legalperson}}</span>
        </div>
      </div>
      <div class="right">
        <span class="todetail" @click="todetail">查看详情</span>
      </div>
    </div>
    <div class="map">
      <van-row>
        <van-col span="20">
          <p><span>医院地址：</span>{{result.address ? result.address : result.regaddress}}</p>
        </van-col>
        <van-col span="4">
          <b @click="goMap">导航</b>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <div class="left-days">
        <div class="text">
          <img src="../../../public/images/h_main/text.png">
        </div>
        <p>根据疾病找专科与专家</p>
        <div class="doc">
          <img src="../../../public/images/h_main/doc-icon.png">
        </div>
        <p>预约周期：<span>28天</span></p>
      </div>
      <ul class="right-fun">
        <li>
          <img src="../../../public/images/h_main/icon-registration.png">
          <div>
            <h4>预约挂号</h4>
            <h5>提前预约先人一步</h5>
          </div>
        </li>
        <li>
          <img src="../../../public/images/h_main/icon-feature.png">
          <div>
            <h4>特色科室</h4>
            <h5>专科新技术新业务</h5>
          </div>
        </li>
        <li>
          <img src="../../../public/images/h_main/icon-doc.png">
          <div>
            <h4>专家特长</h4>
            <h5>专家特长，出诊安排</h5>
          </div>
        </li>
      </ul>
    </div>
    <div class="search">
      <img src="../../../public/images/h_main/search.png">
      <div>
        <h4>挂号查询与退号</h4>
        <p>查询已就诊信息，可退当日开诊前的号源。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      detailId : "14",
      result : {}
    }
  },
  methods: {
    onClickLeft:function(){
      this.back(this);
    },
    todetail:function(){
      this.$router.push("h_detail")
    },
    goMap(){
      this.$router.push("map");
      // window.open("https://m.amap.com/navi/?start=116.403124,39.940693&dest=116.481488,39.990464&destName=方恒国际中心&naviBy=car&key=5d67a03906f29f89e83779c660bfe15c");
    }
  },
  created(){
    this.result = this.$store.getters.getHospitalDetail;
    console.log("my:" + this.$store.getters.getOrderStep.position);
    console.log(this.result);
    console.log(this.detailId);
  }
}
</script>

<style scoped>
.map{
  margin: .625rem 0;
  background: #fff;
  padding: .5rem .625rem;
}
.map b{
  font-size: 1rem;
  padding: 0 .8rem;
  background: #4294fe;
  color: #fff;
  border-radius: .625rem;
}

.map p{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.van-nav-bar .van-icon{
  color:#000;
}
.van-swipe-item img{
  height:8.549618rem;
  width:100%;
}
.detail{
  display: flex;
  justify-content: space-between;
  padding:.977099rem;
  align-items: center;
  background: #fff;
  margin-bottom: .610687rem;
}
.detail .name{
  color:#28354c;
  font-size: .977099rem;
  font-weight: 400;
}

.detail .type{
  font-size:.732824rem;
  color:#ff695c;
  border:1px solid #ff695c;
  padding:0 .305344rem;
  border-radius: .610687rem;
}
.time,.orders{
  color:#83889a;
  font-size: .732824rem;
}
.todetail{
  color:#83889a;
  font-size: .854962rem;
  background: url(../../../public/images/h_main/arrow-right.png) no-repeat center right;
  background-size: .610687rem;
  padding-right: .916031rem;
}
.content{
  background: #fff;
  display: flex;
  justify-content: space-between;
  margin-bottom: .610687rem;
}
.content .left-days{
  text-align: center;
  padding:.610687rem;
  width:50%;
}
.content .left-days .text img{
  width:5.862595rem;
  margin-top:1.526718rem;
}
.content .left-days p{
  color:#83889a;
  font-size:.854962rem;
  margin:1.099237rem 0;
}
.content .left-days p span{
  color:#4294fe;
}
.content .left-days .doc img{
  width:4.519084rem;
}
.content .right-fun{
  width:50%;
  border-left: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.right-fun li{
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: .916031rem;
  box-sizing: border-box;
}
.right-fun li:last-child{
  border:0;
}
.content .right-fun li img{
  width:2.198473rem;
  display: inline-block;
  margin:0 1.221374rem;
}
.right-fun li h4{
  font-weight: 400;
}
.right-fun li h5{
  color:#83889a;
  font-weight: 400;
}
.search{
  display: flex;
  align-items: center;
  padding:.977099rem;
  background: #fff;
}
.search img{
  width:1.954198rem;
  margin-right:1.221374rem;
  margin-left: .610687rem;
}
.search h4{
  font-weight: 400;
}
.search p{
  color:#83889a;
  font-weight: .854962rem;
}
</style>
