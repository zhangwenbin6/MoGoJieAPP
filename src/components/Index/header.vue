<template>
  <div class="warp">
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
    <div class="search">
      <div 
          class="search-so">
        <div class="search-so-img">
          <img src="@/assets/imges/180926_3lac93lkglfd5gd4fiahedg5aad79_40x37.png"  @click="handeleClass">
        </div>
        <div 
            class="search-soo"
            @click="handleSearch"
        >
          <div class="search-soo-img">
            <img src="@/assets/imges/下载.png" alt>
          </div>
          <div class="search-soo-text">{{ searchMessage }}</div>
        </div>
        <div class="search-so-right" @click="handlegotoLogin">
          <img src="@/assets/imges/下载 (1).png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topMessage: "上万达人为你试穿全网品牌",
      headerRightMessage: "超过2亿用户已下载",
      openMessage: "打开APP",
      searchMessage: "converse"
    };
    
  },
  methods: {
    handleSearch:function(){
      this.$router.push({
        name:"SearchBox",
        
      })
    },
    handeleClass:function(){
      this.$router.push({
        name:"Classify",
      })
    },
    handlegotoLogin:function(){
      this.$router.push({
        name:"Myshop"
      })
    }
  }

};
</script>

<style lang="less" scoped>
.warp {
  width: 100%;
  height: auto;
  margin: auto;
  
}
.header-warp {
  width: 100%;
  margin: 0;
  border-bottom: 1px solid #c5c5c5;
  background: #fff;
  
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
.search {
  width: 100%;
  height: 0.92rem;
  border-bottom:1px solid #e5e5e5; 
}
.search-so {
  width: 92%;
  height: 0.92rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin: 0 auto;
}
.search-so-img {
  width: 0.45rem;
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.07rem;
}
.search-so-img img {
  width: 100%;
  height: 100%;
}
.search-soo {
  display: flex;
  height: 68%;
  width: 78%;
  font-size: 0.24rem;
  color: #999;
  border: none;
  background: #eee;
  border-radius: 0.05rem;
  display: flex;
  align-items: center;
}
.search-so-right {
  width: 0.45rem;
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-so-right img {
  width: 100%;
  height: 100%;
}
.search-soo-img {
  width: 0.31rem;
  height: 0.31rem;

  margin-left: 0.15rem;
}
.search-soo-img img {
  width: 100%;
  height: 100%;
}
.search-soo-text {
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.1rem;
}
</style>
