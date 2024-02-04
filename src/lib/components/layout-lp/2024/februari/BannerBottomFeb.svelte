<script lang="ts">
    export let textPromo: string;
    export let textPromoBig: string;
    import productCampaign from '$images/special-event/chinese-new-year/product-combination.webp'
</script>

<div class="p-4 bg-warmGray-600 text-center">
    <h3 class="text-white font-semibold mt-3 text-3xl lg:text-5xl ">{textPromo}</h3>
    <h1 class="text-yellow-400 font-bold text-5xl lg:text-8xl">{textPromoBig}</h1>
    <div class="py-4 px-20 lg:px-56">
        <img src={productCampaign} alt={textPromo} class="">
    </div>
</div>