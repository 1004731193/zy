<template>
<div>
   <div v-if="index == 0">
      1111
   </div>
   <div v-if="index == 1">
      2222
   </div>
   <div v-if="index == 2">
      3333
   </div>
   <div v-if="index == 3">
      4444
   </div>
   <div v-if="index == 4">
      5555
   </div>
   <div class="list">
      <div class="item" v-for="(item,i) of icon" :key="i" @click="change(i)">
         <img :src="item.isactive ? item.active :item.inactive">
         {{item.name}}
      </div>
   </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      icon: [
        {
          name : "首页",
          active: require("../../../public/images/index/Footer/weiyi-active.png"),
          inactive: require("../../../public/images/index/Footer/weiyi-nomal.png"),
          isactive : true
        },
        {
           name : "商城",
          active: require("../../../public/images/index/Footer/shangcheng-active.png"),
          inactive: require("../../../public/images/index/Footer/shangcheng-nomal.png"),
          isactive : false
        },
        {
           name : "健康号",
          active: require("../../../public/images/index/Footer/jkh-active.png"),
          inactive: require("../../../public/images/index/Footer/jkh-nomal.png"),
          isactive : false
        },
        {
           name : "发现",
          active: require("../../../public/images/index/Footer/find-active.png"),
          inactive: require("../../../public/images/index/Footer/find-nomal.png"),
          isactive : false
        },
        {
           name : "我",
          active: require("../../../public/images/index/Footer/me-active.png"),
          inactive: require("../../../public/images/index/Footer/me-nomal.png"),
          isactive : false
        }
      ],
      index : 0
    };
  },
  methods : {
     change(index){
        this.index = index;
        for(var i = 0; i < this.icon.length; i++){
           if(i == index){
              this.icon[i].isactive = true;
           }else{
              this.icon[i].isactive = false;
           }
        }
     }
  }
};
</script>

<style>

   .list{
      display: flex;
      justify-content: space-between;
   }

   .item{
      height: 40px;
   }

   .item img{
      width: 20px;
   }
</style>
