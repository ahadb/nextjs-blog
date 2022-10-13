---
title: "What is an MPA?"
date: "2022-10-13"
words: "390"
description: "Multi Page Applications behave like traditional web applications"
---

I’ve been thinking a lot about web applications recently and these days, …for better or worse,  we have plenty of options to choose from. Yes React, Vue, and Angular 
have been marketed into the mainstream, but a niche of talented developers solving a new set of problems and use-cases have begun to approach web application development 
without SPA-first in mind (most of us have built an SPA at some point or the other)

So, what exactly is an MPA? Mistakenly, many web application developers lean into the tendency of calling their web apps SPAs, but in reality there are many differences.
An MPA is a multi page application, a website, consisting of multiple pages which are mostly rendered on the server.  MPAs are more traditional 
in the sense that navigating to a new page causes your browser to request a new page of HTML from  the server (unlike SPAs which which download JavaScript to the browser 
and then render HTML locally). So, in an SPA after the initial load everything is handled in JavaScript while MPAs defer JavaScript loading until when you begin interacting 
with the user interface. Both architectures have their pros and cons, and I can discuss my point of view in more depth in a later post. I wouldn't create your next website
or application as an MPA just because it’s the shiny new object, or because the creators of MPAs website might look cool, but rather carefully weigh out my options as you learn
more about the architecture and framework.

A notable difference in an MPA vs traditional web applications (Django, Wordpress, Ruby on Rails, etc) is that JavaScript is universal, meaning that the server is also written
in JavaScript - everything is one language. A few ultra-modern MPAs to check out and I'm sure there will be more coming:

1. [Qwik](https://qwik.builder.io/)
2. [Astro](https://astro.build/)

If you’ve read any of Ray Dalio, you’ll realize that much of everything in life has a cycles, human beings, the economy and the same rule applies to software and tech. It
feels like we’re moving forwards and then backwards, re-inventing the wheel while architecting new solutions that cause more problems that we weren’t aware of at the time.

One thing is for certain, and if you’ve overlooked it, you shouldn’t. Browsers by themselves can do a lot of things out of the box.
