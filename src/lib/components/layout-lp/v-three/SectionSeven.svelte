<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let btnText: string;
    export let imgLink: string;
    export let altImg: string;
    export let txtDescOne: string;
    export let txtDescTwo: string;
</script>
<section class="flex justify-center items-center w-full h-auto md:h-screen bg-gray-50 relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-center items-center z-0">
        <div class="grid grid-cols-2 gap-4 w-full h-auto">
            <div class="col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center items-center">
                <div class="flex flex-col w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-center">
                    <img src={imgLink} class="w-10/12 h-auto" alt={altImg} />
                </div>
            </div>
            <div class="col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center items-center">
                <div class="flex flex-col w-auto h-auto px-8 md:px-0 py-4 md:py-8 text-left">
                    <span class="text-rose-900 font-bold text-xl md:text-2xl">{subtitle}</span>
                    <h2 class="text-2xl md:text-4xl font-black text-gray-900 leading-none text-left">
                        {@html title}
                    </h2>
                    <p class="leading-relaxed text-left text-sm text-gray-700">{@html txtDescOne}</p>
                    <p class="leading-relaxed text-left text-sm text-gray-700">{@html txtDescTwo}</p>
                    <button class="w-full border-2 border-zinc-900 bg-transparent rounded-full text-center py-4 px-4 md:px-8 mt-4 md:mt-8">
                        <span class="font-bold uppercase text-zinc-900">{btnText}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>