<!--
 * @Author: your name
 * @Date: 2019-11-24 00:26:53
 * @LastEditTime: 2019-11-24 21:27:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\components\wtq\jkh.vue
 -->
<template>
  <div id="jkh">
    <div class="top-search">
      <!-- 上方搜索框 -->
      <van-row data-id="sousuo"> 
        <van-col span="22">
          <!-- 搜索框 -->
          <form action="/">
            <van-search placeholder="搜索医生、疾病科普等内容" shape="round" background="linear-gradient(180deg,#3f86ff,#589bff)"/>
          </form>
        </van-col>
        <van-col span="2">
          <!-- 头像 -->
          <van-image class="touxiang" round  width="10rem"  height="10rem"  src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        </van-col>
      </van-row>
    </div>
    

    <!-- 第二排 -->
    <div class="docs">
      <van-row>
        <!-- 24 : 2 10 10 2 -->
        <van-col offset="2" span="10">
          <!-- 左边 -->
          <div class="doc-left">
            <img class="p1" src="../../../public/images/jkh/top-entry-health.png">
            <div class="txt">
              <h4>找号主 <img style="width:16px;" src="../../../public/images/jkh/right.png"></h4>
              <p>看科普 找大咖</p>
            </div>
          </div>
        
        </van-col>
        <van-col span="10">
          <!-- 右边 -->
          <div class="doc-right">
            <img class="p1" src="../../../public/images/jkh/top-entry-help.png">
            <div class="txt">
              <h4>一病多问<img style="width:16px;" src="../../../public/images/jkh/right.png"></h4>
              <p>5位以上专家把关</p>
            </div>
          </div>
        </van-col>
      </van-row>

    </div>

    <div class="second">
      <!-- 第三排 -->
      <div class="kind">
        <!-- 第一排类型 -->
        <van-row  justify="space-between">
          <van-col span="6" class="kind-every">
            <div class="item">
              <div class="img">
                <img src="../../../public/images/jkh/1.png">
              </div>
              <p class="item-info">就医互助</p>
            </div>
          </van-col>
          <van-col span="6" class="kind-every">
            <div class="item">
              <div class="img">
                <img src="../../../public/images/jkh/2.png">
              </div>
              <p class="item-info">女性健康</p>
            </div>
          </van-col>
          <van-col span="6" class="kind-every">
            <div class="item">
              <div class="img">
                <img src="../../../public/images/jkh/3.png">
              </div>
              <p class="item-info">亲子育儿</p>
            </div>
          </van-col>
          <van-col span="6" class="kind-every">
            <div class="item">
              <div class="img">
                <img src="../../../public/images/jkh/4.png">
              </div>
              <p class="item-info">慢病调理</p>
            </div>
          </van-col>
        </van-row>
        <!-- 第二排类型 -->
        <van-row>
          <van-col span="6" class="kind-every">
            <div class="item">
              <div class="img">
                <img src="../../../public/images/jkh/5.png">
              </div>
              <p class="item-info">皮肤疾病</p>
            </div>
          </van-col>
          <van-col span="6" class="kind-every">
            <div class="item">
              <div class="img">
                <img src="../../../public/images/jkh/6.png">
              </div>
              <p class="item-info">肿瘤癌症</p>
            </div>
          </van-col>
          <van-col span="6" class="kind-every">
            <div class="item">
              <div class="img">
                <img src="../../../public/images/jkh/7.jpg">
              </div>
              <p class="item-info">会员生活</p>
            </div>
          </van-col>
          <van-col span="6" class="kind-every">
            <div class="item">
              <div class="img">
                <img src="../../../public/images/jkh/8.png">
              </div>
              <p class="item-info">两性之间</p>
            </div>
          </van-col>
        </van-row>
      </div>

      <!-- 第四排 -->
      <div class="topic-floor1">
        <!-- 第一行话题 -->
        <van-row type="flex" justify="space-around">
          <van-col span="12" class="topic-content">
            <span class="jing">#</span><span class="topic-hot">VIP会员免费体验</span>
          </van-col>
          <van-col span="12"  class="topic-content">
            <span class="jing">#</span><span class="topic-hot">二十四节气之小雪</span>
          </van-col>
        </van-row>
      </div>
      <div class="topic-floor2" >
        <!-- 第一行话题 -->
        <van-row type="flex" justify="space-around">
          <van-col span="12"  class="topic-content"> 
            <span class="jing">#</span><span class="topic-hot">更多话题/活动</span>
          </van-col>
          <van-col span="12"  class="topic-content">
            <span class="jing">#</span><span class="topic-hot">热门内容排行榜</span>
          </van-col>
        </van-row>
      </div>
    </div>

    
    <!-- 推荐 -->
    <div class="recommand">
        <van-tabs v-model="active" animated color="#3f86ff">
          <van-tab title="精选推荐">
            <!-- 引用组件 -->
            <!-- 在这定义一个(自定义事件名--就相当于电话)  后面的是定义的事件--相当于电话本上的电话号    在子组件中调用(子组件需要的时候) -->
            <recommand @open="openQuestion"></recommand>
          </van-tab>
          <!-- 另一个页面 -->
          <van-tab title="我的关注">
            <recommand @open="openQuestion"></recommand>
          </van-tab>
        </van-tabs>
    
    </div>

    <!-- 发帖提问 -->
    <div class="ask-question" :style="myStyle">
      <span class="tie active" >发帖</span>
      <span class="tiwen">提问</span>
    </div>
  </div>
</template>

<script>
import recommand from '../wtq/recommand'
export default {
  data() {
    return {
      active: 2,
      // isShow:true,
      myStyle : {}
    }
  },
  components:{
    "recommand":recommand
  },
  methods:{
    openQuestion(obj){//父组件在这定义一个方法 , 子组件去调用
      this.myStyle = obj;
    }
  }
}
</script>

<style scoped>


.van-row[data-id=sousuo],.van-search{
  background:#3f86ff !important;
}

.show{
  display:none;
}
.ask-question{
  
  position:fixed;
  bottom:5rem;
  left:50%;
  margin-left:-6rem;
  /* background:#3f86ff;
  border:1px solid #3f86ff;
  border-radius:1.526718rem;*/
  color:#fff;
  transition: .8s;
}
.tie{
   border:1px solid #3f86ff;
   border-right:0;
   border-top-left-radius: 1.5rem;
   border-bottom-left-radius: 1.5rem;
   background:#3f86ff;
    padding:.5rem 2rem; 
}
.tiwen{
  border:1px solid #3f86ff;
   border-right:0;
   border-top-right-radius: 1.5rem;
   border-bottom-right-radius: 1.5rem;
   background:#3f86ff;
    padding:.5rem 2rem; 
}
.active{
  background:#589bff;
}
#jkh{
  background:#f5f6f6;
}
/* 上方搜索一排 */
  .top-search{
    height:2.687023rem;
    background:linear-gradient(180deg,#3f86ff,#589bff);
    
  }
  .van-search{
    height:2.687023rem;
  }
  /* .van-search__content{
    background:rgba(40,53,76,.1);
    color:#fff;

  } */
  /* .van-field__control{
    color:#fff;
  } */
  .van-image{
    width:1.832061rem !important;
    height:1.832061rem !important;
    
  }

  .touxiang{
    margin-top:.4rem !important;
  }
  .van-col{
    line-height:2.687023rem;
  }
/* 第二排 */
  .docs{
    background:linear-gradient(180deg,#3f86ff,#589bff);
    height:3.5rem;
  }
/* 医生 */
  .doc-left,.doc-right{
    background:#fff;
    height:4.274809rem;
    display:flex;
    box-shadow:0 .244275rem .48855rem 0 rgba(40,53,76,.05);
    margin-top:.7rem;
  }
  .doc-left{
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
  }
  .doc-right{
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }
  .p1{
    width:3.664122rem;
    height:4.763359rem;
    margin-top:-0.5rem;
  }
  .txt{
    height:4.274809rem;
    line-height:2.2rem;
  }
  .txt p{
    color:#a6a8b6;
    font-size:.732824rem;
  }
  
/* 第三排 */
  .item{
      width:2.931298rem;
      margin:1.2rem 1.5rem 0 1.5rem;
    }
    .img img{
      width:100%;
    }
    .item-info{
      width:4rem;
      color:#83889a;
      font-size:.732824rem;
      margin-top:.5rem !important;
    }
    .kind-every{
      line-height:0 !important;
    }
    
/* topic */
  .topic-floor1{
    margin-top:1rem;
  }
  .topic-content{
    text-align:left;
  }
  .topic-hot{
    font-size:.916031rem !important;
  }
  .jing{
    color:#ddd;
    margin-right:.305344rem;
    margin-left:1rem;
  }
  .second{
    background:#fff;
    border-bottom:1px solid #f5f6f6;
    padding-bottom:.5rem;
  }
/* 第二大部分 */
  .recommand{
    background:#fff;
    margin-top:5px;
  }
  .doc-info{
    font-size:.916031rem;
    height:2.198473rem;
    line-height:1.2rem;
    
  }
  .doc-info span:not(last-child){
     color:#28354c;
  }
  .doc-info span:last-child{
    color:#a6a8b6;
    font-size:.732824rem;
  }
   .doc-top{
     padding-left:.916031rem;
   }

</style>