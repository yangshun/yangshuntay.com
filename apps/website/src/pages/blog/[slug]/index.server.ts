import { allPosts } from 'content-collections';
import { defineHandler, defineHead } from 'void';
import { HTTPException } from 'hono/http-exception';

export type Props = {
  post: { title: string; date: string; body: string };
};

export function getPrerenderPaths() {
  return allPosts.map(({ slug }) => ({ slug }));
}

export const loader = defineHandler<Props>((c) => {
  const post = allPosts.find(({ slug }) => slug === c.req.param('slug'));

  if (!post) {
    throw new HTTPException(404, { message: 'Post Not Found' });
  }

  return { post: { title: post.title, date: post.date, body: post.body } };
});

export const head = defineHead<Props>((_c, { post }) => ({
  title: `${post.title} | Yangshun Tay`,
  meta: [{ name: 'description', content: post.title }],
}));
