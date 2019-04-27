<template>


    <div class="classify-wrap">
        <!-- 顶部固定导航 -->
    <div class="classify-dom">
        <div class="classify-one">
            <div class="classify-one-left">
            <img src="../../assets/imges/下载 (1).png">
            </div>
            <div 
                class="classify-one-center"
                @click="handleIfyCenter"
            >
            <div class="classify-so">
                <img src="../../assets/imges/下载.png" alt>
            </div>
            {{ classifyMessage }}
            </div>
            <div class="classify-one-right">
            <img src="../../assets/imges/下载 (7).png" alt>
            </div>
        </div>
        </div>

    
    
    <div class="classify-bom">
        <!-- 下面内容大盒子 -->
        <!-- 左侧滚动 -->
    <div class="classify-left">
        <div
        class="classify-left-one"
        v-for="(value,index) in List"
        :key="index"
        :class="{'active' : index === isActive }"
        @click="handleClassify(index)"
        >
            <p>{{ value.classifyMessageone }}</p>
        </div>
    </div>

        <!-- 右侧内容 -->
        <!-- 右侧大框 -->
    <div 
        class="classify-right"
        v-for="(item,index) in Listwrap"
        :key="index"
        v-show=" isActive === index "
        >
            <div class="classify-right-one">

                    <div 
                        class="class-right-one-div" 
                        v-for="(value,index) in item.ListData" 
                        :key="index"
                    >

                        <div class="class-right-div-img">
                            <img :src="value.imgUrl">
                        </div>

                            <div class="class-right-text">
                                {{ value.textMessage }}
                            </div>

                    </div>
                <!-- 滑动底部内容 -->
    <div class="cube">
                <!-- 顶部导航 -->
    <div class="cube-top">
        <div
            class="cube-top-test"
            v-for="(value,index) in item.ListCube"
            :key="index"
            :class="{'activetwo' : index === isActivetwo }"
            @click="handleCube(index)"
        >
            <p>{{ value.CubeMessage }}</p>
        </div>
    </div>
                <!-- 底部详情 -->
    <div class="cube-foot">
        <div 
            class="cube-foot-left" 
            v-for="(value,index) in item.ListList" 
            :key="index"
        >
            <div class="cube-foot-img">
                <img :src="value.imgUrl">
            </div>
                <div class="cube-foot-bottom-one">
                    <p>{{ value.bottomMessage }}</p>
                    <img src="../../assets/imges/下载 (8).png" alt>
                </div>

            <div class="cube-bottom">
                <div class="cube-bottom-top">
                    {{ value.ListMessage }}
                </div>
            <div class="cube-bottom-bottom">
                <p>{{ value.PeiceMessage }}</p>
                <div class="cube-list">
                    <span>{{ value.PriceMessage }}</span>
                <div class="cube-list-img">
                    <img src="../../assets/imges/下载 (9).png" alt>
                </div>
                </div>
            </div>
            </div>
        </div>
                </div>
            </div>
            </div>
    </div>
    </div>
</div>
</template>
<script>
import img1 from "../../assets/imges/180903_3de2717i8dj6hjjifj4d5e3a28f6e_180x180.gif_200x9999.v1c7E.81.webp";
import img2 from "../../assets/imges/190313_03alja47b63d90ll8el6d1k8bf41k_120x120.jpg_999x999.v1c0.81.webp";
import img3 from "../../assets/imges/190215_553389jj21c4b4l5jl5dfeak2d9e6_120x120.jpg_999x999.v1c0.81.webp";
import img4 from "../../assets/imges/181017_1i9d6ge0ll7j58fh43fg0k26g6a2f_120x120.jpg_999x999.v1c0.81.webp";
import img5 from "../../assets/imges/181017_7liclj4dac18a35ajah8c36a901j1_120x120.jpg_999x999.v1c0.81.webp";
import img6 from "../../assets/imges/190313_7fb4l50iclekd7da7jlg8chh11cc8_120x120.jpg_999x999.v1c0.81.webp";
import img7 from "../../assets/imges/kuzi.webp";
import img8 from "../../assets/imges/190219_00c55h7c7g354h7j2di2f069kelb5_120x120.jpg_999x999.v1c0.81.webp";
import img9 from "../../assets/imges/181120_2dac156efh348a769ke336c1i58ed_120x120.jpg_999x999.v1c0.81.webp";
import img10 from "../../assets/imges/190215_0iga4dbic9fgd5c4gd9acai2gb139_120x120.jpg_999x999.v1c0.81.webp";
import img11 from "../../assets/imges/190215_57ji79350i2fl9hhge8b3982hje07_120x120.jpg_999x999.v1c0.81.webp";
import img12 from "../../assets/imges/180903_3gjj68llefd9920id1242ijfaj408_120x120.png_999x999.v1c0.81.webp";
import img13 from "../../assets/imges/180903_11jc696d6303jflc5lahaahb12if0_120x120.jpg_999x999.v1c0.81.webp";
import img14 from "../../assets/imges/181017_22clfjk46k211c96e7ke9jkg16ceb_120x120.jpg_999x999.v1c0.81 (1).webp";
import img15 from "../../assets/imges/181017_4f43jg93l5bi83a11hf8e645kebb9_120x120.jpg_999x999.v1c0.81.webp";
import img16 from "../../assets/imges/181017_630i277j2abf9gg72df12li1c6h0a_120x120.jpg_999x999.v1c0.81.webp";
import img17 from "../../assets/imges/181017_0le6lhjh12ggl63i124gc538icf11_120x120.jpg_999x999.v1c0.81.webp";
import img18 from "../../assets/imges/180211_78k7b1f3c0g2cgh5fib3afgi9gehd_120x120.png_999x999.v1c0.81.webp";
import img19 from "../../assets/imges/190109_30620a2if4li1lakb4250dhi56229_120x120.jpg_999x999.v1c0.81.webp";
import img20 from "../../assets/imges/190218_2b65e3khd42fi5l8h0g62k3f002hi_120x120.png_999x999.v1c0.81.webp";
import img21 from "../../assets/imges/181123_6fi07faaae85jh8k36b95k23chh4e_120x120.jpg_999x999.v1c0.81.webp";
import img22 from "../../assets/imges/180613_1hkc4klbjlejil2k1jklhfc57515f_120x120.jpg_999x999.v1c0.81.webp";
import img23 from "../../assets/imges/181122_49jhlaikbf36il2ga4b1ff37i46kd_120x120.jpg_999x999.v1c0.81.webp";
import img24 from "../../assets/imges/181122_7h6833ih29gbkfg8344gd6lafh6gj_120x120.jpg_999x999.v1c0.81.webp";
import img25 from "../../assets/imges/180523_8f53b86fafljll11hjh4b8i0h9i10_120x120.png_999x999.v1c0.81.webp";
import img26 from "../../assets/imges/180731_5a5d7ci9l24l256k06k0a35dg3g76_120x120.jpg_999x999.v1c0.81.webp";
import img27 from "../../assets/imges/180227_069ci8he1419k16did4c1lk9l5j3g_120x120.jpg_999x999.v1c0.81.webp";
import img28 from "../../assets/imges/190218_810d44i8b5lbchdc7geg5b7gi1e2e_800x800.jpg_200x9999.v1c7E.81.webp";
import img29 from "../../assets/imges/181107_2d9k13a25f4ada6ahigh0k30l80ai_120x120.jpg_999x999.v1c0.81.webp";
import img30 from "../../assets/imges/190311_66l03g95bcgl2j0323e8ff8g1ag1l_120x120.jpg_999x999.v1c0.81.webp";
import img31 from "../../assets/imges/190302_488l2i983d434d64b71hhd4250g7i_640x960.jpg_280x374.v1cAC.40.webp";
import img32 from "../../assets/imges/180612_775jil8fk8i51cg2fb8l3f9lad28k_640x640.jpg_280x374.v1cAC.40.webp";
import img33 from "../../assets/imges/190215_8ae5a9fjkbd0ahdhf540e4h1hb8bc_120x120.png_999x999.v1c0.81.webp"
export default {
    data() {
    return {
        classifyMessage: "汉服",
        isActive: 0,
        isActivetwo: 0,
        Listwrap:[
            {
    ListData: [
        {
            imgUrl: img1,
            textMessage: "春上新"
        },
        {
            imgUrl: img2,
            textMessage: "时尚套装"
        },
        {
            imgUrl: img3,
            textMessage: "早春外套"
        },
        {
            imgUrl: img4,
            textMessage: "流行风衣"
        },
        {
            imgUrl: img5,
            textMessage: "毛呢大衣"
        },
        {
            imgUrl: img6,
            textMessage: "裙子套装"
        },
        {
            imgUrl: img7,
            textMessage: "裤子套装"
        },
        {
            imgUrl: img8,
            textMessage: "懒人三件套"
        },
        {
            imgUrl: img9,
            textMessage: "毛衣"
        },
        {
            imgUrl: img10,
            textMessage: "牛仔外套"
        },
        {
            imgUrl: img11,
            textMessage: "棒球服"
        },
        {
            imgUrl: img12,
            textMessage: "连衣裙"
        },
        {
            imgUrl: img13,
            textMessage: "牛仔裤"
        },
        {
            imgUrl: img14,
            textMessage: "百搭卫衣"
        },
        {
            imgUrl: img15,
            textMessage: "打底衫"
        },
        {
            imgUrl: img16,
            textMessage: "针织衫"
        },
        {
            imgUrl: img17,
            textMessage: "衬衫"
        },
        {
            imgUrl: img18,
            textMessage: "休闲裤"
        },
        {
            imgUrl: img19,
            textMessage: "卫衣男"
        },
        {
            imgUrl: img20,
            textMessage: "夹克男"
        },
        {
            imgUrl: img21,
            textMessage: "衬衫男"
        },
        {
            imgUrl: img22,
            textMessage: "T恤男"
        },
        {
            imgUrl: img23,
            textMessage: "休闲裤男"
        },
        {
            imgUrl: img24,
            textMessage: "牛仔裤男"
        },
        {
            imgUrl: img25,
            textMessage: "男鞋"
        },
        {
            imgUrl: img26,
            textMessage: "单鞋"
        },
        {
            imgUrl: img27,
            textMessage: "小白鞋"
        },
        {
            imgUrl: img28,
            textMessage: "帆布鞋"
        },
        {
            imgUrl: img29,
            textMessage: "活力运动"
        },
        {
            imgUrl: img30,
            textMessage: "凉鞋"
        }
    ],
    ListCube: [
        {
            CubeMessage: "综合"
        },
        {
            CubeMessage: "销量"
        },
        {
            CubeMessage: "新品"
        }
    ],
    ListList: [
        {
            imgUrl: img31,
            bottomMessage: "已售9912件",
            ListMessage: "两只38元 屈臣氏爆...",
            PeiceMessage: "￥35",
            PriceMessage: "38901"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        }
    ]

            },
            {
    ListData: [
        {
            imgUrl: img33,
            textMessage: "春上新"
        },
        {
            imgUrl: img33,
            textMessage: "时尚套装"
        },
        {
            imgUrl: img33,
            textMessage: "早春外套"
        },
        {
            imgUrl: img33,
            textMessage: "流行风衣"
        },
        {
            imgUrl: img33,
            textMessage: "毛呢大衣"
        },
        {
            imgUrl: img33,
            textMessage: "裙子套装"
        },
        {
            imgUrl: img33,
            textMessage: "裤子套装"
        },
        {
            imgUrl: img33,
            textMessage: "懒人三件套"
        },
        {
            imgUrl: img33,
            textMessage: "毛衣"
        },
        {
            imgUrl: img33,
            textMessage: "牛仔外套"
        },
        {
            imgUrl: img33,
            textMessage: "棒球服"
        },
        {
            imgUrl: img33,
            textMessage: "连衣裙"
        },
        {
            imgUrl: img33,
            textMessage: "牛仔裤"
        },
        {
            imgUrl: img33,
            textMessage: "百搭卫衣"
        },
        {
            imgUrl: img33,
            textMessage: "打底衫"
        },
        {
            imgUrl: img16,
            textMessage: "针织衫"
        },
        {
            imgUrl: img17,
            textMessage: "衬衫"
        },
        {
            imgUrl: img18,
            textMessage: "休闲裤"
        },
        {
            imgUrl: img19,
            textMessage: "卫衣男"
        },
        {
            imgUrl: img20,
            textMessage: "夹克男"
        },
        {
            imgUrl: img21,
            textMessage: "衬衫男"
        },
        {
            imgUrl: img22,
            textMessage: "T恤男"
        },
        {
            imgUrl: img23,
            textMessage: "休闲裤男"
        },
        {
            imgUrl: img24,
            textMessage: "牛仔裤男"
        },
        {
            imgUrl: img25,
            textMessage: "男鞋"
        },
        {
            imgUrl: img26,
            textMessage: "单鞋"
        },
        {
            imgUrl: img27,
            textMessage: "小白鞋"
        },
        {
            imgUrl: img28,
            textMessage: "帆布鞋"
        },
        {
            imgUrl: img29,
            textMessage: "活力运动"
        },
        {
            imgUrl: img30,
            textMessage: "凉鞋"
        }
    ],
    
    ListCube: [
        {
            CubeMessage: "综合"
        },
        {
            CubeMessage: "销量"
        },
        {
            CubeMessage: "新品"
        }
    ],
    ListList: [
        {
            imgUrl: img31,
            bottomMessage: "已售9912件",
            ListMessage: "两只38元 屈臣氏爆...",
            PeiceMessage: "￥35",
            PriceMessage: "38901"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        },
        {
            imgUrl: img32,
            bottomMessage: "已售66件",
            ListMessage: "网红小白鞋 女季20...",
            PeiceMessage: "￥59.9",
            PriceMessage: "1268"
        }
    ]

            },
            
                ],
    
    // 左侧循环
    List: [
        {
            classifyMessageone: "正在流行"
        },
        {
            classifyMessageone: "上衣"
        },
        {
            classifyMessageone: "裤子"
        },
        {
            classifyMessageone: "裙子"
        },
        {
            classifyMessageone: "内衣"
        },
        {
            classifyMessageone: "女鞋"
        },
        {
            classifyMessageone: "男友"
        },
        {
            classifyMessageone: "包包"
        },
        {
            classifyMessageone: "运动"
        },
        {
            classifyMessageone: "配饰"
        },
        {
            classifyMessageone: "美妆"
        },
        {
            classifyMessageone: "个户"
        },
        {
            classifyMessageone: "家具"
        },
        {
            classifyMessageone: "百货"
        },
        {
            classifyMessageone: "母婴"
        },
        {
            classifyMessageone: "食品"
        }
    ],
    
    
};
},


    methods: {
    handleClassify: function(index) {
        this.isActive = index;
    },
    handleIfyCenter:function(){
        this.$router.push({
        name:"SearchBox",
        
    })
    },
    handleCube: function(index) {
        this.isActivetwo = index;
    }
    }
};
</script>

<style lang="less" scoped>

.classify-wrap {
    width: 100%;
}
.classify-dom {
    width: 100%;
    height: 0.92rem;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    position: fixed;
    top: 0;
}
.classify-one {
    width: 94%;
    height: 85%;
    display: flex;
    align-items: center;
}
.classify-one-left {
    width: 13%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.classify-one-left img {
    height: 0.4rem;
    width: 0.45rem;
}
.classify-one-center {
    width: 74%;
    height: 80%;
    display: flex;
    font-size: 0.24rem;
    color: #999;
    border: none;
    background: #eee;
    border-radius: 0.06rem;
    align-items: center;
}
.classify-so {
    width: 10%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.classify-so img {
    width: 0.3rem;
    height: 0.3rem;
}
.classify-one-right {
    width: 13%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.classify-one-right img {
    height: 0.43rem;
    width: 0.43rem;
}
.classify-bom {
    width: 100%;
    display: flex;
    height: 100%;
    position: fixed;
    margin-top: 0.92rem;
}
.classify-left {
    width: 24%;
    overflow-y: scroll;
    margin-bottom: 0.9rem;
}
.classify-left::-webkit-scrollbar {
    display: none;
}
.classify-left-one {
    width: 100%;
    height: 0.9rem;
    display: flex;
    background: #f6f6f6;
    color: #666;
    justify-content: center;
    align-items: center;
    font-size: 0.3rem;
}
.classify-left-one p {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.active {
    background-color: white;
    p {
        border-left: solid #ff5577 0.07rem;
        font-weight: bold;
        color: #ff5577;
        height: 0.32rem;
}
}
.classify-right {
    width: 76%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}
.classify-right-one {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow-y: scroll;
}
.classify-right ::-webkit-scrollbar {
    display: none;
}
.class-right-one-div {
    width: 1.7rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 0.2rem;
}
.class-right-div-img {
    width: 82%;
    height: 73%;
    display: flex;
}
.class-right-div-img img {
    height: 100%;
    width: 100%;
}
.class-right-text {
    width: 100%;
    height: 0.4rem;
    display: flex;
    font-size: 0.24rem;
    color: #666666;
    justify-content: center;
    align-items: center;
}
.cube {
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
}
.cube-top {
    width: 100%;
    height: 0.9rem;
    display: flex;
    background: #fff;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    margin-top: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: -0.1rem;
    z-index: 20;
}
.cube-top-test {
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cube-top-test p {
    font-size: 0.3rem;
    width: 100%;
    border-left: 1px solid #e6e6e6;
}
.activetwo {
    color: #ef4562;
}
.cube-foot {
    width: 100%;
    height: 14.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.15rem;
    max-width: 6.7rem;
    margin: 0 auto;
}
.cube-foot-left {
    width: 50%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.cube-foot-img {
    width: 96%;
    height: 79%;
    display: flex;
    margin: 0 auto;
    border-top-left-radius: 0.08rem;
    border-top-right-radius: 0.08rem;
}
.cube-foot-img img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 0.08rem;
    border-top-right-radius: 0.08rem;
}
.cube-bottom {
    width: 96%;
    height: 20%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.cube-foot-bottom-one {
    width: 1.8rem;
    height: 0.5rem;
    display: flex;
    position: relative;
    z-index: 9;
    margin-top: -0.7rem;
    margin-left: 0.1rem;
}
.cube-foot-bottom-one img {
    width: 100%;
    height: 100%;
}
.cube-foot-bottom-one p {
    font-size: 0.24rem;
    display: flex;
    color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    justify-content: center;
    align-items: center;
    }
.cube-bottom-top {
    width: 100%;
    height: 50%;
    display: flex;
    font-size: 0.25rem;
    align-items: center;
}
.cube-bottom-bottom {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cube-bottom-bottom p {
    width: 30%;
    height: 100%;
    display: flex;
    color: #ff5777;
    font-size: 0.36rem;
    font-weight: 600;
}
.cube-list {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
}
.cube-list-img {
    width: 0.32rem;
    height: 0.3rem;
    display: flex;
    justify-content: flex-end;
}
.cube-list-img img {
    width: 100%;
    height: 100%;
}
.cube-list span {
    width: 0.9rem;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #999;
    font-size: 0.25rem;
    margin-top: 0.04rem;
}
</style>
