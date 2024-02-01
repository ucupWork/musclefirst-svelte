export const canWebShare = () => navigator.share;

export function share(title: any, url: any) {
	if (navigator.share) {
		navigator.share({ title, url }).catch(() => console.error('Share failed'));
	} else {
		console.error('navigator.share unavailable');
	}
}