<script lang="ts">
    export let subtitle: string;
    export let title: string;
    export let brandTitle: string;
</script>

<div class="flex md:hidden justify-center items-center w-full h-auto py-8 md:py-8 bg-zinc-900 relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-center items-start z-0">
        <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto px-8 md:px-24">
            <div class="flex flex-col md:flex-row space-x-2 w-auto h-auto text-center md:text-start">
                <h2 class="uppercase text-2xl md:text-3xl font-normal text-white leading-none text-center md:text-start">
                    {@html title}
                </h2>
                <span class="uppercase text-yellow-200 font-black text-2xl md:text-3xl">{subtitle}</span>
                <span class="uppercase text-amber-500 font-black text-2xl md:text-3xl">{brandTitle}</span>
            </div>

            <div class="hidden md:flex flex-row space-x-2 w-auto h-auto mt-4">
                <div class="w-8 h-8 bg-gray-200"></div>
                <div class="w-8 h-8 bg-gray-100"></div>
                <div class="w-8 h-8 bg-white"></div>
            </div>
        </div>
    </div>
</div>