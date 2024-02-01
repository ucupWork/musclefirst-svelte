<script lang="ts">
	import { fade } from 'svelte/transition';
    // export let refresh = '';
</script>

<!-- {#key refresh} -->
<div class="w-full h-auto overflow-hidden relative" in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
    <slot />
</div>
<!-- {/key} -->