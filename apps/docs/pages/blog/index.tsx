import {loadBlogPosts} from 'contentsaurus';
import Link from 'next/link';

export async function getStaticProps() {
  const posts = await loadBlogPosts('blog');
  return {props: {posts}};
}

export default function BlogIndex({posts}) {
  return (
    <div>
      <h1>Blog index</h1>
      <ul>
        {posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
                <p>{post.author}</p>
              </a>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
