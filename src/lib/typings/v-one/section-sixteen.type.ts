export type BeforeAfterCard = {
    id: string;
    title: string;
	person?: Array<{
        titlePerson?: string;
        linkImg?: string;
        altImg?: string;
        tag?: string;
	}>;
}