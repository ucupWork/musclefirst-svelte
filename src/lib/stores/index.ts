import { writable } from 'svelte/store';

export const modal = writable(null);
export const modalOpen = writable(false);
export const openModal = writable('');
export const openModalAgent = writable('');
export const openModalCS = writable('');
export const openModalPanduan = writable('');
export const openmobile = writable(false);
export const openmenuproduct = writable(false);
export const shopeepromo = writable(true);
export const globalpromo = writable(true);
export const lpCountdown = writable(false);
export const searchTerm = writable('');
export const searchAgent = writable('');
export const searchBlog = writable('');
export const selectedRegion = writable('');
export const disabledScroll = writable(false);
export const waPopUpButton = writable(false);

export const state = writable({
    loading: true,
});

export function storeBool(initial: boolean) {
  const isOpen = writable<boolean>(initial)
  const { set, update } = isOpen
  return {
    isOpen,
    open: () => set(true),
    close: () => set(false),
    toggle: () => update((n) => !n),
  }
}