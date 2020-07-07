var shuaxin = (cpos)=>{
   return new Promise( (resolve,reject)=>{
      $.ajax({
         url : `https://api.jisuapi.com/weather/query?appkey=90b47e2a6f6c02d3&city=${cpos}`,
         dataType : "jsonp",
         type : "GET",
         success : res=>{
            console.log(res.result);
            resolve(res.result);
         },
         error : err=>{
            reject();
         }
      })
   } )
   
}

export default shuaxin;