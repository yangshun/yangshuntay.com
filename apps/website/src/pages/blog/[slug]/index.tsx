import { MDXContent } from '@content-collections/mdx/react';

import { Anchor } from '~/components/anchor';
import { Timestamp } from '~/components/timestamp';
import type { Props } from './index.server';

export default function PostPage({ post }: Props) {
  return (
    <div className="max-w-prose mx-auto flex flex-col gap-y-4">
      <Anchor
        className="text-sm text-zinc-500 hover:underline hover:text-zinc-600 transition-colors"
        href="/blog"
      >
        Back to all posts
      </Anchor>
      <article>
        <h1 className="font-semibold tracking-tight text-3xl">{post.title}</h1>
        <p className="text-zinc-500 mt-4 flex gap-x-2 text-sm">
          {post.date && (
            <>
              <Timestamp date={post.date} />
            </>
          )}
        </p>
        <hr className="my-4" />
        <div
          className={[
            'prose prose-zinc',
            'prose-h1:font-semibold prose-h1:tracking-tight',
            'prose-h2:font-semibold prose-h2:tracking-tight',
            'prose-h3:font-semibold prose-h3:tracking-tight',
            'prose-h4:font-semibold prose-h4:tracking-tight',
          ]}
        >
          <MDXContent code={post.body} components={{ a: Anchor }} />
        </div>
      </article>
    </div>
  );
}
