<template>
   <div class="one-by-more">
      <div class="tag">
         <span>一病多问</span>
      </div>
      <div class="question">
         <van-row>
            <van-col span="3">
               <div class="logo">问</div>
            </van-col>
            <van-col span="21">
               <div class="question-title">
                  {{item.question}}
               </div>
               <div class="question-tag">
                  <span v-for="(t,i) of item.tags" :key="i">#{{t}}</span>
               </div>
            </van-col>
         </van-row>
      </div>
      <div class="answer">
         <van-row>
            <van-col span="3">
               <div class="logo">答</div>
            </van-col>
            <van-col span="21">
               <van-row gutter="8">
                  <van-col span="5" class="answer-pic-item" v-for="(t,i) of item.answer_doctor" :key="i">
                     <img :src="t.pic">
                     <p>{{t.job}}</p>
                  </van-col>
                  <van-col span="9" class="answer-count">
                     <p><span>{{item.answer_count}}位</span>医生作答</p>
                     <a href="javascript:;">查询详情</a>
                  </van-col>
               </van-row>
            </van-col>
         </van-row>
      </div>
   </div>
</template>

<script>
export default {
   props : ["item"]
}
</script>

<style scoped>
   .one-by-more{
      /* margin */
      padding: 1.5rem .825rem;
      box-shadow: 0 0.256rem 0.59733333rem 0.34133333rem rgba(20,19,51,.06);
      margin: 1rem 0;
      border-radius: .625rem;
      box-sizing: border-box;
   }
   .one-by-more>.tag>span{
      border-radius: .9375rem;
      padding: .1rem .825rem;
      border: 1px solid #999;
      font-size: .9375rem;
      color: #999;
   }

   .question{
      margin-top: 1rem;
   }

   .one-by-more .logo{
      width: 1.675rem;
      height: 1.675rem;
      background: #5bd692;
      border-radius: 50%;
      text-align: center;
      line-height: 1.675rem;
      color: #fff;
      font-size: .8875rem;
   }

   .question-title{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-weight: 700;
      font-size: 1.125rem;
   }

   .question-tag{
      overflow-x: auto;
   }

   .question-tag span{
      font-size: .75rem;
      margin-right: .5rem;
      color: #3f86ff;
   }

   .one-by-more .answer .logo{
      background: #3f86ff;
   }

   .answer{
      margin-top: 1rem;
   }

   .answer .answer-pic-item {
      text-align: center;
   }

   .answer img{
      width: 3.2rem;
      height: 3.2rem;
      border-radius: .5rem;
   }

   .answer img+p{
      font-size: .775rem;
      color: #999;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
   }

   .answer .answer-count{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .answer .answer-count p>span{
      color: #3f86ff;
      font-weight: 600;
   }

   .answer .answer-count p{
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
   }

   .answer .answer-count a{
      display: block;
      text-align: center;
      padding: .4125rem .625rem;
      background: #3f86ff;
      color: #fff;
      border-radius: 1rem;
      margin-top: .5rem;
   }
</style>
