<script lang="ts">
    import Lazy from 'svelte-lazy';
    import ReviewOne from '$images/testimonial/photos/testi-1.jpg?w=500;700;900;1200&format=webp&srcset'
    import ReviewTwo from '$images/testimonial/photos/testi-2.jpg?w=500;700;900;1200&format=webp&srcset'
    import ReviewThree from '$images/testimonial/photos/testi-3.jpg?w=500;700;900;1200&format=webp&srcset'
    import ReviewFive from '$images/testimonial/photos/testi-5.jpg?w=500;700;900;1200&format=webp&srcset'
    import ReviewSeven from '$images/testimonial/photos/testi-7.jpg?w=500;700;900;1200&format=webp&srcset'
    import ReviewEight from '$images/testimonial/photos/testi-8.jpg?w=500;700;900;1200&format=webp&srcset'
    import ReviewNine from '$images/testimonial/photos/testi-9.jpg?w=500;700;900;1200&format=webp&srcset'
    import ReviewTen from '$images/testimonial/photos/testi-10.jpg?w=500;700;900;1200&format=webp&srcset'
    export let id: string;
</script>
<div id={id}
    class="flex justify-center items-center w-full h-auto bg-[#151515] relative sm:px-4 md:px-16 sm:py-0 md:py-8"
>
    <div class="w-full grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <Lazy height={300}>
            <picture>
                <source srcset="${ReviewOne}" type="image/webp"/>
                <img 
                    src="${ReviewOne}"
                    class="w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"
                    alt="Muscle First Review 1"/>
            </picture>
        </Lazy>
        <Lazy height={300}>
            <picture>
                <source srcset="${ReviewTwo}" type="image/webp"/>
                <img 
                    src="${ReviewTwo}"
                    class="w-full h-full rounded shadow-sm object-cover dark:bg-gray-500 aspect-square"
                    alt="Muscle First Review 2"/>
            </picture>
        </Lazy>
    </div>
</div>
