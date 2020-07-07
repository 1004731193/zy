<template> 
    <div class="pwdLogin-container">    
        <!-- 1.标题 -->
        <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" class="login-title" />
        <!-- 2.标题下面的说明 -->
        <div class="constructor">
            <p>专医账号可直接登录</p>
        </div>
        <!-- 3.用户名和密码框 -->
        <van-cell-group>
            <van-field
                v-model="username"
                left-icon="contact"
                placeholder="邮箱、手机号或用户名"
                @click-right-icon="$toast('question')"
            />        
            <van-field
                v-model="password"
                type="password"
                class="iconfont icon-mima"
                placeholder="密码"
            />
            <van-icon class="iconfont" class-prefix='icon' name='wang_light' />
        </van-cell-group>
        <!-- 4.登录按钮 -->
        <div>
            <van-button type="info" class="okBtn" @click="onLogin">登   录</van-button>
        </div>
        <!-- 5.版权说明 -->
        <div class="qlogin">
            <router-link  class="pwd" to="/login">快速登录/注册</router-link>
        </div>
        <div class="copy">
            <p>登录即表示您已阅读并同意协议</p>
            <div>               
                <router-link to="./moreCpt/serveProto.vue">《微医服务协议》</router-link>
                <router-link to="./moreCpt/lawProto.vue">《法律声明及隐私权政策》</router-link>
            </div>
        </div>
        <!-- 6.底部可关闭的广告 -->
        <ad></ad>
    </div>
</template>
<script>

import ad from "./moreCpt/ad"
import config from "../../assets/js/config.js"
export default{
    data() {
        return {
            username:"",
            password:"",
            url:"/user/login/"
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push("/")
        },
        onLogin(){
            if(this.username==""){
                this.$toast("用户名不能为空")
            }else if(this.password==""){
                this.$toast("密码不能为空")
            }else{
                // 发送ajax请求
                //http://127.0.0.1:5050/user/login/:phone&:upwd
                config.axios.get(`${this.url}${this.username}&${this.password}`)
                .then(res=>{
                    console.log(res)
                    if(res.data.code==-1){
                        this.$toast("登录账号或密码错误！")
                    }else if(res.data.code==1){
                        this.$router.push("/me");
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        },
    },
    components:{
        "ad":ad,
        "config":config
    },
}
</script>
<style scoped>
    .constructor{
        padding:.610687rem 1.221374rem;
        color: #83889a;
        font-size: .854962rem;
    }
    .okBtn{
        width:95%;
        border-radius: 1.416031rem;
        margin: 1.221374rem 2.5%;
    }
    .pwd{
        font-size: .932824rem;
        color:#2f7fe2;
        text-decoration-line: underline;
    }
    .copy{
        margin: 1.221374rem 5%;
    }
    .copy>p{
        font-size: .854962rem;
        color:#83889a;
        text-align: center;
        margin-bottom: .610687rem;
    }
    .copy>div>a{
        font-size: .732824rem;
        color:#2f7fe2;
    }
    .copy>div{
        margin:0 15%;
    }
    .qlogin{
        text-align: center;
    }
</style>