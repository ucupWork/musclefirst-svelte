<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import { FormTeam } from '$shared/form/index';
    import { ModalPanduan } from '$globals/modal/index';
    import { openModalPanduan } from '$stores/index';
    import MusclefirstTeam from '$images/musclefirst-team/musclefirst-team.webp';
    
    import 'css-doodle';
</script>

<SEO 
    title="Musclefirst Team" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<div class="flex justify-center items-center w-full h-screen overflow-y-auto md:h-auto py-32 md:py-0 bg-[#151515] relative">
    <div class="hidden md:flex w-full h-auto z-0 overflow-hidden">
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
    <div class="absolute inset-0 w-full h-auto md:h-full z-10">
        <div class="flex flex-col w-full h-auto md:h-full justify-center items-center">
            <div class="w-full h-auto flex justify-center items-center text-center md:text-left">
                <div class="flex flex-col w-auto h-auto relative mt-12 md:mt-64 mb-4 md:mb-8">
                    <div class="absolute inset-x-0 md:bottom-10 hidden md:flex w-auto h-auto z-0">
                        <img class="w-full h-auto" src={MusclefirstTeam} alt="Musclefirst Team">
                    </div>
                    <div class="flex flex-col w-auto h-auto bg-black p-4 z-10">
                        <h1 class="text-3xl md:text-4xl font-semibold text-white capitalize">
                            Gabung Bersama
                        </h1>
                        <h1 class="text-3xl md:text-6xl font-semibold text-white capitalize">
                            <span class="uppercase font-black">Musclefirst Team</span>
                        </h1>
                    </div>
                    <div class="flex flex-col md:flex-row justify-center items-center w-full md:w-auto h-auto md:space-x-4 mt-4 md:mt-6">
                        <button class="flex justify-between items-center bg-white shadow rounded p-2 w-full" on:click={() => ($openModalPanduan = 'bulking')}>
                            <span class="text-xs uppercase font-bold">Panduan Bulking</span>
                            <div class="i-bi:download h-3 w-3 text-zinc-900" />
                        </button>
                        <button class="flex justify-between items-center bg-white shadow rounded p-2 w-full mt-2 md:mt-0" on:click={() => ($openModalPanduan = 'cutting')}>
                            <span class="text-xs uppercase font-bold">Panduan Cutting</span>
                            <div class="i-bi:download h-3 w-3 text-zinc-900" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full h-auto flex justify-center items-center py-8 md:py-0 px-4 md:px-4">
                <!-- Form -->
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