<script lang="ts">
	import { onMount } from 'svelte';
	import { searchAgent, selectedRegion } from '$stores';
    import { DaftarAgen } from '$shared/button/index';
    import { SearchAgent } from '$globals/input/index';
    import { ListAgents } from '$globals/list-group/index';
    import { SelectAgent } from '$globals/selected/index';
    import { listAgenData } from "$contents/list-agent-all";

    export let id: string;
    export let classes: string;
    export let top: boolean;
    export let bottom: boolean;
    export let colorType: string;

    let regions = [];
    let filteredAgents = [];

    $: if ($selectedRegion) getAgentsByRegion();
	$: if ($searchAgent) $selectedRegion = ""; 
    // $: console.log(filteredAgents, $selectedRegion);
    
	const getRegions = () => {
		for (let agentObj of listAgenData) {
			if (!regions.includes(agentObj.wilayah)) {
				regions = [...regions, agentObj.wilayah]
			}
		}
		regions = regions.sort();
	}	

	const getAgentsByRegion = () => {
		// resets search input if menu is being used
		$searchAgent = ""; 
		if ($selectedRegion === "all") {
			return filteredAgents = [];
		} 
		return filteredAgents = listAgenData.filter(agent => agent.wilayah === $selectedRegion);

	}	
    
	const searchAgents = () => {	
		return filteredAgents = listAgenData.filter(agent => {
			let agentTitle = agent.wilayah.toLowerCase();
			return agentTitle.includes($searchAgent.toLowerCase())
		});
	}

    onMount(() => getRegions());
</script>
<section {id} class="text-gray-600 pb-0 md:pb-0 body-font w-full h-auto px-2 py-0 md:px-0 {classes}">
    {#if top}
        <DaftarAgen {colorType} listAgents={listAgenData} />
    {/if}

    <div class="grid grid-cols-2 gap-2 md:gap-4 w-auto h-auto mt-0 md:mt-6">
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto">
            <SelectAgent {regions} val={$selectedRegion} />
        </div>
        <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto">
            <SearchAgent val={$searchAgent} on:input={searchAgents} />
        </div>
    </div>
    <ListAgents {filteredAgents} listAgents={listAgenData} />
    
    {#if bottom}
    <DaftarAgen {colorType} listAgents={listAgenData} />
    {/if}
</section>