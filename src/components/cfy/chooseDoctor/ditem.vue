<template>
   <div class="ditem">
      <van-row gutter="15" type="flex" align="center">
         <van-col span="5" class="pic">
            <img :src="item.pic ? item.pic : unknowPic">
         </van-col>
         <van-col span="19">
            <van-row>
               <van-col span="20">
                  <p>
                     <span class="name">{{item.name}}</span>
                     <span class="type">主任医师</span>
                     <van-tag type="warning" class="tag">问</van-tag>
                     <van-tag type="danger" class="tag">服务包</van-tag>
                  </p>
                  <p class="gray">
                     <span>评分: {{parseInt(1+Math.random()*9) + "." + parseInt(1+Math.random()*9)}}</span>
                     <span> 预约量: {{item.detailid}}</span>
                  </p>
                  <p class="hide gray">擅长：{{item.speciality}}
                  </p>
               </van-col>
               <van-col span="4" class="yy">
                  <van-tag type="primary" plain :data-did="item.detailid" @click="goDetail">预约</van-tag>
               </van-col>
            </van-row>
         </van-col>
      </van-row>
   </div>
</template>

<script>
export default {
   props : ["item"],
   data(){
      return{
         unknowPic : require('../../../../public/images/qgh/unknow.png')
      }
   },
   methods : {
      goDetail(e){
         var did = e.target.dataset.did;
         if(!did) did = 61293;
         this.$store.commit("setOrderStep",{name : "did" , val : did});
         this.$router.push("d_detail");
      }
   }
}
</script>

<style scoped>
   .ditem{
      padding: 1.2rem .9375rem;
      border-bottom: 1px solid #ddd;
      background-color: #fff;   
   }
   .pic img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
   }

   .hide{
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
   }

   .gray{
      font-size: .92rem;
      color: #666;
      margin-top: .4125rem;
   }

   .gray span{
      margin-right: .5125rem;
   }

   .tag{
      margin-left: .7rem;
   }

   .name{
      font-size: 1.225rem;
      font-weight: 600;
      margin-right: .5rem;
   }

   .type{
      font-weight: 600;
   }

   .van-tag{
      padding: 0 .3rem;
   }

   .yy{
      text-align: right;
   }

   .yy .van-tag{
      padding: .3rem;
   }
</style>
