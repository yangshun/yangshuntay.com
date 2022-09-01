import {loadBlogPostBySlug, loadBlogPosts} from 'contentsaurus';
import Link from 'next/link';

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({params}: Params) {
  const [post, posts] = await Promise.all([
    loadBlogPostBySlug('blog', params.slug),
    loadBlogPosts('blog'),
  ]);

  return {props: {posts, post}};
}

export async function getStaticPaths() {
  const posts = loadBlogPosts('blog');

  return {
    paths: (await posts).map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export default function Post({post, posts}) {
  return (
    <div>
      <Link href="/blog">Back</Link>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.content}</p>
    </div>
  );
}
