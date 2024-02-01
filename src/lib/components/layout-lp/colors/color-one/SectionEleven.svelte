<script lang="ts">
	import type { TestimonialCard } from '$typings/v-one/section-eleven.type';
	export let testimonialCardList: TestimonialCard[];

    export let title: string;
    export let subtitle: string;
    export let type: string;
</script>

<div class="flex justify-start items-center w-full h-auto py-12 md:py-16 bg-zinc-300/50 relative overflow-hidden">

    <div class="w-full h-auto flex flex-col justify-start items-center z-0">
        <div class="flex flex-col w-full h-auto pb-4 md:pb-8 text-center md:text-left px-8 md:px-24">
            <span class="text-pink-600 font-bold text-2xl md:text-3xl uppercase">{subtitle}</span>
            <h2 class="text-4xl md:text-5xl font-black text-zinc-800 leading-none max-w-xs">
                <span class="block uppercase">{title}</span> 
            </h2>
        </div>
        {#if type === 'testimonial-text'}
        <div class="grid grid-cols-3 gap-2 w-full h-auto px-8 md:px-24">
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="flex flex-col md:flex-row items-center w-full h-auto md:h-80 bg-white rounded-xl shadow p-4 relative">
                    <div class="flex flex-col w-full h-auto p-4">
                        <p class="text-sm text-zinc-900 mb-4">
                            <span class="font-serif">"</span> Saya telah mengonsumsi Pro Collafit ini selama sebulan dan hasilnya sangat menakjubkan. Kulit saya terlihat lebih kenyal dan lembap, dan kerutan di wajah saya mulai berkurang. Saya juga merasakan kuku dan rambut saya lebih kuat dan sehat. Saya sangat merekomendasikan produk Muscle First ini kepada siapa saja yang ingin merawat kecantikan dari dalam tubuh.
                            <span class="font-serif">"</span>
                        </p>
                    </div>
                    <div class="absolute -right-4 -bottom-4 w-auto h-auto z-10">
                        <div class="flex w-20 h-20 justify-center items-center mx-auto rounded-full">
                            <div aria-hidden="true" class="md:col-span-2 rounded-full object-cover w-20 h-20 bg-gradient-to-r from-[#eec7de] to-[#c26085]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="flex flex-col md:flex-row items-center w-full h-auto md:h-80 bg-white rounded-xl shadow p-4 relative">
                    <div class="flex flex-col w-full h-auto p-4">
                        <p class="text-sm text-zinc-900 mb-4">
                            <span class="font-serif">"</span> Atas rekomendasi teman, saya mencoba Pro Collafit ini dan saya sangat senang dengan hasilnya. Selama beberapa minggu, kulit saya terlihat lebih cerah dan segar, dan saya merasakan sendi saya lebih fleksibel dan tidak kaku seperti sebelumnya. Rasanya juga enak dan mudah dicerna, jadi saya merasa nyaman mengonsumsinya setiap hari.
                            <span class="font-serif">"</span>
                        </p>
                    </div>
                    <div class="absolute -right-4 -bottom-4 w-auto h-auto z-10">
                        <div class="flex w-20 h-20 justify-center items-center mx-auto rounded-full">
                            <div aria-hidden="true" class="md:col-span-2 rounded-full object-cover w-20 h-20 bg-gradient-to-r from-[#eec7de] to-[#c26085]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-full md:col-span-1 w-full h-auto">
                <div class="flex flex-col md:flex-row items-center w-full h-auto md:h-80 bg-white rounded-xl shadow p-4 relative">
                    <div class="flex flex-col w-full h-auto p-4">
                        <p class="text-sm text-zinc-900 mb-4">
                            <span class="font-serif">"</span> Saya mencari produk kolagen yang berkualitas dan alami, dan Pro Collafit ini memenuhi semua kriteria saya. Setelah mengonsumsinya selama sebulan, kulit saya terlihat lebih kenyal dan terhidrasi, dan rambut saya lebih berkilau dan tidak mudah rontok. Saya sangat puas dengan hasilnya dan akan terus mengonsumsinya sebagai bagian dari rutinitas kecantikan saya.
                            <span class="font-serif">"</span>
                        </p>
                    </div>
                    <div class="absolute -right-4 -bottom-4 w-auto h-auto z-10">
                        <div class="flex w-20 h-20 justify-center items-center mx-auto rounded-full">
                            <div aria-hidden="true" class="md:col-span-2 rounded-full object-cover w-20 h-20 bg-gradient-to-r from-[#eec7de] to-[#c26085]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {:else}
        <div class="grid grid-cols-4 gap-2 w-full h-auto px-8 md:px-24">
			{#each testimonialCardList as list (list.id)}
            <div id="{list.title}_{list.id}" class="col-span-full md:col-span-1 w-full h-auto border-b bg-transparent p-0">
                <div class="flex flex-col w-full justify-center items-center text-center space-y-4">
                    <span class="w-full h-auto p-4 rounded-xl shadow bg-white">
                        <img class="w-full h-auto" src={list.linkImg} alt={list.altImg}>
                    </span>
                </div>
            </div>
			{/each}
        </div>
        {/if}
    </div>
</div>