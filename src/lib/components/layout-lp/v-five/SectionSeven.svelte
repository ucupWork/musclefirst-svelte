<script lang="ts">
    import {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
    } from "@rgossiaux/svelte-headlessui";
</script>

<div class="flex justify-center items-center w-full h-auto bg-zinc-100 border">
    <div class="w-full h-auto bg-gray-50 dark:bg-gray-900 py-16">
        <div class="container m-auto text-gray-600 dark:text-gray-300 md:px-12 xl:px-10">
            <div class="flex flex-col justify-start items-start mb-12 space-y-4 px-6 md:px-8">
                <h2 class="text-left text-2xl font-black text-gray-800 dark:text-white md:text-4xl">
                    Yang Sering Ditanyakan?
                </h2>
                <p class="text-left max-w-xl">
                    Mau tanya-tanya seputar Pro Collafit dari Musclefirst? Yuk, simak beberapa pertanyaan yang sering ditanyakan dalam FAQ ini!
                </p>
            </div>
            
            <div  class="flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 pt-0 pb-8">
                <div  class="flex flex-col space-y-2 w-full h-auto justify-center items-center">   
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Apa itu kolagen ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Kolagen adalah protein yang merupakan komponen utama dari jaringan ikat seperti kulit, tendon, cartilage, dan tulang. Kolagen membantu memberikan kekuatan dan struktur pada jaringan-jaringan tersebut dan mempertahankan elastisitas dan daya tahan mereka. Kolagen juga memainkan peran penting dalam memelihara kesehatan kulit dan menjaga keremajaan dan kekencangan kulit. Kolagen juga membantu mencegah kerusakan pada sendi dan membantu memelihara kesehatan tulang.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>  
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Apa manfaat dari mengonsumsi suplemen kolagen ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Ada beberapa manfaat potensial dari mengonsumsi suplemen kolagen, termasuk perbaikan kesehatan kulit, penghilangan nyeri sendi, dan peningkatan kepadatan tulang. Suplemen kolagen juga dapat membantu dengan proses pencernaan dan pengaturan berat badan.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>  
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Apakah suplemen kolagen aman untuk dikonsumsi ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Suplemen kolagen umumnya dianggap aman bagi kebanyakan orang saat dikonsumsi dalam dosis yang direkomendasikan. Namun, selalu lebih baik untuk berbicara dengan dokter sebelum memulai suplemen baru, terutama jika Anda memiliki kondisi medis atau sedang mengonsumsi obat.
                            </p>
                        </DisclosurePanel>
                    </Disclosure> 
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Bagaimana cara mengonsumsi suplemen kolagen ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Suplemen kolagen tersedia dalam berbagai bentuk, termasuk serbuk, cairan, dan pil. Dosis dan petunjuk penggunaan yang direkomendasikan mungkin berbeda tergantung pada produk, jadi sangat penting untuk mengikuti petunjuk pabrikan.
                            </p>
                        </DisclosurePanel>
                    </Disclosure> 
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Cara minum collagen</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                "Minum 1 sachet 1-2 kali dalam sehari, tuangkan 1 sachet kedalam 150ml air, lalu aduk rata dan siap minum"
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Apa itu Marine Collagen ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Marine Collagen adalah jenis kolagen yang diperoleh dari ikan laut dan memiliki bentuk protein yang lebih mudah diserap oleh tubuh dibandingkan dengan kolagen hewan lainnya.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Manfaat Marine Collagen bagi kulit ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Marine Collagen adalah jenis kolagen yang diperoleh dari ikan laut dan memiliki bentuk protein yang lebih mudah diserap oleh tubuh dibandingkan dengan kolagen hewan lainnya.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Manfaat Marine Collagen bagi rambut dan kuku ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Marine Collagen juga membantu memperbaiki kondisi rambut dan kuku, seperti mencegah kerontokan, memperkuat dan memperbaiki kualitas rambut dan kuku.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Keamanan dan efek samping Marine Collagen ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Marine Collagen dianggap aman untuk dikonsumsi dan jarang menimbulkan efek samping, namun sebaiknya berkonsultasi dengan dokter sebelum mengonsumsinya jika memiliki kondisi kesehatan tertentu.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Perbedaan antara Marine Collagen dan Kolagen lain ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Marine Collagen memiliki bentuk protein yang lebih mudah diserap oleh tubuh dan kandungan asam amino yang berbeda dibandingkan dengan kolagen hewan lain seperti daging atau tulang.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Kombinasi dengan suplemen lain ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Marine Collagen bisa dikombinasikan dengan suplemen lain seperti vitamin C untuk mempercepat penyerapan dan meningkatkan manfaat bagi kulit.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Apa L-Glutathione ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                L-Glutathione adalah zat antioksidan yang diproduksi secara alami dalam tubuh. Antioksidan adalah senyawa yang membantu melindungi tubuh dari kerusakan sel yang disebabkan oleh radikal bebas dan stres oksidatif. L-Glutathione terdiri dari tiga asam amino: glutamat, sistein, dan glisin, dan dianggap sebagai salah satu antioksidan paling kuat dalam tubuh.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Berapa lama waktu yang dibutuhkan untuk melihat hasil dari mengonsumsi suplemen kolagen ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Waktu yang dibutuhkan untuk melihat hasil dari mengonsumsi suplemen kolagen mungkin berbeda tergantung pada individu dan alasan mengonsumsi suplemen tersebut. Beberapa orang mungkin melihat perbaikan dalam kesehatan kulit, nyeri sendi, dan kondisi lain dalam beberapa minggu, sementara yang lain mungkin memerlukan beberapa bulan atau bahkan lebih lama untuk melihat hasil yang signifikan. Selain itu, faktor-faktor seperti dosis suplemen, kualitas produk, dan gaya hidup yang sehat juga dapat mempengaruhi waktu yang dibutuhkan untuk melihat hasil yang diinginkan. Namun, dalam banyak kasus, hasil yang signifikan dari suplemen kolagen dapat terlihat dalam 8-12 minggu setelah mulai mengonsumsi suplemen secara teratur.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                     
                    <Disclosure class="flex flex-col w-full h-auto relative" let:open>
                        <DisclosureButton class="flex justify-between items-left text-left md:items-center w-full h-auto bg-white border px-4 py-4 shadow rounded-full">
                            <h2 class="ml-2 font-medium text-sm md:text-md md:text-md text-black">Berapa kolagen yang dibutuhkan tubuh ?</h2>
                            <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                            <div class="i-bi-chevron-right w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
                        </DisclosureButton>
                        
                        <DisclosurePanel class="bg-zinc-100 w-full h-auto py-4 px-2 mt-2 border-zinc-300 rounded-xl">
                            <p class="text-md md:text-sm px-4">
                                Tidak ada jumlah pasti kolagen yang dibutuhkan tubuh setiap harinya, karena kebutuhan setiap orang berbeda-beda tergantung pada usia, jenis kelamin, tingkat aktivitas fisik, dan kondisi kesehatan secara umum. Namun, beberapa ahli mengestimasikan bahwa kebutuhan harian untuk kolagen dapat mencapai sekitar 5-15 gram per hari, tergantung pada sumber yang dikutip. Kebutuhan tubuh akan kolagen dapat dipenuhi melalui konsumsi makanan yang kaya kolagen seperti sup tulang, ikan, dan daging merah, serta melalui suplemen kolagen. Namun, kemampuan tubuh untuk menyerap kolagen menurun seiring bertambahnya usia, sehingga mengonsumsi suplemen mungkin diperlukan untuk memastikan tingkat yang cukup.
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                </div>
            </div>
        </div>
    </div>
</div>