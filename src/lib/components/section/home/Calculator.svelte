<script lang="ts">
    import BannerOne from '$images/healthy/banner-healthy-01.webp';

    export let id: string;
</script>
<div
id={id}
class="relative w-full flex flex-col md:flex-row justify-center bg-cover bg-center bg-no-repeat items-center space-y-2 bg-zinc-200 py-10 md:py-12 px-4 md:px-16"
style="background-image: url({BannerOne});"
>
  <div class="flex flex-col justify-center items-center">
    <div class="w-full mb-4 py-2 px-0 md:px-1 md:justify-start">
      <h1
        class="font-blackttnorms tracking-tight w-full whitespace-pre-line text-4xl md:text-5xl font-bold text-center md:text-left text-zinc-900 dark:text-white leading-none"
      >
        <div class="flex items-start flex-row w-full h-auto">
            <h2 class="font-blackttnorms tracking-tighter font-black text-zinc-900 text-5xl md:text-6xl">
                {'Musclefirst'}
            </h2>
            <h2 class="font-blackttnorms tracking-tighter font-black text-amber-500 text-xl">
                {'Kalkulator'}
            </h2>
        </div>
      </h1>
      <p class="flex text-sm font-thin text-zinc-700 px-1 w-full max-w-sm leading-none mt-1">
          <span class="flex flex-row text-zinc-700 mr-4 md:mr-8 font-black">
              {'Musclefirst'}
              {'Kalkulator'}
          </span>
          <span class="font-medium">
            {'Kalkulator kesehatan online untuk mengukur asupan nutrisi yang dibutuhkan tubuh secara akurat.'}
          </span>
      </p>
    </div>
    
    <div
      class="w-auto md:w-full flex md:hidden flex-row md:justify-end space-y-0 pb-0 md:pb-0"
    >
      <a
        href={`/calculator`}
        class="mx-1 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-lg shadow-xl hover:shadow-lg text-zinc-900 bg-transparent border border-amber-500 whitespace-pre-line"
        style="transition:all .15s ease">
        {'Selengkapnya'}
      </a
      >
      <!-- <a
            href="/"
            class="mx-1 text-blue-300 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black border border-black whitespace-pre-line"
            style="transition:all .15s ease">Learn More</a
          > -->
    </div>
  </div>

  <div class="absolute inset-y-0 right-16 hidden md:flex items-center w-auto h-full">
    <div
      class="w-auto md:w-full flex flex-row md:justify-end space-y-0 pb-0 md:pb-0"
    >
      <a
        href={`/calculator`}
        class="mx-1 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-lg shadow-xl hover:shadow-lg text-zinc-900 bg-transparent border border-amber-500 whitespace-pre-line"
        style="transition:all .15s ease">
        {'Selengkapnya'}
      </a
      >
      <!-- <a
            href="/"
            class="mx-1 text-blue-300 font-bold px-6 py-4 outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow-xl hover:shadow-lg bg-black border border-black whitespace-pre-line"
            style="transition:all .15s ease">Learn More</a
          > -->
    </div>
  </div>
</div>
