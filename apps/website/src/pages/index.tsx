import Head from 'next/head';
import Link from 'next/link';

import {InferGetStaticPropsType} from 'next/types';
import ProfileLinks from '~/components/ProfileLinks';
import Timestamp from '~/components/Timestamp';
import {compareDesc} from 'date-fns';
import {allPosts} from 'contentlayer/generated';

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return {props: {posts}};
}

export default function BlogIndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="max-w-prose mx-auto py-16 px-4">
      <Head>
        <title>Yangshun Tay Homepage</title>
      </Head>
      <h1 className="font-semibold text-2xl md:text-3xl mb-2">Yangshun Tay</h1>
      <ProfileLinks />
      <hr className="my-4" />
      <ul className="flex flex-col gap-y-6">
        {posts.map((post) => (
          <li key={post.url}>
            <Link href={post.url} className="hover:underline">
              <h2 className="font-medium text-base md:text-xl">{post.title}</h2>
            </Link>
            {post.date && (
              <p className="text-slate-500 mt-1 text-sm">
                <Timestamp date={post.date} />
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
