<script lang="ts">
	import { onMount } from 'svelte';
    import { openModalPanduan } from '$stores/index';
    import { QrCode } from '$shared/qr-code';
    
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
        DialogDescription,
	} from '@rgossiaux/svelte-headlessui';
    
	export let title: string;

	export const closeModal = () => {
		openModalPanduan.set('');
	};

    onMount(async () => {
        console.log(openModalPanduan);
    });
</script>

{#if $openModalPanduan}
<Dialog open={$openModalPanduan === $openModalPanduan} as="div" class="fixed inset-0 z-10 overflow-y-auto" on:close={closeModal}>
    <div class="flex justify-center items-center w-full h-full min-h-screen p-4">
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
        
            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="inline-block h-screen align-middle" aria-hidden="true" />
            <div
                class="inline-block w-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-slate-900 shadow-xl text-black dark:text-white rounded-xl"
            >
                <div class="flex flex-col w-full h-auto space-y-2 border-1 p-4 mb-2 rounded-xl">
                    <div class="flex flex-col w-full h-auto">
                        <DialogTitle as="div" class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-start w-full h-auto">
                                <span class="text-left text-sm uppercase font-medium leading-6 text-black dark:text-white">
                                    {title} <span class="uppercase">{$openModalPanduan}</span>
                                </span>
                            </div>
                            <div class="flex justify-end items-end w-full h-auto">
                                <span class="text-right text-sm uppercase font-medium leading-6 text-black dark:text-white">
                                    {#if $openModalPanduan} 
                                    <div class="w-4 h-4 bg-green-500 rounded-full"></div>
                                    {/if}
                                </span>
                            </div>
                        </DialogTitle>
                    </div>
                    <div class="w-full h-auto py-2 bg-transparent">
                        <DialogDescription class="flex justify-center items-center w-full h-auto">
                            <!-- Description -->
                            <label for={$openModalPanduan}></label>
                            <!-- QRCODE -->
                            {#if $openModalPanduan === 'bulking'}
                                <QrCode codeValue="https://musclefirst.co.id/assets/site/paket/bulking.pdf" squareSize={240} />
                            {:else}
                                <QrCode codeValue="https://musclefirst.co.id/assets/site/paket/cutting.pdf" squareSize={240} />
                            {/if}
                        </DialogDescription>
                    </div>
                </div>

                <button on:click={closeModal} class="p-2 w-full h-auto flex justify-center items-center bg-zinc-900 rounded-xl">
                    <span class="font-bold text-white">Close</span>
                </button>
            </div>
    </div>
</Dialog>
{/if}