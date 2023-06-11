import Head from 'next/head';

import {InferGetStaticPropsType} from 'next/types';
import Header from '~/components/Header';

import LunchboxGrid from '~/lunchbox/core/LunchboxGrid';

import {BsMeta} from 'react-icons/bs';
import GrabIcon from '~/icons/GrabIcon';
import LunchboxIcon from '~/lunchbox/core/LunchboxIcon';

import LunchboxItemJobPosition from '~/lunchbox/layouts/LunchboxItemJobPosition';
import LunchboxItemLinkGitHubProject from '~/lunchbox/prebuilt/LunchboxItemLinkGitHubProject';
import Container from '~/components/Container';
import NavLinks from '~/components/NavLinks';
import Link from 'next/link';

export async function getStaticProps() {
  return {props: {}};
}

export default function HomePage({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <div>
      <Head>
        <title>Yangshun Tay Homepage</title>
      </Head>
      <Header rightContents={<NavLinks />} />
      <h1 className="sr-only">Yangshun Tay Resume</h1>
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-6">
          <h2 className="sr-only tracking-tight font-bold text-xl">About</h2>
          <p className="text-zinc-600 col-span-3">
            Front End Engineer proficient in the full front end stack.
            Interested in building products, design systems, user experience,
            and build tooling.
          </p>
        </section>
        <section className="grid gap-y-6">
          <h2 className="tracking-tight font-bold text-xl">Experience</h2>
          <LunchboxGrid>
            <LunchboxItemJobPosition
              icon={
                <LunchboxIcon className="text-[#0668E1] shadow" icon={BsMeta} />
              }
              company="Meta"
              description={
                <ul className="list-disc">
                  <li>Full front end stack development</li>
                  <li>Led development of meta.com</li>
                  <li>Built Docusaurus 2 alpha</li>
                  <li>Built design systems used on meta.com and oculus.com</li>
                </ul>
              }
              jobTitle="Staff Engineer"
              start={2017}
              end={2023}
              rows={2}
              cols={4}
            />
            <LunchboxItemJobPosition
              icon={
                <LunchboxIcon
                  className="text-[#0a9830] shadow"
                  icon={GrabIcon}
                />
              }
              company="Grab"
              description={
                <ul className="list-disc">
                  <li>
                    Engineering lead for Grab for Work, an enterprise solution
                    for simplifying business transportation
                  </li>
                  <li>
                    Worked on web infrastructure; Developed automation tools to
                    improve the CI workflow, set up linting, testing, type
                    coverage
                  </li>
                </ul>
              }
              jobTitle="Software Engineer"
              start={2015}
              end={2017}
              rows={2}
              cols={4}
            />
          </LunchboxGrid>
        </section>
        <section className="grid gap-y-6">
          <h2 className="tracking-tight font-bold text-xl">Projects</h2>
          <LunchboxGrid>
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={2}
              cols={4}
              username="yangshun"
              title="Tech Interview Handbook"
              repoName="tech-interview-handbook"
              description="All-in-one tech interview resource"
              image={
                <img
                  alt="Tech Interview Handbook"
                  className="object-contain group-hover:scale-105 transition"
                  src="https://www.techinterviewhandbook.org/img/logo.svg"
                />
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={4}
              cols={4}
              username="facebook"
              repoName="docusaurus"
              title="Docusaurus"
              description="Easy to maintain open source documentation websites"
              image={
                <img
                  alt="Docusaurus"
                  className="object-contain -rotate-3 group-hover:rotate-6 transition"
                  src="https://d33wubrfki0l68.cloudfront.net/ea8e37a6a30e9c260a8936d95c579af4a2dd3df7/6ee7e/img/docusaurus_keytar.svg"
                />
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={2}
              cols={4}
              username="yangshun"
              repoName="front-end-interview-handbook"
              title="Front End Interview Handbook"
              description="All-round front end interview preparation"
              image={
                <img
                  alt="Front End Interview Handbook"
                  className="object-contain group-hover:-translate-y-2 transition"
                  src="https://www.frontendinterviewhandbook.com/img/logo.svg"
                />
              }
            />
            <LunchboxItemLinkGitHubProject
              rows={1}
              cols={4}
              username="yangshun"
              repoName="delete-github-forks"
              description="Bulk delete your GitHub forks"
            />
            <LunchboxItemLinkGitHubProject
              rows={1}
              cols={4}
              username="yangshun"
              repoName="tree-node-cli"
              description="List directory contents in Node.js"
            />
          </LunchboxGrid>
        </section>
        <section className="grid gap-y-6">
          <h2 className="tracking-tight font-bold text-xl">
            External Mentions
          </h2>
          <div>
            <ul className="list-disc pl-4">
              {[
                {
                  year: 2022,
                  title:
                    'The future of e-commerce: an inside look at commerce engineering',
                  href: 'https://www.metacareers.com/life/the-future-of-e-commerce-an-inside-look-at-commerce-engineering',
                },
                {
                  year: 2019,
                  title:
                    'F8 2019: Using Docusaurus to Create Open Source Websites',
                  href: 'https://www.youtube.com/watch?v=QcGJsf6mgZE',
                },
                {
                  year: 2018,
                  title:
                    'Lessons & Tips from a Singaporean Hacker in Silicon Valley',
                  href: 'https://www.microverse.org/blog/lessons-and-tips-from-a-singaporean-hacker-in-silicon-valley',
                },
                {
                  year: 2014,
                  title: 'Interview with NUS School of Computing, SoC Bytes',
                  href: 'http://socbytes.blogspot.com/2014/12/nutty-tay.html',
                },
              ].map(({year, title, href}) => (
                <li key={href}>
                  <span className="text-zinc-400">{year}</span> —{' '}
                  <Link
                    className="text-zinc-500 hover:underline hover:text-zinc-600"
                    href={href}
                    target="_blank"
                    rel="noreferrer">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
