<script lang="ts">
    // CDN Set to Digita Ocean Space
    let cdn: boolean = false;

    export let imgUrl: string;
    export let altImg: string;
</script>

<div class="flex justify-center items-center w-full h-full rounded-md shadow-lg p-2 bg-white border">
    <span class="w-auto h-auto p-2">
        <picture>
            <source srcset={imgUrl} type="image/webp"/>
            <img 
                src={imgUrl}
                width="640" 
                height="360"
                class="w-40 h-auto overflow-hidden rounded-md bg-white transition-shadow duration-300 ease-in-out flex items-center justify-center"
                alt={altImg} 
            />
        </picture>
    </span>
</div>