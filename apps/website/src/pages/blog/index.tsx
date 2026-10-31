import { Timestamp } from '~/components/timestamp';
import type { Props } from './index.server';
import { Anchor } from '~/components/anchor';

export default function BlogIndexPage({ posts }: Props) {
  return (
    <>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li
            className="flex gap-x-4 justify-between md:items-center"
            key={post.url}
          >
            <Anchor href={post.url} className="hover:underline">
              <h2 className="text-zinc-900 tracking-tight font-medium">
                {post.title}
              </h2>
            </Anchor>
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
