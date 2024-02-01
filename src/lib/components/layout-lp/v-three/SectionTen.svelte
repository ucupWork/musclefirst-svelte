<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let btnText: string;
    export let description: string;
    export let linkShopee: string;
</script>
<section id="get-product" class="flex justify-center items-center w-full h-auto py-8 md:py-16 bg-[#0e1d32] relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-center items-center z-0">
        <div class="flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center">
            <span class="text-rose-900 font-black text-2xl uppercase">{subtitle}</span>
            <h2 class="text-4xl md:text-3xl font-black text-white leading-none text-center">
                <span class="block">{title}</span> 
            </h2>
        </div>
        <div class="flex flex-col w-auto h-auto px-8 md:px-8 py-4 md:py-8 text-center mt-16 md:mt-8">
            <p class="text-md text-white leading-relaxed max-w-sm">
                {@html description}
            </p>
        </div>
                
        <a href={linkShopee} class="flex w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-center">
            <h2 class="flex justify-center items-center leading-none text-center bg-rose-800 w-64 border border-gray-900 shadow-lg shadow-rose-500/50 rounded-full py-4 px-6">
                <span class="block text-xl font-black text-white">{btnText}</span> 
            </h2>
        </a>
    </div>
</section>