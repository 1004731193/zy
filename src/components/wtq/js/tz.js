// 跳转---传个参数  this

// 返回上一页------go(-1)--bug???
   var goback = (go)=>{
      if (window.history.length <= 1) {
        go.$router.push({path:'/'});
          return false;
      } else {
        go.$router.go(-1);
      }
    };
export default goback;