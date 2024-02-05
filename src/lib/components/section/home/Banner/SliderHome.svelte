<script>
    import {Swiper, SwiperSlide} from 'swiper/svelte';
    import {FreeMode, Autoplay} from 'swiper';
    import 'swiper/css';

    import BannerPaket from '$images/banner/home/februari-2024.webp'
    import BannerUnflav from '$images/product/pro-creatine/unflavored/banner-jumbotron.webp'
</script>
    
    <div class="px-4 md:px-16">
        <Swiper
        slidesPerView="auto"      
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[FreeMode,  Autoplay]}
      >
        <SwiperSlide>
          <a href="/products" target="_blank">
          <!-- <a href="/campaign/new-flavor/pro-creatine" target="_blank"> -->
            <img src={BannerPaket} alt="Promo Muscle First" class="w-full h-full">
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/campaign/new-flavor/pro-creatine" target="_blank">
            <img src={BannerUnflav} alt="Promo Muscle First" class="w-full h-full">
          </a>
        </SwiperSlide>
       </Swiper>
    </div>
    