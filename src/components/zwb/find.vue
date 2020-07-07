<template>
  <div>
    <van-tabs v-model="active" title-active-color="#4589fa" color="#4589fa" line-width="3rem" :duration="0.6" :animated="true">
      <van-tab title="咨讯">
        <div class="health">
          <div class="health-item">
            <div class="left">
              <h4>春节吃坚果会变胖？这样吃不胖</h4>
              <p>【春节特辑】瓜子、腰果、板栗，哪种坚果不胖人？</p>
              <span>健康咨讯</span>
            </div>
            <div class="right">
              <img src="../../../public/images/find/a3c23168112.jpg">
            </div>
          </div>
          <div class="health-item">
            <div class="left">
              <h4>火锅里漂着的“红油”是什么？</h4>
              <p>请收下这份《鉴别锅底大法》</p>
              <span>健康咨讯</span>
            </div>
            <div class="right">
              <img src="../../../public/images/find/YHR22220869.jpg">
            </div>
          </div>
          <div class="health-item">
            <div class="left">
              <h4>味精加热会致癌，鸡精更好？ </h4>
              <p>5个食品真相告诉你朋友圈有多「毒」！</p>
              <span>健康咨讯</span>
            </div>
            <div class="right">
              <img src="../../../public/images/find/vR423169076.jpg">
            </div>
          </div>
        </div>
        <h3 class="health-title">健康号</h3>
        <div class="health-num">
          <div class="num-item">
            <img src="../../../public/images/find/doc1.jpg">
            <h3>老廖说医疗</h3>
            <p>微医董事长兼CEO，中国医促会互联网医疗分会常务副主任委员，全国医联体联盟常务副理事长。2010年创建微医（挂号网），致力于通过互联网技术缓解中国老百姓的看病难题。
            </p>
            <span>关注</span>
          </div>
          <div class="num-item">
            <img src="../../../public/images/find/doc2.jpg">
            <h3>张清彬</h3>
            <p>主任医师/教授 广州医科大学附属口腔医院-口腔颞下颌关节科
            </p>
            <span>关注</span>
          </div>
          <div class="num-item">
            <img src="../../../public/images/find/doc3.jpg">
            <h3>杨玉龙</h3>
            <p>擅长内镜微创技术ERCP\PTCD\PTCS治疗各种原因引起的梗阻性黄疸；肝内外胆管结石，胆道镜微创取石；内镜微创保胆治疗胆囊结石、息肉；内镜微创治疗胆源性胰腺炎，各种类型的胆管狭窄，肝移植后胆道狭窄
            </p>
            <span>关注</span>
          </div>
          <div class="num-item">
            <img src="../../../public/images/find/doc4.jpg">
            <h3>赵梓纲</h3>
            <p>副主任医师 中国人民解放军总医院301医院-皮肤科
            </p>
            <span>关注</span>
          </div>
          <div class="num-item">
            <img src="../../../public/images/find/doc5.jpg">
            <h3>刘睿</h3>
            <p>副主任医师 空军军医大学第二附属医院唐都医院-康复理疗科
            </p>
            <span>关注</span>
          </div>
          <div class="num-item">
            <img src="../../../public/images/find/doc6.jpg">
            <h3>巫凡</h3>
            <p>为男人坚挺持久负航。为女性解决泌尿系烦恼。早泄，阳痿，前列腺炎，龟头炎，梅毒，淋病，非淋，尖锐湿疣，肾虚，艾滋病，包皮龟头炎，阴茎短小，附睾炎，阴囊湿疹，精索静脉曲张，性病，勃起功能障碍，前列腺增生，
            </p>
            <span>关注</span>
          </div>
        </div>
        <div class="adv">
          <h3>胶囊型药物可以掰开了吃吗？</h3>
          <p>没有特殊说明，不建议打开服用。</p>
          <img src="../../../public/images/find/PbQ45887445.jpg">
          <span>专医精选</span>
        </div>
        <div class="others health">
          <p class="care">养生达人都在看</p>
          <div class="health-item">
            <div class="left">
              <h4>医生说｜已经很瘦了忍不住想要更瘦，你会不会患上了厌食症？</h4>
              <p>【春节特辑】瓜子、腰果、板栗，哪种坚果不胖人？</p>
              <span>吴凡  副主任医生</span>
            </div>
            <div class="right">
              <img src="../../../public/images/find/a3c23168112.jpg">
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="工具">
        <div class="tools">
          <div class="left">
            <h4>科室导航</h4>
            <p>常见科室分类，帮你更快找对医生</p>
          </div>
          <div class="right">
            <img src="../../../public/images/find/dept-position.png">
          </div>
        </div>
        <div class="tools">
          <div class="left">
            <h4>健康测评</h4>
            <p>常见疾病患病风险自测，把握健康状况</p>
          </div>
          <div class="right">
            <img src="../../../public/images/find/health-challenge.png">
          </div>
        </div>
        <div class="tools">
          <div class="left">
            <h4>症状自诊</h4>
            <p>自测分诊，健康问题及早排忧</p>
          </div>
          <div class="right">
            <img src="../../../public/images/find/found-zizhen.png">
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0
    }
  }
}
</script>
<style scoped>
.health .health-item{
  display: flex;
  justify-content: space-between;
  padding:.977099rem;
  margin-top:.610687rem;
}
.health-item .left{
  width:68%;
}
.health-item .left h4{
  color:#28354C;
  font-weight: 400;
  font-size: 1.221374rem;
}
.health-item .left p{
  color:#83889a;
  font-size: .977099rem;
  margin:.610687rem 0;
}
.health-item .left span{
  color: #A6A8B6;
  font-size:.854962rem;
}
.health-item .right img{
  width:7rem;
}
.health-num{
  margin-top:.610687rem;
}
.health-title{
  color:#28354C;
  font-weight: 400;
  margin-left: .610687rem;
}
.health-num{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-top:.610687rem;
  padding-bottom:2.442748rem;
}
.health-num .num-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:40%;
  border:1px solid #eee;
  border-radius: .183206rem;
  padding:.610687rem;
  text-align: center;
  margin-left:.610687rem;
}
.health-num .num-item img{
  width:4.030534rem;
  border-radius: 50%;
}
.health-num .num-item h3{
  color:#28354c;
  font-weight: 400;
  font-weight: 1.099237rem;
  margin: .610687rem 0;
}
.health-num .num-item p{
  width:10rem;
  color:#83889A;
  font-size:.854962rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: .610687rem;
  text-indent:1rem;
}
.health-num .num-item span{
  font-size: .977099rem;
  color:#3f86ff;
  border:1px solid #3f86ff;
  padding:.305344rem .916031rem;
  border-radius: .854962rem;
}
.adv{
  padding:.610687rem;
  position: relative;
  top:-1.832061rem;
  background:#fff;
}
.adv h3{
  color:#28354C;
  font-size: 1.099237rem;
  font-weight: 400;
}
.adv p{
  color:#83889A;
  font-size: .977099rem;
  margin:.610687rem 0;
}
.adv img{
  width: 100%;
}
.adv span{
  display: inline-block;
  color:#83889A;
  font-size: .977099rem;
  margin-top: .305344rem;
}

.others .care{
  color:#83889A;
  font-size: .977099rem;
  border-left: 3px solid #3f86ff;
  margin-left: .610687rem;
  padding-left: .305344rem;
}
.tools{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:.305344rem .977099rem;
  border-bottom: 1px solid #eee;
}
.tools .left h4{
  font-size: 1.099237rem;
  font-weight: 400;
  color:#28354c;
}
.tools .left p{
  color:#908f9d;
  font-size:.977099rem;
  margin-top:.5rem
}
.tools .right img{
  width:2.137405rem;
  margin-right:1.221374rem;
}
</style>
