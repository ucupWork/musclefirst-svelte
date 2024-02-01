<script lang="ts">
    import { IframeVideo } from '$shared/iframe';

    const videos = [
        {
            id: 1,
            title: 'Kol Video 1',
            code: 'DNsu00Jb69A'
        },
        {
            id: 2,
            title: 'Kol Video 2',
            code: 'Xo-gU3rATuw'
        },
        // {
        //     id: 3,
        //     title: 'Kol Video 3',
        //     code: 'zi9yp8usb5g'
        // },
        {
            id: 4,
            title: 'Kol Video 4',
            code: 'mzZcoOrTd80'
        },
        {
            id: 5,
            title: 'Kol Video 5',
            code: '54cvfMx-TNg'
        }
    ]
</script>

<div class="flex justify-center items-center w-full h-auto bg-zinc-100 border">
    <div class="w-full h-auto bg-gray-50 dark:bg-gray-900 py-16">
        <div class="container m-auto text-gray-600 dark:text-gray-300 md:px-8">
            <div class="flex flex-col justify-start items-start mb-12 space-y-4 px-6 md:px-8">
                <h2 class="text-left text-2xl font-black text-gray-800 dark:text-white md:text-4xl">
                    Overview Videos
                </h2>
                <p class="text-left max-w-xl hidden">
                    <!-- Yuk, simak nih beberapa testimoni dari orang-orang yang udah coba produk kita, Pro Collafit dari Musclefirst! Mereka bakal sharing pengalaman mereka setelah pakai produk ini. Siapa tahu, bisa jadi inspirasi buat kamu! -->
                </p>
            </div>
            
            <div  class="flex flex-col justify-center items-center w-full h-auto px-4 md:px-0 pt-0 pb-8">
                <div class="grid grid-cols-{videos.length} gap-2 w-full pb-0">
                    {#each videos as vid}
                    <div class="col-span-full md:col-span-1 flex justify-center items-center w-full h-auto bg-white rounded-xl shadow">
                        <IframeVideo 
                            title={vid.title}
                            id={vid.code}
                        />
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>