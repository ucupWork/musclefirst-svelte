<script lang="ts">
    import { IndexAgen } from '$section/list-agent';
    
    import Agent01 from '$images/agent/agent-01.webp';
    import Agent02 from '$images/agent/agent-02.webp';
    import Agent03 from '$images/agent/agent-03.webp';
    
    export let waLink: string;
    export let btnText: string;
</script>
    
<section class="w-full h-auto">
    <div class="flex flex-col w-full justify-center items-center text-center md:text-left p-4 md:p-16">
        <!-- <div class="grid grid-cols-1 gap-4 w-full h-auto mb-0 px-2 md:px-8 pb-8 md:pb-16">
            <div class="w-full h-auto flex flex-col justify-center items-center md:items-start mb-8">
                <h1 class="font-blackttnorms tracking-tighter w-full text-4xl md:text-4xl text-center md:text-left font-black uppercase text-zinc-50">
                    Cerita Sukses Musclefirst 
                </h1>
                <p class="w-auto leading-relaxed text-zinc-50 text-lg tracking-loose text-center md:text-left px-4 md:px-0">
                    Dokumentasi perjalanan sukses para agen bersama Muscle First.
                </p>
            </div>

            <div class="grid grid-cols-2 gap-2 md:gap-4 w-full h-auto">
                <div class="col-span-full md:col-span-1 w-auto h-auto">
                    <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/77W-x78iYuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-span-full md:col-span-1 w-auto h-auto">
                    <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/vvyDi_QE6LQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-span-full md:col-span-1 w-auto h-auto">
                    <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/kUVbnuJGmMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-span-full md:col-span-1 w-auto h-auto">
                    <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-2">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zZS6412dT9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-3 gap-2 md:gap-4 w-full h-auto">
                <div class="col-span-full md:col-span-1 w-full md:w-auto h-auto">
                    <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2">
                        <img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={Agent01}>
                    </div>
                </div>
                <div class="col-span-full md:col-span-1 w-full md:w-auto h-auto">
                    <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2">
                        <img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={Agent02}>
                    </div>
                </div>
                <div class="col-span-full md:col-span-1 w-full md:w-auto h-auto">
                    <div class="flex w-full h-auto justify-center items-center bg-transparent md:bg-white rounded shadow-xl p-0 md:p-2">
                        <img role="presentation" alt="img" class="object-contain w-full rounded h-auto dark:bg-gray-500" src={Agent03}>
                    </div>
                </div>
            </div>
        </div> -->
    
        <section class="w-full h-auto">
            <div class="flex justify-center items-center w-full h-auto py-4 md:py-0 bg-transparent relative overflow-hidden">
                <div class="w-full h-auto flex flex-col justify-center items-center z-0">               
                    <div class="w-full h-auto flex justify-center items-center">
                        <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto px-0 md:px-8 pb-4 md:pb-0">
                            <div class="flex flex-col w-auto h-auto">
                                <span class="text-amber-600 font-bold text-sm md:text-lg uppercase">
                                    Klik Disini Untuk Beli Musclefirst
                                </span>
                                <h2 class="text-3xl md:text-4xl font-black text-zinc-50 leading-none text-center md:text-left mb-8">
                                    <span class="block uppercase max-w-xl">
                                        Dapatkan Langsung di Kota Terdekat Kamu
                                    </span> 
                                </h2>
                            </div>
                        </div>
                    </div>
                    <slot />
                    <!-- <IndexAgen id="list-agent" classes="bg-white border rounded-xl" top={true} bottom={false} colorType="default" /> -->
                </div>
            </div>
        </section>
    </div>
</section>