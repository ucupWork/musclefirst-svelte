<script lang="ts">
    export let subtitleOne: string;
    export let titleOne: string;
    export let descTextOne: string;
    export let descTextTwo: string;
    export let descTextThree: string;
</script>

<div class="flex justify-center items-start w-full h-auto md:h-screen bg-black relative overflow-hidden md:py-16 md:pb-16">
    <div class="w-full h-auto flex flex-col justify-center items-start z-0 py-8 md:py-8 px-4 md:px-24">
        <div class="grid grid-cols-2 gap-4 w-full h-auto">
            <div class="col-span-full w-full h-auto flex justify-center md:justify-start items-center">
                <div class="flex flex-col w-auto h-auto px-8 md:px-0 py-8 md:py-8 text-center md:text-left">
                    <span class="font-black text-lg md:text-xl uppercase text-pink-400">{subtitleOne}</span>
                    <h2 class="text-4xl md:text-6xl font-black text-white tracking-none leading-none text-center md:text-left mb-8 md:mb-16">
                        {@html titleOne}
                    </h2>
                    <div class="flex flex-col w-full h-auto py-2">
                        <p class="leading-relaxed text-md text-left text-white w-full border shadow-lg py-3 md:py-3 px-6">
                            {@html descTextOne} 
                        </p>
                        <p class="leading-relaxed text-md text-left text-white w-full border shadow-lg py-3 md:py-3 px-6">
                            {@html descTextTwo} 
                        </p>
                        <p class="leading-relaxed text-md text-left text-white w-full border shadow-lg py-3 md:py-3 px-6">
                            {@html descTextThree} 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>