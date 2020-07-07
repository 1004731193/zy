<template>
  <div>
    <van-nav-bar title="专家问诊" left-arrow @click-left="onClickLeft"/>
    <div class="search">
      <van-row type="flex" align="center">
        <van-col span="22">
          <van-row type="flex" align="center">
            <van-col span="6">
              <van-dropdown-menu>
                <van-dropdown-item
                  v-model="searchType"
                  :title="searchType"
                  :options="searchTypeList"
                />
              </van-dropdown-menu>
            </van-col>
            <van-col span="18">
              <van-search placeholder="请输入搜索关键词" v-model="searchVal"/>
            </van-col>
          </van-row>
        </van-col>
        <van-col span="2" class="qiandao">
          <i></i>
          <span></span>
        </van-col>
      </van-row>
    </div>
    <div class="className">
      <van-grid :gutter="10">
        <van-grid-item v-for="(item,i) of classList" :key="i">
          <van-image :src="`${item.pic}`"/>
          <span>{{item.text}}</span>
       </van-grid-item>
      </van-grid>
    </div>
    <div class="select">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item title="筛选" ref="item">
          <van-switch-cell v-model="switch1" title="医院等级" />
          <van-switch-cell v-model="switch2" title="问诊类型" />
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
      <div class="skill_tags">
        <span>呼吸道感染</span>
        <span>结膜炎</span>
        <span>关节炎</span>
        <span>糖尿病</span>
        <span>腹泻</span>
        <span>胃炎</span>
        <span>中耳炎</span>
        <span>高血压</span>
      </div>
      <div class="ask">
        <img src="../../../public/images/doc_chat/ndu.png">
        <div class="details">
          <h4>三甲医院专家咨询 <span>接诊快</span></h4>
          <p class="times">24小时内交流不限次数</p>
          <h5>接诊率：<span>99%</span> 好评率：<span>99%</span> 问诊量：<span>3675257</span></h5>
          <p class="process">填写咨询问题 > 快速匹配三甲医生 > 3分钟接诊</p>
          <span class="pos">¥19问诊</span>
        </div>
      </div>
    </div>
    <div class="doc_details">
      <div class="left"> 
        <img src="../../../public/images/doc_chat/952.png">
      </div>
      <div class="right">
        <h3 class="dname">常红 <span class="dtype">主任医师</span> <span class="htype">三甲</span></h3>
        <p class="hname">四川大学华西医院 血液内科</p>
        <h4>接诊率：<span>100%</span> 好评率：<span>100%</span> 问诊量：<span>990</span></h4>
        <p class="skill">擅长：擅长痤疮、皮炎湿疹、荨麻疹、银屑病、癣菌病、白癜风等常见皮肤病；尖锐湿疣、生殖器疱疹等性传播疾病；红斑狼疮、硬皮病等结缔组织病。</p>
        <div class="bottom">
          <p class="money">¥150起 <span>可咨询</span></p>
          <p class="res">平均回复：<b>2小时内</b></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2:0,
      value3:0,
      switch1: false,
      switch2: false,
      option1: [
        { text: '全国', value: 0 },
        { text: '北京', value: 1 },
        { text: '天津', value: 2 },
        { text: '天津', value: 3 },
        { text: '上海', value: 4 },
        { text: '重庆', value: 5 }
      ],
      option2: [
        { text: '科室', value: 0 },
        { text: '内科', value: 1 },
        { text: '妇产科', value: 2 },
        { text: '儿科', value: 3 },
        { text: '皮肤科', value: 4 },
        { text: '耳鼻科', value: 5 },
        { text: '眼科', value: 6 },
        { text: '骨科', value: 7 },
      ],
      option3: [
        { text: '综合排序', value: 0 },
        { text: '问诊量', value: 1 },
        { text: '回复速度快', value: 2 },
        { text: '价格从低到高', value: 3 },
        { text: '价格从高到低', value: 4 },
      ],
      classList:[
        {pic:require('../../../public/images/doc_chat/hYf.png'),text:'内科'},
        {pic:require('../../../public/images/doc_chat/MX.png'),text:'外科'},
        {pic:require('../../../public/images/doc_chat/1TJ.png'),text:'妇产科'},
        {pic:require('../../../public/images/doc_chat/ZqI.png'),text:'儿科'},
        {pic:require('../../../public/images/doc_chat/Sdz.png'),text:'皮肤科'},
        {pic:require('../../../public/images/doc_chat/Dow.png'),text:'耳鼻科'},
        {pic:require('../../../public/images/doc_chat/ZgB.png'),text:'眼科'},
        {pic:require('../../../public/images/doc_chat/uo.png'),text:'全部科室'}
      ],
      searchType: "请选择分类",
      searchTypeList: [
        { text: "医院", value: 0 },
        { text: "药品", value: 1 },
        { text: "科室", value: 2 },
        { text: "医生", value: 2 }
      ],
      searchVal: ""
    };
  },
  methods: {
    onClickLeft() {
      this.back(this);
    },
      onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>
<style scoped>
.van-nav-bar .van-icon {
  color: #000;
}
.search{
  background:#fff;
}
.className{
  background:#fff;
  padding:.610687rem 0;
}
.van-image{
  width:2.320611rem;
}
.van-grid-item{
  font-size: .854962rem;
  color:#28354c;
  border-radius:.244275rem;
}
.van-grid-item__content{
  background: #f6f7f8;;
}
.select{
  margin-top:.610687rem;
  background:#fff;
}
.select .skill_tags{
  padding:.610687rem;
  display: flex;
  flex-wrap: wrap;
}
.select .skill_tags span{
  font-size: .854962rem;
  color:#83889a;
  line-height: .854962rem;
  background:#f5f6f6;
  padding:.305344rem  .610687rem;
  border-radius:.610687rem;
  margin-bottom:.610687rem;
  margin-right: 1.221374rem;
}
.select .ask{
  padding:.610687rem;
  display:flex;
  align-items: center;
  position: relative;
}
.select .ask img{
  width:3.236641rem;
  margin-right:1.221374rem;
  margin-top:-1.221374rem;
}
.select .ask h4{
  font-size: .977099rem;
  color:#28354c;
  font-weight: 400;
  margin-bottom: .48855rem;
}
.select .ask h4 span{
  font-size: .854962rem;
  line-height: 14px;
  background:#f88537;
  color:#fff;
  padding:0 .122137rem;
  border-radius: .244275rem;
}
.select .ask .times{
  font-size: .977099rem;
  color:#28354c;
}
.select .ask h5{
  color:#83889a;
  font-weight: 400;
  margin-top:.48855rem;
}
.select .ask h5 span{
  color: #ff5c53;
}
.select .ask .process{
  font-size: .854962rem;
  line-height: .854962rem;
  background: rgba(255,126,59,.08);
  color:#ff7e3b;
  border:1px solid #ff7e3b;
  border-radius: .610687rem;
  padding:.122137rem .610687rem;
  margin-top:.48855rem;
}
.select .ask .pos{
  display: block;
  font-size: .854962rem;
  line-height: .854962rem;
  color:#fff;
  background: linear-gradient(307deg,rgba(250,217,97,.38),#f76b1c);
  border-radius: .610687rem;
  padding: .366412rem;
  position: absolute;
  top: .610687rem;
  right: .610687rem;
}
.doc_details{
  border-top:1px solid #eee;
  padding:1.221374rem .916031rem;
  background:#fff;
  display: flex;
}
.doc_details .left img{
  width:2.931298rem;
  border-radius: 50%;
  margin-right:1.221374rem;
}
.doc_details .right .dname{
  font-size: 1.099237rem;
  font-weight: 600;
  color:#28354c;
}
.doc_details .right .dtype{
  font-size: .977099rem;
  font-weight: 400;
}
.doc_details .right .hname{
  color:#28354c;
  margin:.610687rem 0;
}
.doc_details .right .htype{
  font-size: .732824rem;
  line-height:.732824rem;
  color:#f88537;
  border:1px solid #f88537;
  border-radius: .48855rem;
  padding:0 .244275rem;
}
.doc_details .right h4{
  color:#61687c;
  font-size: .977099rem;
  font-weight: 400;
}
.doc_details .right h4 span{
  font-weight: 700;
}
.doc_details .right .skill{
  color:#61687c;
  font-size: .977099rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.doc_details .right .bottom{
  display: flex;
  justify-content: space-between;
  margin-top:.610687rem;
}
.doc_details .right .bottom .money{
  font-size: .977099rem;
  font-weight: 700;
  color: #ff695c;
}
.doc_details .right .bottom .money span{
  color:#28354c;
}
</style>
