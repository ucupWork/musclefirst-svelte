<script lang="ts">
	import { onMount } from 'svelte';
    import { openModalCS } from '$stores/index';
    import LogoImage from '$images/site/logo-white.webp';
    
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
        DialogDescription,
	} from '@rgossiaux/svelte-headlessui';
    
	export let title: string;
    export let modalType: string;

	export const closeModal = () => {
		openModalCS.set('');
	};

    onMount(async () => {
        // 
    });
</script>

{#if $openModalCS}
<Dialog open={$openModalCS === $openModalCS} as="div" class="fixed inset-0 z-10 overflow-y-auto" on:close={closeModal}>
    <div class="flex justify-center items-center w-full h-full min-h-screen p-4">
        <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
        <span class="inline-block h-screen align-middle" aria-hidden="true" />
        <div
            class="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-slate-900 shadow-xl text-black dark:text-white rounded-xl"
        >
            <div class="absolute -right-2 -top-2 w-auto h-auto">
                <button on:click={closeModal} class="p-2 w-12 h-12 flex justify-center items-center bg-zinc-900 rounded-2xl">
                    <div class="i-ph:x h-4 w-4 text-amber-500" />
                </button>
            </div>

            <div class="flex flex-col w-full h-auto space-y-2 p-0 mb-4 rounded-xl">
                <div id={modalType} class="flex flex-col w-full h-auto">
                    <DialogTitle as="div" class="flex justify-between items-center w-full h-auto">
                        <div class="flex justify-start items-start w-full h-auto">
                            <span class="text-left text-sm uppercase font-medium leading-6 text-black dark:text-white">
                                {title} 
                            </span>
                        </div>
                    </DialogTitle>
                </div>
                <div class="w-full h-auto py-2 bg-transparent">
                    <DialogDescription class="flex justify-center items-center w-full h-auto">
                        <div class="flex flex-col justify-center items-center w-full h-64 bg-zinc-900 shadow-xl border rounded-xl">
                            <div class="flex flex-row justify-center items-center w-full h-auto space-x-2 px-0 mb-8 md:mb-12">
                                <a target="_blank" rel="noreferrer nofollow" href={'https://api.whatsapp.com/send/?phone=6282261111868&text=Info+Dari+Website+%3A%22Hallo%2C+Saya+tertarik+untuk+bergabung+menjadi+agen+Muscle+First+nih+.%22&type=phone_number&app_absent=0'} class="w-auto h-auto p-4 bg-zinc-300 text-amber-900 hover:text-amber-500">
                                    <div class="i-ph:phone h-8 w-8 fill-current" />
                                </a>
                                <div class="flex flex-col w-full h-auto px-8">
                                    <span class="text-amber-600 uppercase font-bold text-xs">Telephone</span>
                                    <h1 class="font-scpbold text-white text-2xl md:text-2xl tracking-widest leading-relaxed">+6282261111868</h1>
                                </div>
                            </div>

                            <div class="flex flex-row justify-between items-center w-full h-auto px-8">
                                <div class="flex flex-col w-auto h-auto pl-0">
                                    <span class="text-white uppercase font-bold text-xs">Email</span>
                                    <small class="text-white uppercase font-normal text-xs">info@musclefirst.co.id</small>
                                </div>
                                <img
                                    width="647px"
                                    height="504px"
                                    src={LogoImage}
                                    class="w-12 md:w-16 h-auto"
                                    alt="Muscle First Logo"
                                />
                            </div>
                        </div>
                    </DialogDescription>
                </div>
            </div>
            <div class="absolute inset-x-0 bottom-0 w-full h-2 bg-amber-900"></div>
        </div>
    </div>
</Dialog>
{/if}