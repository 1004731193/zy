<template>
   <div class="chooseDoctor">
      <div class="title">
        <van-nav-bar :title="title" left-arrow fixed @click-left="goBack"/>
      </div>
      <!-- 日期选择 -->
      <div class="step">
         <van-steps :active="stepActive">
            <van-step>选择医院</van-step>
            <van-step>选择科室</van-step>
            <van-step>选择医生</van-step>
            <van-step>提交预约</van-step>
         </van-steps>
      </div>
      <div class="chooseDoctorType">
         <van-dropdown-menu>
            <van-dropdown-item v-model="doctorType" :options="option1" />
         </van-dropdown-menu>
      </div>
      <div class="dlist">
         <ditem v-for="(item,i) of list" :key="i" :item="item"></ditem>
      </div>
   </div>
</template>

<script>
import ditem from './ditem'
import axios_doctors from "../../../assets/apis/doctors"
export default {
   data(){
      return{
         title : "选择医生",
         stepActive : 2,
         doctorType : 0,
         option1: [
            { text: '专家擅长', value: 0 },
            { text: '全部', value: 1 },
            { text: '中耳炎', value: 2 },
            { text: '听力障碍', value: 3 },
            { text: '鼻炎', value: 4 },
            { text: '耳聋', value: 5 },
            { text: '鼻窦炎', value: 6 },
            { text: '变态反应性鼻炎', value: 7 },
            { text: '喉癌', value: 8 },
            { text: '咽炎', value: 9 },
            { text: '鼓膜穿孔', value: 10 },
            { text: '鼻息肉', value: 11 },
            { text: '骨膜穿孔', value: 12 },
            { text: '声带息肉', value: 13 },
         ],
         list : []
      }
   },
   created(){
      this.title = this.$store.getters.getOrderStep.className;
      if(!this.title){
         this.title = "选择科室"
      }
      (async ()=>{
         var obj = this.$store.getters.getOrderStep;
         var result = await axios_doctors.getDoctors(obj.city,obj.className);
         this.list = result;
         console.log(this.list);
      })()
   },
   components : {
      "ditem" : ditem
   },
   methods : {
      goBack(){
         this.back(this);
      }
   }
}
</script>

<style scoped>
   .step{
      margin-top: 56px;
   }

   .chooseDoctorType{
      border-bottom: 1px solid #ddd;
   }
</style>
