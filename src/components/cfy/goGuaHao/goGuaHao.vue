<template>
  <div class="goGuaHao">
    <div class="title">
      <van-nav-bar title="预约挂号" left-arrow fixed @click-left="goBack"/>
    </div>
    <div class="search">
      <van-row>
        <van-col span="20">
          <van-search placeholder="请输入搜索关键词" v-model="searchVal"/>
        </van-col>
        <van-col span="4">
          <van-dropdown-menu>
            <van-dropdown-item v-model="searchType" :options="searchList" @change="change"/>
          </van-dropdown-menu>
        </van-col>
      </van-row>
    </div>
    <div class="we-grid">
      <van-row>
        <van-col span="6">
          <img src="../../../../public/images/index/去挂号/grid-1.png">
          <p>三甲体检</p>
        </van-col>
        <van-col span="6">
          <img src="../../../../public/images/index/去挂号/grid-2.png">
          <p>报告解读</p>
        </van-col>
        <van-col span="6">
          <img src="../../../../public/images/index/去挂号/grid-3.png">
          <p>看病助手</p>
        </van-col>
        <van-col span="6">
          <img src="../../../../public/images/index/去挂号/grid-4.png">
          <p>医院排行榜</p>
        </van-col>
      </van-row>
    </div>
    <div class="choose">
      <van-dropdown-menu>
        <van-dropdown-item v-model="choose1" :options="choose1_list"/>
        <van-dropdown-item title="筛选" ref="item">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="医院类型" name="1">
              <van-row>
                <van-col span="6">
                  <van-tag round>综合医院</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>眼科医院</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>儿童医院</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>妇产科医院</van-tag>
                </van-col>
              </van-row>
              <br>
              <van-row>
                <van-col span="6">
                  <van-tag round>肿瘤医院</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>耳鼻喉科医院</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>骨科医院</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>口腔医院</van-tag>
                </van-col>
              </van-row>
            </van-collapse-item>
            <van-collapse-item title="医院等级" name="2">
              <van-row>
                <van-col span="6">
                  <van-tag round>三甲医院</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>三级医院</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>一级医院</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>对外专科</van-tag>
                </van-col>
              </van-row>
              <br>
              <van-row>
                <van-col span="6">
                  <van-tag round>对外综合</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>其他</van-tag>
                </van-col>
                <van-col span="6">
                  <van-tag round>二级医院</van-tag>
                </van-col>
              </van-row>
            </van-collapse-item>
          </van-collapse>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="step">
      <van-steps :active="stepActive">
        <van-step>选择医院</van-step>
        <van-step>选择科室</van-step>
        <van-step>选择医生</van-step>
        <van-step>提交预约</van-step>
      </van-steps>
    </div>
    <div class="before">
      <van-row>
        <van-col span="5">
          <img src="../../../../public/images/index/去挂号/before.png">
        </van-col>
        <van-col span="19" class="content">
          <van-row class="left">
            <van-col span="19">
              <h4>
                诊前咨询
                <van-tag type="warning">快</van-tag>
                <van-tag type="success">安心</van-tag>
              </h4>
              <p>3分钟找到三甲专家 / 提前了解病情</p>
              <p>避免挂错科室 / 节省就医成本</p>
              <div class="bottom">
                已有
                <span>366.4</span>万名患者在
                <span>挂号前</span>选择诊前咨询
              </div>
            </van-col>
            <van-col span="5" class="right">
              <p>
                ￥
                <i>9</i>起
              </p>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="hlist">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item,i) of hospitalsList" :key="i">
        <hitem :item="item"></hitem>
        <div class="carousel" v-show="i >= 3 && i%3==0">
          <van-swipe :autoplay="parseInt(1500 + Math.random() * 3000)" indicator-color="white">
            <van-swipe-item>
              <img src="../../../../public/images/qgh/carousel1.png">
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../../../public/images/qgh/carousel2.png">
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../../../public/images/qgh/carousel3.png">
            </van-swipe-item>
          </van-swipe>
        </div>
      </van-cell>
    </van-list>
    </div>
  </div>
</template>

<script>
import hitem from "./h-item.vue";
import axios_hospitals from "../../../assets/apis/hospital";
import getMyPosition from "../../../assets/index/getMyPosition.js";
import getCity from "../../../assets/index/getCity.js";
export default {
  data() {
    return {
      searchVal: "",
      searchType: 0,
      searchList: [
        { text: "天津", value: 0 },
        { text: "河北", value: 1 },
        { text: "辽宁", value: 2 },
        { text: "山西", value: 3 },
        { text: "上海", value: 4 },
        { text: "黑龙江", value: 5 },
        { text: "北京", value: 6 },
      ],
      choose1: 0,
      choose2: 0,
      choose1_list: [
        { text: "综合排序", value: 0 },
        { text: "离我最近", value: 1 },
        { text: "患者评价数", value: 2 }
      ],
      activeNames: ["1"],
      stepActive: 0,
      hospitalsList: [],
      position: "",
      cityCode: 0,
      htype : "北京",
      pno : 0,
      loading : false,
      finished:false
    };
  },
  components: {
    hitem: hitem
  },
  methods : {
	  change(value){
      //console.log(value);
		  for(var item of this.searchList){
			  if(item.value == value){
          //console.log(item.text);
          this.htype = item.text;
          this.$store.commit("setOrderStep",{name : "city" , val : this.htype});
				  axios_hospitals.getHostpitalAll(this.htype).then(res=>{
					  console.log(res);
					  this.hospitalsList = res;
				  });
			  }
		  }
    },
    goBack(){
      this.back(this);
    },
    onLoad(){
      (async ()=>{
        this.pno++;
        var result = await axios_hospitals.getHostpitalAll(this.htype,this.pno);
        this.hospitalsList = this.hospitalsList.concat(result);
        this.loading = false;

        if(this.hospitalsList.length >= 90){
          this.finished = true;
        }
      })()
    }
  },
  created() {
	 //加载医院数据
    (async () => {
      try {
        //获取当前经纬度
        getMyPosition(result => {
          this.position = result.lng + "," + result.lat;
          this.$store.commit("setOrderStep",{name : "position",val : this.position});
          console.log(this.position);
        });
        getCity(cityCode => {
          this.cityCode = cityCode;
          this.$store.commit("setOrderStep",{name : "cityCode" ,val : cityCode})
          console.log(this.cityCode);
          switch (this.cityCode) {
            case "110000": {
              for (var item of this.searchList) {
                if (item.text == "北京") {
                    this.searchType = item.value;
                    this.htype = "北京";
                    this.$store.commit("setOrderStep",{name : "city" , val : this.htype});
                }
              }
              break;
            }
            case "120000": {
              for (var item of this.searchList) {
                if (item.text == "天津") {
                    this.searchType = item.value;
                    this.htype = "天津";
                    this.$store.commit("setOrderStep",{name : "city" , val : this.htype});
                }
              }
              break;
            }
          }
		  });
		  var result = await axios_hospitals.getHostpitalAll(this.htype);
		  this.hospitalsList = result;
        console.log(this.hospitalsList);
      } catch (error) {
        console.error(error);
      }
    })();
  }
};
</script>

<style scoped>
.title {
  height: 46px;
}
.van-search {
  padding-top: 0.4rem;
  padding-bottom: 0.5rem;
}

.search {
  padding-right: 0.625rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.we-grid {
  text-align: center;
  padding: 0.7rem 0;
  background: #fff;
}

.we-grid img {
  width: 3.2875rem;
}

.we-grid p {
  font-size: 0.75rem;
  color: #666;
}

.choose {
  margin-top: 0.5rem;
}

.before img {
  width: 100%;
}
.before {
  box-sizing: border-box;
  padding: 1rem 0.625rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0.9375rem;
}

.content .left h4 {
  margin-bottom: 0.2rem;
}

.content .left p {
  font-size: 0.625rem;
  color: #666;
  margin: 0.1rem 0;
}
.content .left .bottom {
  margin-top: 0.625rem;
  font-size: 0.625rem;
  color: #888;
}

.content .left div > span {
  color: #ff695c;
  font-weight: 600;
}

.content .right > p {
  color: #ff695c;
  font-size: 1rem;
  line-height: 2.5;
}

.content .right > p > i {
  font-style: normal;
  font-size: 1.8rem;
  font-weight: 600;
}

.van-tag {
  padding: 0.04rem 0.3125rem;
  margin-left: 0.3125rem;
}

.carousel img {
  width: 100%;
}
</style>
