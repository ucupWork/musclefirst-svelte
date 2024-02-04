<script lang="ts">
    export let textPromo: string;
    import textBorder from '$images/special-event/chinese-new-year/slash-kuning.png';
</script>

<div class=" bg-black">
    <h6 class="text-white font-semibold p-10 md:px-20 sm:px-11 xs:px-5 md:text-2xl sm:text-sm xs:text-xs text-justify">
        {textPromo}
    </h6>
    <div class="mx-5 my-3 text-center">
    <img src={textBorder} alt="border text" class="mx-auto w-56 sm:w-44 xs:w-20">
    </div>
</div>