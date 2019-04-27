<template>
    <div class="myshop-wrap">
        <Lowest></Lowest>
        <Header></Header>
        <Markshopping></Markshopping>
        
    </div>
</template>
<script>
import Lowest from "./Index/lowest"
import Markshopping from "./Index/Marketshopping"
import Header from "./Index/header"

export default {
    components: {
        Lowest,Markshopping,Header
    }
}
</script>
<style lang="less" scoped>

</style>
