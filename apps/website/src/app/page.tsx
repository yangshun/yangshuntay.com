import {compareDesc} from 'date-fns';
import {allPosts} from 'content-collections';
import Header from '~/components/Header';

import LunchboxGrid from '~/lunchbox/core/LunchboxGrid';

import {BsMeta} from 'react-icons/bs';
import GrabIcon from '~/icons/GrabIcon';
import LunchboxIcon from '~/lunchbox/core/LunchboxIcon';

import LunchboxItemLinkGitHub from '~/lunchbox/prebuilt/LunchboxItemLinkGitHub';
import LunchboxItemLinkTwitter from '~/lunchbox/prebuilt/LunchboxItemLinkTwitter';
import LunchboxItemLinkFacebook from '~/lunchbox/prebuilt/LunchboxItemLinkFacebook';
import LunchboxItemLinkInstagram from '~/lunchbox/prebuilt/LunchboxItemLinkInstagram';
import LunchboxItemJobPosition from '~/lunchbox/layouts/LunchboxItemJobPosition';
import LunchboxItemLinkGitHubProject from '~/lunchbox/prebuilt/LunchboxItemLinkGitHubProject';
import NavLinks from '~/components/NavLinks';

export default function HomePage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div>
      <Header rightContents={<NavLinks />} />
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-4">
          <h2 className="sr-only tracking-tight font-medium text-4xl">About</h2>
          <p className="text-zinc-600 max-w-md text-pretty">
            Full Front End Stack Engineer, experienced in building products,
            design systems, user experience, and developer tooling.
          </p>
        </section>
        <section className="grid gap-y-6">
          <h2 className="tracking-tight font-medium text-xl">Find me online</h2>
          <LunchboxGrid>
            <LunchboxItemLinkGitHub rows={1} cols={4} username="yangshun" />
            <LunchboxItemLinkFacebook rows={2} cols={2} username="yangshun" />
            <LunchboxItemLinkInstagram rows={2} cols={2} username="yangshun" />
            <LunchboxItemLinkTwitter rows={1} cols={4} username="yangshunz" />
          </LunchboxGrid>
        </section>
      </div>
    </div>
  );
}
