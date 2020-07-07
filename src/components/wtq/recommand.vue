<!--
 * @Author: your name
 * @Date: 2019-11-24 14:55:08
 * @LastEditTime: 2019-11-24 20:50:53
 * @LastEditors: Please set LastEditors
 * @Description: 精选推荐 父组件
 * @FilePath: \zhuanyi_2\zy\src\components\wtq\recommand.vue
 -->
<template>
<!-- 热门推荐 子组件 -->
  <div id="recommand">
    <!-- 推荐更多加载 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
      <van-cell v-for="(item,i) of list"  :key="i">
        <div class="floor1">
          <div class="doc-info">
            <van-row type="flex" justify="space-between"> 
              <van-col span="15" class="doc-top">
                <div class="doc-info">
                  <van-image class="doc-img"
                    round
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                  />
                </div>
                <div class="doc-info-text">
                  <p>{{item.author}} | {{item.gf}}</p>
                  <p>{{item.time}}</p>
                </div>
                  
                </van-col>
              <van-col span="4"></van-col>
              <van-col span="5" class="ask"><div class="guanzhu">向他提问</div></van-col>
            </van-row>
          </div>
          <!-- 第二行 -->
          <div class="doc-text">
            <h4>{{item.title}}</h4>
            <p>{{item.subtitle}}</p>
          </div>
          <!-- 第三行 -->
          <div class="bottom-topic">
            <van-row>
              <van-col span="4">
                <span >#</span><span style="color:#2f4e98">{{item.topic}}</span>
              </van-col>
              <van-col span="12">
                
              </van-col>
              <van-col span="4" class="bottom-right">
                <span>回复 {{item.answer}} . 点赞 {{item.zan}}</span>
                <!-- <div class="no-intrest">
                  <van-action-sheet
                    v-model="show"
                    :actions="actions"
                    cancel-text="X"
                    @cancel="onCancel"
                  />
                </div> -->
              </van-col>
            
            </van-row>
          </div>
        </div>
      </van-cell>
    </van-list>
    
  </div>
</template>

<script>
import recommand from '../wtq/json/recommand'
export default {
  data(){
    return {
      list:[],
      loading: false,
      finished: false,
      recommand:recommand,

    }
  },
  methods:{
    onLoad(){
      // 需要传的时候 ,就调自组件给的自定义事件  然后把要传的东西放在对象或者字符串中
      this.$emit("open",{opacity : 0});
      console.log("到达底部啦!");
      console.log(this.recommand);
      console.log(this.list);
      setTimeout(()=>{
        // 定时器,每隔一段时间就加载recommand的数据 然后把它存放在list中 去遍历list
        for(var i = 0; i < 2; i++){
          // push之后 list已经改变了  ,等到变一次之后,list数量已经变了,再循环第二次就已经是当前list的长度了 
          this.list.push(this.recommand[this.list.length]);
          console.log(this.list.length);
        }
        this.loading = false;//加载完成
        this.$emit("open",{opacity : 1})
        if(this.list.length >= this.recommand.length){
          this.finished = true;//整体加载结束
          return;
        }
      },2000)
    }
  },
}
</script>

<style scoped>
#recommand{
  background:#f5f6f6;
}
.floor1{
  position:relative;
  height:11rem;
  padding:.5rem;
  background:#fff;
}
.doc-top{
  display:flex;
  line-height:1rem;
}
.doc-text{
  padding:.610687rem;
}
.doc-info-text p{
  font-size:.732824rem;
  color:#28354c;
  margin:0;
  
}
.doc-info-text p:first-child{
  margin-top:.8rem;
}
.doc-info-text p:last-child{
  color:#a6a8b6;
}
.guanzhu{
  width:4rem;
  height:1rem;
  border:1px solid #3f86ff;
  border-radius:4.610687rem;
  text-align:center;
  font-size:.732824rem;
  margin-top:.8rem;
  padding:.1rem;
  color:#3f86ff;
  font-weight:700;
  line-height:1rem;
}
  .doc-img{
    width:3rem;
    height:3rem;
    padding:.305344rem;
  }
.doc-info span{
  color:#28354c;
  font-size:.916031rem;
  
}

.doc-info span:last-child{
  color:#a6a8b6;
  font-size:.732824rem;
}
.doc-text{
  position:absolute;
  top:3.5rem;
}
.doc-text p{
  color:#4f5264;
  font-size:.854962rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient:vertical;
  display: -webkit-box;
  margin-top:.305344rem;
}
.bottom-topic{
  width:100%;
  position: absolute;
  top:8.8rem;
  color:#a6a8b6;
  font-size:.732824rem;
  /* padding:.610687rem !important; */
  margin:1.5rem 0;
  padding: 0 .610687rem;
  box-sizing: border-box;
}

.bottom-right{
  text-align:right;
  width:18rem !important;
}
.ask{
  display:flex;
  justify-content:flex-end;
}
</style>