<template>
   <div class="morder-item">
      <div class="bg">
         <div class="content">
            <p class="cont-title">
               <em>{{docDetail.name}}</em>
               <span>{{status}}</span>
            </p>
            <p class="time">
               <b>预约时间: {{order_time}}</b>
            </p>
            <p class="downtime">
               <span>确认时间: {{down_time}}</span>
            </p>
            <p class="btns">
               <van-button plain type="info" round class="btn" @click="showDetail">查看详情</van-button>
               <van-button plain type="danger" round class="btn" @click="unOrder">取消预约</van-button>
            </p>
         </div>
      </div>
      <p>
         <van-dialog v-model="show" title="预约详情" show-cancel-button>
            <div class="top1">
               <img :src="docDetail.pic ? docDetail.pic : require('../../../public/images/qgh/unknow.png')">
               <div>
                  <p>医生姓名：{{docDetail.name}}</p>
                  <p>医院地址：{{docDetail.hospital}}</p>
                  <p>主科室：{{item.class_name}}</p>
                  <p>副科室：{{item.class_subname}}</p>
               </div>
            </div>
            <div class="top2">
               <p>预约号：<b>{{item.order_number}}</b></p>
               <p>下单时间：{{down_time}}</p>
               <p>预约时间：{{order_time}}</p>
               <p>当前预约状态：<b>{{status}}</b></p>
            </div>
         </van-dialog>
      </p>
   </div>
</template>

<script>
import { Dialog } from 'vant';
import { Toast } from 'vant';
export default {
   props:["item"],
   data(){
      return{
         show : false,
         docDetail : {},
         order_time : "",
         down_time : "",
         status : ""
      }
   },
   methods : {
      showDetail(){
         this.show = !this.show;
      },
      removeUserOrder(){
         return new Promise((resolve,reject)=>{
            var did = this.item.did;
            this.axios.get("http://127.0.0.1:5050/user/removeUserOrder",{
               params : {
                  did : did
               }
            }).then(res=>{
               if(res.data.code != 1){
                  Toast.fail("取消失败，请重试!");
                  resolve(false);
               }else{
                  resolve(true);
               }
            }).catch((err)=>{
               Toast.fail("服务器繁忙，请稍后再试!");
               resolve(false);
            });
         });

      },
      removeDoctorOrder(){
         return new Promise((resolve,reject)=>{
            var did = this.item.did;
            this.axios.get("http://127.0.0.1:5050/doctor/removeDoctorOrder",{
               params : {
                  did : did
               }
            }).then(res=>{
               if(res.data.code != 1){
                  Toast.fail("取消失败，请重试!");
                  resolve(false);
               }else{
                  resolve(true);
               }
            }).catch((err)=>{
               Toast.fail("服务器繁忙，请稍后再试!");
               resolve(false);
            });
         });
      },
      unOrder(){
         this.removeUserOrder().then(res=>{
            if(res){
               this.removeDoctorOrder().then(res=>{
                  if(res){
                     Toast.success("取消成功!");
                     window.location.reload();
                  }
               })
            }
         });
      }
   },
   created(){
      var did = this.item.did;
      var beforeDocDetail = JSON.parse(sessionStorage.getItem(did));
      if(beforeDocDetail){
         this.docDetail = beforeDocDetail;
      }else{
         console.log("请求一次医生详情");
         $.ajax({
            url : `https://api.jisuapi.com/hospital/detail?detailid=${did}&appkey=90b47e2a6f6c02d3`,
            type : "GET",
            dataType : "jsonp",
            success: data=>{
               this.docDetail =  data.result;
               sessionStorage.setItem(`${did}`,JSON.stringify(this.docDetail));
            }
         });
      }
      this.order_time = this.item.order_time;
      this.down_time = new Date(this.item.downtime).toLocaleString();
      switch(this.item.status){
         case 1 :{
            this.status = "正在排队";
            break;
         }
         case 2 :{
            this.status = "医生处理中";
            break;
         }
         case 3 :{
            this.status = "已完成";
            break;
         }
         case 4 :{
            this.status = "已过期";
            break;
         }
      }
   }
}
</script>

<style scoped>
   .morder-item{
      box-sizing: border-box;      
      padding: 8px 0;
      padding-right: 15px;
      margin: 10px 0;
   }
   .bg{
      position: relative;
      background: #f03;
      width: 100%;
      border-radius: .9375rem;
      z-index: 1;
      height: 12rem;
   }
   .content{
      position: absolute;
      background: #fff;
      z-index: 2;
      left: 15px;
      width: 100%;
      height: 12rem;
      box-sizing: border-box;
      padding: 15px;
   }

   .cont-title{
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .cont-title>em{
      font-style: normal;
      font-size: 1.35rem;
      color: #36D;
   }

   .cont-title>span{
      color: orange;
      font-size: .875rem;
   }

   .time{
      margin: .725rem 0;
   }

   .downtime{
      color: #666;
      padding: .625rem 0;
      border-bottom: 1px solid #ddd;
   }

   .btns{
      display: flex;
      justify-content: flex-end;
      margin-top: .5375rem;
   }

   .van-button{
      height: 2.375rem;
      line-height: 2.375rem;
   }

   .btn{
      margin-left: 10px;
   }

   .top1{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
   }

   .top1 p{
      margin-top: 13px;
   }

   .top1 img{
      width: 50%;
   }

   .van-dialog{
      padding: 15px;
      padding-top: 0px;
      padding-bottom: 0px;
   }

   .van-dialog b{
      color: #f03;
   }

   .top2{
      margin-top: 10px;
      margin-bottom: 10px;
   }
</style>
