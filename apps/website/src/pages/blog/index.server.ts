import { allPosts } from 'content-collections';
import { compareDesc } from 'date-fns';
import { defineHandler, defineHead } from 'void';

export const head = defineHead(() => ({
  title: 'Blog | Yangshun Tay',
  meta: [{ name: 'description', content: 'Blog posts by Yangshun Tay' }],
}));

export type Props = {
  posts: Array<{ title: string; date: string; url: string }>;
};

export const loader = defineHandler<Props>(() => ({
  posts: allPosts
    .toSorted((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .map(({ title, date, url }) => ({ title, date, url })),
}));
