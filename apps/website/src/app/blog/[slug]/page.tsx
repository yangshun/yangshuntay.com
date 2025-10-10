import {MDXContent} from '@content-collections/mdx/react';
import Link from 'next/link';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

import Timestamp from '~/components/Timestamp';
import {allPosts} from 'content-collections';
import clsx from 'clsx';
import Header from '~/components/Header';

type Props = {
  params: Promise<{slug: string}>;
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Yangshun Tay`,
    description: post.title,
  };
}

export default async function PostPage({params}: Props) {
  const {slug} = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-prose mx-auto flex flex-col gap-y-4">
      <Header
        rightContents={
          <Link
            className="text-sm text-zinc-500 hover:underline hover:text-zinc-600 transition-colors"
            href="/blog">
            Back to all posts
          </Link>
        }
      />
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
          className={clsx(
            'prose prose-zinc',
            'prose-h1:font-semibold prose-h1:tracking-tight',
            'prose-h2:font-semibold prose-h2:tracking-tight',
            'prose-h3:font-semibold prose-h3:tracking-tight',
            'prose-h4:font-semibold prose-h4:tracking-tight',
          )}>
          <MDXContent code={post.body} />
        </div>
      </article>
    </div>
  );
}
