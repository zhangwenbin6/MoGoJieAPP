<template>
    <div class="res-wrap">
        <div class="reswrap">
            <div 
                class="resone"
                v-for="(value,index) in list"
                :key="index"
            >
                <div class="resone-img"><img :src="value.imgUrl" ></div>
                <div class="resong-text">{{ value.resMessage }}</div>
            </div>
    
        </div>


    </div>
</template>

<script>
    import con1 from "../../assets/imges/190115_0jh548j0b0hg0g2464jah3h23d3hg_150x150.png_640x640.v1cAC.40.webp"
    import con2 from "../../assets/imges/181126_58g8bkegg92k4bfj51adigb8g1l44_150x150.png_640x640.v1cAC.40.webp"
    import con3 from "../../assets/imges/190306_4258hl3e1kj8cegk3e4el4d6d45k6_120x120.png_640x640.v1cAC.40.webp"
    import con4 from "../../assets/imges/190306_5ifkajc430g0dbdf1eeccd637i5f9_135x135.png_640x640.v1cAC.40.webp"
    import con5 from "../../assets/imges/190306_3aa6fl08hhlkfd5kb08aif00jkeib_150x150.png_640x640.v1cAC.40.webp"
    import con6 from "../../assets/imges/190214_7i8baa688j214ib7eb2466fhj9i1d_150x150.jpg_640x640.v1cAC.40.webp"
    import con7 from "../../assets/imges/171023_222kg9291h4l38j3b2lcdc3k6fc69_100x100.png_640x640.v1cAC.40.webp"
    import con8 from "../../assets/imges/181122_220dja64jidi7lbhb01d1ce021b58_150x150.png_640x640.v1cAC.40.webp"
    import con9 from "../../assets/imges/190304_1lk6dldb1f9ghj2fj562c209k59l3_150x150.png_640x640.v1cAC.40.webp"
    import con10 from "../../assets/imges/171018_3j76aiahb09c5i1ga620k4lklfbal_100x100.png_640x640.v1cAC.40.webp"
    import con11 from "../../assets/imges/181016_764a8j7hd1j46kkg46l39k603f1l9_100x100.png_640x640.v1cAC.40.webp"
    import con12 from "../../assets/imges/190304_30hl6cgl48ej7c2ade7fb7g1l3162_150x150.png_640x640.v1cAC.40.webp"
    import con13 from "../../assets/imges/190128_4kfibk807hi13jdf92d8lc680a32e_150x150.png_640x640.v1cAC.40.webp"
    import con14 from "../../assets/imges/190103_4k3f855j6bjl59c904d2kc7ej7bef_150x150.jpg_640x640.v1cAC.40.webp"
    import con15 from "../../assets/imges/190312_1156li3l7eel0ab19182ld338hdlb_135x135.png_640x640.v1cAC.40.webp"
export default {
    data () {
        return {
            
            list:[
            {
                imgUrl:con1,
                resMessage:"女装"
            },
            {
                imgUrl:con2,
                resMessage:"上衣"
            },
            {
                imgUrl:con3,
                resMessage:"裤子"
            },
            {
                imgUrl:con4,
                resMessage:"裙子"
            },
            {
                imgUrl:con5,
                resMessage:"套装"
            },
            {
                imgUrl:con6,
                resMessage:"女鞋"
            },
            {
                imgUrl:con7,
                resMessage:"美妆/个户"
            },
            {
                imgUrl:con8,
                resMessage:"包包"
            },
            {
                imgUrl:con9,
                resMessage:"配饰"
            },
            {
                imgUrl:con10,
                resMessage:"内衣"
            },
            {
                imgUrl:con11,
                resMessage:"男友"
            },
            {
                imgUrl:con12,
                resMessage:"家居"
            },
            {
                imgUrl:con13,
                resMessage:"母婴"
            },
            {
                imgUrl:con14,
                resMessage:"食品"
            },
            {
                imgUrl:con15,
                resMessage:"签到"
            }
            
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.res-wrap{
    height: auto;
    width: 100%;
}
.reswrap{
    width: 100%;
    height: 4.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: 0.1rem solid #f1f1f1;
}
.resone{
    width: 19.7%;
    height: 32%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.05rem;
}
.resone-img img{
    width: 1rem;
    height:1rem ;
    display: flex;
    justify-content: center;
}
.resong-text{
    width: 100%;
    height: 25%;
    display: flex;
    font-size: 0.25rem;
    justify-content: center;
    color: rgb(102, 102, 102);
    margin-top: 0.07rem;
}
</style>
