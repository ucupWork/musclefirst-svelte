<script lang="ts">
    export let alt: string;
    export let src: string;
    export let classes: string;
    export let style = "";
    export let breakpoints: number[];
    export let width: number;
    export let height: number;
    export let srcsetActive: boolean;
    
    const [path, filetype] = src.split(".");
    const srcset = breakpoints
        .map((breakpoint) => `${path}_${breakpoint}.${filetype} ${breakpoint}w`)
        .join(", ");
    const notSrcset = breakpoints
        .map((breakpoint) => `${path}.${filetype}`)
        .join(", ");
        
    const sizes = breakpoints
        .map((breakpoint, i, breakpoints) => {
            function minQuery() {
                const previousBreakpoint = breakpoints[i - 1];
                return `(min-width: ${previousBreakpoint + 1}px)`;
            }
            function maxQuery() {
                return `(max-width: ${breakpoint}px)`;
            }
            let mediaQuery = "";
            if (i === 0) {
                mediaQuery = maxQuery();
            } else if (i === breakpoints.length - 1) {
                mediaQuery = minQuery();
            } else {
                mediaQuery = `(${minQuery()} and ${maxQuery()})`;
            }
            return `${mediaQuery} ${breakpoint}px`;
        })
        .join(", ");
</script>

{#if srcsetActive}
    <img class={classes} {width} {height} {alt} {sizes} {src} {srcset} {style} />
{:else}
    <img class={classes} {width} {height} {alt} {sizes} {src} {style} />
{/if}
