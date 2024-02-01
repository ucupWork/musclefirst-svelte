<script lang="ts">
    import {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
    } from "@rgossiaux/svelte-headlessui";
    import { ChevronRightIcon } from "@rgossiaux/svelte-heroicons/solid";
    
    export let id: string;
</script>

<div id={id} class="w-full sm:h-auto md:h-auto bg-[#151515] relative sm:px-4 md:px-8 sm:py-0 md:py-12 border-t border-zinc-900">
    <div  class="w-full flex flex-col">
        <div  class="w-full md:text-left text-center px-8 py-4 flex flex-col justify-start md:justify-center items-center">
            <div  class="w-full flex flex-col md:flex-row items-start justify-center">
                <div  class="flex flex-col space-y-4 w-full mb-4">
                    <h1 class="w-full whitespace-pre-line text-5xl font-black text-left text-white">
                        {'Frequently Asked Questions'}
                    </h1>
                </div>
            </div>
        </div>
    </div>
    <div  class="flex flex-col justify-center items-center w-full h-auto px-8 lg:px-8 pt-4 pb-8">
        <div  class="flex flex-col space-y-2 w-full h-auto justify-center items-center">   
          <Disclosure class="flex flex-col w-full h-auto relative" let:open>
              <div class="absolute left-0 bottom-0 w-2 h-2 bg-amber-500"></div>
              <DisclosureButton class="flex justify-between items-center w-full h-auto bg-white px-4 py-2 shadow">
                <h2 class="font-bold text-md md:text-xs text-black uppercase">Umur berapa bisa mengonsumsi produk Musclefirst?</h2>
                <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                <ChevronRightIcon class="w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
              </DisclosureButton>
            
              <DisclosurePanel class="bg-zinc-50 w-full h-auto p-4 border-t border-zinc-300">
                <p class="text-md md:text-sm">
                  Usia 15 tahun keatas sudah bisa konsumsi produk Musclefirst.
                </p>
              </DisclosurePanel>
          </Disclosure>         
            
          <Disclosure class="flex flex-col w-full h-auto relative" let:open>
              <div class="absolute left-0 bottom-0 w-2 h-2 bg-amber-500"></div>
              <DisclosureButton class="flex justify-between items-center w-full h-auto bg-white px-4 py-2 shadow">
                <h2 class="font-bold text-md md:text-xs text-black uppercase">Apakah produk aman dikonsumsi oleh ibu hamil dan menyusui?</h2>
                <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                <ChevronRightIcon class="w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
              </DisclosureButton>
            
              <DisclosurePanel class="bg-zinc-50 w-full h-auto p-4 border-t border-zinc-300">
                <p class="text-md md:text-sm">
                  Ibu hamil dan menyusui disarankan untuk berkonsultasi kepada dokter terlebih dahulu.
                </p>
              </DisclosurePanel>
          </Disclosure>           
          
          <Disclosure class="flex flex-col w-full h-auto relative" let:open>
              <div class="absolute left-0 bottom-0 w-2 h-2 bg-amber-500"></div>
              <DisclosureButton class="flex justify-between items-center w-full h-auto bg-white px-4 py-2 shadow">
                <h2 class="font-bold text-md md:text-xs text-black uppercase">Apakah aman dikonsumsi oleh pria maupun wanita?</h2>
                <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                <ChevronRightIcon class="w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
              </DisclosureButton>
            
              <DisclosurePanel class="bg-zinc-50 w-full h-auto p-4 border-t border-zinc-300">
                <p class="text-md md:text-sm">
                  Ya, produk aman dikonsumsi oleh pria dan wanita. Apalagi produk Musclefirst sudah bersertifikat Halal, BPOM, HACCP, GMP, ISO 22000, dan LABDOOR A+.
                </p>
              </DisclosurePanel>
          </Disclosure>   

          <Disclosure class="flex flex-col w-full h-auto relative" let:open>
              <div class="absolute left-0 bottom-0 w-2 h-2 bg-amber-500"></div>
              <DisclosureButton class="flex justify-between items-center w-full h-auto bg-white px-4 py-2 shadow">
                <h2 class="font-bold text-md md:text-xs text-black uppercase">Kapan pesanan saya dikirimkan?</h2>
                <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
                <ChevronRightIcon class="w-4 h-4" style={open ? "transform: rotate(90deg);" : ""} />
              </DisclosureButton>
            
              <DisclosurePanel class="bg-zinc-50 w-full h-auto p-4 border-t border-zinc-300">
                <p class="text-md md:text-sm">
                  Pengiriman hari senin-sabtu, jika pesanan masuk sebelum jam 15:00 akan dikirimkan pada hari yang sama. Hari minggu dan tanggal merah libur, sehingga paketmu akan dikirimkan pada hari kerja selanjutnya.
                </p>
              </DisclosurePanel>
          </Disclosure>      
        </div>
    </div>
</div>
