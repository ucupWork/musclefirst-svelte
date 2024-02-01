<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { FormVoucher } from '$shared/form/index';
    import { ModalPanduan } from '$globals/modal/index';
    import { openModalPanduan } from '$stores/index';
    import MusclefirstTeam from '$images/musclefirst-team/musclefirst-team.webp';
    
    import 'css-doodle';
</script>

<SEO 
    title="Claim Voucher" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<div class="flex justify-center items-center w-full h-screen overflow-hidden md:h-auto py-32 md:py-0 bg-[#151515] relative">
    <div class="hidden w-full h-auto z-0 overflow-hidden">
        <css-doodle click-to-update>
            {`
                :doodle {
                    @grid: 18 / 100vmax;
                    background: #00000;
                }
                @size: 1px calc(141.4% + 1px);
                transform: rotate(@p(±45deg));
                background: #AEACFB;
                margin: auto;
            `}
        </css-doodle>
    </div>
    <div class="w-full h-screen z-0">
        <div class="flex flex-col w-full h-screen justify-center items-center">
            <div class="w-full h-auto flex justify-center items-center text-center md:text-left">
                <div class="flex flex-col w-auto h-auto relative mt-4 md:mt-8 mb-4 md:mb-8">
                    <div class="flex flex-col w-auto h-auto bg-black p-4 z-10">
                        <h1 class="text-3xl md:text-4xl font-semibold text-white capitalize">
                            Claim Voucher
                        </h1>
                        <h1 class="text-3xl md:text-6xl font-semibold text-white capitalize">
                            <span class="uppercase font-black font-bankghotic">Musclefirst</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div class="w-full h-auto flex justify-center items-center py-8 md:py-0 px-4 md:px-4">
                <FormVoucher />
            </div>

            <div class="flex justify-center items-center w-full h-auto max-w-2xl px-4 md:px-16 py-3 mt-3">
                <a href="{'/'}" rel="noreferrer" class="flex justify-between items-center w-full p-4 px-4 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-z-500 rounded-md bg-red-500 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-50">
                    <span class="font-bold text-white">Batal</span>
                    <div class="i-bi:x h-4 w-4 text-white" />
                </a>
            </div>
        </div>
    </div>
</div>

<ModalPanduan title="Panduan" />