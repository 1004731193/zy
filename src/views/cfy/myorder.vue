<template>
   <div class="myorder">
      <header><van-nav-bar title="我的预约" left-arrow @click-left="onClickLeft" fixed/></header>
      <div class="title">
         <van-nav-bar left-text="我的预约表" right-text=">"/>
      </div>
      <div class="list">
         <item v-for="(item,i) of list" :key="i" :item="item"></item>
      </div>
   </div>
</template>

<script>
import item from "./myorder-item"
import { Toast } from 'vant';
export default {
   data(){
      return{
         list : [],
      }
   },
   methods : {
      onClickLeft() {
         this.back(this);
      },
   },
   components : {
      "item" : item
   },
   created(){
      this.axios.get("http://127.0.0.1:5050/user/showUserOrder").then(res=>{
         // console.log(res.data);
         if(res.data.code == -1){
            Toast.fail('还未预约过医生哦！');
            return;
         }else{
            this.list = res.data.data;
            console.log(this.list);
         }
      }).catch(err=>{
         console.log(err);
      });
   }
}
</script>

<style scoped>
   .myorder{
      background-color: #eee;
   }
   .title{
      margin-top: 60px;
   }

   .list{
      padding: 0 15px;
   }
</style>
