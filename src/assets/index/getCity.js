var getCity = function (callback) {
   //初始化地图时，若center属性缺省，地图默认定位到用户所在城市的中心
   var map = new AMap.Map('container', {
      resizeEnable: true
   });
   var cityCode = map.getAdcode();
   callback(cityCode);
}

export default getCity;
