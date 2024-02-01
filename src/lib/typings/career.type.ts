import type TagColor from "./tag-color.type";

export type CareerFrontmatter = {
	title: string;
	summary: string;
	slug: string;
	date: {
		start: string;
		end: string;
	};
	tags: Array<{
		name: string;
		color: TagColor;
	}>;
	image: string;
	links: string[];
};

type Career = {
	title: string;
	description: string;
	date: string;
	image: string;
	technologies: string[];
	links: string[];
};

export default Career;