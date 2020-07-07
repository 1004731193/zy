import config from "../js/config"

var doctors = {
    prefix : "hospitals",
    // 获取医院所有简介数据
    getDoctors(pro,dep){
        return new Promise((resolve,reject)=>{
            (async ()=>{
                try {
                    // var result = await config.axios.get(this.prefix + "/hospitalsAll");    
                    // $.getJSON(`http://zhouxunwang.cn/data/?id=113&key=Vr3H/dNkS47+iJyI8Ik2R2nCPwTgsJeZ/pxz7P4&name=${name}`,json=>{
                    //     resolve(json.result);
                    // })
                    $.ajax({
                        url : `https://api.jisuapi.com/hospital/get?province=${pro}&department=${dep}&start=0&num=30&appkey=90b47e2a6f6c02d3`,
                        type : "GET",
                        dataType : "jsonp",
                        success: data=>{  
                            resolve(data.result.list);
                        }
                    });
                } catch (error) {
                    reject(error);
                }
            })()
        });
    }
}

export default doctors;