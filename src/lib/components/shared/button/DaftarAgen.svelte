<script lang="ts">
	export let listAgents = [];
    export let colorType: string;
    
    let count = 0;
	const getCount = () => {
		for (let agentObj of listAgents) {
			if (agentObj.listAgen(agentObj)) {
				++count;
			}
		}
        return count;
	}	
</script>
<div class="flex flex-col md:flex-row justify-between w-full h-auto px-8 pb-16 md:pb-0 md:px-8 py-0 md:py-8 space-y-4 md:space-y-0">
    <div class="flex flex-col md:flex-row items-center md:space-x-4 w-auto h-auto">
        <div class="flex flex-col text-center md:text-left w-auto h-auto mb-4 md:mb-0">
            <h2 class="font-black text-4xl hidden">{count}</h2>
        </div>
        <div class="flex flex-col -space-y-2 text-center md:text-left w-auto h-auto">
            <span class="{ colorType === 'default' ? 'text-amber-500' : 'text-pink-500' } dark:text-white font-black text-md uppercase">Ingin Menjadi</span>
            <span class="{ colorType === 'default' ? 'text-amber-900' : 'text-pink-900' } dark:text-white font-bold text-md uppercase">Agen Muscle First ?</span>
        </div>
    </div>
    {#if colorType === 'default'}
    <a rel="noreferrer" target="_blank" href={'https://wa.me/6282261111868/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0'} class="w-auto h-auto bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg border shadow-orange-600/50 px-8 py-4 rounded">
        <span class="text-white uppercase text-sm font-bold">Daftar Agen</span>
    </a>
    {:else}
    <a rel="noreferrer" target="_blank" href={'https://wa.me/6282261111868/?text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0'} class="w-auto h-auto bg-gradient-to-r from-rose-400 to-pink-400 shadow-lg border shadow-rose-600/50 px-8 py-4 rounded">
        <span class="text-white uppercase text-sm font-bold">Daftar Agen</span>
    </a>
    {/if}
</div>
<!-- https://wa.me/6285174226889/?text=Saya+tertarik+menjadi+agen -->