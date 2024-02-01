import 'tippy.js/animations/perspective-subtle.css';
import { createTippy } from 'svelte-tippy';

export const tippy = createTippy({
  animation: 'perspective-subtle',
  theme: 'a-link',
  arrow: false
});