<!--
 * @Author: your name
 * @Date: 2019-11-26 23:34:37
 * @LastEditTime: 2019-11-27 01:12:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\components\wtq\weather.vue
 -->
<template>
  <!-- 天气是在首页组件 -->
  <div id="weather">
    <!-- 天气组件 -->
    
    <div class="weather-area">
      <van-row type="space-between">
        <van-col style="margin-left:.4rem" span="6">
          <h3>天气预报</h3>
        </van-col>
        <van-col offset="11" span="6" >
          <div class="shuaxin" >
            <img @click="shua" style="width:100%" src="../../../public/images/index/shuaxin.png">
          </div>
        </van-col>
      </van-row>
      
      <!-- 第一行  两部分 今天  明天 -->
      <van-row class="area" justify="space-between">
        <!-- 左边 -->
        <van-col class="today" span="12">
           <!-- 地点  先来个定位 ## -->
          <div class="t-left">
            <h4>今天({{result.week}})</h4>
            <p>{{result.templow}}/{{result.temphigh}}°</p>
          </div>
          <div class="t-right">
            <div class="w-img">
              <p>{{result.tquality}}</p>
              <div class="img-icon">
                <img style="width:20px" :src="timg" alt />
              </div>
              <h3>优</h3>
            </div>
          </div>
        </van-col>
        <!-- 右边 -->
        <van-col class="tomorrow" span="12">
          <div class="m-left">
            <h4>明天({{result.daily[1].week}})</h4>
            <p>{{result.daily[1].night.templow}}/{{result.daily[1].day.temphigh}}°</p>
          </div>
          <div class="m-right">
            <div class="w-img">
              <div class="img-icon">
                <img style="width:20px" :src="wimg" alt />
              </div>
              <h3>优</h3>
            </div>
          </div>
        </van-col>
      </van-row>
      <!-- 生活指数 -->
      <div class="life">
        <van-row>
          <van-col class="life-one" span="24" >
            <div class="floor1">
              <h4 style="margin-right:1.5rem">
                {{result.index[3].iname}}
              </h4>
              <p>{{result.index[3].ivalue}}</p>
            </div>
            <p style="margin-top:.5rem;color:#888;">{{result.index[3].detail}}</p>
          </van-col>
          <van-col class="life-two" span="24" >
            <div class="floor1">
              <h4 style="margin-right:1.5rem">
                {{result.index[6].iname}}
              </h4>
              <p>{{result.index[6].ivalue}}</p>
            </div>
            <p style="margin-top:.5rem;color:#888;">{{result.index[6].detail}}</p>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../../src/assets/js/config'
import getCity from '../../assets/index/getCity.js'
import shuaxin from './js/shuaxin.js'
export default {
   data(){
      return{
         myownpos:"北京",
         result:{
           daily:[
             {day:{img:""}},
             {week:"",night:{templow:""},day:{temphigh:"",img:""}},
           ],
           index:[
             {},
             {},
             {},
             {iname:"",ivalue:"",detail:""},
             {},
             {},
             {iname:"",ivalue:"",detail:""},
            ],
           week:"",
           templow:"",
           temphigh:"",
           tquality:"",
         },//返回的结果
         timg:"",
         wimg:"",
        //  生活指数
        warning1:"",
        warning2:"",
        // 定位的城市
        cpos:"",
        loading:true,
        // 锁
        weatherLock:true,
        startTime:0,
        lastTime:0,
      }
   },
   methods:{
     shua(e){//更改图片 
        console.log("当前时间:" + new Date().getTime());
        console.log("上次点击时间:" + this.lastTime);
        if(this.lastTime == 0){
          this.lastTime = new Date().getTime();
          if(this.lastTime - this.startTime<10000){
            console.log(1);
            this.weatherLock = false;
          }else{
            this.weatherLock = true;
          }
        }else{
          var c = new Date().getTime() - this.lastTime;
          this.lastTime = new Date().getTime();
          if(c<10000){
            console.log(2);
            this.weatherLock = false;
          }else{
            this.weatherLock = true;
          }
        }
        if(!this.weatherLock)return;
        this.weatherLock = false;
        console.log(e);
        var img = e.target;
        var src = img.src;
        var houzhui = /\.\w+$/.exec(src)[0];
        console.log(houzhui);
        if(houzhui == ".png"){
          img.src = require("../../../public/images/index/shuaxin.gif");
          console.log("请求一次天气")
           setTimeout(()=>{
              // 再发请求
              shuaxin(this.cpos).then(res=>{
                
                this.weatherLock = true;
                console.log(res);
                this.result = res;
                this.timg = require(`../../../public/images/index/weathercn02/${this.result.daily[0].day.img}.png`);
                this.wimg = require(`../../../public/images/index/weathercn02/${this.result.daily[1].day.img}.png`);
                img.src = require("../../../public/images/index/shuaxin.png");
              });
           },2000);
            
          // });
          // console.log(this.result)
        }else{
          img.src = require("../../../public/images/index/shuaxin.png");
        }
     }
   },
   created() {
     
    //会在组件创建成功之后自动调用该函数
    // 自动在组件创建完成之后发送ajax请求--axios不支持jsonp
    getCity(res=>{
      console.log(res);
      switch(res){
        case "110000":
        this.cpos = "北京"
        break;
        case "120000":
        this.cpos = "天津"
        break;
        default:
        this.cpos = "北京"
      }
    })

    shuaxin(this.cpos).then(res=>{
      console.log(res);
      this.result = res;
      this.timg = require(`../../../public/images/index/weathercn02/${this.result.daily[0].day.img}.png`);
      this.wimg = require(`../../../public/images/index/weathercn02/${this.result.daily[1].day.img}.png`);
     
    });
   $.ajax({
      url : "https://api.jisuapi.com/weather/query?appkey=90b47e2a6f6c02d3&city=北京",
      type : "GET",
      dataType : "jsonp",
      success : res=>{
         console.log("发送天气请求成功");
         console.log(res.result);
         this.result = res.result;
         console.log(this.result);
        //  明天
        // 拿图片
        // var srcHead = "../../../public/images/index/weathercn02/";
       
        console.log(this.timg,this.wimg);
        // 生活指数
        this.warning1 = this.result.index[3];
        this.warning2 = this.result.index[6];
        console.log(this.warning1)
      }

   });

  },//组件创建之后的函数
  mounted() {
    this.startTime = new Date().getTime();
    console.log("页面创建时间:" +this.startTime);

  },
};
</script>
<style scoped>
#weather{
  margin-top:.5rem;
}
.shuaxin{
  width:1.875rem;
  height:1.875rem;
  margin-left:3.875rem;
}
.shuaxin img{
  margin-right:0;
}
.floor1{
  display:flex;
  justify-content: flex-start;

}
.area{
  margin-top:.5rem;
}
.weather-area {
  width: 95%;
  margin: auto;
  height: 18.5rem;
  padding: 0.625rem;
  border-radius: 0.625rem;
  /* background-color:#ccc; */
  background-color:#fff;
  box-shadow: 0 0.256rem 0.59733333rem 0.34133333rem rgba(20,19,51,.06);
}
.today,
.tomorrow {
  border: 1px solid #e2e5e8;
  height: 4rem;
  /* background-color: #f5f9ff; */
  display: flex;
  justify-content: space-between;
  padding:0 .625rem;
  line-height: 2rem;
  border-radius: 0.625rem;
}
.life1 {
  margin-top: 0.625rem;
}
.van-grid-item__content {
  /* background-color: rgba(0, 0, 0, 0.1); */
}
.w-img {
  height: 4rem;
  display:flex;
  align-items: center;
}
.w-img img {
  width: 100% !important;
}
.img-icon{
  width:3rem;
}
.life-one,.life-two{
  /* background-color:#f5f9ff; */
  border:1px  solid #e2e5e8;
  height:5.5rem;
  margin-top:.625rem;
  border-radius:.625rem;
  padding:.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;      
  font-size:.875rem;    
}

</style>
