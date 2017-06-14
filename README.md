# Wodle

**Wodle** is a static site generator using new frameworks and tools for modern web development. It's built on top of [Next.js](https://zeit.co/blog/next) and [Tachyons](tachyons.io). And you can easily turn the generated static site into a fully dynamic website.

## Why?

Because NextJS and functional CSS make super easy to get started with a blog or a static page so it's a good starting point for bloggers and dev that wants to learn those technologies.

## Installation

You can install **Wodle** via npm:

```
npm install -g wodle
```

## Getting started

Once Wodle is installed, you can use the `wodle` command. To build a new site you can run:

```
wodle myBlog
```

![demo](https://github.com/lucas-aragno/wodle/blob/master/images/aOdE6viaya.gif)

That will generate a new site called `myBlog` on the same directory where you ran the command

To get started with your new site you just need to cd into it and then install the dependencies:

```
cd myBlog
yarn
```

That will fetch all the dependencies, once that's ready you can start a server running:

```
yarn dev
```

And go to `localhost:3000/`.
That server will listen to changes on your app and reload the browser.


If you want to run your site without the hot-reloading you can run:

```
yarn start
```

## Build your site

To build your site you can run:

```
yarn build
```

which will generate an `out/` folder with your static site ready to be published.
