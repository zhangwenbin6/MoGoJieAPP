
<template>
    <div class="view-wrap">
    <!-- 顶部广告 -->
    <div class="header-warp">
        <div class="header-top">
            <div class="header-top-left">
                <img src="@/assets/imges/下载 (3).png">
            </div>
        <div class="header-top-center">
            <div class="header-top-center-top">{{ topMessage }}</div>
        <div class="header-top-center-pgdn">
            <div class="header-left">
                <img src="@/assets/imges/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png" alt>
                <img src="@/assets/imges/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png" alt>
                <img src="@/assets/imges/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png" alt>
                <img src="@/assets/imges/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png" alt>
                <img src="@/assets/imges/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png" alt>
            </div>
            <div class="header-right">{{ headerRightMessage }}</div>
        </div>
        </div>
        <div class="openApp">
            <div class="openButton">{{ openMessage }}</div>
        </div>
        </div>
    </div>
    <!-- 顶部导航 -->
    <div class="view-dao">
        <div 
            class="View-test"
            v-for="(value,index) in ViewList" 
            :key="index"
            :class="{'active' : index === isActive }"
            @click="handleVideo(index)"
        >
            <span>{{ value.viewMessage }}</span>
        </div>
    </div>
    <!-- 中间内容循环 -->
    <div class="my-video">
        <div class="actor-info">
            <div class="actor-Tou">
                <img src="../../assets/imges/180603_80aj5e0f4jk04g30075f07b3akebb_400x400.jpg_100x100.jpg" alt="">
            </div>
            <div class="actor-name">
                美少女的店
            </div>
        </div>
        <div class="actor-bot">
            <div class="actor-img">
                <img src="../../assets/imges/181216_8blh37ihgag1ad7agciei734hi4gk_1242x842.jpg_750x500.jpg" alt="">
            </div>
        </div>
        <div class="actor-text">
            <div class="my-test-top">
                <div class="my-top-test">
                    <div class="my-Hongdian"></div>
                    <p>直播中 | 12.5w</p>
                </div>
            </div>
            <div class="My-title">
                <span>老板不在，主播乱卖</span>
            </div>
            <div class="My-boter">
                <div class="My-boter-left">
                    <div class="My-boter-one">
                        <p>￥19.9</p>
                        <img src="../../assets/imges/190411_4gcjk8da781l210hkk4jh0jl74ii7_850x850.jpg_100x100.jpg" alt="">
                    </div>
                    <div class="My-boter-one">
                        <p>￥19.9</p>
                        <img src="../../assets/imges/190411_4gcjk8da781l210hkk4jh0jl74ii7_850x850.jpg_100x100.jpg" alt="">
                    </div>
                    <div class="My-boter-one">
                        <p>￥19.9</p>
                        <img src="../../assets/imges/190411_4gcjk8da781l210hkk4jh0jl74ii7_850x850.jpg_100x100.jpg" alt="">
                    </div>
                    
                </div>
                <div class="my-Pinglun">
                    <div class="my-Pinglun-name">
                        <div class="my-pinglun-touxiang">
                            <img src="../../assets/imges/170920_4jgkg4ali1g4kglb3bjcaha18k9ld_640x640.jpg_100x100.jpg" alt="">
                        </div>
                        <div class="my-pinglun-test">111</div>
                    </div>
                    <div class="my-Pinglun-name">
                        <div class="my-pinglun-touxiang">
                            <img src="../../assets/imges/180905_37562l98ibfc80a53ad33clej867j_132x132.jpg_100x100.jpg" alt="">
                        </div>
                        <div class="my-pinglun-test">质量怎么</div>
                    </div>
                    <div class="my-Pinglun-name">
                        <div class="my-pinglun-touxiang">
                            <img src="../../assets/imges/170809_374ab57adklej75heha85b2gbic7c_640x640.jpg_100x100.jpg" alt="">
                        </div>
                        <div class="my-pinglun-test">福利吗</div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    <div class="my-video">
        <div class="actor-info">
            <div class="actor-Tou">
                <img src="../../assets/imges/180603_80aj5e0f4jk04g30075f07b3akebb_400x400.jpg_100x100.jpg" alt="">
            </div>
            <div class="actor-name">
                美少女的店
            </div>
        </div>
        <div class="actor-bot">
            <div class="actor-img">
                <img src="../../assets/imges/181216_8blh37ihgag1ad7agciei734hi4gk_1242x842.jpg_750x500.jpg" alt="">
            </div>
        </div>
        <div class="actor-text">
            <div class="my-test-top">
                <div class="my-top-test">
                    <div class="my-Hongdian"></div>
                    <p>直播中 | 12.5w</p>
                </div>
            </div>
            <div class="My-title">
                <span>老板不在，主播乱卖</span>
            </div>
            <div class="My-boter">
                <div class="My-boter-left">
                    <div class="My-boter-one">
                        <p>￥19.9</p>
                        <img src="../../assets/imges/190411_4gcjk8da781l210hkk4jh0jl74ii7_850x850.jpg_100x100.jpg" alt="">
                    </div>
                    <div class="My-boter-one">
                        <p>￥19.9</p>
                        <img src="../../assets/imges/190411_4gcjk8da781l210hkk4jh0jl74ii7_850x850.jpg_100x100.jpg" alt="">
                    </div>
                    <div class="My-boter-one">
                        <p>￥19.9</p>
                        <img src="../../assets/imges/190411_4gcjk8da781l210hkk4jh0jl74ii7_850x850.jpg_100x100.jpg" alt="">
                    </div>
                    
                </div>
                <div class="my-Pinglun">
                    <div class="my-Pinglun-name">
                        <div class="my-pinglun-touxiang">
                            <img src="../../assets/imges/170920_4jgkg4ali1g4kglb3bjcaha18k9ld_640x640.jpg_100x100.jpg" alt="">
                        </div>
                        <div class="my-pinglun-test">111</div>
                    </div>
                    <div class="my-Pinglun-name">
                        <div class="my-pinglun-touxiang">
                            <img src="../../assets/imges/180905_37562l98ibfc80a53ad33clej867j_132x132.jpg_100x100.jpg" alt="">
                        </div>
                        <div class="my-pinglun-test">质量怎么</div>
                    </div>
                    <div class="my-Pinglun-name">
                        <div class="my-pinglun-touxiang">
                            <img src="../../assets/imges/170809_374ab57adklej75heha85b2gbic7c_640x640.jpg_100x100.jpg" alt="">
                        </div>
                        <div class="my-pinglun-test">福利吗</div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    <div class="my-video">
        <div class="actor-info">
            <div class="actor-Tou">
                <img src="../../assets/imges/180603_80aj5e0f4jk04g30075f07b3akebb_400x400.jpg_100x100.jpg" alt="">
            </div>
            <div class="actor-name">
                美少女的店
            </div>
        </div>
        <div class="actor-bot">
            <div class="actor-img">
                <img src="../../assets/imges/181216_8blh37ihgag1ad7agciei734hi4gk_1242x842.jpg_750x500.jpg" alt="">
            </div>
        </div>
        <div class="actor-text">
            <div class="my-test-top">
                <div class="my-top-test">
                    <div class="my-Hongdian"></div>
                    <p>直播中 | 12.5w</p>
                </div>
            </div>
            <div class="My-title">
                <span>老板不在，主播乱卖</span>
            </div>
            <div class="My-boter">
                <div class="My-boter-left">
                    <div class="My-boter-one">
                        <p>￥19.9</p>
                        <img src="../../assets/imges/190411_4gcjk8da781l210hkk4jh0jl74ii7_850x850.jpg_100x100.jpg" alt="">
                    </div>
                    <div class="My-boter-one">
                        <p>￥19.9</p>
                        <img src="../../assets/imges/190411_4gcjk8da781l210hkk4jh0jl74ii7_850x850.jpg_100x100.jpg" alt="">
                    </div>
                    <div class="My-boter-one">
                        <p>￥19.9</p>
                        <img src="../../assets/imges/190411_4gcjk8da781l210hkk4jh0jl74ii7_850x850.jpg_100x100.jpg" alt="">
                    </div>
                    
                </div>
                <div class="my-Pinglun">
                    <div class="my-Pinglun-name">
                        <div class="my-pinglun-touxiang">
                            <img src="../../assets/imges/170920_4jgkg4ali1g4kglb3bjcaha18k9ld_640x640.jpg_100x100.jpg" alt="">
                        </div>
                        <div class="my-pinglun-test">111</div>
                    </div>
                    <div class="my-Pinglun-name">
                        <div class="my-pinglun-touxiang">
                            <img src="../../assets/imges/180905_37562l98ibfc80a53ad33clej867j_132x132.jpg_100x100.jpg" alt="">
                        </div>
                        <div class="my-pinglun-test">质量怎么</div>
                    </div>
                    <div class="my-Pinglun-name">
                        <div class="my-pinglun-touxiang">
                            <img src="../../assets/imges/170809_374ab57adklej75heha85b2gbic7c_640x640.jpg_100x100.jpg" alt="">
                        </div>
                        <div class="my-pinglun-test">福利吗</div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    
    
    
    </div>
</template>
<script>
export default {
    data () {
        return {
            isActive: 0,
            topMessage: "APP新人购物立享88折!",
            headerRightMessage: "超过2亿用户已下载",
            openMessage: "前往领取",

            ViewList:[
                {
                    viewMessage:"热门"
                },
                {
                    viewMessage:"穿搭"
                },
                {
                    viewMessage:"美妆"
                },
            ]
        }
    },
    methods: {
        handleVideo: function(index) {
        this.isActive = index;
    }
    }
};
</script>
<style lang="less" scoped>
.view-wrap{
    width: 100%;
    height: 100%;
    padding-top: 2rem;
    margin-bottom: 1rem;
}
.header-warp {
    width: 100%;
    border-bottom: 1px solid #c5c5c5;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 50;
}
.header-top {
    width: 92%;
    height: 0.94rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin: 0 auto;
}
.header-top-left img {
    width: 0.6rem;
    height: 0.6rem;
    display: flex;
}
.header-top-center {
    width: 63%;
    height: 80%;
    display: flex;
    margin-left: 0.2rem;
    flex-direction: column;
    font-size: 0.26rem;
    line-height: 0.5rem;
    color: #000;
}
.header-top-center-top {
    width: 100%;
    height: 50%;
    display: flex;
}
.header-top-center-pgdn {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
}
.header-left {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.header-left img {
    width: 0.18rem;
    height: 0.17rem;
}
.header-right {
    margin-left: 0.17rem;
    height: 100%;
    display: flex;
    align-items: center;
    color: #8e8e92;
    font-size: 0.2rem;
}
.openApp {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.openButton {
    width: 1.5rem;
    height: 0.5rem;
    display: flex;
    background: rgba(255, 68, 102);
    justify-content: center;
    align-items: center;
    border-radius: 0.06rem;
    font-size: 0.24rem;
    color: #fff;
}
.view-dao{
    width: 100%;
    height: 0.92rem;
    position: fixed;
    z-index: 50;
    margin-top: -1.05rem;
    background: #fff;
    justify-content: space-around;
    display: flex;
    border-bottom: 1px solid #ececec;
}
.View-test{
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.View-test span{
    width: 70%;
    height: 100%;
    display: flex;
    font-size: 0.32rem;
    justify-content: center;
    align-items: center;
}
.active span{
    color: #ef4562;
    border-bottom:0.02rem solid #ef4562;
}
.my-video{
    width: 100%;
    height: 4.84rem;
    display: flex;
    flex-direction: column; 
    max-width: 8rem;
    margin: 0 auto;
    margin-top: 0.1rem;

}
.actor-info{
    width: 100%;
    height: 18%;
    display: flex;
}
.actor-bot{
    width: 100%;
    height: 82%;
    display: flex;
}
.actor-Tou{
    width: 0.94rem;
    height: 0.94rem;
    display: flex;
    margin-left: 0.6rem;
    margin-top: 0.3rem;
    border-radius:50%; 
    position: relative;
    z-index: 10;
    border: 0.04rem solid #fff;
}
.actor-Tou img{
    width: 100%;
    height: 100%;
    border-radius:50%;
}
.actor-name{
    width: 1.52rem;
    height: 70%;
    display: flex;
    margin-left: 0.2rem;
    margin-top: 0.26rem;
    font-size: .28rem;
    color: #333;
    font-weight: 500;
    justify-content: center;
    align-items: center;
}
.actor-img{
    width: 94%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    border-radius:0.08rem; 
    position: relative;
}
.actor-img img{
    height: 100%;
    width: 100%;
    border-radius:0.08rem;
    position: absolute; 
    z-index: 1;
}
.actor-text{
    width: 7rem;
    height: 2.66rem;
    display: flex;
    position:absolute;
    z-index: 20;
    margin-top: 1.9rem;
    margin-left: 0.27rem;
    flex-direction: column;
}
.my-test-top{
    width: 100%;
    height: 0.6rem;
    display: flex;
    align-items: center;
}
.my-top-test{
    width: 30%;
    height: 70%;
    display: flex;
    margin-left: 0.2rem;
    background-color: rgba(0,0,0,.26);
    border-radius: 3px;
    align-items: center;
}
.my-top-test p{
    font-size: .2rem;
    color: #fff;
    margin-left: 0.2rem;
}
.my-Hongdian{
    width:0.2rem;
    height: 0.2rem;
    display: flex;
    border-radius:50%;
    margin-left: 0.1rem;
    background-color: #f5342f;
    animation: dot-flicker 2s infinite;
    -webkit-animation:mymove 1.3s infinite; /*Safari and Chrome*/
}
@keyframes mymove{
    from {opacity:0;}
    to {opacity:1;}
}
@-webkit-keyframes mymove /*Safari and Chrome*/{
    from {opacity:none;}
    to {opacity:block;}
}
.My-title{
    width: 100%;
    height: 0.7rem;
    display: flex;
}
.My-title span{
    font-size: .32rem;
    color: #fff;
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
}
.My-boter{
    width: 100%;
    height: 1.34rem;
    display: flex;
    align-items: center;
    position: relative;
}
.My-boter-left{
    width: 54%;
    height: 90%;
    display: flex;
    margin-left: 0.2rem;
    justify-content: space-around;
}
.My-boter-one{
    width: 31%;
    height: 100%;
    display: flex;
}
.My-boter-one img{
    width: 100%;
    height: 100%;
}
.My-boter-one p{
    font-size: .2rem;
    color: #fff;
    position: absolute;
    margin-top: 0.8rem;
    margin-left: 0.1rem;
}
.my-Pinglun{
    width: 25%;
    height: 90%;
    margin-left: 0.6rem;
    display: flex;
    flex-direction: column;
}
.my-Pinglun-name{
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.my-pinglun-touxiang{
    width: 0.3rem;
    height: 0.3rem;
    display: flex;
    border-radius:50%; 
}
.my-pinglun-touxiang img {
    width: 100%;
    height: 100%;
    border-radius:50%; 
}
.my-pinglun-test{
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #fff;
    font-size: .22rem;
}
</style>