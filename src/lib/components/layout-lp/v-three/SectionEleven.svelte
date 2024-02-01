<script lang="ts">
    import { IndexAgen } from '$components/section/list-agent/index';
    export let title: string;
    export let subtitle: string;
</script>
<section class="flex justify-center items-center w-full h-auto py-8 md:py-16 bg-gray-900 relative overflow-hidden">
    <div class="w-full h-auto flex flex-col justify-center items-center z-0">               
        <div class="w-full h-auto flex justify-center items-center">
            <div class="flex flex-col w-auto h-auto px-8 md:px-0 pb-4 md:pb-8 text-center">
                <span class="text-amber-600 font-bold text-sm md:text-lg uppercase md:max-w-2xl">{subtitle}</span>
                <h2 class="text-3xl md:text-4xl font-black text-white leading-none text-center">
                    <span class="block uppercase max-w-sm">{title}</span> 
                </h2>
            </div>
        </div>
        <IndexAgen colorType={'default'} top={true} bottom={false} id="list-agent" classes="bg-gray-900" />
    </div>
</section>