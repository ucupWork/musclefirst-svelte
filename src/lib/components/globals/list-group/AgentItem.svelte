<script lang="ts">
    import type { ListAgen } from "$typings/list-agent.type";
    export let agent: ListAgen[] = [];
</script>

{#if (agent || []).length > 0}
    {#each agent as val}
    <div class="w-full h-auto flex flex-col border-b pb-2 px-4 py-4 border">
        <div class="w-full h-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div class="flex flex-row justify-start items-start w-auto h-auto space-y-0 md:space-y-0 space-x-0 md:space-x-4">
                <div class="hidden md:flex flex-row w-auto h-auto">
                    {#if val.waNumber}
                    <span class="flex justify-center items-center font-bold text-zinc-200 rounded-md w-12 h-12 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-zinc-900 w-6 h-6 bi bi-house-fill" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                        </svg>                                      
                    </span>
                    {/if}
                </div>
                <div class="flex flex-col space-y-0 w-full h-auto text-left">
                    <span class="flex font-bold text-amber-500">
                        {val.personName}
                    </span>
                    <div class="flex flex-row text-white items-center space-x-2 md:space-x-3 w-auto h-auto">
                        <div class="ml-0 text-sm">
                            <small class=" uppercase font-medium italic">{val.agenType}</small>
                        </div>
                        {#if val.distric}
                        <div class="text-xs">
                            <small class=" uppercase">{val.distric}</small>
                        </div>
                        {/if}
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-center items-center w-full md:w-auto h-auto mt-2">
                <!-- <div class="flex flex-row space-x-2 w-auto h-auto">
                    {#if val.linkLazada}
                    <a rel="noreferrer" target="_blank" href={val.linkLazada} class="flex space-x-2 justify-center items-center font-bold text-zinc-900 px-4 md:px-4 py-2 md:py-0 bg-zinc-50 hover:bg-amber-500 w-full md:w-auto h-auto bg-transparent shadow-lg">
                        <span class="block uppercase text-xs">Lazada</span>                                           
                    </a>
                    {/if}

                    {#if val.linkBukalapak}
                    <a rel="noreferrer" target="_blank" href={val.linkBukalapak} class="flex space-x-2 justify-center items-center font-bold text-zinc-900 px-4 md:px-4 py-2 md:py-0 bg-zinc-50 hover:bg-amber-500 w-full md:w-auto h-auto bg-transparent shadow-lg">
                        <span class="block uppercase text-xs">Bukalapak</span>                                           
                    </a>
                    {/if}

                    {#if val.linkTokped}
                    <a rel="noreferrer" target="_blank" href={val.linkTokped} class="flex space-x-2 justify-center items-center font-bold text-zinc-900 px-4 md:px-4 py-2 md:py-0 bg-zinc-50 hover:bg-amber-500 w-full md:w-auto h-auto bg-transparent shadow-lg">
                        <span class="block uppercase text-xs">Tokopedia</span>                                           
                    </a>
                    {/if}
                    
                    {#if val.linkShopee}
                    <a rel="noreferrer" target="_blank" href={val.linkShopee} class="flex space-x-2 justify-center items-center font-bold text-zinc-900 px-4 md:px-4 py-2 md:py-0 bg-zinc-50 hover:bg-amber-500 w-full md:w-auto h-auto bg-transparent shadow-lg">
                        <span class="block uppercase text-xs">Shopee</span>                                           
                    </a>
                    {/if}
                </div> -->

                {#if val.mapsLink}
                <a id="maps_id" target="_blank" href={val.mapsLink} class="hidden md:flex flex-row space-x-2 justify-center items-center font-bold text-zinc-200 rounded-full w-auto h-auto px-4 py-1 bg-amber-500 shadow-lg border shadow-amber-500/50 ml-4">    
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                        <path d="M9 4v13"></path>
                        <path d="M15 7v5.5"></path>
                        <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path>
                        <path d="M19 18v.01"></path>
                    </svg>
                    <span class="uppercase text-sm">Maps</span>                                     
                </a>
                {/if}

                {#if val.waNumber}
                <a rel="noreferrer" target="_blank" href="https://wa.me/{val.waNumber}/?text={val.waChatText}" class="hidden md:flex flex-row space-x-2 justify-center items-center font-bold text-zinc-200 rounded-full w-auto h-auto px-4 py-1 bg-green-500 shadow-lg border shadow-green-500/50 ml-4">    
                    <span class="uppercase text-sm">Buy Here</span>                                     
                </a>
                {/if}
            </div>
        </div>

        <!-- {#if val.address}
        <div class="w-full h-auto flex flex-col justify-start items-start mb-1">
            <p class="text-sm font-normal uppercase text-zinc-200 text-left">
                {#if val.address}   
                    {val.address}
                {:else}
                    -
                {/if}
            </p>
            {#if val.noteAddress} 
            <div class="text-xs">
                <small class="text-white uppercase">( {val.noteAddress} )</small>
            </div>
            {/if}
        </div>
        {/if} -->
    </div>
        
    <div class="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto h-auto">
        <div class="w-full h-auto flex flex-row space-x-2 justify-start items-center py-2 mr-4">
            {#if val.codType}
                <span class="font-bold rounded-full px-2 py-1 bg-cyan-500 text-xs uppercase text-white">COD</span>
            {/if}
            {#if val.gojekType}
                <span class="font-bold rounded-full px-2 py-1 bg-green-500 text-xs uppercase text-white">Gojek</span>
            {/if}
            {#if val.grabType}
                <span class="font-bold rounded-full px-2 py-1 bg-emerald-500 text-xs uppercase text-white">Grab</span>
            {/if}
        </div>

        {#if val.waNumber}
        <div class="flex md:hidden justify-between items-center w-full h-auto py-4 px-4 border-b">
            <a rel="noreferrer" target="_blank" href="https://wa.me/{val.waNumber}/?text={val.waChatText}" class="flex flex-row space-x-2 justify-between items-center font-bold text-zinc-200 rounded-full w-full h-auto px-4 py-2 bg-green-500 shadow-lg border shadow-green-500/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white w-6 h-6 bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                <span class="uppercase text-sm">Buy Here</span>                                     
            </a>
        </div>
        {/if}

        {#if val.mapsLink}
        <div class="flex md:hidden justify-between items-center w-full h-auto py-4 px-4 border-b">
            <a id="maps_id" target="_blank" href={val.mapsLink} class="flex flex-row space-x-2 justify-between items-center font-bold text-zinc-200 rounded-full w-full h-auto px-4 py-1 bg-amber-500 shadow-lg border shadow-amber-500/50">    
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                    <path d="M9 4v13"></path>
                    <path d="M15 7v5.5"></path>
                    <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path>
                    <path d="M19 18v.01"></path>
                </svg>
                <span class="uppercase text-sm">Maps</span>                                     
            </a>
        </div>
        {/if}
    </div>
    
    {/each}
{:else}
<div class="w-full h-auto flex flex-col space-y-2">
    <!-- Agen 1 -->
    <a rel="noreferrer" target="_blank" href="https://wa.me/6281388328823/?text=Halo,%20saya%20mau%20join%20reseller%20MuscleFirst" class="px-6 font-bold text-zinc-200 rounded-full p-2 bg-amber-500 shadow-lg border shadow-amber-500/50">
        <span class="uppercase font-bold">Daftar Reseller</span>                                          
    </a>
</div>
{/if}