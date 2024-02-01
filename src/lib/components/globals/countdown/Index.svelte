<script lang="ts">
    import { Countdown } from './index'
    export let borderColor: string;
    export let dateFormatText: string;
    export let endTimeText: string;

    export let width: string;
    export let height: string;
    export let bgColor: string;
    export let textSize: string;
    export let textColor: string;
    export let flexType: string;
</script>

<div class="w-auto h-auto py-2 px-0"> 
    <Countdown zone="Asia/Bangkok" from={dateFormatText} dateFormat="YYYY-MM-DD H:m:s" let:remaining>
        <div class="flex flex-row w-full h-auto justify-center items-center space-x-2 md:space-x-4">
            {#if remaining.done === false}
            <div class="flex {flexType} justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-auto h-auto">
                <div class="flex justify-center items-center bg-{bgColor} shadow w-{width} h-{height} border border-{borderColor}-200">
                    <span class="font-bold text-{textSize} text-{textColor}">{remaining.days}</span>
                </div>
                <span class="font-bold text-sm uppercase text-{textColor}">Hari</span>
            </div>
            <div class="flex {flexType} justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-auto h-auto">
                <div class="flex justify-center items-center bg-{bgColor} shadow w-{width} h-{height} border border-{borderColor}-200">
                    <span class="font-bold text-{textSize} text-{textColor}">{remaining.hours}</span>
                </div>
                <span class="font-bold text-sm uppercase text-{textColor}">Jam</span>
            </div>
            <div class="flex {flexType} justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-auto h-auto">
                <div class="flex justify-center items-center bg-{bgColor} shadow w-{width} h-{height} border border-yellow-200">
                    <span class="font-bold text-{textSize} text-{textColor}">{remaining.minutes}</span>
                </div>
                <span class="font-bold text-sm uppercase text-{textColor}">Menit</span>
            </div>
            <div class="flex {flexType} justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-auto h-auto">
                <div class="flex justify-center items-center bg-{bgColor} shadow w-{width} h-{height} border border-yellow-200">
                    <span class="font-bold text-{textSize} text-{textColor}">{remaining.seconds}</span>
                </div>
                <span class="font-bold text-sm uppercase text-{textColor}">Detik</span>
            </div>
            {:else}
            <div class="w-full h-auto flex justify-center items-center bg-{bgColor} px-8 py-2 border border-yellow-200">
                <h2 class="font-bold uppercase text-md text-{textColor}">{endTimeText}</h2>
            </div>
            {/if}
        </div>
    </Countdown>
</div>