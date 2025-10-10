import type {Metadata} from 'next';
import Header from '~/components/Header';

import LunchboxGrid from '~/lunchbox/core/LunchboxGrid';

import {BsMeta} from 'react-icons/bs';
import GrabIcon from '~/icons/GrabIcon';
import LunchboxIcon from '~/lunchbox/core/LunchboxIcon';

import LunchboxItemJobPosition from '~/lunchbox/layouts/LunchboxItemJobPosition';
import NavLinks from '~/components/NavLinks';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume | Yangshun Tay',
  description: 'Resume of Yangshun Tay',
};

export default function ResumePage() {
  return (
    <div>
      <Header rightContents={<NavLinks />} />
      <h1 className="sr-only">Yangshun Tay Resume</h1>
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-4">
          <h2 className="sr-only tracking-tight font-medium text-xl">About</h2>
          <p className="text-zinc-600 max-w-md text-pretty">
            Full Front End Stack Engineer, experienced in building products,
            design systems, user experience, and developer tooling.
          </p>
        </section>
        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Experience</h2>
          <LunchboxGrid>
            <LunchboxItemJobPosition
              icon={
                <LunchboxIcon
                  className="text-[#0668E1] shadow-xs"
                  icon={BsMeta}
                />
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
                  className="text-[#0a9830] shadow-xs"
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
        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Projects</h2>
          <div>
            <ul>
              {[
                {
                  year: 2025,
                  title: 'Socialmon',
                  href: 'https://www.socialmon.ai',
                  description: (
                    <>
                      AI companion to find, share, and save viral marketing
                      ideas
                    </>
                  ),
                },
                {
                  year: 2025,
                  title: 'create-ts-fast',
                  href: 'https://github.com/yangshun/create-ts-fast',
                  description: (
                    <>CLI tool for scaffolding npm packages in TypeScript</>
                  ),
                },
                {
                  year: 2024,
                  title: 'Figma to Code plugin',
                  href: 'https://www.figma.com/community/plugin/1377511503285748115',
                  description: (
                    <>
                      Figma plugin to convert an element into HTML code with CSS
                      or Tailwind extremely quickly with a click
                    </>
                  ),
                },
                {
                  year: 2023,
                  title: 'GreatFrontEnd',
                  href: 'https://www.greatfrontend.com',
                  description: (
                    <>
                      Front end interview preparation and career platform built
                      by Front End Engineeers for Front End Engineers
                    </>
                  ),
                },
                {
                  year: 2023,
                  title: 'keyboards.css',
                  href: 'https://github.com/yangshun/keyboards.css',
                  description: (
                    <>
                      Front end library-themed keyboards built using Tailwind
                      CSS
                    </>
                  ),
                },
                {
                  year: 2018,
                  title: 'Docusaurus',
                  href: 'https://docusaurus.io',
                  description: (
                    <>
                      Lead maintainer for one of Meta&apos;s most popular open
                      source project
                    </>
                  ),
                },
                {
                  year: 2018,
                  title: 'tree-node-cli',
                  href: 'https://github.com/yangshun/tree-node-cli',
                  description: (
                    <>
                      Node.js library to list the contents of directories in a
                      tree-like format
                    </>
                  ),
                },
                {
                  year: 2017,
                  title: 'delete-github-forks',
                  href: 'https://github.com/yangshun/delete-github-forks',
                  description: (
                    <>CLI to bulk delete GitHub forks in two simple steps</>
                  ),
                },
                {
                  year: 2017,
                  title: 'Front End Interview Handbook',
                  href: 'https://frontendinterviewhandbook.com',
                  description: (
                    <>Tech Interview Handbook, focused on front end</>
                  ),
                },
                {
                  year: 2017,
                  title: 'Tech Interview Handbook',
                  href: 'https://techinterviewhandbook.org',
                  description: (
                    <>
                      Interview study notes turned into a website used by
                      millions of developers over the world
                    </>
                  ),
                },
                {
                  year: 2015,
                  title: 'NUSWhispers',
                  href: 'https://facebook.com/nuswhispers',
                  description: (
                    <>Started Singapore&apos;s top shitposting platform</>
                  ),
                },
                {
                  year: 2014,
                  title: 'NUSMods',
                  href: 'https://github.com/nusmodifications/nusmods',
                  description: (
                    <>
                      Led development of the unofficial NUS timetable builder
                      until it became official
                    </>
                  ),
                },
                {
                  year: 2013,
                  title: '#ifihadglass',
                  href: 'https://yangshun.github.io/ifihadglass/',
                  description: (
                    <>Entry for the Google Glass Explorers program</>
                  ),
                },
              ].map(({year, title, href, description}) => (
                <li key={href}>
                  <span className="text-zinc-700 font-medium">{year}</span> —{' '}
                  <Link
                    className="text-zinc-500 hover:underline hover:text-zinc-600 font-medium"
                    href={href}
                    target="_blank">
                    {title}
                  </Link>
                  : <span className="text-zinc-500">{description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">
            Public mentions
          </h2>
          <div>
            <ul>
              {[
                {
                  year: 2022,
                  title:
                    'The future of e-commerce: an inside look at commerce engineering',
                  href: 'https://www.metacareers.com/life/the-future-of-e-commerce-an-inside-look-at-commerce-engineering',
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
                  <span className="text-zinc-700 font-medium">{year}</span> —{' '}
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
        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Talks</h2>
          <div>
            <ul>
              {[
                {
                  year: 2023,
                  title: <>3 Things I Wish I Knew When I Started Coding</>,
                  href: 'https://www.youtube.com/watch?v=ecMqVk51EsA',
                },
                {
                  year: 2019,
                  title: (
                    <>
                      F8 2019: Using Docusaurus to create Open Source Websites
                    </>
                  ),
                  href: 'https://www.youtube.com/watch?v=QcGJsf6mgZE',
                },
                {
                  year: 2019,
                  title: (
                    <>
                      Facebook Developer Circles Singapore Build Day 2019 —
                      HTML5 Gaming
                    </>
                  ),
                  href: 'https://www.facebook.com/khangtoh/videos/oa.936011683431143/10156518641565835/?type=3&theater&ifg=1',
                },
                {
                  year: 2018,
                  title: <>All Things Open 2018</>,
                  href: 'https://www.slideshare.net/AllThingsOpen/painless-open-source-documentation-with-docusaurus',
                },
              ].map(({year, title, href}) => (
                <li key={href}>
                  <span className="text-zinc-700 font-medium">{year}</span> —{' '}
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
        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Awards</h2>
          <div>
            <ul>
              {[
                {
                  year: 2022,
                  title: <>Outstanding Young Computing Alumni Award 2021</>,
                },
                {
                  year: 2016,
                  title: (
                    <>
                      Grabathon 4.0, 2nd Place for Most Technologically
                      Challenging, 2nd Place for Most Popular, 3rd Place for
                      Most Hyper-Local Product
                    </>
                  ),
                },
                {
                  year: 2016,
                  title: (
                    <>
                      Facebook x GIT SG Hack for a Cause 2016, Best All-Round
                      Product
                    </>
                  ),
                },
                {
                  year: 2016,
                  title: <>Grabathon 3.0, 1st Place for Build Challenge</>,
                },
                {
                  year: 2015,
                  title: (
                    <>
                      Grabathon (Grab Internal Hackathon) 2.0, Overall Champion
                    </>
                  ),
                },
                {
                  year: 2015,
                  title: (
                    <>
                      NUSS Medal for Outstanding Achievement (Best Graduate
                      Throughout Course of Study with Outstanding All-round
                      Achievements){' '}
                    </>
                  ),
                },
                {
                  year: 2015,
                  title: <>NUS School of Computing, Valedictorian Finalist</>,
                },
                {
                  year: 2015,
                  title: (
                    <>
                      NUS School of Computing (6th STePS), 3rd Prize for CS4344
                      Networked and Mobile Gaming
                    </>
                  ),
                },
                {
                  year: 2015,
                  title: (
                    <>
                      NUS School of Computing (6th STePS), Best Project Award
                      among Selected Final Year Projects
                    </>
                  ),
                },
                {
                  year: 2015,
                  title: (
                    <>
                      NUS School of Computing, Certificate of Distinction in
                      Interactive Media
                    </>
                  ),
                },
                {
                  year: 2015,
                  title: (
                    <>
                      Hack&Roll 2015, Second Prize & People&apos;s Choice Award
                    </>
                  ),
                },
                {
                  year: 2014,
                  title: <>PA Tech Connects Competition 2014, 3rd Runner Up</>,
                },
                {
                  year: 2014,
                  title: <>Hackatron Asia Singapore 2014, Champion</>,
                },
                {
                  year: 2014,
                  title: (
                    <>
                      NUS School of Computing (5th STePS), 2nd Prize for CS3240
                      Interaction Design
                    </>
                  ),
                },
                {
                  year: 2014,
                  title: (
                    <>
                      Smart Port Hackathon 2014, Third Prize and Best Use of
                      Data
                    </>
                  ),
                },
                {
                  year: 2014,
                  title: <>Startup Asia Hackathon, HERE Maps API Prize</>,
                },
                {
                  year: 2014,
                  title: (
                    <>
                      NUS School of Computing (4th STePS), Best Project Award
                      for CP3101A Global Open Source Project
                    </>
                  ),
                },
                {
                  year: 2014,
                  title: (
                    <>
                      NUS School of Computing (4th STePS), Best Project Award
                      for CS3218 Multimodal Processing in Mobile Platforms
                    </>
                  ),
                },
                {
                  year: 2014,
                  title: <>Facebook Singapore Hackathon, Third Place</>,
                },
                {
                  year: 2013,
                  title: (
                    <>
                      NUS School of Computing (3rd STePS), Best Project Award
                      for CS3216 Software Development on Evolving Platforms
                    </>
                  ),
                },
                {year: 2013, title: <>Apple WWDC 2013 Student Scholarship</>},
                {
                  year: 2013,
                  title: (
                    <>
                      NUS Faculty of Engineering Design-Centric Programming
                      T-shirt Design Competition, Winner
                    </>
                  ),
                },
                {
                  year: 2013,
                  title: (
                    <>Photo Hack Day 4, Crowd Favorite and Aviary API Prize</>
                  ),
                },
                {
                  year: 2013,
                  title: (
                    <>Foursquare Hackathon 2013, Jury Prize and Game Prize</>
                  ),
                },
                {
                  year: 2012,
                  title: <>IUMS 2017 Logo Design Competition, Runner-up</>,
                },
                {year: 2012, title: <>AngelHack 2012, Gimbal API Award</>},
                {year: 2012, title: <>Health 2.0 Hackathon, 3rd Runner Up</>},
                {
                  year: 2012,
                  title: <>PayPal Hackathon, People&apos;s Choice Award</>,
                },
                {
                  year: 2012,
                  title: (
                    <>
                      NUS CS3217 Software Engineering on Modern Application
                      Platforms, AY2011/12 Sem 2, Letter of Commendation for
                      excellent performance in the course
                    </>
                  ),
                },
                {
                  year: 2012,
                  title: <>NUSSU Student Life Tee Design Competition, Winner</>,
                },
                {
                  year: 2012,
                  title: <>NUSSU Welfare Diary Design Competition, Winner</>,
                },
                {
                  year: 2012,
                  title: (
                    <>
                      NUS Faculty of Engineering Design-Centric Curriculum
                      T-shirt Design Competition, Winner
                    </>
                  ),
                },
                {
                  year: 2011,
                  title: <>NUS Faculty of Engineering, Dean&apos;s List</>,
                },
                {
                  year: 2011,
                  title: (
                    <>
                      NUS EG2604 Innovation Program AY2010/11 Sem 2, Merit Award
                      and Best Poster Design Award
                    </>
                  ),
                },
                {
                  year: 2011,
                  title: <>NUS-HTC Apprentice Challenge, Finalist</>,
                },
                {
                  year: 2010,
                  title: <>NUS Kent Ridge Undergradate Scholarship</>,
                },
              ].map(({year, title}, index) => (
                <li key={index}>
                  <span className="text-zinc-700 font-medium">{year}</span> —{' '}
                  <span className="text-zinc-600">{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
