<template>
    <div class="searchBox-wrap">
        <div class="searchBox-top">
            <div class="searchBox-top-left">
                <img src="../../assets/imges/下载 (2).png" @click="handleClick">
            </div>
            <div class="searchBox-top-center">
                <input type="text" placeholder="连衣裙" class="searchBox-input">
            </div>
            <div class="searchBox-top-right">搜索</div>
        </div>

        <div class="mb_sb">
            <div class="mb_sb_history">
                <div class="mb_sb_history_top">
                    <div class="mb_sb_img">
                        <img src="../../assets/imges/下载.png" alt="">
                    </div>
                    <div class="mb_sb_text">
                        {{ searchMessage }}
                    </div>
                    <div class="mb_sb_delet">
                        <img src="../../assets/imges/下载 (5).png" alt="">
                    </div>
                </div>
                <div class="mb_sb_history_bottom">
                    {{ NosearchMessage }}
                </div>
            </div>
        </div>

        <div class="mb_sb_list">
            <div class="mb_sb_list_top">
                <div class="mb_sb_list_img">
                    <img src="../../assets/下载 (6).png" alt="">
                </div>
                <div class="mb_sb_list_text">热门搜索</div>
            </div>
            <div class="mb_sb_list_bottom">
                <ul
                    v-for="(value,index) in list"
                    :key="index"
                >
                    <li :id="forId(index)">{{ value.listsMessage }}</li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    data () {
        return {
                searchMessage:"历史搜索",
                NosearchMessage:"暂无历史搜索",
                list:[
                    {
                    listsMessage:"凉鞋"
                    },
                    {
                    listsMessage:"高跟鞋"
                    },
                    {
                    listsMessage:"连衣裙"
                    },
                    {
                    listsMessage:"睡衣"
                    },
                    {
                    listsMessage:"衬衫"
                    },
                    {
                    listsMessage:"汉服"
                    },
                    {
                    listsMessage:"短袖"
                    },
                    {
                    listsMessage:"背带裤"
                    },
                    {
                    listsMessage:"裙子"
                    },
                    {
                    listsMessage:"外套"
                    },
                    
                    
                    
                ]
    
            }
    },
    methods: {
        handleClick:function(){
            this.$router.push({
                name:"Index"
            })
        },
        forId:function(index){
            return "content-div" +index
        }
    }
    
    
}
</script>
<style lang="less" scoped>
.searchBox-wrap{
    width: 100%;
}
.searchBox-top{ 
    width: 100%;
    height: 0.9rem;
    border-bottom: 1px solid #eee;
    display: flex;
}
.searchBox-top-left{
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.searchBox-top-left img{
    height: 0.35rem;
    width: 0.35rem;

}
.searchBox-top-center{
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.searchBox-input{
    width: 90%;
    height: 55%;
    border-radius: 0.09rem;
    background: #fff;
    border: 1.5px solid #aaa;
    outline: none;
    font-size: 0.22rem;
    padding-left: 0.2rem;
}
.searchBox-input:hover{
    border-color:#ff4466;
}
.searchBox-top-right{
    width: 10%;
    height: 100%;
    display: flex;
    font-size: 0.26rem;
    justify-content:flex-start;
    align-items: center;
    color: #666;
}
.mb_sb{
    width: 100%;
    height: 100%;
}
.mb_sb_history{
    width: 100%;
    height: 1.6rem;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: column;
}
.mb_sb_history_top{
    width: 100%;
    height: 30%;
    display: flex;
    margin-top: 0.2rem;
}
.mb_sb_img{
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mb_sb_img img{
    width: 0.3rem;
    height: 0.3rem;
}
.mb_sb_text{
    width: 80%;
    height: 100%;
    font-size: 0.25rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #999;
}
.mb_sb_delet{
    width: 10%;
    height: 100%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
}
.mb_sb_delet img{
    width: 0.3rem;
    height: 0.3rem;
}
.mb_sb_history_bottom{
    width: 100%;
    height: 30%;
    display: flex;
    margin-top: 0.1rem;
    font-size: 0.25rem;
    color: #999;
    align-items: center;
    padding-left: 0.8rem;
}
.mb_sb_list{
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
}
.mb_sb_list_top{
    width: 100%;
    height: 0.5rem;
    margin-top: 0.2rem;
    display: flex;
}
.mb_sb_list_img{
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mb_sb_list_img img{
    width: 0.3rem;
    height: 0.3rem;
}
.mb_sb_list_text{
    width: 90%;
    height: 100%;
    font-size: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #999;
}
.mb_sb_list_bottom{
    width: 90%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 0.1rem;
}
.mb_sb_list_bottom ul li{
    font-size: 0.23rem;
    margin-left: 0.4rem;
    color: #666;
    padding-top: 0.02rem;
    padding-bottom: 0.02rem;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    border-radius: 0.06rem;
    border: 1px solid #cccccc;
    background: #fff;
}
#content-div1{
    color: #ff4466;
}
#content-div3{
    color: #ff4466;
}
#content-div5{
    color: #ff4466;
}
#content-div8{
    color: #ff4466;
}

</style>
