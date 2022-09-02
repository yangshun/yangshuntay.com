import Link from 'next/link';

import {loadBlogPosts} from '@contentsaurus/blog';
import {InferGetStaticPropsType} from 'next/types';

export async function getStaticProps() {
  const posts = await loadBlogPosts();
  return {props: {posts}};
}

export default function BlogIndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Yangshun Blog</h1>
      <ul>
        {posts.map((post) => (
          <div key={post.frontmatter.slug}>
            <Link
              href={{
                pathname: '/blog/[slug]',
                query: {
                  slug: post.frontmatter.slug,
                },
              }}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.frontmatter.author}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
