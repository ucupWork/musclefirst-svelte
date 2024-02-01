<script lang="ts">
    import { ImageResponsive } from '$shared/image/index';
    import Lazy from 'svelte-lazy';

    export let id: string;
    
    export let imgUrl: string;
    export let imgAlt: string;
    export let width: number;
    export let height: number;
    
    export let linkHref: string;
</script>

<a id={id}  href={`/${linkHref}`} class="snap-center">
    <picture>
        <source srcset={imgUrl} type="image/webp"/>
        <ImageResponsive 
            srcsetActive={false}
            width={width}
            height={height} 
            breakpoints={[820, 414, 375]}
            src={imgUrl}
            classes="shadow-lg shadow-yellow-500/50 mx-3 w-48 md:w-64 h-48 md:h-64 max-w-xs overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
            alt={imgAlt}
            style="margin: 0px"
        />
    </picture>
</a>