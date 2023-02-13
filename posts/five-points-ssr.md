---
title: "5 Pragmatic Points on SSR Architecture"
date: "2023-01-12"
description: "Understanding the fundamental dialect around server side rendered React"
words: "598"
---

Server side rendering isn't a new technology, and it baffles me that many client-side engineers and developers alike struggle with
articulating the differences between client-side/single-page applications and server-side/server-rendered React components. The key
difference is to note that within the past 5 years server side rendering of components has been brought to light (not traditional
rendering of html on the server)

1. Traditional websites have been rendering html on the server for decades - we've used these frameworks and tools before. Rails,
Django, Wordpress, etc all serve html down the wire from the server to the browser. Developers create some html pages and push them
to the server and the server is responsible to serve those pages on a given request base on the url.
2. Generally speaking, when front-end developers reach out to use SSR to build their web apps they do it because they want to get
content to the browser rapidly, as quickly as possible - content that is rendered on the browser with the least amount of hops
to the server so users can see it. Seconds can cost $millions of dollars in sales.
3. Single page client side applications make multiple initial requests to render the *html and &JavaScript to make our pages
render (with dynamic functionality) into the browser. When the root route `/` is hit, everything needs to be downloaded to the
browser to render the page. That means all your JavaScript bundles, html, etc needs to be served up before any content is ever
seen in your web page for the user to view. For some, like Walmart and Amazon, this can be seen as precious time wasted. 
4. Server side rendering, or in the context of this post, server side rendered React components work in a different way. When
you setup your web application to make use of SSR, you limit the initial load on your root `/` route to just html. By doing this
html content appears in your browser much quicker. It's only after your initial html is loaded that you then begin hydrating your
application with JavaScript, events, etc. Think of it in this way - you load a skeleton initially and then add life to that skeleton
as your users progress interacting with it.
5. Technically in SSR React web applications we have two or more JavaScript bundles, one for the client side and one for the server
side code (and more for a micro-service architecture). The code in these bundles don't bleed into each other, and there is absolutely
no overlap between the two bundles. As a matter of fact we could have many client bundles or separate rendering engines who's sole
responsibility is render and hydrate the views in a super fast way to our end users. Engineers will draw the line on where we render
what depending on their use-cases and audiences - there in lies more complexity. With this level of abstraction we should then
able to use the same model for many types of frameworks that extend themselves to SSR (Vue, Angular). 

There is quite a bit to understand and implement when dealing with SSR of React, ...much more than this post has to offer. It's worth 
noting that rendering on the server can be slow and we need a multi tier approach to scale applications out with perhaps 100s or
even 1000s of components. It is an art to create and scale web applications with SSR in mind - the first steps are always a good
understanding of how the underlying architecture works.

When you hear engineers throwing phrases around like universal javascript, or even isomophic javascript in the context of SSR, it
really just translates to server side rendering where both the client and server use some for of the same code in both environments.
