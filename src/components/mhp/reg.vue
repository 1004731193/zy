<template>
    <div class="reg-container">
        <!-- 1.标题 -->
        <div>
            <van-nav-bar title="注册" left-arrow @click-left="onClickLeft"  fixed/>
        </div>
        <!-- 2.用户名和密码密码输入框 -->
        <van-cell-group class="user">
            <van-field
                v-model="username"
                label="用户名"
                placeholder="请输入用户名"
            />
            <van-field
                v-model="upwd"
                label="密码"
                placeholder="请输入手机号"
                error-message="手机号格式错误"
            />
        </van-cell-group>
        <!-- 3.确定按钮 -->
        <div>
            <van-button type="info" class="okBtn">注册</van-button>
        </div>
        <!-- 4.底部小图标 -->

    </div>    
</template>
<script>
import config from "../../assets/js/config.js" 
export default {
    data() {
        return {
            username:"",
            upwd:""
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        okBtn(){
            
        }
    },
}
</script>
<style scoped>
    .user{
        margin-top: 2.748092rem;
    }
    .okBtn{
        width:95%;
        border-radius: 1.416031rem;
        margin: 1.221374rem 2.5%;
    }
</style>
