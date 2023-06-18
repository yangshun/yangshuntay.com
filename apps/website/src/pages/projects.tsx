import Head from 'next/head';

import {InferGetStaticPropsType} from 'next/types';
import Header from '~/components/Header';

import LunchboxGrid from '~/lunchbox/core/LunchboxGrid';

import LunchboxItemLinkGitHubProject from '~/lunchbox/prebuilt/LunchboxItemLinkGitHubProject';
import NavLinks from '~/components/NavLinks';

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
      <h1 className="sr-only">Yangshun&apos;s Projects</h1>
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-6">
          <h2 className="sr-only">Projects</h2>
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
      </div>
    </div>
  );
}
