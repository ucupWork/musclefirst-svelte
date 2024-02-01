<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let description: string;
    export let imgLink: string;
    export let altImg: string;
</script>
<section class="w-full h-auto md:h-screen overflow-hidden">
    <div class="grid grid-cols-2 gap-4 w-full h-screen relative bg-center bg-cover bg-white md:px-16">
        <div class="col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center items-center md:px-8">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 text-left">
                <span class="text-red-800 font-bold text-3xl">{subtitle}</span>
                <h2 class="text-2xl md:text-5xl font-black text-zinc-900 leading-none">
                    {@html title}
                </h2>
                <div class="flex flex-col w-full h-auto py-4 mt-4 md:mt-8">
                    <p class="leading-relaxed text-md">
                        {@html description}
                    </p>
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center md:justify-end items-center">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0">
                <img src={imgLink} class="w-auto h-auto" alt={altImg} />
            </div>
        </div>
    </div>
</section>