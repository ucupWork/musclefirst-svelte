<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import { goto } from "$app/navigation";
	const dispatch = createEventDispatcher();

	let waiting: boolean = false;
	let clickType: string = '';
	let timeout = null;
    
	export let classes: string;
	export let destination: string;
	export let delay: number = 600;
	export let currentComponent;
	export let activeComponent: boolean;
    
    

    function changeActiveComponent() {
		activeComponent = !activeComponent;
    }

	function handleClickType() {
		if (waiting) {
			clearTimeout(timeout);
			dispatch('doubleClick');
            changeActiveComponent();
			waiting = false;
            goto(destination);
			return;
		}
		waiting = true;
		timeout = setTimeout(() => {
			dispatch('singleClick');
            changeActiveComponent();
			waiting = false;
            goto(destination);
		}, delay);
	}
</script>


<button class="flex justify-start items-center {classes}" on:click={handleClickType}>
    <div class="w-auto h-auto hidden">
        {#if currentComponent}
            <svelte:component {activeComponent} this={currentComponent} />
        {/if}
    </div>
    <span class="{currentComponent == currentComponent ? 'font-bold text-amber-500' : 'font-normal'}">
	    <slot />
    </span>
</button>