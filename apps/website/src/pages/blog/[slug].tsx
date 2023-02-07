import {
  ContentsaurusBlogPost,
  loadBlogPostBySlug,
  loadBlogPosts,
} from '@contentsaurus/blog';
import {getMDXComponent} from 'mdx-bundler/client';
import Link from 'next/link';
import {GetStaticProps, InferGetStaticPropsType} from 'next/types';

import {useMemo} from 'react';
import Timestamp from '~/components/Timestamp';
import Head from 'next/head';

type Params = Readonly<{
  slug: string;
}>;

export const getStaticProps: GetStaticProps<{
  post: ContentsaurusBlogPost;
}> = async ({params}) => {
  const [post, posts] = await Promise.all([
    loadBlogPostBySlug((params as Params).slug),
    loadBlogPosts(),
  ]);

  return {props: {posts, post}};
};

export async function getStaticPaths() {
  const posts = loadBlogPosts();

  return {
    paths: (await posts).map((post) => ({
      params: {
        slug: post.frontmatter.slug,
      },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const code = post.content;
  const Contents = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="max-w-prose mx-auto py-16 px-4">
      <div className="flex flex-col space-y-4">
        <div>
          <Link
            className="text-sm text-orange-600 hover:underline hover:text-orange-700"
            href="/">
            Back to all posts
          </Link>
        </div>
        <article>
          <Head>
            <title>{post.frontmatter.title} | Yangshun Tay</title>
          </Head>
          <h1 className="font-bold text-xl md:text-3xl">
            {post.frontmatter.title}
          </h1>
          <p className="text-slate-500 mt-4 text-sm flex gap-x-2">
            {post.frontmatter.date && (
              <>
                <Timestamp unixTimestamp={post.frontmatter.date} />
              </>
            )}
          </p>
          <hr className="my-4" />
          <div className="prose prose-slate">
            <Contents />
          </div>
        </article>
      </div>
    </div>
  );
}
