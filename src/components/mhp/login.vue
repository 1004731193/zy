<template>
    <div class="login-container">
        <!-- 1.标题 -->
        <van-nav-bar title="快速登录/注册" left-arrow @click-left="onClickLeft" class="login-title" />
        <!-- 2.手机号输入框 -->
        <van-cell-group>
            <van-field class="phone-input"
                v-model="username"
                clearable
                left-icon="user-o"
                :label="code"
                right-icon="arrow-down"
                placeholder="用于接收预约成功短信，请谨慎填写"
                style="margin-bottom: 0.821374rem"
                @click-right-icon="showPopup"
            />
            <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '20%' }"
            />
            <van-action-sheet
                v-model="show"
                :actions="actions"
                cancel-text="取消"
                @select="onSelect"
                @cancel="onCancel"
            />
        </van-cell-group>
        <!-- 3.验证码输入框 -->
        <van-cell-group class="captcha">
            <van-field
            v-model="captcha"
            type="password"
            left-icon="bookmark-o"       
            placeholder="验证码"
            style="width:60%"
            >
            </van-field>
            <van-button type="info" class="sedCaptcha">发送验证码</van-button>
        </van-cell-group>
        <!-- 4.确定按钮 -->
        <div>
            <van-button type="info" class="okBtn">确定</van-button>
        </div>
        <!-- 5.密码登录链接 -->
        <div>
            <router-link  class="pwd" to="/pwdLogin">密码登录</router-link>
            <!-- <a href="#/pwdLogin">lal</a> -->
        </div>
        <!-- 6.版权信息 -->
        <div class="copy">
            <p>未注册手机验证后将自动进行注册，点击“确定”即表示您已阅读并同意以下协议</p>
            <div>               
                <router-link to="./moreCpt/serveProto.vue">《微医服务协议》</router-link>
                <router-link to="./moreCpt/lawProto.vue">《法律声明及隐私权政策》</router-link>
            </div>
        </div>
        <!-- 7.底部小图标 -->
        <ad @goIndex="goIndex"></ad>
    </div>
</template>
<script>
import ad from "./moreCpt/ad.vue" 
import pwdLogin from "./pwdLogin" 
import lawProto from "./lawProto.vue" 
import serveProto from "./serveProto.vue" 
export default{
    data() {
        return {
            username:"",
            captcha:"",
            show:false,
            code:"+86",
            showAddr:false,
            actions:[
                {name:"中国香港",subname:"+852"},
                {name:"中国澳门",subname:"+853"},
                {name:"中国大陆",subname:"+86"},
            ],           
        }
    },
    methods: {
        showPopup(){
            this.show=true;
        },
        onClickLeft(){
            this.$router.push("/");
        },
        onCancel(){
            this.show = false;
        },
        onSelect(item){
            this.show=false;
            this.code=item.subname;
        },
        goIndex(index){
            this.$emit("toggleFrame",index);
        }
    },
    components:{
        "ad":ad,
        "pwdLogin":pwdLogin,
        "serveProto":serveProto,
        "lawProto":lawProto,
    }
}
</script>
<style scoped>
    .phone-input{
        height:3.053435rem;
        background: #fff;
        margin-top: 1.532061rem;
        border-top: .061069rem solid #eee;
        line-height: 1.853435rem;
    }
    .login-title{
        font-size: 1.099237rem !important;
    }
    .captcha{
        display: flex;
        justify-content: space-between;
    }
    .sedCaptcha{
        height:2.042748rem;
        line-height: 2.042748rem;
        margin: .310687rem .610687rem 0 0;
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
        margin-left:43%;
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
</style>