<template>
   <div class="love">
      <div class="tag">
         <span>爱心义诊</span>
      </div>
      <div class="title">
         <h3>百位医生 在线义诊</h3>
      </div>
      <div class="pic-list">
         <van-row type="flex" justify="space-between">
            <van-col span="6" class="pic-item">
               <img src="../../../public/images/index/爱心义诊/2.png">
               <span>剩余4次</span>
            </van-col>
            <van-col span="6" class="pic-item">
               <img src="../../../public/images/index/爱心义诊/3.png">
               <span>剩余10次</span>
            </van-col>
            <van-col span="6" class="pic-item">
               <img src="../../../public/images/index/1.png">
               <span>剩余8次</span>
            </van-col>
            <van-col span="6" class="pic-item">
               <div>
                  更多医生
               </div>
            </van-col>
         </van-row>
      </div>
      <div class="price-list">
         <van-row type="flex">
            <van-col span="6">
               <del>￥20元</del>
               <p>￥5元</p>
            </van-col>
            <van-col span="6">
               <del>￥25元</del>
               <p>￥5元</p>
            </van-col>
            <van-col span="6">
               <del>￥10元</del>
               <p>￥5元</p>
            </van-col>
         </van-row>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      return{
         
      }
   },
   methods : {

   }
}
</script>

<style scoped>
   .love{
      /* margin */
      padding: 1.5rem .825rem;
      box-shadow: 0 0.256rem 0.59733333rem 0.34133333rem rgba(20,19,51,.06);
      margin: .725rem 0;
      border-radius: .625rem;
      box-sizing: border-box;
   }
   .love>.tag>span{
      border-radius: .9375rem;
      padding: .1rem .825rem;
      border: 1px solid #999;
      font-size: .9375rem;
      color: #999;
   }

   .love>.title>h3{
      font-size: 1.3rem;
      margin: .5rem 0;
   }

   .pic-list img{
      width: 100%;
      height: 100%;
      border-radius: .6375rem;
   }

   .pic-list .pic-item{
      position: relative;
      margin: 0 .425rem;
   }

   .pic-list img+span{
      position: absolute;
      bottom: 0px;
      left: 0px;
      color: #fff;
      background: #3f86ff;
      opacity: .7;
      font-size: .8rem;
      padding: .15rem .1125rem;
      border-bottom-left-radius: .6375rem;
      border-bottom-right-radius: .6375rem;
      right: 0;
      text-align: center;
   }

   .pic-list .pic-item:last-child{
      background: #eee;
      text-align: center;
      border-radius: .6375rem;
      color: #999;
      line-height: 4.5;
   }

   .price-list{
      text-align: center;
   }

   .price-list del{
      font-size: .875rem;
      color: #999;
   }

   .price-list p{
      font-size: 1.125rem;
      font-weight: bold;
      color: #f00;
   }
</style>


