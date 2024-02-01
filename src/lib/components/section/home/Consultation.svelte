<script lang="ts">
  export let id: string;
</script>
<div
id={id}
class="w-full flex flex-col md:flex-row justify-between items-center space-y-2 bg-white dark:bg-zinc-900 py-12 md:py-16 px-4 md:px-16"
>
<div class="w-full mb-4 py-2 px-0 md:px-0 md:justify-start">
  <h1
    class="font-blackttnorms tracking-tight w-full whitespace-pre-line text-4xl md:text-5xl font-bold text-center md:text-left text-zinc-900 dark:text-white leading-none"
  >
    <span class="text-amber-500 font-black">
      {'Cintai kesehatanmu'}
    </span> 
    {'di masa depan melalui konsultasi bersama kami.'}
  </h1>
</div>
<div
  class="w-auto md:w-full flex flex-row md:justify-end space-y-0 pb-0 md:pb-0"
>
  <a
    href="https://bit.ly/3zs6PCv" target="_blank"
    class="mx-1 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-lg shadow-xl hover:shadow-lg text-pink-400 bg-black border border-black whitespace-pre-line"
    style="transition:all .15s ease">
    {'Konsultasi'}
  </a
  >
  <!-- <a
        href="/"
        class="mx-1 text-blue-300 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black border border-black whitespace-pre-line"
        style="transition:all .15s ease">Learn More</a
      > -->
</div>
</div>
