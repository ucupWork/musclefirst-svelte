/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}
	// interface Platform {}
	interface Session {
		locale: Locales
	}
	// interface Stuff {}
}

/// <reference types="vite/client" />
interface ImportMetaEnv {
	VITE_NOTION_API_KEY: string;
	VITE_NOTION_BLOG_DB: string;
	VITE_NOTION_CAREER_DB: string;
}