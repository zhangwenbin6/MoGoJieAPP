<template>
            <div class="redPerson-wrap">
            <div 
                class="PersonWarp" 
                v-for="(Item,index) in List" 
                :key="index"
            >

                <div class="Person-Top">
                <div class="Person-Top-img">
                    <img :src="Item.imgUrl">
                </div>
                <div class="Person-Span">
                    <div class="Person-one">{{ Item.persononeMessage }}</div>
                    <div class="Person-two">{{ Item.persontwoMessage }}</div>
                </div>
                </div>

                <div class="Person-text">
                    {{ Item.PersonTextMessage }}
                </div>

                <div class="Person-center">
                <div 
                    class="person-center-left" 
                    v-for="(Items,index) in Item.Lists" :key="index">
                    <img :src="Items.imgUrl1">

                    <div class="person-list">
                        <img :src="Items.imgurl2">
                        {{ Items.PersonListMessage }}
                    </div>
                </div>
                </div>
                
                <div class="footer">
                    <div class="footer-left">
                        <div class="footer-left-img">
                            <img :src="Item.imgUrl3">
                            <span>{{ Item.footerMessage }}</span>
                        </div>
                    </div> 
                    <div class="footer-two">
                        <div class="footer-letftwo-img">
                            <img :src="Item.imgUrl4">
                            
                        </div>
                        <div class="footer-span">
                                <span> {{ Item.footerMessagetwo }} </span>
                            </div>
                        </div>  
                        <div class="footer-three">
                        <div class="footer-letfthree-img">
                            <img :src="Item.imgUrl5">
                            
                        </div>
                        <div class="footer-span-two">
                                <span> {{ Item.footerMessagethree }} </span>
                            </div>
                        </div>
                                        
                </div>

                

</div>
</div>
</template>
<script>
import can1 from "../../assets/imges/181230_3kh1hhg4b09flece39la2bf7aae0k_400x400.jpg_999x999.v1c0.81.webp";
import can2 from "../../assets/imges/190410_051d482bb79bkak71eg18cl29ca61_612x1022.jpg_300x9999.v1c7E.70.webp";
import can3 from "../../assets/imges/190404_5k623hlfd1jl0j32ae07f3dhfdff8_618x1031.jpg_300x9999.v1c7E.70.webp"
import can4 from "../../assets/imges/190324_7c7i3b31i0978h126if58800ek323_596x994.jpg_300x9999.v1c7E.70.webp"
import can5 from "../../assets/imges/180810_0a02124e70hcl6hd13d597idalb7e_28x28.png"
import can6 from "../../assets/imges/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg"
import can7 from "../../assets/imges/180827_6fe2f15hd84bkg772kfg52ejld7li_425x425.png_200x200.jpg"
import can8 from "../../assets/imges/181120_8blde59ha18jce8jbjb3c7431k8ib_1134x1134.png_200x200.jpg_200x200.jpg_200x200.webp"
import can9 from "../../assets/imges/180802_0d951ab4812520j7cih59jlc1jgj9_132x132.jpg_999x999.v1c0.81.webp"
import can10 from "../../assets/imges/190328_81llb66bi5dg4ljga5fi1k9cb82gj_922x1536.jpg_300x9999.v1c7E.70.webp"
import can11 from "../../assets/imges/190412_4becik8h57jec013k5dhca4il9akj_544x909.jpg_300x9999.v1c7E.70.webp"
import can12 from "../../assets/imges/190411_223df0g9lbgc5753cf3a7dl08j61h_598x998.jpg_300x9999.v1c7E.70.webp"
import can13 from "../../assets/imges/181225_6l57b898kcl5j0j7g4fbd0k95d5ld_400x400.jpg_999x999.v1c0.81.webp"
import can14 from "../../assets/imges/190318_76l99c45i0j26dgjd76l9f48iifei_916x1529.jpg_300x9999.v1c7E.70.webp"
import can15 from "../../assets/imges/190318_1l4b4bcfl8db7kj6ah4b5jggea191_915x1529.jpg_300x9999.v1c7E.70.webp"
import can16 from "../../assets/imges/190325_1j9efl0he1483g36dgk61kllb2cgc_924x1543.jpg_300x9999.v1c7E.70.webp"


export default {
        data() {
            return {
            List: [
                {
                persononeMessage: "Ccuebby",
                persontwoMessage: "161cm 42kg | 杭州 | 学生",
                imgUrl: can1,
                imgUrl3:can6,
                imgUrl4:can7,
                imgUrl5:can8,
                footerMessage:"ZARA",
                footerMessagetwo:"十六巷",
                footerMessagethree:"PLANK ATELIERS",
                PersonTextMessage:"",
                Lists: [
                    {
                    imgUrl1: can2,
                    imgurl2:can5,
                    PersonListMessage:"2.1万",
                    },
                    {
                    imgUrl1: can3,
                    imgurl2:can5,
                    PersonListMessage:"3.8万",
                    },
                    {
                    imgUrl1: can4,
                    imgurl2:can5,
                    PersonListMessage:"2.8万",
                    }
                ]
                },
                {
                persononeMessage: "教科书级别小个子搭配术",
                persontwoMessage: "1020人参与 | 更新了1830个LOOK",
                imgUrl: can9,
                imgUrl1: can2,
                imgUrl3:can6,
                imgUrl4:can7,
                imgUrl5:can8,
                footerMessage:"ZARA",
                footerMessagetwo:"十六巷",
                footerMessagethree:"PLANK ATELIERS",
                PersonTextMessage:"小个子女孩看到了吗(举手)这里有一份教科书级别搭配术,来跟小个子达人学习的春装搭配要点吧！包教包...",
                Lists: [
                    {
                    imgUrl1: can10,
                    imgurl2:can5,
                    PersonListMessage:"54.3万",
                    },
                    {
                    imgUrl1: can11,
                    imgurl2:can5,
                    PersonListMessage:"41.0万",
                    },
                    {
                    imgUrl1: can12,
                    imgurl2:can5,
                    PersonListMessage:"23.1万",
                    }
                ]
                },
                {
                persononeMessage: "了不起的和风",
                persontwoMessage: "172cm 53kg | 宁波 | 自由职业",
                imgUrl: can13,
                imgUrl1: can2,
                imgUrl3:can6,
                imgUrl4:can7,
                imgUrl5:can8,
                footerMessage:"ZARA",
                footerMessagetwo:"十六巷",
                footerMessagethree:"PLANK ATELIERS",
                Lists: [
                    {
                    imgUrl1: can14,
                    imgurl2:can5,
                    PersonListMessage:"54.3万",
                    },
                    {
                    imgUrl1: can15,
                    imgurl2:can5,
                    PersonListMessage:"41.0万",
                    },
                    {
                    imgUrl1: can16,
                    imgurl2:can5,
                    PersonListMessage:"23.1万",
                    }
                ]
                }
            ]
            };
        }
};
</script>
<style lang="less" scoped>
.redPerson-wrap {
    width: 100%;
    margin: auto;
    max-width: 8rem;
    margin-bottom:1rem;
}
.PersonWarp {
    width: 100%;
}
.Person-Top {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 0.1rem;
}
.Person-Top-img {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    display: flex;
    margin-left: 0.2rem;
}
.Person-Top-img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.Person-Span {
    width: 70%;
    height: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 0.2rem;
}
.Person-one {
    width: 100%;
    height: 50%;
    display: flex;
    font-size: 0.32rem;
    font-weight: 700;
}
.Person-text{
    width: 94%;
    margin: 0 auto;
    font-size: 0.26rem;
    text-align: left;
}
.Person-two {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    font-size: 0.22rem;
    color: #999999;
}
.Person-center {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    margin-top: 0.1rem;
}

.person-center-left {
    width: 32.8%;
    height: 100%;
    display: flex;
}
.person-center-left img {
    width: 100%;
    height: 100%;
}
.person-list {
    width: 50%;
    height: 14%;
    position: relative;
    margin-left: -2.4rem;
    margin-top: 3.3rem;
    display: flex;
    font-size: 0.24rem;
    align-items: center;
    color: white;
}
.person-list img{
    width: 0.35rem;
    height: 0.25rem;
}
.footer{
    width: 92%;
    height: 1rem;
    border-bottom: 0.01rem solid #E5E5E5;
    margin: 0 auto;
    display: flex;
    margin-top: 0.14rem;
    align-items: center;
}
.footer-left{
    height: 50%;
    display: flex;
    background: #F2F3F7;
    border-radius: 0.04rem;
    align-items: center;    
}
.footer-left-img{
    width: 40%;
    height: 70%;
    display: flex; 
    align-items: center;    
}
.footer-left-img img{
    height: 100%;
    width: 100%;
}
.footer-left-img span{
    font-size: 0.24rem;
    margin-left: 0.1rem;
}
.footer-two{
    height: 50%;
    background: #F2F3F7;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 0.2rem;
}
.footer-letftwo-img{
    width: 35%;
    height: 70%;
    display: flex; 
    align-items: center; 
}
.footer-letftwo-img img{
    height: 100%;
    width: 100%;
}
.footer-span{
    width: 60%;
    height: 70%;
    display: flex;
    font-size: 0.22rem;
}
.footer-three{
    width: 70%;
    height: 50%;
    background: #F2F3F7;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 0.2rem;
}
.footer-letfthree-img{
    width: 20%;
    height: 70%;
    display: flex; 
    align-items: center; 
}
.footer-letfthree-img img{
    height: 100%;
    width: 100%;
}
.footer-span-two{
    width: 80%;
    height: 70%;
    display: flex;
    font-size: 0.22rem;
    align-items: center;
}
</style>
