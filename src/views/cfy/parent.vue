<template>
   
   <div>
      <div class="frame">
         <div class="tab-item" v-if="index == 0">
            <index></index>
         </div>
         <div class="tab-item" v-if="index == 1">
            
         </div>
         <div class="tab-item" v-if="index == 2">
            <jkh></jkh>
         </div>
         <div class="tab-item" v-if="index == 3">
            <find></find>
         </div>
         <div class="tab-item" v-if="index == 4">
            <login @toggleFrame="toggleTab"></login>
         </div>
      </div>

      <footer>
         <van-tabbar v-model="active" fixed border @change="toggleTab">
            <van-tabbar-item>
               <span>微医</span>
               <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.active ? icon[0].active : icon[0].inactive"
               >
            </van-tabbar-item>
            <van-tabbar-item>
               <span>微医商城</span>
               <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.active ? icon[1].active : icon[1].inactive"
               >
            </van-tabbar-item>
            <van-tabbar-item>
               <span>健康号</span>
               <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.active ? icon[2].active : icon[2].inactive"
               >
            </van-tabbar-item>
            <van-tabbar-item>
               <span>发现</span>
               <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.active ? icon[3].active : icon[3].inactive"
               >
            </van-tabbar-item>
            <van-tabbar-item>
               <span>我</span>
               <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.active ? icon[4].active : icon[4].inactive"
               >
            </van-tabbar-item>
         </van-tabbar>
      </footer>
   </div>

   
</template>

<script>
import index from "../../components/cfy/index";
import jkh from "../../components/wtq/jkh"
import login from "../../components/mhp/login"
import find from "../../components/zwb/find";
export default {
 data() {
    return {
      index : 0,
      active: 0,
      icon: [
         {
            active: require('../../../public/images/index/Footer/weiyi-active.png'),
            inactive: require('../../../public/images/index/Footer/weiyi-nomal.png')
         },
         {
            active: require('../../../public/images/index/Footer/shangcheng-active.png'),
            inactive: require('../../../public/images/index/Footer/shangcheng-nomal.png'),
         },
         {
            active: require('../../../public/images/index/Footer/jkh-active.png'),
            inactive: require('../../../public/images/index/Footer/jkh-nomal.png'),
         },
         {
            active: require('../../../public/images/index/Footer/find-active.png'),
            inactive: require('../../../public/images/index/Footer/find-nomal.png'),
         },
         {
            active: require('../../../public/images/index/Footer/me-active.png'),
            inactive: require('../../../public/images/index/Footer/me-nomal.png'),
         }
      ]
    }
  },
  methods : {
     toggleTab(index){
        console.log(index);
        this.index = index;
        this.active = index;
     }
  },
  components : {
     "index" : index,
     "jkh" : jkh,
     "login" : login,
     "find":find
  }
}
</script>

<style>
  .frame{
    padding-bottom: 50px;
  }

   .van-tabbar-item__icon img{
      height: 21px !important;
   }

   .van-tabbar--fixed{
     height:50px;
   }
</style>
