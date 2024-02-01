<script lang="ts">
    import { SEO } from '$general/index';
    import { websiteSchema, organizationSchema } from '$utils/json-ld';
    import MusclefirstTeam from '$images/musclefirst-team/musclefirst-team.webp';
    import { QrCode } from '$shared/qr-code';
    import 'css-doodle';
</script>

<SEO 
    title="Musclefirst Team QrCode" 
    schemas={[
        websiteSchema, 
        organizationSchema
    ]}  
/>

<div class="flex justify-center items-center w-full h-auto md:h-screen py-32 md:py-0 bg-[#151515] relative">
    <div class="w-full h-full z-0 overflow-hidden">
        <css-doodle click-to-update>
            {`
                :doodle {
                    @grid: 18 / 100vmax;
                    background: #0a0c27;
                }
                --hue: calc(180 + 1.5 * @row * @col);
                background: hsl(var(--hue), 50%, 70%);
                margin: -.5px;
                transition: @r(.5s) ease;
                clip-path: polygon(@pick(
                    '0 0, 100% 0, 100% 100%',
                    '0 0, 100% 0, 0 100%',
                    '0 0, 100% 100%, 0 100%',
                    '100% 0, 100% 100%, 0 100%'
                ));
            `}
        </css-doodle>
    </div>
    <div class="absolute inset-0 w-full h-full z-10">
        <div class="grid grid-cols-12 md:gap-4 w-full h-full">
            <div class="col-span-full md:col-span-6 w-full h-auto hidden md:flex justify-center items-center text-center md:text-left">
                <div class="flex flex-col w-full h-auto justify-center items-center relative">
                    <div class="flex w-full justify-center items-center h-auto z-0">
                        <img class="w-auto h-auto" src={MusclefirstTeam} alt="Musclefirst Team">
                    </div>
                </div>
            </div>
            <div class="col-span-full md:col-span-6 w-full h-auto flex justify-center items-center text-center md:text-left">
                <div class="flex flex-col w-full h-auto space-y-2 justify-center items-center relative">
                    <div class="flex flex-col w-auto h-auto bg-white p-8 rounded-xl shadow">
                        <QrCode codeValue={`https://musclefirst.co.id/musclefirst-team`} squareSize={240} />
                    </div>
                    <div class="bg-transparent px-4 py-2 rounded">
                        <span class="font-bold text-white">Scan Me</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>