<template>
<!-- 主题 -->
    <div class="login-wrap">
        <!-- 标题 -->
        <div class="login-title">
            <p>登录</p>
        </div>
        <!-- 微信登录 -->
        <div class="login-weicap">
            <div class="login-weicap-smoll">
                <div class="login-weicap-img">
                    <img src="../../assets/imges/170831_3ffghafjcj6ljbbhl6949aheldkd7_94x76.png" alt="">
                </div>
                <span>微信登录</span>
            </div>
        </div>
        <div class="login-other">——</div>
        <!-- 其他用户登录 -->
        <div class="login-there">
            <h3>其他用户登录</h3>
            <!-- QQ用户登录 -->
            <div class="login-QQ-big">
            <div 
                class="login-QQ"
                v-for="(value,index) in QQList"
                :key="index"
            >
                <div class="login-QQ-img">
                    <img :src="value.imgUrl">
                </div>
                <span>{{ value.QQMessage }}</span>
            </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Canimg1 from "../../assets/imges/170831_68b918b6ikh668e8gibeg48bk82l3_90x90.png"
import Canimg2 from "../../assets/imges/170831_1078gd17460490lak5g7edbhah17i_90x90.png"
import Canimg3 from "../../assets/imges/170831_136567k82ideakd452d8db8ca27ak_90x90.png"
export default {
    data () {
        return {
            QQList:[
                {
                    QQMessage:"QQ登录",
                    imgUrl:Canimg1
                },
                {
                    QQMessage:"免密登录",
                    imgUrl:Canimg2
                },
                {
                    QQMessage:"账号登录",
                    imgUrl:Canimg3
                },
                
            ]
        }
    }
    
}
</script>
<style lang="less" scoped>
.login-wrap{
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
}
.login-title{
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.56rem;    
}
.login-weicap{
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-weicap-smoll{
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: rgb(9, 187, 7);
    border-radius: 1rem;
    font-size: 0.36rem;
    color: #fff;
    margin: 0 0.3rem;
    justify-content:center;  
}
.login-weicap-img{
    width: 0.45rem;
    height: 0.4rem;
    display: flex; 
}
.login-weicap-img img{
    width: 100%;
    height: 100%;
}
.login-weicap-smoll span{
    width: 1.8rem;
    height: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
}
.login-there{
    width: 100%;
    height: 40%;  
    display: flex;
    margin-top: 1.8rem;   
    flex-direction: column;
}
.login-there h3{
    height: 0.5rem;
    width: 100%;
    display: flex;
    font-size: 0.3rem;
    font-weight: 400;
    color: #999;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}
.login-QQ-big{
    width: 100%;
    height: 2.4rem;
    display: flex;
    justify-content: space-between;
    
}
.login-QQ{
    width: 33%;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.login-QQ-img{
    width: 0.88rem;
    height: 0.88rem;
    display: flex;
}
.login-QQ-img img{
    width: 100%;
    height: 100%;
}
.login-QQ span{
    width: 100%;
    height: 0.6rem;
    display: flex;
    font-size: .26rem;
    justify-content: center;
    align-items: center;
}
.login-other{
    width: 100%;
    display: flex;
    position: absolute;
    margin-top: 6rem;
    justify-content: center;
    font-size: 0.3rem;
    color: #bbb;
}
</style>
