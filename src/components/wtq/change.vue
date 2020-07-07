<!--
 * @Author: your name
 * @Date: 2019-11-24 13:45:40
 * @LastEditTime: 2019-11-24 13:55:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\components\wtq\change.vue
 -->
<template>
  <div>

     <van-row type="flex">
    <p :class="{change:show}" @click="isShow">选项卡一</p>
    <p :class="{change:!show}" @click="isShow">选项卡二</p>
  </van-row>
    <div v-if="show">123</div>
    <div v-else>456</div>
  </div>
</template>

<script>
export default {
   data(){
    return {
      show:true,
    }
  },
  methods:{
    isShow(e){
      if(e.target.nodeName !=="P")return;
        console.log(e);
      if(e.target.className == "change") return; 
      this.show = !this.show
      
  }
}
}
</script>

<style>
.change{
    color:#3872f4;
    border-bottom:1px solid #3872f4;
  }
</style>