<template>
      <div class="swiper-wrap">
        <div class="lazyData">
            <div class="swiper-container">
            <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="@/assets/imges/190404_4hle2f878443b58c82cl8ac4abfad_750x300.jpg_999x999.v1c0.81.webp" alt=""></div>
        <div class="swiper-slide"><img src="@/assets/imges/190408_0ef32chl36a28cjbg5alkcc3g8d40_750x300.jpg_999x999.v1c0.81.webp" alt=""></div>
        <div class="swiper-slide"><img src="@/assets/imges/190410_70gihahlebjglj6b19dkj35chj2e2_750x300.jpg_999x999.v1c0.81.webp" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    

    
</div>

      </div>

    </div>
</template>
<script>
export default {
    data(){
      return{

            }
    }
}
window.onload = function() {
  var mySwiper = new Swiper ('.swiper-container', {
    spaceBetween:30,
    direction: 'horizontal', // X轴切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        

}
</script>

<style lang="less" scoped>
.swiper-wrap{
    width: 100%;
    background-color: #f1f1f1;
}
.lazyData{
    width: 100%;
    height: 3rem;
}
.swiper-slide img{
      width: 100%;
      height: 100%;
}
.swiper-container{
  width: 100%;
  height: 100%;
}


</style>
