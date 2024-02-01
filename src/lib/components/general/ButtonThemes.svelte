<script lang="ts">
	import { browser } from '$app/env'
	import { setThemeColor } from '$utils/index'
	let isDark = browser && document.documentElement.classList.contains('dark')
	const toggleDarkMode = () => {
		if (!browser) return
		isDark = !isDark
		document.documentElement.classList.toggle('dark')
		localStorage.theme = isDark ? 'dark' : 'light'
		setThemeColor(isDark ? '#151515' : '#fff')
	}
</script>

<button
	on:click={toggleDarkMode}
	class="rounded mx-auto flex h-auto flex-none items-center gap-2 bg-transparent sm:m-0"
	aria-label="Activate {isDark ? 'light' : 'dark'} mode"
	title="Activate {isDark ? 'light' : 'dark'} mode"
>
	<div class="flex w-10 justify-center">
		<div class="i-ph:moon-fill hidden border text-white border-zinc-100 dark:block dark:text-white" />
		<div class="i-ph:sun-fill dark:hidden text-white" />
	</div>
	<span class="pr-4 sm:hidden">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
</button>