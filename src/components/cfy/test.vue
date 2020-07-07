<template>
    <h1>测试axios跨域 {{test}}</h1>
</template>

<script>
// http://localhost:8081/localhost/#/test
export default {
    data(){
        return{
            test : {}
        }
    },
    created(){
        this.axios.get("api/weather/query",{params : {appkey : "90b47e2a6f6c02d3" , city : "北京"}}).then(res=>{
            this.test = res;
            console.log(res);
        }).catch(err=>{
            console.log(err);
        });
    }
}
</script>

<style scoped>

</style>
