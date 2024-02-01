<script lang="ts">
    export let imgLinkOne: string;
    export let altImgOne: string;
    export let imgLinkOneTop: string;
    export let altImgOneTop: string;
    export let linkOne: string;
    export let imgLinkTwo: string;
    export let altImgTwo: string;
    export let imgLinkTwoTop: string;
    export let altImgTwoTop: string;
    export let linkTwo: string;

    export let bgColorSection: string;
</script>

<section id="get-product" class="flex flex-col justify-center items-center w-full h-auto md:h-auto bg-{bgColorSection} relative overflow-hidden py-8 md:py-16">
    <div class="flex flex-col w-full h-auto px-4 mb-4 md:mb-8">
        <div class="flex flex-col justify-center items-center text-center">
            <h1 class="font-black font-ttnorms text-2xl md:text-4xl text-white uppercase">BodyGoals Planner</h1>
            <h2 class="font-black font-blackttnorms text-4xl md:text-6xl text-zinc-50 uppercase">Resolusi 2023</h2>
        </div>
    </div>
    <div class="grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0">
        <div class="col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center hover:bg-zinc-900 relative">
            <div class="hidden md:block absolute left-0 top-0 w-auto h-auto">
                <img src={imgLinkOneTop} class="w-64 h-auto" alt={altImgOneTop} />
            </div>
            <div class="flex flex-col w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8 text-center bg-zinc-900/50 border border-[#753137]">
                <a target="_blank" rel="noreferrer" href={linkOne} class="flex w-full h-auto justify-center items-center">
                    <img src={imgLinkOne} class="w-10/12 h-auto" alt={altImgOne} />
                </a>
                <a href="/" class="w-64 h-auto px-4 py-2 border border-zinc-900 bg-[#753137]">
                    <span class="font-bold text-white">Ikuti Resolusi Ini</span>
                </a>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center hover:bg-zinc-900 relative">
            <div class="hidden md:block absolute right-0 top-0 w-auto h-auto">
                <img src={imgLinkTwoTop} class="w-64 h-auto" alt={altImgTwoTop} />
            </div>
            <div class="flex flex-col w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-8 text-center bg-zinc-900/50 border border-[#753137]">
                <a target="_blank" rel="noreferrer" href={linkTwo} class="flex w-full h-auto justify-center items-center">
                    <img src={imgLinkTwo} class="w-10/12 h-auto" alt={altImgTwo} />
                </a>
                <a href="/" class="w-64 h-auto px-4 py-2 border border-zinc-900 bg-[#753137]">
                    <span class="font-bold text-white">Ikuti Resolusi Ini</span>
                </a>
            </div>
        </div>
    </div>
</section>