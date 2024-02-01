import type { Writable } from 'svelte/store';

export interface ErrorLoadParams {
    status: number;
    error: Error;
}

export interface ErrorLoadResult {
    props: {
        status: number;
        error: string;
    };
}