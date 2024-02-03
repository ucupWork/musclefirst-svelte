<script>
    import {Swiper, SwiperSlide} from 'swiper/svelte';
    import {FreeMode, Autoplay} from 'swiper';
    import 'swiper/css';

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
            <img src='https://dev-store-ucup.pantheonsite.io/wp-content/uploads/2024/01/banner2.webp' alt="Promo Muscle First" class="w-full h-full">
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://dev-store-ucup.pantheonsite.io/wp-content/uploads/2024/01/banner1.webp' alt="Promo Muscle First" class="w-full h-full">
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://dev-store-ucup.pantheonsite.io/wp-content/uploads/2024/01/banner3.webp' alt="Promo Muscle First" class="w-full h-full">
        </SwiperSlide>
       </Swiper>
    </div>
    