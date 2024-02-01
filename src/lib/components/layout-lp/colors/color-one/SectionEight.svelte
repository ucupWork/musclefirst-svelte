<script lang="ts">
    export let subtitle: string;
    export let title: string;
    export let imgLink: string;
    export let altImg: string;
    export let btnText: string;
</script>

<div class="flex justify-center items-center w-full h-auto md:h-screen bg-zinc-50 relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-center items-center px-4 md:px-8 z-0">
        <div class="grid grid-cols-2 gap-0 md:gap-4 w-full h-auto px-0 md:px-20">
            <div class="col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center items-center">
                <div class="flex w-full h-auto justify-center items-center px-0 md:px-0 py-4 md:py-0 text-center">
                    <picture>
                        <source srcset={imgLink} type="image/webp"/>
                        <img 
                            src={imgLink}
                            class="w-full h-auto"
                            alt={altImg} />
                    </picture>
                </div>
            </div>
            <div class="col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center md:justify-end items-start md:items-center">
                <div class="flex flex-col w-full md:w-auto h-auto px-8 md:px-0 py-8 md:py-8 text-left">
                    <span class="font-black text-2xl md:text-3xl uppercase text-zinc-500">{subtitle}</span>
                    <h2 class="text-3xl md:text-6xl font-black text-black tracking-none leading-none text-left mb-8 md:mb-16">
                        {@html title}
                    </h2>
                    <button on:click class="flex justify-center items-center leading-none text-center bg-gradient-to-r from-pink-500 to-rose-300 w-full md:w-auto rounded border shadow-lg py-3 md:py-3 px-6">
                        <span class="block text-xl font-black text-white">{btnText}</span> 
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>