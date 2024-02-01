<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let descriptionOne: string;
    export let descriptionTwo: string;
    export let imgLink: string;
    export let altImg: string;
    
    export let bgColor: string;
    export let textHead: string;
    export let textSubHead: string;
    export let txtDescColor: string;
</script>

<section class="w-full h-auto md:h-auto overflow-hidden">
    <div class="grid grid-cols-2 gap-4 w-full h-auto justify-center items-center relative bg-center bg-cover bg-{bgColor} px-4 md:px-16 py-8 md:py-0 border-b border-amber-500">
        <div class="col-span-full md:col-span-1 w-full h-auto md:h-auto flex justify-center items-center md:px-8">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 text-left">
                <span class="text-{textSubHead} font-black text-3xl tracking-tighter uppercase">{subtitle}</span>
                <h2 class="text-2xl md:text-5xl font-black text-{textHead} leading-none">
                {@html title}
                </h2>
                <div class="flex flex-col w-full h-auto py-4 mt-4 md:mt-8">
                    <p class="prose-lg leading-relaxed text-md text-{txtDescColor}">
                        {@html descriptionOne}
                    </p>
                </div>
                <div class="flex flex-col w-full h-auto py-4 mt-2 md:mt-0">
                    <p class="prose-lg leading-relaxed text-md text-{txtDescColor}">
                        {@html descriptionTwo}
                    </p>
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 w-full h-auto md:h-screen flex justify-center md:justify-center items-center">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0">
                <img src={imgLink} class="w-auto h-auto" alt={altImg} />
            </div>
        </div>
    </div>
</section>