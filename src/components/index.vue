<template>
    <div class="warp">
        <Header></Header>
        <Swiper></Swiper>
        <Res></Res>
        <Content></Content>
        <RedPerson></RedPerson>
        <Lowest></Lowest>
    </div>

</template>

<script>
    import Header from "./Index/header"
    import Swiper from "./Index/swiper"
    import Res from "./Index/res"
    import Content from "./Index/content"
    import RedPerson from "./Index/redPerson"
    import Lowest from "./Index/lowest"
    export default {
        components:{
            Header,Swiper,Res,Content,RedPerson,Lowest
        }
    
}
</script>

<style lang="less" scoped>

</style>
