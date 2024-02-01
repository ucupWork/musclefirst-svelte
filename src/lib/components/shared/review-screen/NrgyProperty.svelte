<script lang="ts">
    import { ImageResponsive } from "$shared/image";
    // CDN Set to Digita Ocean Space
    let cdn: boolean = false;
</script>

<div class="w-auto h-auto bg-transparent relative">
    <div class="relative w-auto h-auto mx-auto flex justify-center items-center overflow-hidden py-4">
        <picture>
            <source srcset={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-7.webp` : `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png`} type="image/webp"/>
            <ImageResponsive 
                src={cdn ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/optimize/pro-7.webp` : `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png`}
                width={320}
                height={320}
                breakpoints={[320]}
                srcsetActive={false}
                classes="shadow-lg shadow-zinc-500/50 object-center object-cover w-64 h-64 overflow-hidden rounded-lg bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                alt={'Muscle First Pro Nrgy'}
                style="margin: 0px"
            />
        </picture>
            <!-- Button -->
    </div>
</div>