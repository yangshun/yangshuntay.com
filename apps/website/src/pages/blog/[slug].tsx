import {getMDXComponent} from 'mdx-bundler/client';
import Link from 'next/link';
import {GetStaticProps, InferGetStaticPropsType} from 'next/types';

import {useMemo} from 'react';
import Timestamp from '~/components/Timestamp';
import Head from 'next/head';
import {Post, allPosts} from 'contentlayer/generated';
import clsx from 'clsx';
import Header from '~/components/Header';
import Container from '~/components/Container';

export const getStaticProps: GetStaticProps<{
  post: Post;
  posts: ReadonlyArray<Post>;
}> = async ({params}) => {
  const posts = allPosts;
  const post = allPosts.find((post) => post.slug === params?.slug)!;

  return {props: {posts, post}};
};

export async function getStaticPaths() {
  const posts = allPosts;

  return {
    paths: posts.map((post) => post.url),
    fallback: false, // can also be true or 'blocking'
  };
}

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const code = post.body.code;
  const Contents = useMemo(() => getMDXComponent(code), [code]);

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
        <Head>
          <title>{post.title} | Yangshun Tay</title>
        </Head>
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
          <Contents />
        </div>
      </article>
    </div>
  );
}
