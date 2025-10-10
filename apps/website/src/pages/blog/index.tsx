import Head from 'next/head';
import Link from 'next/link';

import {InferGetStaticPropsType} from 'next/types';
import ProfileLinks from '~/components/ProfileLinks';
import Timestamp from '~/components/Timestamp';
import {compareDesc} from 'date-fns';
import {allPosts} from 'contentlayer/generated';
import Header from '~/components/Header';
import Container from '~/components/Container';
import NavLinks from '~/components/NavLinks';

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
    <>
      <Head>
        <title>Yangshun Tay Homepage</title>
      </Head>
      <Header rightContents={<NavLinks />} />
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li
            className="flex gap-x-4 justify-between md:items-center"
            key={post.url}>
            <Link href={post.url} className="hover:underline">
              <h2 className="text-zinc-900 tracking-tight font-medium">
                {post.title}
              </h2>
            </Link>
            {post.date && (
              <p className="text-zinc-700 text-sm whitespace-nowrap">
                <Timestamp date={post.date} />
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
