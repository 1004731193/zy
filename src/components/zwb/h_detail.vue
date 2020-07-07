<template>
  <div>
    <van-nav-bar
      title="医院详情"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="header">
      <div>
        <span class="hname">{{detail.hospital}}</span>
        <span class="type">三甲</span>
      </div>
      <span class="orders">预约量：{{detail.detailid}}万</span>
    </div>
    <div class="container">
      <div class="item">
        <h2>
          <img src="../../../public/images/h_main/vertical.png">
          <span>预约指南</span>   
        </h2>
        <div class="content">
          <p>1.预约周期：28天</p>
          <p>2.放号时间：18:30</p>
          <p>3.停挂时间：下午15:00停止挂号</p>
        </div>
      </div>  
      <div class="item">
        <h2>
          <img src="../../../public/images/h_main/vertical.png">
          <span>注册地址</span> 
        </h2>
        <div class="content">
          <p>
              {{detail.regaddress}}            
          </p>
        </div>
      </div>
      <div class="item">
        <h2>
          <img src="../../../public/images/h_main/vertical.png">
          <span>预约渠道</span> 
        </h2>
        <div class="content">
          <p>1.登录工商银行、农业银行、中国银行、建设银行四大银行网银预约7日内号源。</p>
          <p>2.拨打工商银行（95588）、农业银行（95599）、中国银行（95566）、建设银行（95533）四大银行客服电话预约7日内号源。</p>
          <p>3.附近工商银行、农业银行、中国银行、建设银行四大银行营业网点自助终端，预约7日内号源。</p>
          <p>4.下载手机银行就医挂号APP客户端预约7日内号源。</p>
          <p>5.院内自助挂号机预约8日内号源（含当日）。可在新门诊楼一层工、农、中、建四大银行网点办理银行卡后在自助挂号机挂号。成年人持本人二代身份证办卡， 婴幼儿(含未领取本人身份证的16岁以下儿童)持整本户口本、父母身份证、出生证明原件办卡。 </p>
          <p>6.医生工作站诊间加号和复诊预约。</p>
          <p>7.通过95169网络预约平台（http://www.guahao.com/）或拨打95169客服电话，预约28日内号源。 </p>
          <p>8.通过114网络预约平台（http://www.bjguahao.gov.cn）或拨打114客服电话，预约28日内号源（专家不点名）。</p>
        </div>
      </div>
      <div class="item">
        <h2>
          <img src="../../../public/images/h_main/vertical.png">
          <span>医院地址</span> 
        </h2>
        <div class="content">
          <p>
				    {{detail.address ? detail.address : detail.regaddress}}
            <br/>
            <router-link to="" style="color:#3278ee">查看地址</router-link>
					</p>
        </div>
      </div>
      <div class="item">
        <h2>
          <img src="../../../public/images/h_main/vertical.png">
          <span>专长</span> 
        </h2>
        <div class="content">
          <p>
            {{detail.speciality ? detail.speciality : detail.summary}}
					</p>
        </div>
      </div>
      <div class="item">
        <h2>
          <img src="../../../public/images/h_main/vertical.png">
          <span>联系电话</span> 
        </h2>
        <div class="content">
          <p>
            {{detail.tel ? detail.tel : "暂无"}}
					</p>
        </div>
      </div>
      <div class="item">
        <h2>
          <img src="../../../public/images/h_main/vertical.png">
          <span>交通指南</span> 
        </h2>
        <div class="content">
          <p>
            乘地铁1号线在五棵松下车，步行至医院；817、370、728、620、870、747、605、711、624、373、436、小50路、小68路、337、212、905、831、748 、804、小1路、967五棵松或五棵松桥东下车，步行至医院
					</p>
        </div>
      </div>
      <div class="item">
        <h2>
          <img src="../../../public/images/h_main/vertical.png">
          <span>交通指南</span> 
        </h2>
        <div class="content">
          <p>
            <img src="../../../public/images/h_main/map.png" style="width:100%">
					</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      detail : {}
    }
  },
  methods: {
    onClickLeft(){
      this.back(this);
    }
  },
  created(){
    this.detail = this.$store.getters.getHospitalDetail;
  }
}
</script>
<style scoped>
.van-nav-bar .van-icon{
  color:#000;
}
.header{
  background: #fff;
  padding:.977099rem;
}
.header div{
  margin-bottom: .610687rem;
}
.header .name{
  color:#28354c;
  font-size: .977099rem;
  font-weight: 400;
}
.header .type{
  font-size:.732824rem;
  color:#ff695c;
  border:1px solid #ff695c;
  padding:0 .305344rem;
  border-radius: .610687rem;
  margin-left:.610687rem;
}
.header .orders{
  color:#83889a;
  font-size: .977099rem;
}
.container{
  background:#fff;
  margin-top: .610687rem;
}
.item{
  height:100%;
}
.container .item h2 img{
  width:.244275rem;
  height:1.221374rem;
}
.container .item h2 span{
  font-size: 1.465649rem;
  color: #28354C;
  margin-left: .34133333rem;
  font-weight: 400;
}
.item .content{
  font-size: 1.221374rem;
  color:#28354c;
  padding:.977099rem;
}
.item .content p{
  margin-top:.48855rem;
  font-weight: 400;
}
</style>
