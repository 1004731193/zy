<template>
    <div class="item">
        <van-row type="flex" align="center" justify="space-between">
            <van-col span="16">
                <div class="item-title">
                    <h4>{{item.title}}</h4>
                    <p>{{item.subtitle}}</p>
                </div>
            </van-col>
            <van-col span="8">
                <img :src="item.pic">
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    props : ["item"],
    data(){
        return{
           
        }
    }
}
</script>

<style scoped>
    .item {
        padding: .610687rem 0;
        border-bottom: 1px solid #eee;
    }

    .item-title h4{
        margin-bottom: .305344rem;
        font-size: 1.099237rem;
    }

    .item-title p{
        color: #888;
        font-size: .854962rem;
    }

    .item img{
        width: 100%;
        border-radius: .610687rem;
    }
</style>

