import type TagColor from "./tag-color.type";

export type BlogFrontmatter = {
	title: string;
	summary: string;
	slug: string;
	date: string;
	author: string;
	tags: Array<{
		name: string;
		color: TagColor;
	}>;
	image: string;
};

type Blog = {
	frontmatter: BlogFrontmatter;
	content: string;
	views: string;
};

export default Blog;