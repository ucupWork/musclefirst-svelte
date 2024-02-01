<script lang="ts">
    export let imgLink: string;
    export let altImg: string;
</script>
<section class="w-full h-auto">
    <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto md:px-24 z-10 bg-[#0e1d32] shadow">
        <div class="flex w-auto h-auto px-0 md:px-0">
            <img src={imgLink} alt={altImg}>
        </div>
    </div>
</section>