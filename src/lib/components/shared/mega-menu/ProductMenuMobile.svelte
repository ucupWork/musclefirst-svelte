<script lang="ts">
	import { slide } from "svelte/transition";
    import { openmenuproduct } from '$stores/index';
    import { ImageResponsive } from "$shared/image";
    
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
    } from "@rgossiaux/svelte-headlessui";
    
	export let isOpen: boolean;
</script>

{#if isOpen}
<div on:keydown={(e) => {
        if (e.key === 'Escape') {
            openmenuproduct.set(false);
        }
    }}
    class="flex flex-row justify-between items-center w-full h-auto px-0 overflow-y-auto">
    <!-- List -->
    <div class="col-span-1 flex flex-col w-full h-auto py-4">
        <Disclosure let:open class="w-full h-auto">
            <DisclosureButton class="w-full h-auto">
                <div class="flex justify-between items-center w-full h-auto bg-white py-2 px-4 mb-1">
                    <h2 class="text-zinc-900 font-bold text-sm">{'Bentuk Masa Otot'}</h2>
                    <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                    <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                </div>
            </DisclosureButton>
            {#if open}
            <DisclosurePanel static>
                <ul transition:slide class="w-full h-auto py-2">
                    <li class="w-full h-auto">
                        <a href={'/products/pro-gainer'} class="w-full h-auto">
                        <div class="bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2">
                            <picture>
                                <source srcset={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-gainer/pronew-02_xs8ik9.png'} type="image/webp"/>
                                <ImageResponsive 
                                    src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-gainer/pronew-02_xs8ik9.png'}
                                    width={250}
                                    height={250}
                                    breakpoints={[250]}
                                    srcsetActive={false}
                                    classes="shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                    alt={'Muscle First Pro Gainer'}
                                    style="margin: 0px"
                                />
                            </picture>
                            <button class="flex flex-col justify-start items-start text-xs px-4">
                                <h2 class="text-sm text-zinc-900 font-black">Pro Gainer</h2>
                            </button>
                        </div>
                        </a>
                    </li>
                    <li class="w-full h-auto">
                        <a href={'/products/pro-isolate'} class="w-full h-auto">
                        <div class="bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2">
                            <picture>
                                <source srcset={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png'} type="image/webp"/>
                                <ImageResponsive 
                                    src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png'}
                                    width={250}
                                    height={250}
                                    breakpoints={[250]}
                                    srcsetActive={false}
                                    classes="shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                    alt={'Muscle First Pro Isolate'}
                                    style="margin: 0px"
                                />
                            </picture>
                            <button class="flex flex-col justify-start items-start text-xs px-4">
                                <h2 class="text-sm text-zinc-900 font-black">Pro Isolate</h2>
                            </button>
                        </div>
                        </a>
                    </li>
                    <li class="w-full h-auto">
                        <a href={'/products/pro-creatine'} class="w-full h-auto">
                        <div class="bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2">
                            <picture>
                                <source srcset={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png'} type="image/webp"/>
                                <ImageResponsive 
                                    src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png'}
                                    width={250}
                                    height={250}
                                    breakpoints={[250]}
                                    srcsetActive={false}
                                    classes="shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                    alt={'Muscle First Pro Creatine'}
                                    style="margin: 0px"
                                />
                            </picture>
                            <button class="flex flex-col justify-start items-start text-xs px-4">
                                <h2 class="text-sm text-zinc-900 font-black">Pro Creatine</h2>
                            </button>
                        </div>
                        </a>
                    </li>
                    <li class="w-full h-auto">
                        <a href={'/products/pro-casein'} class="w-full h-auto">
                        <div class="bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2">
                            <picture>
                                <source srcset={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png'} type="image/webp"/>
                                <ImageResponsive 
                                    src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png'}
                                    width={250}
                                    height={250}
                                    breakpoints={[250]}
                                    srcsetActive={false}
                                    classes="shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                    alt={'Muscle First Pro Casein'}
                                    style="margin: 0px"
                                />
                            </picture>
                            <button class="flex flex-col justify-start items-start text-xs px-4">
                                <h2 class="text-sm text-zinc-900 font-black">Pro Casein</h2>
                            </button>
                        </div>
                        </a>
                    </li>
                </ul>
            </DisclosurePanel>
            {/if}
        </Disclosure>
        
        <Disclosure let:open class="w-full h-auto">
            <DisclosureButton class="w-full h-auto">
                <div class="flex justify-between items-center w-full h-auto bg-white py-2 px-4 mb-1">
                    <h2 class="text-zinc-900 font-bold text-sm">{'Turunkan Berat Badan'}</h2>
                    <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                    <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                </div>
            </DisclosureButton>
            {#if open}
            <DisclosurePanel static>
                <ul transition:slide class="w-full h-auto py-2">
                    <li class="w-full h-auto">
                        <a href={'/products/pro-whey'} class="w-full h-auto">
                        <div class="bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2">
                            <picture>
                                <source srcset={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-whey/pronew-03_tjnsg9.png'} type="image/webp"/>
                                <ImageResponsive 
                                    src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-whey/pronew-03_tjnsg9.png'}
                                    width={250}
                                    height={250}
                                    breakpoints={[250]}
                                    srcsetActive={false}
                                    classes="shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                    alt={'Muscle First Pro Whey'}
                                    style="margin: 0px"
                                />
                            </picture>
                            <button class="flex flex-col justify-start items-start text-xs px-4">
                                <h2 class="text-sm text-zinc-900 font-black">Pro Whey</h2>
                            </button>
                        </div>
                        </a>
                    </li>
                    <li class="w-full h-auto">
                        <a href={'/products/pro-isolate'} class="w-full h-auto">
                        <div class="bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2">
                            <picture>
                                <source srcset={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png'} type="image/webp"/>
                                <ImageResponsive 
                                    src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png'}
                                    width={250}
                                    height={250}
                                    breakpoints={[250]}
                                    srcsetActive={false}
                                    classes="shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                    alt={'Muscle First Pro Isolate'}
                                    style="margin: 0px"
                                />
                            </picture>
                            <button class="flex flex-col justify-start items-start text-xs px-4">
                                <h2 class="text-sm text-zinc-900 font-black">Pro Isolate</h2>
                            </button>
                        </div>
                        </a>
                    </li>
                    <li class="w-full h-auto">
                        <a href={'/products/pro-casein'} class="w-full h-auto">
                        <div class="bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2">
                            <picture>
                                <source srcset={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png'} type="image/webp"/>
                                <ImageResponsive 
                                    src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-casein/pronew-04_yaaspe.png'}
                                    width={250}
                                    height={250}
                                    breakpoints={[250]}
                                    srcsetActive={false}
                                    classes="shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                    alt={'Muscle First Pro Casein'}
                                    style="margin: 0px"
                                />
                            </picture>
                            <button class="flex flex-col justify-start items-start text-xs px-4">
                                <h2 class="text-sm text-zinc-900 font-black">Pro Casein</h2>
                            </button>
                        </div>
                        </a>
                    </li>
                </ul>
            </DisclosurePanel>
            {/if}
        </Disclosure>
        
        
        
        <Disclosure let:open class="w-full h-auto">
            <DisclosureButton class="w-full h-auto">
                <div class="flex justify-between items-center w-full h-auto bg-white py-2 px-4 mb-1">
                    <h2 class="text-zinc-900 font-bold text-sm">{'Tingkatkan Stamina'}</h2>
                    <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                    <div class="i-bi-chevron-right text-zinc-800 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                </div>
            </DisclosureButton>
            {#if open}
            <DisclosurePanel static>
                <ul transition:slide class="w-full h-auto py-2">
                    <li class="w-full h-auto">
                        <a href={'/products/pro-creatine'} class="w-full h-auto">
                        <div class="bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2">
                            <picture>
                                <source srcset={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png'} type="image/webp"/>
                                <ImageResponsive 
                                    src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-creatine/pronew-06_grknvm.png'}
                                    width={250}
                                    height={250}
                                    breakpoints={[250]}
                                    srcsetActive={false}
                                    classes="shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                    alt={'Muscle First Pro Creatine'}
                                    style="margin: 0px"
                                />
                            </picture>
                            <button class="flex flex-col justify-start items-start text-xs px-4">
                                <h2 class="text-sm text-zinc-900 font-black">Pro Creatine</h2>
                            </button>
                        </div>
                        </a>
                    </li>
                    <li class="w-full h-auto">
                        <a href={'/products/pro-nrgy'} class="w-full h-auto">
                        <div class="bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2">
                            <picture>
                                <source srcset={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png'} type="image/webp"/>
                                <ImageResponsive 
                                    src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-nrgy/pronew-07_g8tozm.png'}
                                    width={250}
                                    height={250}
                                    breakpoints={[250]}
                                    srcsetActive={false}
                                    classes="shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                    alt={'Muscle First Pro Nrgy'}
                                    style="margin: 0px"
                                />
                            </picture>
                            <button class="flex flex-col justify-start items-start text-xs px-4">
                                <h2 class="text-sm text-zinc-900 font-black">Pro Nrgy</h2>
                            </button>
                        </div>
                        </a>
                    </li>
                    <li class="w-full h-auto">
                        <a href={'/products/pro-isolate'} class="w-full h-auto">
                        <div class="bg-transparent border border-yellow-200 shadow flex flex-row justify-between items-center w-full h-auto text-white space-x-2">
                            <picture>
                                <source srcset={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png'} type="image/webp"/>
                                <ImageResponsive 
                                    src={'https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/product/new-product/pro-isolate/pronew-01_xhisub.png'}
                                    width={250}
                                    height={250}
                                    breakpoints={[250]}
                                    srcsetActive={false}
                                    classes="shadow-sm shadow-yellow-500/50 w-20 h-20 overflow-hidden bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
                                    alt={'Muscle First Pro Isolate'}
                                    style="margin: 0px"
                                />
                            </picture>
                            <button class="flex flex-col justify-start items-start text-xs px-4">
                                <h2 class="text-sm text-zinc-900 font-black">Pro Isolate</h2>
                            </button>
                        </div>
                        </a>
                    </li>
                </ul>
            </DisclosurePanel>
            {/if}
        </Disclosure>
    </div>

</div>
{/if}