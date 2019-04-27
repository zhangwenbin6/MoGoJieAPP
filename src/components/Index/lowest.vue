<template>
    <div class="lowest-wrap">
        <div 
            class="lowest-div"
            v-for="(value,index) in FooterList"
            :key="index"
        >
            <router-link :to="value.routerMap" class="lowest-test">{{ value.testone }}</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            FooterList:[
                {
                    testone:"首页",
                    routerMap:"/"
                },
                {
                    testone:"商城",
                    routerMap:"/Market"
                },
                {
                    testone:"直播",
                    routerMap:"/Live"
                },
                {
                    testone:"我",
                    routerMap:"/Myshop"
                },
                
            ]
        }
    }
    
}
</script>
<style lang="less" scoped>
.lowest-wrap{
    width: 100%;
    height: 0.98rem;
    display: flex;
    position: fixed;
    bottom: 0;
    background: #fff;
    z-index: 999;
    justify-content: space-around;
}
.lowest-div{
    width: 25%;
    height: 100%;
    display: flex;
    font-size: 0.32rem;
    justify-content: center;
    align-items: center;
    
}
.lowest-test{
color: #666;
}
.router-link-exact-active{
    color: red;
}

</style>
