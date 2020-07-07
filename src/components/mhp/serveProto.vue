<template> 
    <div class="pwdLogin-container">
        <!-- 1.标题 -->
        <van-nav-bar title="快速登录/注册" left-arrow @click-left="onClickLeft" class="login-title" />
    </div>
</template>
<script>
export default{
    data() {
        return {
            
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    },
}
</script>
<style scoped>
    
</style>