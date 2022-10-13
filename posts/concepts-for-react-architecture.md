---
title: "Making Important Decisions About Your Next App's React Architecture"
date: "2021-09-15"
description: "Build awareness to make an informed decision about your next app"
words: "1,436"
---

> *How fast the browser renders your app depends on how you build it. The first thing the browser receives is an HTML document*

So you're building a **real-world** new application and figuring out what's the best architecture for you - you want it to perform. React is not a silver bullet and it's tough making the
right decisions because there is no definitive architecture (it's up to you). Even experienced engineers sometimes overlook all the options available to them as they build their 
architectures from scratch. It's wise to assess what's available to use before we start our journey, as there can be a lot of fatigue when it comes to evaluating your options.

Let's spend a little time understanding the modern ecosystem as we begin our journey. Things that comes to mind:

- Am I building a traditional SPA that renders on the client?
- Am I building a static website or dynamic application?
- How big will my application be and how will it scale?
- How can I choose the best tools to scale my technology into the future, avoid technical debt, etc?
- **Should I buy into a framework (NextJS, NuxtJS, etc), roll my own or fork a boilerplate**?
- Will I need server-side rendering (what are the advantages of SSR) or a mix of both client and server side?
- Do I need TypeScript to help scale my JavaScript?
- What are the skill levels of my team members, what do they feel comfortable with?
- Do I need SEO (in which case SPA may not be the right choice)?
- How will I manage state, how complex will my application be, and how much boilerplate do you want to write?
- What sort of tooling do I need in my development environments that give me a great developer experience?
- How will I style my application, what will my UI look like?
- How fast can I ship (deploy) my code and app? Am I doing this in-house, if so what does my environment support?
  * Can I go serverless?
  * Import project(s) from Github?
- What packages might be needed to bootstrap my application?

The list is long and distinguished, and I've probably missed out some things, but you get the idea. If I were you, I'd be thinking about the architecture under my React application while
spending some time evaluating and comparing the options in industry.

Let's begin by looking at some areas of our design:

### Rendering & Performance

This area has evolved a lot, we have SSR, DSG, SSG, SPA, pre-rendering, etc - build these abbreviations into your front-end dictionary :)

If you want to render a React application on the server-side then you need to use a Node.js server. Again, we're not getting into all the minutiae of SSR (nor others, but it's a hot topic) in
this post but server side rendering is when content on your webpage is rendered on the server and not on your browser using JavaScript. It offers faster initial load times
and better SEO performance compared to client-side rendered apps, but there are some downsides as every request leads to a new page being re-rendered from the server to the client (browser).

Peak at a simple example of code in `server.js` (of course you'll need a Node server) to get your synapses firing (we're using Redux here as well). We don't render our app rather we export it:

```javascript
// server.js
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./components/app";

module.exports = function render({}) {
  const content = renderToString(<App />);

  return { content };
};
```

```javascript
// app.js
import express from "express";
import path from "path";
import ssr from "./src/server";
import template from "./src/template";

// server rendered home page
app.get("/", (req, res) => {
  const { content } = ssr({});
  const response = template("Server Rendered", content);
  res.setHeader("Cache-Control", "assets, max-age=604800");
  res.send(response);
});

// pure client side rendered page
app.get("/client", (req, res) => {
  let response = template("Client Side Rendered");
  res.setHeader("Cache-Control", "assets, max-age=604800");
  res.send(response);
});
```

Tou can roll your own (plenty of boilerplates out there, but it's not as easy as you think) or use frameworks with SSR built-in. Note that some of these do more than just SSR 
(pre-render, SSR, SSG with or without data, DSG, hydrate, SPA)

- [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html)
- [NextJS](https://nextjs.org/)
- [Razzle](https://razzlejs.org/)
- [Remix](https://remix.run/)

You can also enable SSR in Create React App, amongst others.

### Static Generated Applications (SSG)

```bash
brew install hugo
```

This is not a new concept and static site generators have been around for a while. You won't need server-side support and when the app is finished loading you will always get
all of the content up-front. The downside to statically generated applications is that they're not a good option for building real-time applications.


- [Hugo](https://gohugo.io/)
- [Jekyll](https://jekyllrb.com/)

### Tooling

Providing the best possible developer experience is important, but with such power comes great responsibility so it's important to choose the right tools (especially build tools).
Gone are the days when Create React App did not have any configuration - if you remember after ejecting it was difficult to configure Webpack as the code was convoluted.

This is an extremely important aspect of all React applications so don't over-engineer it, find your sweet spot or tools that do this for you so you can concentrate on building
and shipping your app.

- [CRA](https://create-react-app.dev/)
- [React App Rewired](https://github.com/timarney/react-app-rewired)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Parcel](https://parceljs.org/)
- [Vite](https://vitejs.dev/)
- [KTY](https://github.com/nytimes/kyt)

### State Management

State management is at the very core of building a successful React application. There are many ways to manage state in React and many tools to help you do so, each solving state
management in a different way. This is not trivial, and you should understand the different approaches, tools, patterns and trade-offs associated with various use cases.

Personally, I have been enjoying Zustand lately. Simple and delightful that uses hooks to manage your state without the boiler. Read about [what makes it different](https://blog.bitsrc.io/zustands-guide-to-simple-state-management-12c654c69990).

- [React State Hooks, Context](https://reactjs.org/docs/state-and-lifecycle.html)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Redux](https://redux.js.org/)
- [UnStated](https://github.com/jamiebuilds/unstated)
- [MobX](https://mobx.js.org/README.html)

```javascript
// Simple counter using Zustand
import { useStore } from "../../app/store";
import React from "react";

const Counter = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const incrementByAmount = useStore((state) => state.incrementByAmount);
  const decrement = useStore((state) => state.decrement);
  const reset = useStore((state) => state.reset);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={() => incrementByAmount(5)}>incrementByAmount</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
```

### Deployment & Cloud Applications

Many of us will be deploying to our own servers/cloud or third party cloud, so we need additional set up, dev-ops and domain knowledge. There is a lot of real work when you have to host your own
web application (depending on the type of your application). However there are many options for you to do this outside your own environment, if you choose to do so. These companies and 
people make it a painless and wonderful experience:

Although you might not be able to adopt one of these and go serverless, it's definitely worth evaluating before you make a decision:

* [Netifly](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [Amazon Amplify](https://aws.amazon.com/amplify/)
* [Firebase](https://firebase.google.com/)
* [Heroku](https://www.heroku.com/)

Just to name a few concrete examples above. You could adopt the Amazon cloud fairly easily if you or your company can provision for it.

### Frameworks

React frameworks have drastically evolved over the last couple of years. The frameworks listed below also support client-side, server-side and staticly generated pages, or at least two of
the aformentioned. These frameworks give a new dimension to modern React ecosystems and come packed with features well past just the view layer. This can be a huge plus, especially for
those who prefer a minimal approach.

Yes, I know, most of us have been stitching our own libraries together to make up our desired architecture, but it's great to see `framework` options, especially when folks have done 
this right.

- [NuxtJS](https://nuxtjs.org/)
- [SvelteKit](https://kit.svelte.dev/)
- [Gatsby](https://www.gatsbyjs.com/)
- [NextJS](https://nextjs.org/)

### Misc. Libraries & Packages

This is a highly debatable and **broad** topic and while some of the other entries in this post are packages, this needs a little section for itself. Modern React applications consume 
many third-party libraries ranging from styling to utilities. Experienced developers  will minimize their packages to only what they need 
(avoid the [Shiny New Object](http://ahadb.github.io/2017/03/30/tools/)) - there are various reasons for this, but this isn't the place to get into a discussion about it.

Here are a few that I've personally used that could possibly make a good architectural fit for your application:

- [SWR](https://swr.vercel.app/)
- [React Query](https://tanstack.com/query/v3/)
- [React Virtualized](https://github.com/bvaughn/react-virtualized)
- [Lodash](https://lodash.com/)
- [Axios](https://axios-http.com/docs/intro)

Additionally, here are a few component and CSS libraries that might tickle your fancy:

- [Tailwind UI](https://tailwindui.com/)
- [Material UI](https://mui.com/)
- [Semantic UI](https://semantic-ui.com/)
- [JSS](https://cssinjs.org)

React is very different from several other user interface libraries and web frameworks as it does not have a fixed architectural pattern. Instead it's fully customizable 
based on the purpose of the UI and requirements of your application. You can also gradually improve your architecture, but choosing to scale your application with fundamental
modern tools is key.

This post does not aim to choose your architecture for you, rather it's to give you a better understanding of what's out there so you can make a more informed decision.


