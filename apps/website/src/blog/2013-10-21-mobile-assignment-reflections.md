---
title: Mobile Assignment Reflections
slug: mobile-assignment-reflections
author: Yangshun Tay
author_url: https://github.com/yangshun
author_image_url: https://github.com/yangshun.png
tags: [cs3216]
date: 2013-10-21
---

This assignment made me worry a lot because of the little time we spent coding and testing it. I still stand by my previous rants that mobile web development is a PITA, there are simply too many nitty gritty things to consider and pitfalls to avoid when developing for mobile.

But surprisingly we did extremely well for this assignment! Far exceeding my expectations by just too much. Based on the feedback given from the teaching team, I'm glad that the decisions I made when designing (both aesthetic and product) the application turned out to be the right ones:

## Choosing a Suitable CSS Framework

I didn't use Bootstrap, Foundation nor jQuery Mobile (because every other team would be using it) for the HTML and CSS. Instead, I chose to use [**UIKit**](http://www.getuikit.com/), which I chanced upon (thankfully) in a Web Designer newsletter a week before the start of Assignment 3. I chose UIKit because they had a slide-to-reveal navigation component which was prevalent in pre-iOS7 mobile apps. This helped me score quite a few points in achieving a native-like feel.

## Flat Design

Almost every new UI design is flat now! Not that I really like flat design, but flat design is seriously easier to implement because I can do away with drop shadows, inner shadows, etc. I also wanted to try out developing an iOS7-like app, with heavy usage of Helvetica Neue and little use of borders.

## Optional to Sign Up

For our app, Qivi, which is a mobile version of a classroom clicker, if every user needed to sign up before being able to use it, I'm pretty sure nobody would use it. I actually learnt this from my the startup I interned over my NOC program, [**EasilyDo**](http://www.easilydo.com). The EasilyDo app does not require users to sign up before allowing them to use it, because users have to see the value in it before being willing to sign up. This was a pain to implement because users had to be given a temporary identity, but it's necessary to gain some users.

## AngularJS

[**AngularJS**](http://angularjs.org/) was perfect for this app because the app has to be backed by a RESTful service. The trouble with using RESTful APIs comes when you have to handle the updating of the view after the data has been retrieved. Those without frameworks will either append raw HTML or use jQuery to manipulate the DOM. I hate mixing my HTML and JS together because it becomes an unmaintainable mess very soon.

Also, AngularJS is pretty good for making Single-Page Applications, which is extremely suitable for a mobile web app that requires caching of files. Routing is done on the client side, and the number of page loads/refreshes is reduced.

Admittedly, I used some hackish methods to get around some issues of using UIKit and AngularJS together, but kinda unavoidable because we were under schedule constraints :/

## Building a Help/FAQ Page

This is another tip that I picked up from the EasilyDo mobile app. If your app has a certain level of complexity, it's not realistic to expect users to learn the app on their own. This is made even harder if the interface is confusing and does not stick to the convention of mobile apps.

As Su Yuen said,

> "Most average laymen users however would give up within about 5-10 seconds if they open your app/website and can't figure out what is going on. It is especially confusing if the data you have populated in the website/app upon landing on your site is data like 'Test 123'. "

Thankfully I created a sample event titled **"Testing Event for Qivi"** with detailed instructions in the "Help" page on how to understand and experience what Qivi does.

## Keep Things Simple

Given the lack of time, my team had to cut features and ultimately we reduced our feature set to the core functionality of real-time response to polls. In the pitch, I repeatedly stressed the key value proposition of Qivi and guided users in experiencing it through the "Help" page.

Focus on one thing, do it extremely well before moving on to other features.

## Overall

Overall, I'm _extremely_ glad that things turned out alright and that the (coincidentally?) good UI/UX decisions made up for the lack of time in building an app that is robust against the dumbest users. I definitely learnt something valuable from this assignment and shall apply it to the final project (:
