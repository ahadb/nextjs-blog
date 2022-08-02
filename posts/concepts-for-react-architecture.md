---
title: 'Making Important Decisions About React App Architecture'
date: '2021-09-15'
description: 'Scaling your React architecture into the modern era'
---

So you're building a new application and figuring out what's the best solution for you. The React ecosystem has evoloved (ehhhmm, if you haven't noticed) and I'm sure you've been thinking about 
these things as you build a mental picture of the trade-offs and common benefits/pitfalls around your architecture.

Things that might come to mind:

* Are you building a traditional SPA that renders on the client?
* Are you building a static website or dynamic application?
* **Should I buy into a framework (NextJS, NuxtJS, etc), roll your own or fork a boilerplate**?
* TypeScript for larger teams to help scale JavaScript?
* Will I need server-side rendering (what are the advantages of SSR) or a mix of both client and server side?
* Do you need SEO (in which case SPA may not be the right choice)?
* How will you manage state, how complex will your application be, how much boilerplate do you want to write?
* How will I style my application?
* How fast can i ship (deploy) my code and app?
* What sort of tooling do I need in your development environments (CRA, Vite, Webpack, Rollup, Babel, etc)?
* What packages might be needed to bootstrap my application?

I don't aim in answering all your architectural decisions but you should be factoring in these things into your tool chain as you begin thinking about
your architecture, *or lack there-of*.

### Server-side Rendering (SSR)
If you want to render a React application on the server-side then you need to use a Node.js server. Again, we're not discussing the pros and cons of this in
this post but SSR is when content on your webpage is rendered on the server and not on your browser using JavaScript. They off faster initial load times and better SEO performance 
compared to client-side rendered apps, but there are some downsides as every request leads to a new page being re-rendered from the server to the client (browser).

Peak at an example of code in `server.js` to get your synapses firing (we're using Redux here as well). We don't render our app rather we export it:

```javascript
import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'


module.exports = function render(initialState) {
  const store = configureStore(initialState)

  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  const preloadedState = store.getState()

  return {content, preloadedState};
}
```

React is not a silver bullet, so you can roll your own, or use frameworks with SSR built-in. Note that some of these do more than just SSR (pre-render (SSR, SSG with or without data), 
DSG, hydrate, SPA)

* [NextJS]()
* [Razzle]()
* [NuxtJS]()
* [SvelteKit]()
* [Gatsby]()

### Static Generated Applications (SSG)
This is not a new concept and static site generators have been around for a while. You won't need server-side support and when the app is
finished loading you will always get all of the content up-front. The downside to statically generated applications is that they're not a good option for building request driven
or real-time applications.

* [Hugo]()
* [Jekyll]()

### Tooling

### State Management

### Deployment

### Frameworks

### Libraries



