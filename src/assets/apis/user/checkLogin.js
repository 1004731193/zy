import axios from "axios";

var checkLogin = ()=>{
   return new Promise((resolve,reject)=>{
      (async ()=>{
         try {
            var result = await axios.get("http://127.0.0.1:5050/user/islogin");
            console.log(result.data.code);
            if(result.data.code == -1){
               sessionStorage.removeItem("userMsg");
               resolve(false);
            }else{
               resolve(true);
            }   
         } catch (error) {
            reject(error);
         }
      })()
   });
}

export default checkLogin;