<script lang="ts">
    import LogoImage from '$images/site/logo-black.webp';
</script>

<div class="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center w-full h-auto mb-2">
    <div class="flex space-x-2 justify-start items-center w-full md:w-1/2 h-auto py-2 px-4 bg-transparent border-l-4 border-zinc-500">
        <!-- <div class="flex justify-center items-center w-auto h-auto py-2 px-4 bg-transparent">
            <div class="w-auto h-auto p-2 bg-transparent mr-0">
                <img class="w-20 h-auto" src={OmniImage} alt="Musclefirst Logo" />
            </div>
        </div>
        <div class="w-auto h-auto">
            <span class="font-bold">X</span>
        </div> -->
        <div class="flex justify-center items-center w-auto h-auto py-0 px-4 bg-transparent">
            <div class="w-auto h-auto p-0 bg-transparent mr-4 rounded-full">
                <img class="w-8 md:w-12 h-auto" src={LogoImage} alt="Musclefirst Logo" />
            </div>
            <div class="flex flex-col w-auto h-auto text-xs">
                <span class="font-black text-sm text-zinc-900">{'Musclefirst'}</span>
                <small class="font-medium text-zinc-700 -mt-1 uppercase">{'Kalkulator'}</small>
            </div>
        </div>
    </div>
    <div class="flex justify-end items-end w-full md:w-1/2 h-auto">
        <div class="grid grid-cols-2 gap-2 w-full md:w-auto h-auto">
            <a href={'/'} class="col-span-1 w-full h-auto flex justify-center items-center shadow p-4">
                <div class="i-bi:arrow-clockwise h-4 w-4 text-black" />
            </a>
            <div class="col-span-1 w-full h-auto flex justify-center items-center shadow p-4">
                <div class="i-bi:link-45deg h-4 w-4 text-black" />
            </div>
        </div>
    </div>
</div>