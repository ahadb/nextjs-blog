---
title: "When to Use Docker"
date: "2023-02-13"
words: "722"
description: "Is the container hype worth it for you?"
---

Below is a trivial example of a Dockerfile used to containerize an Express application. You've probably heard about Docker
by now if you're reading this post and if not then a brief summary of Docker can be found below.

```bash
FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
```

Basically Docker helps us create lightweight, portable containers that improve software development, application deployment
and the business delivery cadence. Docker is very popular because it's a portable way to deploy your software away from old
school installations. Like VMs, but in a more precise way, containers isolate single applications and their dependencies for 
developers.

The benefits of using Docker are many, but just because it's the new hype around town doesn't mean you should start using
it in your projects. Let's get a better understanding of when it actually makes sense to use Docker in your workflow so 
you can try and solve tomorrow's problems with today's development methods and not yesterday's development methods.

### 1. Your team understands and knows how to use Docker
This is the first of several considerations you should think of. Docker can be an amazing tool to work with, speed up your
development and production workflows and help you boostrap your application effeciently and effectively across different
environments. Docker, on the other hand can also be a nightmare and cause a lot of unneeded frustration if not used properly.

### 2. You have a large team of developers
To benefit from Docker developers have to set up their local development environment, manage their dependencies and deal
with a lot of initial setup before the can start contributing to the project. Docker helps sandbox the developer environment
and automates this for each developer - when a new developer joins it won't take long before she/he is set up with everything
they need to start working on code specific features (and not dealing with teething setup issues, etc, etc)

### 3. You need faster software delivery cycles
Docker containers make it very easy to get new software with new features into productution quickly. Gone will be the days
of monolith releases and oodles of time allocated for them (not to mention monolith release issues). Now you can focus on 
shipping code and respond to changes the business requires quickly.

### 4. You want to keep a tight grip on your software as it scales
Software can grow at a rapid pace as developers and engineers alike add new features. These features can introduce the need
to add more dependencies, third-party libraries and so on to your project. With Docker all the required components will 
be specified and isolated in Docker configuration files. Team members won't have to communicate nor document their changes
endlessly and can do this in one fell swoop.

### 5. When you want loosely coupled components (Micro services) and loosely couple teams
Docker containers, rather containers in general, help make the micro-service pattern easier by forming loosely coupled
components. Monolithic applications can be decomposed into several smaller applications that can be scaled and modifed by
different engineering teams separately in a truly agile environment. Each team can work in it's own timeline overseen by 
business need.

### 6. Avoiding lock-in to hosting infrastructure
It's safe to say that Docker containers are universally supported by more server infrastructure around the world. Since
they are very well adopted they can be launched on most any server environment. For many reasons, if your infrastructure
needs change they can be hosted elsewhere

### 7. You need to support and maintain multiple environments
Your application has different environments: development, testing, staging and products. This is an old wife's tale
between engineers and there really is no escape. In the Docker world we can have one container used for all environments.
This has advantages, the most import is it reduces the likelihood of bugs that are hard to diagnose that result from
different dependencies in different environments.

Clearly we have a tremendous amount to think about before adopting this technology. Just like micro-service architecture
it's very important to understand how to do this well, or risk wasted effort and a lot of confusion. There are also some
downsides (security issues, slow on Macs, not a subsitute for VMs), after all Docker isn't magic where you wave your wand
and all you problems are solved.
