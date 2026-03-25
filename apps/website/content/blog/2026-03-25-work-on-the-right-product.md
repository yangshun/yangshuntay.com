---
title: Work on the Right Product
slug: work-on-the-right-product
author: Yangshun Tay
author_title: Ex-Staff Engineer at Meta
author_url: https://github.com/yangshun
author_image_url: https://github.com/yangshun.png
tags: [career, software-engineering]
hide_table_of_contents: true
date: 2026-03-25
---

There's career advice that sounds obvious but is chronically underrated: the product you work on matters more than the title on your badge. Specifically, if you're a frontend engineer, you should be working on products where the frontend _is_ the product. And if you're a backend engineer, the same logic applies in reverse.

Many engineers don't think about this. They chase company names, compensation bands, team culture. That's not wrong. But they ignore the structural question — does this product actually need what I do?

## The product complexity matrix

Many software products vary wildly in where their complexity lives. You can think of it along two axes: (1) how much is happening on the client, and (2) how much is happening on the server.

|  | Thin client | Thick client |
| --- | --- | --- |
| **Thin server** | Basic marketing pages, CRUD apps, Admin dashboards | Adobe creative suite, IDEs, Offline single-player games |
| **Thick server** | Stripe, Search engine, Ride-sharing apps | Figma, Google Docs, Spotify |

**Thin client, Thin server.** Simple products e.g. blogs, landing pages, basic CRUD apps, a company's internal admin dashboard. Not much complexity anywhere. These are fine products, but they don't stretch anyone. Moreover, AI is able to generate these easily these days. Perfectly fine to start your career doing this, but **don't stay here for too long.**

**Thick client, Thin server.** The complexity lives almost entirely in the browser or device. Many desktop applications such as Adobe creative suite and IDEs (e.g. VS Code) are good examples of this — the client contains heavy rendering, state management, and interaction logic. The server is mostly a persistence layer — storing files, handling auth, serving assets. Offline single-player games fit here too.

**Thin client, Thick server.** The frontend is a thin display layer over a powerful backend. Think Stripe's dashboard — the UI is clean and functional, but the real complexity is in payment processing, fraud detection, and compliance logic running on the server. Search engines, analytics platforms like Amplitude, CI/CD tools like GitHub Actions — the client renders results and can contain moderate complexity, but the server is where the bulk of the complexity lies.

**Thick client, Thick server.** These are the ambitious products where both sides are doing serious work. Think Figma — the client is a full GPU-accelerated rendering engine backed by WASM and comes with multiplayer editing, while the server handles real-time collaboration, version history, and conflict resolution. Google Docs, Google Sheets, Google Docs are similar. So is a platform like Spotify, where the client manages streaming playback, offline sync, and crossfade logic, while the server has to handle large scale, recommendation engines, rights management, and a global CDN. Everyone here is solving hard problems. **You want to be here**.

_I'm well aware that not all software can be cleanly categorized into the 4 quadrants above, but most products still have a clear center of gravity, and that determines which engineers get to do the hardest, most career-shaping work._

## Why this matters for your career

If you're a frontend engineer working on a server-heavy product, your job might slowly converge toward wiring up API responses to form fields. You'll build settings pages. You'll implement tables with sorting and pagination. The work isn't bad, it's just not _frontend engineering_ in any meaningful sense. You're likely not building interesting interfaces, state management problems, rendering problems, or performance problems. You're doing integration work. Many competent generalists can also do it, and increasingly, AI can too.

This kills your growth in two ways. First, you stop building deep expertise. The gap between a frontend engineer who has spent three years building a real-time collaborative canvas and one who has spent three years building CRUD forms is enormous — and it compounds. Second, your work becomes invisible. When the backend is the hard part, that's where the technical credibility lives. The frontend team becomes a service team, taking tickets from backend engineers who have already decided what the UI should do. You lose agency.

The reverse is equally true. A backend engineer working on a client-heavy product ends up maintaining a thin REST API that stores and retrieves JSON. The schemas are simple. The queries are simple. There's no scale challenge, no data pipeline, no distributed systems puzzle. You're a glorified database proxy. Meanwhile, the frontend team is deep in complex state management, multiplayer experiences, while you're watching from the sidelines.

## The compounding effect

Engineers who grow fast are the ones whose daily work forces them to solve hard problems in their domain. A frontend engineer at Figma doesn't need to set aside time to build offline-first rich client applications. A backend engineer at Stripe doesn't need a side project to understand distributed transactions.

When the product's complexity aligns with your specialization, learning is automatic. When it doesn't, learning requires extracurricular effort that can be hard to consistently maintain.

## The "bait and switch"

The "bait and switch" is a phenomenon where after you join a team with the promise that you'll be doing X (what you like/want to do), there isn't that much of X work to do and you end up spending most of your time doing Y (other kinds of engineering). That's not what you're hired to do in the first place, some might like it, but many don't.

I've encountered such situations first hand many times when I was a Frontend Engineer at Meta. Many backend-heavy / ML teams look to hire a single frontend engineer to help them do everything frontend-related, marketing the position as "leading the frontend work". Technically accurate, but personal and career progression in such teams is usually slower, with a lower ceiling.

## What to do about it

When evaluating your next role:

- Ask "Where does the complexity live in this product?"
- Look at the codebase split.
- Ask the interviewers what the hardest frontend or backend problem they solved last quarter was. If the frontend engineers can't name a genuinely difficult client-side problem, that's your answer.

If you're a frontend engineer, look for products with rich interactivity, real-time collaboration, complex state, heavy rendering, or offline support. If you're a backend engineer, look for products with scale challenges, complex data pipelines, distributed coordination, or domain-heavy business logic.

Work on the product that needs you, not just one that has a headcount opening with your title on it.

P.S. It goes without saying that the product is not the only aspect you should be looking out for. I wrote a more comprehensive post on [GreatFrontEnd Blog](https://www.greatfrontend.com/blog) about [How to Evaluate Companies as a Front End Engineer](https://www.greatfrontend.com/blog/evaluating-companies-as-front-end-engineer), but it applies to any engineering domain.

_Disclosure: This post was written with the assistance of AI, but ideas are my own._
