<script lang="ts">
	let name = ""
    let email = "";
    let jenkel;
    let umur = "";
    let telephone = "";
    let konsumsi;
    let alasan = "";
    let instagram = "";
    let tiktok = "";

    $: prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLScWpHcJ1Fpy05AvoezwY53Vm9fdrguGRgt8G5TOeVxM5OrO6g/viewform?usp=pp_url&entry.2005620554=${name}&entry.1045781291=${email}&entry.690870189=${jenkel}&entry.1166974658=28&entry.136618820=${telephone}&entry.99092176=${konsumsi}&entry.1735776044=${alasan}&entry.482769991=${instagram}&entry.1726931507=${tiktok}`
</script>

<div
class="w-full md:w-full px-4 md:px-8 py-8 lg:max-w-2xl overflow-hidden bg-zinc-50 rounded-lg shadow-2xl dark:bg-gray-900 shadow-zinc-900/50 dark:shadow-black/50">
    <h1 class="text-xs uppercase font-bold text-gray-700">Lengkapi Data Dibawah Ini</h1>

    <div 
        class="md:mt-4" 
    >
        <div class="grid grid-cols-2 gap-2 w-full h-auto">
            <div class="col-span-full md:col-span-1 flex-1">
                <label for="nama-lengkap" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Nama Lengkap</label>
                <input type="text" name="name" bind:value="{name}" class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div class="col-span-full md:col-span-1 flex-1">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email</label>
                <input type="text" name="email" bind:value="{email}" class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
        </div>

        <div class="grid grid-cols-2 gap-2 w-full h-auto mt-3">
            <div class="col-span-full md:col-span-1 flex-1">
                <label for="jenis-kelamin" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Jenis Kelamin</label>
                <div class="flex flex-col w-auto h-auto">
                    <div class="flex items-center">
                        <input bind:group={jenkel} value="{'Laki - Laki'}" id="laki-laki" name="jenkel" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                        <label for="laki-laki" class="ml-3 block text-sm font-medium text-gray-700">Laki-Laki</label>
                    </div>
                    
                    <div class="flex items-center">
                        <input bind:group={jenkel} value="{'Perempuan'}" id="perempuan" name="jenkel" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                        <label for="perempuan" class="ml-3 block text-sm font-medium text-gray-700">Perempuan</label>
                    </div>
                </div>
            </div>

            <div class="col-span-full md:col-span-1 flex-1">
                <label for="umur" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Umur</label>
                <input type="number" name="umur" bind:value="{umur}" class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
        </div>

        <div class="flex-1 mt-3">
            <label for="telephone" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Nomor Handphone</label>
            <input type="text" name="telephone" bind:value="{telephone}" class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <!-- <div class="grid grid-cols-2 gap-2 w-full h-auto mt-3">
            <div class="col-span-full md:col-span-1 flex-1">
                <label for="foto" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Foto Before</label>
                <input type="file" name="foto" value={form?.foto ?? ''} class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div class="col-span-full md:col-span-1 flex-1">
                <label for="foto" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Foto After</label>
                <input type="file" name="foto" value={form?.foto ?? ''} class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
        </div> -->

        <div class="grid grid-cols-2 gap-2 w-full h-auto mt-3">
            <div class="col-span-full md:col-span-1 flex-1">
                <label for="instagram" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Instagram Link</label>
                <input type="text" name="instagram" bind:value="{instagram}" class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div class="col-span-full md:col-span-1 flex-1">
                <label for="tiktok" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Tiktok Link</label>
                <input type="text" name="tiktok" bind:value="{tiktok}" class="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-amber-400 dark:focus:border-amber-400 focus:ring-amber-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
        </div>
        
        <div class="flex-1 mt-3">
            <label for="jenis-kelamin" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Sudah Pernah Konsumsi Musclefirst</label>
            <div class="flex flex-row justify-between w-full h-auto">
                <div class="flex items-center bg-white shadow rounded p-2 w-full">
                    <input bind:group={konsumsi} value="{'Sudah'}" id="sudah" name="konsumsi" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                    <label for="sudah" class="ml-3 block text-sm font-medium text-gray-700">Sudah</label>
                </div>
                
                <div class="flex items-center bg-white shadow rounded p-2 w-full">
                    <input bind:group={konsumsi} value="{'Belum'}" id="belum" name="konsumsi" type="radio" class="h-4 w-4 border-gray-300 text-amber-600 focus:ring-amber-500">
                    <label for="belum" class="ml-3 block text-sm font-medium text-gray-700">Belum</label>
                </div>
            </div>
        </div>

        <div class="flex-1 mt-3">
            <label for="alasan" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Alasan Ingin Menjadi Musclefirst Team</label>
            <textarea id="alasan" bind:value="{alasan}" name="alasan" rows="3" class="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"></textarea>
        </div>

        <div class="flex justify-center items-center w-full h-auto px-6 py-3 mt-3">
            <a href="{prefilledLink}" target="_blank" rel="noreferrer" class="flex justify-between items-center w-full p-4 px-4 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-500 rounded-md hover:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-50">
                <span class="font-bold text-white">Kirim</span>
                <div class="i-bi:send-fill h-4 w-4 text-white" />
            </a>
        </div>
    </div>
</div>