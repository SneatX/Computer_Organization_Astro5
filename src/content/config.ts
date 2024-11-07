import { defineCollection, z } from 'astro:content';

const P1 = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		src: z.string(),
	}),
});

const P2 = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		src: z.string(),
	}),
});

const P3 = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		src: z.string(),
	}),
});

export const collections = {
	P1,
	P2,
	P3,
};
