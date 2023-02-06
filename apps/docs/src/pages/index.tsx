import Link from 'next/link';

import {loadBlogPosts} from '@contentsaurus/blog';
import {InferGetStaticPropsType} from 'next/types';
import ProfileLinks from '~/components/ProfileLinks';

export async function getStaticProps() {
  const posts = await loadBlogPosts();
  return {props: {posts}};
}

export default function BlogIndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="max-w-prose mx-auto py-16 px-4">
      <h1 className="font-semibold text-2xl md:text-3xl mb-2">Yangshun Tay</h1>
      <ProfileLinks />
      <hr className="my-4" />
      <ul className="flex flex-col gap-y-6">
        {posts.map((post) => (
          <li key={post.frontmatter.slug}>
            <Link
              href={{
                pathname: '/blog/[slug]',
                query: {
                  slug: post.frontmatter.slug,
                },
              }}
              className="hover:underline">
              <h2 className="font-medium text-base md:text-xl">
                {post.frontmatter.title}
              </h2>
            </Link>
            {post.frontmatter.date && (
              <p className="text-slate-500 mt-1 text-sm">
                {new Date(post.frontmatter.date).toLocaleDateString('en-US')}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
