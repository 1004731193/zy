<template>
    <van-col class="order-item" span="6">
        <div class="order-img">
            <img :src="item.path" alt="">
        </div>
        <span>{{item.text}}</span>  
    </van-col>
</template>
<script>
export default {
    props:["item"]
}
</script>
<style scoped>
    .order-item{
        padding:20px 0;
        font-size: .732824rem;
        color:#83889a;
    }
    .order-img>img{
        width: 2.015267rem;
        height: 2.015267rem;
    }
</style>