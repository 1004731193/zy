<template>
  <div>
    <div class="title">
      <van-nav-bar title="在线导航" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <iframe
      :src="`https://m.amap.com/navi/?start=${pos}&dest=${cpos}&destName=${cname}&naviBy=car&key=5d67a03906f29f89e83779c660bfe15c`"
      class="container"
    ></iframe>
    <footer>
       <h2>医院地址： <i>{{address}}</i></h2>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
       pos : "",
       cpos : "",
       cname : "",
       address : ""
    };
  },
  methods: {
    onClickLeft() {
      this.back(this);
    }
  },
  created() {
     var obj = this.$store.getters.getOrderStep;
     this.pos = obj.position;
     this.cpos = obj.cityLocation;
     this.cname = this.$store.getters.getHospitalDetail.hospital;
     this.address = this.$store.getters.getHospitalDetail.address ? this.$store.getters.getHospitalDetail.address : this.$store.getters.getHospitalDetail.regaddress;
   //   this.cname = obj.
  }
};
</script>

<style scoped>
.container {
  /* border: 1px solid #000; */
  border: 0;
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  padding: 0 0.5rem;
  border-radius: 0.625rem;
}
</style>
