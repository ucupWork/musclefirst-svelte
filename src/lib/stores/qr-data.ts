import { writable } from 'svelte/store';

export const data = writable<Promise<any>>();

export const format = [
	{ format: 'png' },
	{ format: 'jpg' },
	{ format: 'webp' },
	{ format: 'gif' },
	{ format: 'svg' },
];

export const errorCorrectionLevel = [
	{ name: 'Low', value: 'L' },
	{ name: 'Medium', value: 'M' },
	{ name: 'Quartile', value: 'Q' },
	{ name: 'High', value: 'H' },
];

export const inputTypes = [
	{
		type: 'Text',
	},
	{
		type: 'URL',
	},
	{
		type: 'WiFi',
	},
	{
		type: 'Email',
	},
	{
		type: 'SMS',
	},
	{
		type: 'Twitter',
	},
	{
		type: 'Facebook',
	},
];

export const selectedInputType = writable(inputTypes[0]);
export const url = writable(`https://musclefirst.co.id/`);
export const selectedFormat = writable(format[0]);
export const margin = writable(4);
export const resolution = writable(1080);
export const transparentBackground = writable(false);
export const foregroundColor = writable('#000000');
export const backgroundColor = writable('#ffffff');
export const selectedErrorCorrectionLevel = writable(errorCorrectionLevel[1]);