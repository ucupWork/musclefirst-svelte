<script lang="ts">
	let name = ""
    let email = "";
    let telephone = "";

    $: prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSfsjM_JcwJiNnQuHt4y7lGvsHIYFzEs7KnsVR21xhcH3Y0-PA/viewform?usp=pp_url&entry.2005620554=${name}&entry.1045781291=${email}&entry.1166974658=${telephone}`
</script>

<div
class="w-full md:w-full px-4 md:px-8 py-8 lg:max-w-2xl overflow-hidden bg-zinc-50 rounded-lg shadow-2xl dark:bg-gray-900 shadow-zinc-900/50 dark:shadow-black/50">
    <h1 class="text-xs uppercase font-bold text-gray-700">Lengkapi Data Dibawah Ini</h1>

    <form
        method="POST" 
        action="?/create"
        class="md:mt-4" 
    >
        <div class="grid grid-cols-2 gap-2 w-full h-auto">
            <div class="col-span-full md:col-span-1 flex-1">
                <label for="nama-lengkap" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Nama Lengkap</label>
                <input type="text" name="name" value={name ?? ''} 
                    class="{name ? 'input-error' : 'input-bordered'} block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                {#if name}
                <label for="name" class="label">
                        <span class="label-text-alt text-error">{name[0]}</span>
                </label>
                {/if}
            </div>

            <div class="col-span-full md:col-span-1 flex-1">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email</label>
                <input type="text" name="email" value={email ?? ''} 
                    class="{email ? 'input-error' : 'input-bordered'} block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
        </div>

        <div class="flex-1 mt-3">
            <label for="telephone" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Telephone</label>
            <input type="text" name="telephone" bind:value="{telephone}" class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div class="flex justify-center items-center w-full h-auto px-6 py-3 mt-3">
            <a href="{prefilledLink}" target="_blank" rel="noreferrer"  class="flex justify-between items-center w-full p-4 px-4 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-500 rounded-md hover:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-50">
                <span class="font-bold text-white">Kirim</span>
                <div class="i-bi:send-fill h-4 w-4 text-white" />
            </a>
        </div>
    </form>
</div>