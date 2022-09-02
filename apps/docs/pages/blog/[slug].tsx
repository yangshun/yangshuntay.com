import {
  ContentsaurusBlogPost,
  loadBlogPost,
  loadBlogPosts,
} from '@contentsaurus/blog';
import Link from 'next/link';
import {GetStaticProps, InferGetStaticPropsType} from 'next/types';

type Params = Readonly<{
  slug: string;
}>;

export const getStaticProps: GetStaticProps<{
  post: ContentsaurusBlogPost;
}> = async ({params}) => {
  const [post, posts] = await Promise.all([
    loadBlogPost((params as Params).slug),
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
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Link href="/">Back</Link>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.author}</p>
      <hr />
      <p>{post.content}</p>
    </div>
  );
}
