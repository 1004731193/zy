<template>
   <div class="hitem" @click="goChooseClass">
      <van-row>
         <van-col span="5" class="pic">
            <!-- `http://127.0.0.1:5050/${item.hpic}` -->
            <img src="../../../../public/images/index/1.png">
         </van-col>
         <van-col span="19" class="content">
            <h5>{{item.hospital}}</h5>
            <div><span>{{item.legalperson}}</span> <span>{{item.regdate ? item.regdate : "暂时未知"}}</span></div>
            <p><span>{{item.regaddress}}</span></p>
         </van-col>
      </van-row>
   </div>
   
</template>

<script>
export default {
   props : ["item"],
   data(){
      return{
         hid : 0
      }
   },
   methods : {
      goChooseClass(e){
         if(this.hid == 0){
            this.$notify({
               type : "danger",
               message : "出现错误"
            });
            return;
         }
         this.$store.commit("setOrderStep",{name : "hid" , val : this.hid});
         this.$router.push("chooseClass");
      }
   },
   created(){
      this.hid = this.item.detailid;
   }
}
</script>

<style scoped>
   a{
      color: #000;
   }
   .hitem{
      padding: 1.5rem .625rem;
      position: relative;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
   }
   .pic img{
      width: 100%;
      height: 100%;
      border-radius: .1875rem;
   }

   .hitem .content{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding-left: .9375rem;
   }

   .hitem .content >div > span,.hitem .content > p{
      font-size: .675rem;
      margin-top:.425rem;
   }

   .hitem .content >div > span:first-child{
      color: #ff695c;
   }

   .hitem .content >div > span:last-child{
      color: #888;
   }

   .hitem .content > p >span{
      background: #e0ebfa;
      display: inline-block;
   }
</style>
