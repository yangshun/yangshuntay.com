import { Header } from '~/components/header';
import { LunchboxGrid } from '~/lunchbox/core/lunchbox-grid';
import { LunchboxItemLinkGitHub } from '~/lunchbox/prebuilt/lunchbox-item-link-github';
import { LunchboxItemLinkTwitter } from '~/lunchbox/prebuilt/lunchbox-item-link-twitter';
import { LunchboxItemLinkFacebook } from '~/lunchbox/prebuilt/lunchbox-item-link-facebook';
import { LunchboxItemLinkInstagram } from '~/lunchbox/prebuilt/lunchbox-item-link-instagram';
import { NavLinks } from '~/components/nav-links';

export default function HomePage() {
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
