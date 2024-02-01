export const setThemeColor = (color: string) => {
	const meta = document.querySelector('meta[name="theme-color"]')
	if (meta) meta.setAttribute('content', color)
}
// replaces the locale slug in a relative url
// e.g. /en/blog/article-1 => /de/blog/article-1
export const replaceLocaleInUrl = (path: string, locale: string): string => {
	const [, , ...rest] = path.split('/')
	return `/${[locale, ...rest].join('/')}`
}

export const wait = (timeout = 1000) => new Promise(res => setTimeout(res, timeout));

export function debounce(this: unknown, fn: (...a: any[]) => unknown, timeout = 200) {
  let timer: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), timeout);
  };
}