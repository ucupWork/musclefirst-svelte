<script lang="ts">
    import { tippy } from '$utils/tippy';
    import TokopediaPromo from '$images/jumbotron/tokped/tokopedia-promo.webp';
    import TokopediaPromoSept01 from '$images/jumbotron/tokped/tokped-sept-01.webp';
    import TokopediaPromoSept02 from '$images/jumbotron/tokped/tokped-sept-02.webp';
    import TokopediaPromoWib01 from '$images/jumbotron/tokped/tokped-wib-01.webp';
    import TokopediaPromoFeb0223 from '$images/jumbotron/tokped/tokped-feb-02-23.jpg';

    export let cdnActive: boolean;
    export let promoType: string;
    export let promoActive: boolean;
    export let id: string;
</script>

{#if promoActive}
    {#if promoType === "satu"}
    <div id={id} class="w-full sm:h-auto md:h-auto bg-[#0a0908] relative px-4 md:px-16 pb-8 md:pb-12">
        <div class="w-auto h-auto relative shadow-xl">
            <a class="w-full h-full relative" href="https://tokopedia.link/uqBHVJIivsb?utm_source=others&utm_medium=brand&utm_campaign=_scboos3_cse_150822_310822" target="_blank">
                <picture class="z-0">
                    <source srcset={TokopediaPromoFeb0223} type="image/webp"/>
                    <img 
                        width={`724`}
                        height={`380`}
                        src={TokopediaPromoFeb0223}
                        class="rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"
                        alt="Tokopedia Promo"/>
                </picture>
            </a>
        </div>
    </div>
    {:else if promoType === "minimal"}
    <div id={id} class="w-full sm:h-auto md:h-auto bg-[#0a0908] relative px-4 md:px-16 pb-8 md:pb-12">
        <div class="w-auto h-auto relative shadow-xl">
            <a rel="noreferrer" class="w-full h-full relative" href="https://tokopedia.link/uqBHVJIivsb?utm_source=others&utm_medium=brand&utm_campaign=_scboos3_cse_150822_310822" target="_blank">
                <picture class="z-0">
                    <source srcset={TokopediaPromoWib01} type="image/webp"/>
                    <img 
                        width={`1200`}
                        height={`150`}
                        src={TokopediaPromoWib01}
                        class="rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"
                        alt="Tokopedia Promo WIB"/>
                </picture>
            </a>
        </div>
    </div>
    {:else}
    <div class="grid grid-cols-2 gap-4 w-full sm:h-auto md:h-auto bg-[#0a0908] relative px-4 md:px-16 pt-8 md:pt-0 pb-8 md:pb-12">
        <div class="col-span-full md:col-span-1 w-full sm:h-auto md:h-auto bg-[#0a0908] relative">
            <div class="w-auto h-auto relative shadow-xl">
                <a class="w-full h-full relative" href="https://tokopedia.link/uqBHVJIivsb?utm_source=others&utm_medium=brand&utm_campaign=_scboos3_cse_150822_310822" target="_blank">
                    <picture class="z-0">
                        <source srcset={cdnActive ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/jumbotron/tokped/tokped-sept-01.webp` : TokopediaPromoSept01} type="image/webp"/>
                        <img 
                            width={`724`}
                            height={`380`}
                            src={cdnActive ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/jumbotron/tokped/tokped-sept-01.webp` : TokopediaPromoSept01}
                            class="rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"
                            alt="Tokopedia Promo"/>
                    </picture>
                </a>
            </div>
        </div>
        <div class="col-span-full md:col-span-1 w-full sm:h-auto md:h-auto bg-[#0a0908] relative">
            <div class="w-auto h-auto relative shadow-xl">
                <a class="w-full h-full relative" href="https://tokopedia.link/uqBHVJIivsb?utm_source=others&utm_medium=brand&utm_campaign=_scboos3_cse_150822_310822" target="_blank">
                    <picture class="z-0">
                        <source srcset={cdnActive ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/jumbotron/tokped/tokped-sept-02.webp` : TokopediaPromoSept02} type="image/webp"/>
                        <img 
                            width={`724`}
                            height={`380`}
                            src={cdnActive ? `https://musclefirst-space.sgp1.cdn.digitaloceanspaces.com/Musclefirst/jumbotron/tokped/tokped-sept-02.webp` : TokopediaPromoSept02}
                            class="rounded-md w-full h-auto md:h-auto inline-flex object-contain md:object-contain object-left md:object-center"
                            alt="Tokopedia Promo"/>
                    </picture>
                </a>
            </div>
        </div>
    </div>
    {/if}
{/if}
