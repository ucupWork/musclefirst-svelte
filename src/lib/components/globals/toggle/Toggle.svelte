<script lang="ts">
    export let labelClasses: string;
    export let ariaLabel: string;
    export let checked: boolean;
    export let onclick: () => void;
  </script>
  
  <label class={labelClasses}>
    <span class="aria-label">
      {ariaLabel}
    </span>
    <input type="checkbox" bind:checked on:click={onclick} />
    <span class="toggle bg-transparent border-0 text-zinc-100 px-4 py-0">
      <span class="toggle-icons">
        <slot />
      </span>
    </span>
  </label>
  
  <style>
    label {
      padding: 0;
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      box-sizing: border-box;
      --toggle-height: 1.0rem;
      --toggle-width: 4rem;
    }
    @media all and (orientation: landscape) and (min-width: 1194px) {
      label {
        --toggle-height: 1rem;
        --toggle-width: 1.6rem;
      }
    }
    .aria-label {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      overflow: hidden;
      pointer-events: none;
    }
    input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      overflow: hidden;
    }
    .toggle {
      position: relative;
      display: inline-block;
      width: calc(var(--toggle-width) * 2);
      height: var(--toggle-height);
      margin: 0;
      cursor: pointer;
    }
    .toggle::after {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(var(--toggle-width) - 2px);
      height: calc(var(--toggle-height) - 2px);
      background: var(--color-toggle);
      box-shadow: 1px 2px 3px 0 var(--color-toggle-shadow);
      border-radius: var(--toggle-height);
      content: '';
      transition: left 0.25s cubic-bezier(0.19, 1, 0.22, 1);
    }
    input:checked ~ .toggle:after {
      left: calc(var(--toggle-width));
    }
    .toggle-icons {
      --icon-padding: 6px;
      --stroke-width: 2;
      position: absolute;
      top: 0;
      left: calc(calc(var(--toggle-width) * 0.25) - 1px);
      width: calc(var(--toggle-width) * 1.5);
      height: 100%;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      pointer-events: none;
    }
    .toggle-icons :global(svg) {
      stroke: currentColor;
      stroke-width: var(--stroke-width);
      height: calc(var(--toggle-height) - var(--icon-padding));
      width: calc(var(--toggle-height) - var(--icon-padding));
    }
    input:not(:checked) ~ .toggle .toggle-icons :global(*):first-child,
    input:checked ~ .toggle .toggle-icons :global(*):last-child {
      --stroke-width: 3;
      font-weight: 600;
      color: #FEB300;
    }
    input:focus-visible ~ .toggle {
      background: #FEB300;
      color: #FEB300;
      border-color: #FEB300;
    }
    input:focus-visible ~ .toggle::after {
      background: var(--color-bg);
      box-shadow: 0 0 0 2px #FEB300;
    }
    @media (prefers-color-scheme: dark) {
      :global(body:not(.light)) .toggle::after {
        transform: scale(1.1, 1.1);
      }
    }
    :global(body.dark) .toggle::after {
      transform: scale(1.1, 1.1);
    }
  </style>