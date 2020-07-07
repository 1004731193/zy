<!--
 * @Author: your name
 * @Date: 2019-11-24 21:32:32
 * @LastEditTime: 2019-11-24 22:33:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\components\wtq\json\jswz.vue
 -->
<template>
  <div id="jxwz">
    <!-- 组件头部 -->
    <van-nav-bar class="bar" fixed title="急速问诊" left-arrow @click-left="onClickLeft"/>
    <!-- 上方图片 -->
    <div class="top-img">
      <!-- 在线接诊医生数 -->
      <div class="top-text">
        <p>当前在线接诊医生人数</p>
        <div class="top-count">
          <!-- 数量显示 -->
            <!-- 轮播组件 -->
            <span>0</span>   
            <span>2</span>   
            <span>4</span>   
            <span>1</span>   
            <span>0</span>   
        </div>
      </div>
      <!-- canvas 绘图 -->
      <canvas id="mycanvas" width="200px" height="300px">
        
      </canvas>
    </div>

    <!-- 下方选择问诊区域 -->
    <div class="select-area">
      <van-tabs v-model="active" color="#36d" title-active-color="#3f86ff" style="font-weight:700">
        <van-tab title="图文问诊">
          <!-- 第一个问诊连接 -->
          <div class="first-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price">¥19</h2>
          </div>
          <!-- 第二个问诊链接 -->
          <div class="second-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price dan">¥9</h2>
          </div>
        </van-tab>
        <van-tab title="电话问诊">
          <!-- 第一个问诊连接 -->
          <div class="first-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price">¥29</h2>
          </div>
          <!-- 第二个问诊链接 -->
          <div class="second-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price">¥19</h2>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 问诊动态 -->
    <div class="ask-active">
      <van-row justify="spacec-between">
        <van-col offset="2" span="8">
          <h2 style="color:#28354c">问诊动态</h2>
        </van-col>
        <van-col span="14">
          <p class="helped">已有 4200 患者获得帮助</p>
        </van-col>
      </van-row>
      <!-- 组件 列表 -->
      <!--   -->
      <van-swipe
        style="height: 150px;"
        vertical
        :autoplay="4000"
        :show-indicators="false"
        :duration="4000"
      >
        <van-swipe-item>
          <ul class="people-list">
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="people-list">
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="people-list">
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="people-list">
           <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
          </ul>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 急速问诊 下标 -->
    <div class="small-icon" @click="gotomywz">
      <div class="right-icon">
        <!-- <span>我的</span>
        <span>问诊</span>-->
        <div>我的问诊</div>
      </div>
    </div>
  </div>
</template>
<script>
import goback from "./js/tz.js";
export default {
  data() {
    return {
      active: 0,
      docInfo:[
        { picSrc : require("../../../public/images/index/急速问诊/top-entry-health.png"), docName : "张光华 主任医师" , keshi : "湖南省人民医院"},
        { picSrc : require("../../../public/images/index/急速问诊/top-entry-help.png"), docName : "厉致诚 主任医师" , keshi : "辽宁省人民医院"},
      ], 
      // img1: new Image(), // 背景图片缓存
      // img2: new Image(), // 背景图片缓存
      // context: {}, // canvas对象
      // imageUrl:["../../../public/images/index/急速问诊/top-entry-health.png","../../../public/images/index/急速问诊/top-entry-help.png"],//图片路径
      isDraw : false,

    };
  },
  methods: {
    // 组件头部导航栏后退
    onClickLeft() {
      this.back(this);
    },
    // 跳转到我的问诊
    gotomywz() {
      this.$router.push("/wz");
    },
    // canvas绘图
    // 画第一张图

    // 获取Canvas 画图

    // 在Canvas画布 添加图片
    // imageUrl为后台提供图片地址
    doDraw(docInfo) {
      var canvas = document.getElementById("mycanvas");
      var ctx = canvas.getContext("2d");
      var index = 1;
      var imgs =[];
      var funs= [];//保存到这个数组中,多个promise对象

      // 获取图片对应的文字,保存在数组中
      // var docInfo = [];
      var obj = {};//保存最终所有图片和图片对应的医生信息

      //遍历imageUrl (每次遍历到的都是一个###对象) 创建所有图片
      for(var item of docInfo){

        //每遍历一次 就把内部的img 
        funs.push(new Promise((resolve,reject)=>{
          var img = new Image();
          img.src = item.picSrc;
          img.onload = ()=>{
            resolve(img);
            console.log(img);
          }
          
        }));




      }//循环结束
      
      Promise.all(funs).then(res=>{
        console.log(res);
        imgs = res;console.log(imgs);
      })

      // 此时两个照片都保存在imgs中  然后对应的医生信息保存在 docInfo中

      var x = 100,y = -10;
      
      var draw = ()=>{
        if(!this.isDraw) return;
        var img;
        var str1;//保存医生名
        var str2;//保存医生医院
        if(index % 2 == 1){
          img = imgs[0];
          str1 = this.docInfo[0].docName;
          str2 = this.docInfo[0].keshi;
        }else{
          img = imgs[1]
          str1 = this.docInfo[1].docName;
          str2 = this.docInfo[1].keshi;
        }

        console.log(img,str1,str2);
        var id = setInterval(()=>{
          if(x <= 10){
          x = 100;
          y = -10;
          clearInterval(id);
          return
        }else{
          if(y >= 20){
            y = 20;
          }
          ctx.save();
          ctx.clearRect(0,0,200,300);
          ctx.fillStyle = "#83889a";
          ctx.fillText(str1,70,250);

          ctx.fillText(str2,70,270);
          ctx.font = "12px SimHei";

          ctx.drawImage(img, x, y);
          ctx.restore();

          // ctx.font = "39px SimHei" #字体大小 字体
          // ctx.textBaseline = "top"; [top;alphabetic;bottom]
          console.log(x,y);
          x -= 3;
          y++;
        }
        },15);
      }

      var id2 = setInterval(()=>{
        ctx.clearRect(0,0,200,300);
        // requestAnimationFrame(draw);
        draw();
        index++;
      },3000);
      //  获取canvas  ctx.drawImage(img, 0, 0, img.width, img.height);
    },
    
  },
  mounted() {
    this.isDraw = true;
    this.doDraw(this.docInfo);
  },
  beforeDestroy(){
    this.isDraw = false;
  }
};
</script>

<style scoped>
#mycanvas {
  position: absolute;
  right: 0;
  top: 1.25rem;
  /* border: 1px solid #000; */
}

/* .top-count{
  display:flex;
} */
/* .one{
  width:.625rem;
  height:1.25rem;
} */

.bar{
  z-index:999;
  /* background-color:#fff6e6; */
}
.small-icon {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
.right-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  font-size: 0.9375rem;
  background: #3f86ff;
  color: #fff;
  font-weight: 700;
  z-index: 99;
  /* line-height:3.5rem; */
  /* text-align:center; */
}
/* .right-icon span:first-child{
    
    position: absolute;
    top:-.5rem;
    left:-.5rem;
    
  } */

.right-icon div {
  width: 2rem;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 15%);
}
.van-nav-bar .van-icon {
  color: #000;
  font-size: 1rem;
}
.top-img {
  background: url("../../../public/images/index/急速问诊/bg.png") no-repeat;
  background-size: 100% auto;
  width: 100%;
  height: 23rem;
  position: relative;
  margin-top:46px;
  background-color:#fff;
}
.top-count{
  position:absolute;
  top:14.625rem;
  left:2.625rem;
  font-weight:700;
}
.top-count span{
  width:1.5rem;
  height:1.5rem;
  background-color:#d6eaff;
  padding:.5rem;
  margin-right:.5rem;
  border-radius:.3125rem;
}
.top-text p {
  font-weight: 400;
  color: #83889a;
  font-size: 1rem;
  position: absolute;
  bottom: 5rem;
  left: 2.5rem;
}
.helped {
  text-align: right;
  font-size: 15px;
  color: #83889a;
  margin-top: 5px;
  padding-right: 3rem;
}
.select-area {
  width: 90%;
  height: 17.832061rem;
  margin: auto;
}
.first-wz,
.second-wz {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 70px;
  align-items: center;
  padding: 10px;
}

.select-area p {
  padding: 5px 0;
  color: #5e616b;
}

.first-wz {
  background: #fff6e6;
}
.second-wz {
}
.text {
  text-align: center;
  width: 11.847328rem;
  height: 3.70229rem;
  background: #ccc;
  border-radius: 0.3rem;
  line-height: 3.7rem;
}
.text.actice {
  background: #fff !important;
}
.text.three-minute span {
  background: url("../../../public/images/index/急速问诊/3.png") no-repeat;
  background-size: 25%;
  background-position: 9rem 0;
}
.text.eight-zhe span {
  background: url("../../../public/images/index/急速问诊/8zhe.png") no-repeat;
  background-size: 25%;
  background-position: 9rem 0;
}

.second-wz {
  background: #e5edf6;
}
.pic-wz-area {
  background: #ddd;
}
.people-list {
  width: 80%;
  margin: auto;
  margin-top: 1.8rem;
}
.people-list li {
  margin-top: 0.8rem;
  color: #28354c;
  font-size: 1rem;
}
.people-list span {
  color: #83889a;
  font-size: 0.6rem;
}

</style>