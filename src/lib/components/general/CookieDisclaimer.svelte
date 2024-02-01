<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte"
    let loadDisclaimer = false
    onMount(async () => {
      setTimeout(() => (loadDisclaimer = true), 100)
    })
</script>


{#if loadDisclaimer}
    <div in:fade out:fly={{ y: 200, duration: 1000 }} class="flex justify-center z-[100] w-full bg-zinc-900">
      <div class="alert shadow fixed sm:bottom-2 bottom-0 w-full bg-white p-4">
        <div class="flex flex-col space-y-4">
            <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between w-full h-auto py-2 px-4 md:px-16">
                <div class="flex flex-col justify-start items-center md:items-start text-center md:text-left">
                    <h4 class="flex justify-center pb-1 px-0 md:px-10">
                        <span class="font-black text-2xl">Cookies 🍪</span>
                    </h4>
                    <span class="text-sm text-zinc-600 px-0 md:px-10">Is simply a technology <br> for remembering something about you</span>
                </div>
                <p class="pb-2 text-sm w-full md:max-w-2xl text-center md:text-left">
                    We use cookies to improve your experience. We save your country and chosen
                    providers, and store this data for your next visit. For convenience during
                    your session we keep your genres and input. We use third-party cookies to
                    enhance the experience and our service, and to analyse the use of our site.
                    Your continued browsing means that you have understood and accepted this.
                </p>
            </div>
            
            <div class="flex justify-center md:justify-between items-center space-x-4 md:px-24">
                <a href="https://www.cookiesandyou.com/about-cookies/" target="_blank">
                <button class="bg-transparent rounded border border-black px-8 py-2">
                    <span class="text-black font-medium">About Cookies</span>
                </button>
                </a>
                <button
                class="bg-black rounded px-8 py-2">
                    <span class="text-white">Accept</span>
                </button>
            </div>
        </div>
      </div>
    </div>
{/if}