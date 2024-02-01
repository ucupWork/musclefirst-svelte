<script lang="ts">
	import { onMount } from 'svelte';
    import { modal, openModal } from '$stores/index';
    import { CardProductSelected } from '$components/globals/card/index';
    import { productList } from '$contents/home-page/list-products';
	import { classNames } from '$helper/class-names';
	import { API_ROOT } from '$helper/constants';
	import { qrData } from '$utils/qr-data';
	import { page } from '$app/stores';
    
	import {
		Transition,
		TransitionChild,
		Dialog,
		DialogOverlay,
		DialogTitle,
        DialogDescription,
	} from '@rgossiaux/svelte-headlessui';
    
	export let title: string;
    export let modalType: string;

	export const closeModal = () => {
		openModal.set('');
	};

    onMount(async () => {
        console.log(openModal);
    });
</script>

{#if $openModal}
<Dialog open={$openModal === $openModal} as="div" class="fixed inset-0 z-10 overflow-y-auto" on:close={closeModal}>
    <div class="flex justify-center items-center w-full h-full min-h-screen p-4">
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
        
            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="inline-block h-screen align-middle" aria-hidden="true" />
            <div
                class="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-slate-900 shadow-xl text-black dark:text-white rounded-xl"
            >
                <div class="flex flex-col w-full h-auto space-y-2 border-1 p-4 mb-2 rounded-xl">
                    <div id={modalType} class="flex flex-col w-full h-auto">
                        <DialogTitle as="div" class="flex justify-between items-center w-full h-auto">
                            <div class="flex justify-start items-start w-full h-auto">
                                <span class="text-left text-sm uppercase font-medium leading-6 text-black dark:text-white">
                                    {title} 
                                </span>
                            </div>
                            <div class="flex justify-end items-end w-full h-auto">
                                <span class="text-right text-sm uppercase font-medium leading-6 text-black dark:text-white">
                                    {$openModal} 
                                </span>
                            </div>
                        </DialogTitle>
                    </div>
                    <div class="w-full h-auto py-2 bg-transparent">
                        <DialogDescription class="flex justify-center items-center w-full h-auto">
                            <!-- Description -->
                            <label for={modalType}></label>
                            <CardProductSelected width={`256`} height={`256`} cardProductList={productList} codeProduct={$openModal} />
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