import type { Metadata } from 'next';
import { Header } from '~/components/header';
import { BsMeta } from 'react-icons/bs';
import { GrabIcon } from '~/icons/grab-icon';
import { NavLinks } from '~/components/nav-links';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume | Yangshun Tay',
  description: 'Resume of Yangshun Tay',
};

const experiences = [
  {
    company: 'GreatFrontEnd',
    jobTitle: 'Co-founder',
    period: 'Apr 2023 — Present',
    icon: (
      <svg
        aria-label="GreatFrontEnd"
        className="size-6 shrink-0"
        fill="currentColor"
        height="20"
        viewBox="0 0 26 19"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M9.88273 0L13.0103 3.17047L6.75515 9.48828L13.0103 15.8061L9.88273 18.9766L0.5 9.48828L9.88273 0ZM16.1173 12.6589L12.9897 15.8294L16.1173 18.9999L19.2448 15.8294L16.1173 12.6589ZM25.5 9.48797L22.3724 12.6584L19.2448 9.48797L16.1173 12.6584L12.9897 9.48797L19.2448 3.17017L25.5 9.48797Z"
          fillRule="evenodd"
        ></path>
      </svg>
    ),
    achievements: [
      'Built a JavaScript practice platform with 500+ challenges across coding and quiz formats',
      'Designed and implemented an in-browser interactive coding workspace with customizable windows and tabs',
      'Created and maintained a custom design system with 30+ components using Radix UI and Tailwind CSS',
      'Authored 95% of the challenges and technical content',
      'Grew the platform to 1.5M monthly pageviews and 80k MAU',
    ],
  },
  {
    company: 'Meta',
    jobTitle: 'Staff Engineer',
    period: 'Nov 2017 — Mar 2023',
    icon: <BsMeta className="size-5 text-[#0668E1]" />,
    achievements: [
      'Full front end stack development',
      'Led development of meta.com',
      'Built Docusaurus 2 alpha',
      'Built design systems used on meta.com and oculus.com',
    ],
  },
  {
    company: 'Grab',
    jobTitle: 'Software Engineer',
    period: 'Jun 2015 — Aug 2017',
    icon: <GrabIcon className="size-5 text-[#0a9830]" />,
    achievements: [
      'Engineering lead for Grab for Work, an enterprise solution for simplifying business transportation',
      'Worked on web infrastructure; developed automation tools to improve the CI workflow, set up linting, testing, and type coverage',
    ],
  },
] as const;

export default function ResumePage() {
  return (
    <div>
      <Header rightContents={<NavLinks />} />
      <h1 className="sr-only">Yangshun Tay Resume</h1>
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-4">
          <h2 className="sr-only tracking-tight font-medium text-xl">About</h2>
          <p className="text-zinc-600 max-w-lg text-pretty">
            Full Front End Stack Engineer, experienced in building products,
            design systems, user experience, and developer tooling.
          </p>
        </section>
        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Experience</h2>
          <div className="flex flex-col gap-12">
            {experiences.map(
              ({ company, jobTitle, period, icon, achievements }) => (
                <article key={company}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-white shadow-xs">
                      {icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-base tracking-tight font-medium text-zinc-950">
                          {jobTitle}
                          <span className="mx-2 text-zinc-400">·</span>
                          {company}
                        </h3>
                        <p className="text-base text-zinc-500">{period}</p>
                      </div>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-base text-zinc-600">
                        {achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>
        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Projects</h2>
          <div>
            <ul>
              {[
                {
                  year: 2026,
                  title: 'Socialmon',
                  href: 'https://www.socialmon.ai',
                  description:
                    'AI companion to find, share, and save viral marketing ideas',
                },
                {
                  year: 2026,
                  title: 'greatstorage',
                  href: 'https://github.com/yangshun/greatstorage',
                  description:
                    'Supercharged localStorage with schema validation, namespacing, and key expiration',
                },
                {
                  year: 2025,
                  title: 'create-ts-fast',
                  href: 'https://github.com/yangshun/create-ts-fast',
                  description:
                    'CLI tool for scaffolding npm packages in TypeScript',
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
                      by Front End Engineers for Front End Engineers
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
                    <>Easy-to-maintain open source documentation websites</>
                  ),
                },
                {
                  year: 2018,
                  title: 'tree-node-cli',
                  href: 'https://github.com/yangshun/tree-node-cli',
                  description: (
                    <>
                      List directory contents in a tree-like format from the CLI
                      or Node.js
                    </>
                  ),
                },
                {
                  year: 2017,
                  title: 'Front End Interview Handbook',
                  href: 'https://frontendinterviewhandbook.com',
                  description: (
                    <>
                      Front end interview preparation materials for busy
                      engineers
                    </>
                  ),
                },
                {
                  year: 2017,
                  title: 'Tech Interview Handbook',
                  href: 'https://techinterviewhandbook.org',
                  description: (
                    <>
                      Curated coding interview preparation materials for busy
                      software engineers
                    </>
                  ),
                },
                {
                  year: 2017,
                  title: 'lago',
                  href: 'https://github.com/yangshun/lago',
                  description: (
                    <>
                      Data structures and algorithms library in TypeScript and
                      JavaScript
                    </>
                  ),
                },
                {
                  year: 2017,
                  title: 'delete-github-forks',
                  href: 'https://github.com/yangshun/delete-github-forks',
                  description: (
                    <>Bulk delete your GitHub forks in two simple steps</>
                  ),
                },
                {
                  year: 2014,
                  title: 'NUSMods',
                  href: 'https://github.com/nusmodifications/nusmods',
                  description: (
                    <>
                      Student-initiated course planning platform for the
                      National University of Singapore
                    </>
                  ),
                },
              ].map(({ year, title, href, description }) => (
                <li key={href}>
                  <span className="text-zinc-700 font-medium">{year}</span> —{' '}
                  <Link
                    className="text-zinc-500 hover:underline hover:text-zinc-600 font-medium"
                    href={href}
                    target="_blank"
                  >
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
              ].map(({ year, title, href }) => (
                <li key={href}>
                  <span className="text-zinc-700 font-medium">{year}</span> —{' '}
                  <Link
                    className="text-zinc-500 hover:underline hover:text-zinc-600"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  id: 'react-india-2025',
                  year: 2025,
                  title: (
                    <>
                      React India 2025: Groundpack — Modern lightweight
                      ESM-based coding environment within the browser
                    </>
                  ),
                  href: 'https://www.youtube.com/live/8UiD-l25z2A?si=c4IjT7K66l2fAtYJ&t=938',
                },
                {
                  id: 'rocket-academy-ama-2023',
                  year: 2023,
                  title: (
                    <>
                      Rocket Academy AMA: 3 Things I Wish I Knew When I Started
                      Coding
                    </>
                  ),
                  href: 'https://www.youtube.com/watch?v=ecMqVk51EsA',
                },
                {
                  id: 'nus-project-mentor-welcome-tea-2023',
                  year: 2023,
                  title: (
                    <>
                      NUS Project Mentor Welcome Tea 2023: Maximizing your
                      mentorship
                    </>
                  ),
                },
                {
                  id: 'f8-2019',
                  year: 2019,
                  title: (
                    <>
                      F8 2019: Using Docusaurus to create Open Source Websites
                    </>
                  ),
                  href: 'https://www.youtube.com/watch?v=QcGJsf6mgZE',
                },
                {
                  id: 'facebook-developer-circles-singapore-build-day-2019',
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
                  id: 'all-things-open-2018',
                  year: 2018,
                  title: <>All Things Open 2018</>,
                  href: 'https://www.slideshare.net/AllThingsOpen/painless-open-source-documentation-with-docusaurus',
                },
              ].map(
                ({
                  id,
                  year,
                  title,
                  href,
                }: {
                  id: string;
                  year: number;
                  title: React.ReactNode;
                  href?: string;
                }) => (
                  <li key={id}>
                    <span className="text-zinc-700 font-medium">{year}</span> —{' '}
                    <Link
                      className="text-zinc-500 hover:underline hover:text-zinc-600"
                      href={href ?? '#'}
                      target={href ? '_blank' : undefined}
                      rel="noreferrer noopener"
                    >
                      {title}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>
        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Awards</h2>
          <div>
            <ul>
              {[
                {
                  year: 2026,
                  title: <>LinkedIn Top Voice 2026</>,
                },
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
                { year: 2013, title: <>Apple WWDC 2013 Student Scholarship</> },
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
                { year: 2012, title: <>AngelHack 2012, Gimbal API Award</> },
                { year: 2012, title: <>Health 2.0 Hackathon, 3rd Runner Up</> },
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
              ].map(({ year, title }, index) => (
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
