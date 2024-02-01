<script lang="ts">
    import { CardNoResult } from '$globals/card';
    import { AgentItem } from '$globals/list-group/index';
	import { searchAgent } from '$stores';
    
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
    } from "@rgossiaux/svelte-headlessui";
    
	export let filteredAgents = [];
	export let listAgents = [];
</script>

{#if $searchAgent && (filteredAgents || []).length === 0}
<CardNoResult cardType="agent" />		
{:else if (filteredAgents || []).length > 0}
<div class="px-0 md:px-8 pt-8 md:pt-10 pb-8 md:pb-16 grid grid-cols-1 gap-4 justify-center items-start w-full">
    {#each filteredAgents as { wilayah, listAgen }}
    <div class="col-span-full w-auto h-auto">
        <div class="col-span-full w-full h-auto">
            <Disclosure let:open class="flex flex-col justify-center items-center w-full h-auto shadow border bg-transparent border-zinc-300 p-4 rounded-t-2xl">
                <DisclosureButton class="flex justify-between items-center w-full h-auto py-4 px-4 bg-zinc-50 rounded-t-2xl">
                    <div class="flex flex-row items-center">
                        <div class="flex justify-center items-center {open ? 'bg-zinc-200' : 'bg-zinc-900'} border-2 border-zinc-500 w-8 h-8 rounded-full mr-4">
                            <span class="text-xs font-black uppercase {open ? 'text-zinc-900' : 'text-zinc-200 '}">{listAgen?.length}</span>
                        </div>
                        <h2 class="flex bg-transparen py-0">
                            <span class="text-md font-bold text-black">{wilayah}</span>
                        </h2>
                    </div>
                    <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                    <div class="i-bi-chevron-right text-zinc-900 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                </DisclosureButton>
                
                <DisclosurePanel class="flex flex-col w-full h-auto bg-transparent border-none shadow-xl py-2 md:py-4 px-2 md:px-4">
                    <AgentItem agent={listAgen} />
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
    {/each}
</div>
{:else}
<div class="px-0 md:px-8 pt-12 md:pt-10 pb-8 md:pb-16 grid grid-cols-1 gap-4 justify-center items-start w-full">
    {#each listAgents as { wilayah, listAgen }}
    <div class="col-span-full w-auto h-auto">
        <div class="col-span-full w-full h-auto">
            <Disclosure let:open class="flex flex-col justify-center items-center w-full h-auto shadow border bg-transparent hover:bg-inc-900 border-zinc-300 p-4 rounded-t-2xl">
                <DisclosureButton class="flex justify-between items-center w-full h-auto py-4 px-4 bg-zinc-200 border border-zinc-200 rounded-t-2xl">
                    <div class="flex flex-row items-center">
                        <div class="flex justify-center items-center {open ? 'bg-zinc-200' : 'bg-zinc-900'} border-2 border-zinc-500 w-8 h-8 rounded-full mr-4">
                            <span class="text-xs font-black uppercase {open ? 'text-zinc-900' : 'text-zinc-200 '}">{listAgen?.length}</span>
                        </div>
                        <h2 class="flex bg-transparent  py-0">
                            <span class="text-md font-bold text-zinc-900">{wilayah}</span>
                        </h2>
                    </div>
                    <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                    <div class="i-bi-chevron-right text-zinc-900 w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                </DisclosureButton>
                
                <DisclosurePanel class="flex flex-col w-full h-auto bg-transparent border-none shadow-xl py-2 md:py-4 px-2 md:px-4">
                    <AgentItem agent={listAgen} />
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
    {/each}
</div>
{/if}
