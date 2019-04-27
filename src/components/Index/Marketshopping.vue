<template>
    <div class="Shopping-wrap">
        <!-- 顶部图片 -->
        <div class="Shopping-big">
        <div 
            class="Shopping-smoll"
            v-for="(value,index) in ShopList"
                :key="index"
        >
            <img :src="value.ImgUrl">
            <span class="Shopping-span">{{ value.SmollMessage }}</span>
        </div>
        </div>

        <!-- 中间部分循环 -->
        <div class="shopping-footer">
            <div 
                class="shopping-img"
                v-for="(value,index) in ShopItem"
                :key="index"
            >
                <div class="shoppong-img-big">
                    <img :src="value.ImgUrl">
                </div>
                <div class="shopping-img-test">
                    <p>{{ value.BigMessage }}</p>
                </div>
            </div>
        </div>

        <!-- 中间部分图片 -->
        <div class="my-footer-img">
            <p>热门精选 | 解锁时髦精冬日穿搭LOOL→</p>
            <img src="../../assets/imges/jiantou_shang.png">
            
        </div>
        <!-- 轮播图 -->
    <div class="my-footer-swiper">
    <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-1215px, 0px, 0px);">
        <div class="swiper-slide" data-swiper-slide-index="0" style="width: 105px; margin-right: 30px;">
            <div class="swiper-one">
                <img src="../../assets/imges/181119_448l5a524ij0da2hh7hld7e8g09jl_226x302.jpg" alt="">
            </div>
            <div class="swiper-two">
                <span>冬日水乳合集</span>
                <p>补水保湿爆好用</p>
            </div>
        </div>
        <div class="swiper-slide" data-swiper-slide-index="1" style="width: 105px; margin-right: 30px;">
            <div class="swiper-one">
                <img src="../../assets/imges/181112_7clgg62ge19g1f7fh73a7j4066hel_226x302.jpg" alt="">
            </div>
            <div class="swiper-two">
                <span>超火内搭来袭</span>
                <p>万能搭配0出错</p>
            </div>
        </div>
        <div class="swiper-slide" data-swiper-slide-index="2" style="width: 105px; margin-right: 30px;">
            <div class="swiper-one">
                <img src="../../assets/imges/181023_4galh2lb6c5ccl7hkcgkajcde6703_226x302.png" alt="">
            </div>
            <div class="swiper-two">
                <span>温暖宅家必备</span>
                <p>软绒睡衣助你远离...</p>
            </div>
        </div>
        <div class="swiper-slide" data-swiper-slide-index="3" style="width: 105px; margin-right: 30px;">
            <div class="swiper-one">
                <img src="../../assets/imges/181112_5d19d78idg930bd8k733008ea65li_226x302.jpg" alt="">
            </div>
            <div class="swiper-two">
                <span>棉服の保暖计</span>
                <p>冬日衣橱“狠角色”</p>
            </div>
        </div>
        <div class="swiper-slide" data-swiper-slide-index="4" style="width: 105px; margin-right: 30px;">
            <div class="swiper-one">
                <img src="../../assets/imges/181022_48825ei6kl6c9jcgil3b4fdg9l48j_226x302.jpg" alt="">
            </div>
            <div class="swiper-two">
                <span>网红穿搭种草</span>
                <p>跟着穿吸晴max</p>
            </div>
        </div>
        <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="5" style="width: 105px; margin-right: 30px;">
            <div class="swiper-one">
                <img src="../../assets/imges/180920_6de9348e93bclh879279132g5b536_226x302.png" alt="">
            </div>
            <div class="swiper-two">
                <span></span>
                <p></p>
            </div>
        </div>
        
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span></div>
    <!-- Add Arrows -->
    
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    </div>
    <!-- 流行元素 -->
    <div class="Liuxing">
        <h2>流行元素</h2>
        <div class="Yuansu">
            <div 
                class="Yuansu-one"
                v-for="(value,index) in YuansuList"
                :key="index"
            >
                <p>{{ value.YuansuMessage }}</p> 
                <div class="Yuansu-img">
                    <img :src="value.ImgUrl">
                </div>
            </div>
            

        </div>
    </div>

    <!-- 猜你喜欢 -->
    <div class="Gess">
        <div class="Gess-top">
            <img src="../../assets/imges/180904_79g7dd4id14ii77j2hd068li89i2i_2154x222.png_1200x9999.v1c7E.81.webp" alt="">
        </div>

        <div class="Gess-footer">
            <div 
                class="footer-test"
                v-for="(value,index) in GessList"
                :key="index"
            >
                <div class="footer-header">
                    <img :src="value.ImgUrl" class="header-img">
                    <div class="footer-Ding">
                        <img :src="value.ImgUrl2">
                        <p>{{ value.PMessage }}</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span> {{ value.XiangMessage }} </span>
                    <div class="footer-center">
                        <span>{{ value.PriceMessage }}</span>
                        <a>{{ value.WhatMessage }}</a>
                        <div class="wuxing">
                            <img :src="value.ImgUrl3">
                        </div>
                    </div>
                    <p>{{ value.ShopMessage }}</p>
                </div>
            </div>
            
        </div>
    </div>
    

    </div>
</template>

<script>
import CanUrl from "../../assets/imges/180906_59915dl1f519a705f22j0ck20c23l_210x280.png"
import CanUrl2 from "../../assets/imges/190409_3i36a2042cjcj0a306e12l8238kee_165x165.jpg"
import CanUrl3 from "../../assets/imges/190329_2230c9c30j384ib0c95i37d5i76ee_165x165.jpg"
import CanUrl4 from "../../assets/imges/190329_28kh4lhf50i933b044a1h31g7a0df_165x165.jpg"
import CanUrl5 from "../../assets/imges/180827_636f0b71eb5kg1hce8a8fki471903_100x100.jpg_640x640.v1cAC.40.webp"
import CanUrl6 from "../../assets/imges/190114_78c90b0fk84ghedl0c477bgf1a7e9_160x120.png"
import CanUrl7 from "../../assets/imges/190114_6aac49jga3gj961a229h6lk7i5dcl_160x120.png"
import CanUrl8 from "../../assets/imges/180817_083acjhfla682h2df38gk7cl4gfb3_160x120.png"
import CanUrl9 from "../../assets/imges/190313_2h3g27l5343117le2fljggge8fb56_800x800.png"
import CanUrl10 from "../../assets/imges/190114_597bkc7e7fih0a3dkc66l865lb8ef_160x120.png"
import CanUrl11 from "../../assets/imges/181015_0dcfl4afd7d13ja5dh155l871f2hg_160x120.png"
import CanUrl12 from "../../assets/imges/180817_0l09kb32c9idl89bd1k4g4all9h36_160x120.png"
import CanUrl13 from "../../assets/imges/180817_2bb5edf60eg8949hg34led25flk4k_160x120.png"
import CanUrl14 from "../../assets/imges/180817_64ld6ji70j71dh849l7j2cdl0cadb_160x120.png"
import CanUrl15 from "../../assets/imges/181224_5ijk07i36gh78gce9ba205d4jgf20_640x900.jpg_640x854.v1cAC.40.webp"
import CanUrl16 from "../../assets/imges/下载 (10).png"
import CanUrl17 from "../../assets/imges/shoucang.png"
import CanUrl18 from "../../assets/imges/190304_0754bbg97b8b7bj4c1bffldfbbac3_642x845.jpg_640x854.v1cAC.40.webp"
import CanUrl19 from "../../assets/imges/180419_4f01f4991lkefi095hclhahl1487d_640x960.jpg_640x854.v1cAC.40.webp"
import CanUrl20 from "../../assets/imges/190330_261caeial001k713031k8j58kk917_640x960.jpg_640x854.v1cAC.40.webp"
export default {
    data () {
        return {
    ShopList:[
        {
            ImgUrl:CanUrl,
            SmollMessage:"风尚快抢"
        },
        {
            ImgUrl:CanUrl2,
            SmollMessage:"热销榜单"
        },
        {
            ImgUrl:CanUrl3,
            SmollMessage:"好货精选"
        },
        {
            ImgUrl:CanUrl4,
            SmollMessage:"新品快抢"
        }
    ],
    ShopItem:[
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
        {
            ImgUrl:CanUrl5,
            BigMessage:"女装"
        },
    ],
    YuansuList:[
        {
            YuansuMessage:"省心两件套",
            ImgUrl:CanUrl6
        },
        {
            YuansuMessage:"牛仔裤搭配",
            ImgUrl:CanUrl7
        },
        {
            YuansuMessage:"省时尚妈咪套装",
            ImgUrl:CanUrl8
        },
        {
            YuansuMessage:"百搭晴雨伞",
            ImgUrl:CanUrl9
        },
        {
            YuansuMessage:"懒人三件套",
            ImgUrl:CanUrl10
        },
        {
            YuansuMessage:"阔腿裤搭配",
            ImgUrl:CanUrl11
        },
        {
            YuansuMessage:"美背文胸",
            ImgUrl:CanUrl12
        },
        {
            YuansuMessage:"气质单鞋",
            ImgUrl:CanUrl13
        },
        {
            YuansuMessage:"显瘦妈咪装",
            ImgUrl:CanUrl14
        },
    ],
    GessList:[
        {
            ImgUrl:CanUrl15,
            ImgUrl2:CanUrl16,
            PMessage:"已售673件",
            XiangMessage:"小甜美经典破店圆领开衫长...",
            PriceMessage:"￥64.4",
            ImgUrl3:CanUrl17,
            ShopMessage:"立即购买",
            WhatMessage:"2173"
        },
        {
            ImgUrl:CanUrl18,
            ImgUrl2:CanUrl16,
            PMessage:"已售276件",
            XiangMessage:"2019春夏新款黑色长裤哈伦...",
            PriceMessage:"￥79",
            ImgUrl3:CanUrl17,
            ShopMessage:"立即购买",
            WhatMessage:"426"
        },
        {
            ImgUrl:CanUrl19,
            ImgUrl2:CanUrl16,
            PMessage:"已售454件",
            XiangMessage:"高腰小脚裤 新款韩版高腰破...",
            PriceMessage:"￥59",
            ImgUrl3:CanUrl17,
            ShopMessage:"立即购买",
            WhatMessage:"2855"
        },
        {
            ImgUrl:CanUrl20,
            ImgUrl2:CanUrl16,
            PMessage:"已售515件",
            XiangMessage:"2019春季新款宽松纯色...",
            PriceMessage:"￥26.9",
            ImgUrl3:CanUrl17,
            ShopMessage:"立即购买",
            WhatMessage:"1271"
        },
    ]

        }
    },
    
}
window.onload = function() {
    
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: false,
        autoplay:false,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
}
</script>


<style lang="less" scoped>
.Shopping-wrap{
    width: 100%;
    margin: 0;
}
.Shopping-big{
    height: 1.9rem;
    display: flex;
    margin-top: 0.1rem;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(255, 255, 255);
    max-width: 8rem;
    margin: 0 auto;
}
.Shopping-smoll{
    width: 1.65rem;
    height: 1.65rem;
    display: flex;
    border-radius: 0.06rem;
    position: relative;
    background-image: url("../../assets/imges/190329_11f33eb6dj9a70g2hk3lij2j13lac_166x166.jpg");
    background-size: cover;
}
.Shopping-smoll img{
    width: 100%;
    height: 100%;
    border-radius: 0.06rem;  
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.Shopping-span{
    width: 100%;
    height: 0.5rem;
    display: flex;
    font-size: 0.28rem;
    margin-top: 1.1rem;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: 700;
    position:absolute;
}
.shopping-footer{
    width: 100%;
    height: 4.3rem;
    border-bottom: 0.1rem solid #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 8rem;
    margin:  0 auto;
    
}
.shopping-img{
    width: 20%;
    height: 33.3%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.shoppong-img-big{
    width: 1rem;
    height: 1rem;
    display: flex;
}
.shoppong-img-big img{
    width: 100%;
    height: 100%;
}
.shopping-img-test{
    width: 100%;
    height: 0.4rem;
    display: flex;
    font-size: 0.25rem;
    justify-content: center;
    align-items: center;
}
.my-footer-img{
    width: 100%;
    height: 2rem;
    display: flex;
    background: url("../../assets/imges/181112_04h64bddba7932720jh8j025g9kk5_750x200.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
} 
.my-footer-img p{
    font-size: 0.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0.2rem;
    color: #fff;
    font-size: 0.32rem;
}
.my-footer-img img{
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    margin-top: 1.8rem;
    margin-left: 0.4rem;
}
.my-footer-swiper{
    width: 94%;
    height: 4.7rem;
    margin-top: 0.2rem; 
    margin: 0 auto;
    max-width: 8rem;
    margin: 0 auto;
}
.swiper-one{
    width: 2.26rem;
    height: 3.2rem;
    margin-top: 0.1rem;
}
.swiper-one img{
    height: 100%;
    width: 100%;
}
.swiper-two{
    width:2.26rem;
    height: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.1rem;
}
.swiper-two span{
    width: 100%;
    height: 50%;
    color: #333;
    font-size: 0.28rem;
    text-align: center;
    
}
.swiper-two p{
    width: 100%;
    height: 30%;
    color: #999;
    font-size: 0.24rem;
    text-align: center;
    margin-top: -0.1rem;
}
.Liuxing{
    width: 100%;
    height: 7.9rem;
    border-top: 0.1rem solid #f1f1f1;
    display: flex;
    flex-direction: column;
    max-width: 8rem;
    margin:  0 auto;
}
.Liuxing h2{
    width: 100%;
    height: 1rem;
    font-size: 0.34rem;
    display: flex;
    padding-left: 0.18rem;
    align-items: center;
    color: #666;
}
.Yuansu{
    width: 100%;
    height: 7.484rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.Yuansu-one{
    width: 31%;
    height: 31%;
    display: flex;
    flex-direction: column;
    border-radius: 0.05rem;
    background: #F3F3F3;
    align-items: center;
}
.Yuansu-one p{
    width: 100%;
    height: 0.7rem;
    font-size: 0.28rem;
    color: #333;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Yuansu-img{
    width: 1.6rem;
    height: 1.2rem;
}
.Yuansu-img img{
    width: 100%;
    height: 100%;
}
.Gess{
    width: 100%;
    height: 100%;
    background: rgba(239, 239, 239); 
    margin-top: 0.1rem;
    margin-bottom:1rem; 
    
}
.Gess-top{
    width: 100%;
    height: 1.1rem;
    display: flex;
    align-items: center;
    background: rgba(239, 239, 239);
}
.Gess-top img{
    width: 100%;
    height: 75%;
    display: flex;
}
.Gess-footer{
    width: 98%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 8rem;
}
.footer-test{
    width: 48.5%;
    height: 6.42rem;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.footer-header{
    width: 100%;
    height: 78%;
    display: flex;
    position: relative; 
}
.header-img{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius:0.08rem;
}
.footer-Ding{
    width: 40%;
    height: 0.4rem;
    display: flex;
    position: absolute;
    margin-top: 4.3rem;
    align-items: center;
    justify-content: center;
}
.footer-Ding img{
    width: 100%;
    height: 100%;
    position: absolute;
}
.footer-Ding p{
    z-index: 999;
    font-size: .2rem;
    color: white;
}
.footer-bottom{
    width: 100%;
    height: 22%;
    display: flex;
    flex-direction: column;
}
.footer-bottom span{
    width: 100%;
    height: 30%;
    display: flex;
    font-size: 0.23rem;
    align-items: center;
    color: rgb(51, 51, 51);
    margin-left: 0.1rem;
}
.footer-center{
    width: 100%;
    height: 30%;
    display: flex;
    font-size: 0.25rem;
    align-items: center;
}
.footer-center span{
    width: 44%;
    height: 100%;
    display: flex;
    font-size: 0.25rem;
    align-items: center;
    font-size: .3rem;
    font-weight: 700;
}
.footer-center a{
    width: 42%;
    height: 100%;
    display: flex;
    font-size: 0.24rem;
    color: #666;
    justify-content:flex-end;
    align-items: center;
}
.wuxing{
    width: 0.3rem;
    height: 0.3rem;
    display: flex;   
    align-items: center;
}
.wuxing img{
    width: 100%;
    height: 100%;
}
.footer-bottom p{
    border: none;
    width: 95%;
    height: 30%;
    color: #fff;
    display: flex;
    margin: 0 auto;
    border-radius: .06rem;
    font-size: .26rem;
    background-color: rgb(255, 87, 119);
    justify-content: center;
    align-items: center;
}
</style>
