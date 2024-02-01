<script lang="ts">
    import { ImageResponsive } from '$shared/image/index';

    export let id: string;
    export let nameProduct: string;
    export let cocok: string;
    export let imgUrl: string;
    export let imgAlt: string;
    
    export let linkHref: string;
    export let width: number;
    export let height: number;
</script>

<a id={id} target="_blank" href={`/${linkHref}`}  class="w-full h-auto flex flex-col md:flex-row justify-between items-center">
    <div class="flex justify-center items-center">
        <ImageResponsive 
            srcsetActive={false}
            width={width}
            height={height} 
            breakpoints={[820, 414, 375]}
            src={imgUrl}
            classes="shadow-lg border border-yellow-200 w-96 md:w-40 h-auto overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
            alt={imgAlt}
            style="margin: 0px"
        />
    </div>
    <div class="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 px-4 md:px-8 w-auto md:w-full h-auto md:h-auto bg-zinc-900 border-b border-yellow-200">
        <div class="flex flex-col w-auto h-auto text-center md:text-left">
            <h2 class="text-white font-black uppercase text-2xl">{nameProduct}</h2>
            <span class="text-zinc-100 font-normal text-sm">{cocok}</span>
        </div>
        <span class="w-auto h-auto hidden md:block">
            <div class="i-ph:caret-right h-3 w-3 text-yellow-200" />
        </span>
    </div>
</a>