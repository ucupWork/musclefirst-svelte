<script lang="ts">
  export let id: string;
</script>
<div
id={id}
class="w-full flex flex-col md:flex-row justify-between items-center space-y-2 bg-white dark:bg-zinc-900 py-16 px-4 md:px-8"
>
<div class="w-full mb-4 py-2 px-0 md:px-8 justify-center md:justify-start items-center md:items-start text-center md:text-left">
<h1
  class="font-blackttnorms tracking-tight w-full whitespace-pre-line text-4xl md:text-5xl font-bold text-center md:text-left text-zinc-900 dark:text-white"
>
  {'Ingin memiliki penghasilan tambahan setiap bulan'}
</h1>
<span class="text-sm uppercase text-amber-500 font-black">{'Agen Musclefirst'}</span> 
</div>
<div
class="w-auto md:w-full flex flex-row md:justify-end space-y-0 pb-0 md:pb-0 pr-0 md:pr-8"
>
<a
  href={'/agent'} target="_blank"
  class="mx-1 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-lg shadow-xl hover:shadow-lg text-emerald-400 bg-black border border-black whitespace-pre-line"
  style="transition:all .15s ease">
  {'Gabung Sekarang'}
</a
>
<!-- <a
      href="/"
      class="mx-1 text-blue-300 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black border border-black whitespace-pre-line"
      style="transition:all .15s ease">Learn More</a
    > -->
</div>
</div>
