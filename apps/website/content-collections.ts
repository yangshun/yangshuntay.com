import {defineCollection, defineConfig} from '@content-collections/core';
import {compileMDX} from '@content-collections/mdx';
import {z} from 'zod';
import remarkGfm from 'remark-gfm';

const posts = defineCollection({
  name: 'posts',
  directory: 'content/blog',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string(),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
    });

    return {
      ...document,
      body,
      url: `/blog/${document.slug}`,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
