<script lang="ts">
    import { scale } from "svelte/transition";
    export let title: string = "";
    export let id: string = "";
</script>

<iframe 
  width="356" 
  height="633" 
  {title}
  src="https://www.youtube.com/embed/{id}" 
  frameborder="0" 
  in:scale={{ delay: 500, duration: 800 }}
  class="rounded-xl shadow"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen></iframe>
  
<style>
</style>