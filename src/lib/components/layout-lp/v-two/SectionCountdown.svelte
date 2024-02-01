<script lang="ts">
    import { CountTime } from '$globals/countdown/index';
    export let title: string;
    export let subtitle: string;
    export let dateText: string;
    
    export let textColor: string;
    export let bgColor: string;
    export let bgColorSection: string;
</script>

<section class="flex justify-center items-center w-full h-auto bg-{bgColorSection} relative py-8 md:py-20">

    <div class="grid grid-cols-2 gap-4 w-full h-auto justify-center items-center z-0 px-8 md:px-16">
        <div class="col-span-full md:col-span-1 w-full h-auto flex flex-col justify-center items-center">
            <div class="w-full justify-center items-center h-auto px-8 md:px-0 py-4 md:py-0">
                <div class="flex flex-col text-center md:text-left w-auto h-auto">
                    <span class="text-black font-medium text-xl md:text-2xl">{subtitle}</span>
                    <h2 class="text-2xl md:text-4xl font-black text-zinc-800 leading-none text-center md:text-left uppercase">
                        <span class="block">{@html title}</span> 
                    </h2>
                    <span class="text-amber-500 font-black text-2xl uppercase">{dateText}</span>
                </div>
            </div>
        </div>
        
        <div class="col-span-full md:col-span-1 w-full h-auto flex justify-center md:justify-end items-center md:pr-16">
            <CountTime flexType="flex-col md:flex-row" {bgColor} {textColor} width="16" height="16" textSize="2xl" borderColor="yellow" dateFormatText="2022-12-05 00:00:00" endTimeText="The time has come!" />
        </div>
    </div>
</section>