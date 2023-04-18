---
title: Web Development is a PITA
slug: web-development-is-a-pita
author: Yangshun Tay
author_url: https://github.com/yangshun
author_image_url: https://github.com/yangshun.png
tags: [cs3216]
date: 2013-09-24
---

This is a rage post because of all the frustration I faced while doing Assignment 3 and mobile web in general.

Actually, I quite enjoy web development because HTML and CSS is intuitive and extensible. But what I severely dislike about web development is the fragmentation of browsers, viewport sizes and devices! This is especially a PITA (pain in the arse) when it comes to mobile web development. There are like 3456723139738 different dimensions of mobile device screens. It's certainly not fun ensuring that your mobile site looks good on every available mobile device. Have decided to just build one that works for iPhone 4S/5/5S/5C. Apple FTW. One can go crazy if one tries to support every Android device.

Enough with the angst. Over the past few months, through my attempts at solving the various common problems I faced while doing mobile web developing, I came to realize some recommended practices that should be adopted to make the painful process less painful.

### Use HTML5 Boilerplate

So you think you know cross-browser compatibility? You won't know it better than [HTML5 boilerplate](http://html5boilerplate.com/), which provides a template as a starting point for any website. It tries to standardize the CSS across different browsers with [Normalize.css](http://necolas.github.com/normalize.css/) and comes with jQuery and [Modernizr](http://modernizr.com/). For the mobile assignment, I used [HTML5 Boilerplate Mobile](http://html5boilerplate.com/mobile/) which is a starting template for mobile web development.

### Avoid jQuery Animations, use CSS3 Transitions

Many developers are more familiar with jQuery animations because it is easier to use (they hate touching the CSS file). However, jQuery animations are **really bad** performance-wise on mobile devices. A full blog post on this can be found [here](http://css3.bradshawenterprises.com/blog/jquery-vs-css3-transitions/). The main reason for this is that CSS3 transitions are hardware accelerated.

### Interactive Elements Should be Large Enough

This is a common pitfall for developers who test their mobile site on the computer. It is not immediately obvious that the experience of navigating the site on a mobile device with your fingers is vastly different from clicking with a mouse. If your links and buttons are too small, users will have a tough time tapping on them on their mobile devices. An average user's finger size is 40px x 40px. Don't clutter up multiple small buttons together unless you want users to curse and swear because they tapped wrongly. Leave spacing between buttons if your buttons _have_ to be small for some weird reason.

### Font Awesome

My favorite asset will be these pretty icons from [Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/) that are actually SVGs (Scalable Vector Graphics). With this, no longer is there a need for icon spritesheets that aren't exactly flexible and retina-friendly. EVERYONE SHOULD USE THIS!

Okay, back to my Assignment 3.
