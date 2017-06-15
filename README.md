# Wodle

**Wodle** is a static site generator using new frameworks and tools for modern web development. It's built on top of [Next.js](https://zeit.co/blog/next) and [Tachyons](http://tachyons.io/). And you can easily turn the generated static site into a fully dynamic website.

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

<p align="center">
  <img src="https://github.com/lucas-aragno/wodle/blob/master/images/aOdE6viaya.gif">
</p>

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

And go to `localhost:3000/`, you should see a site like this one:

<p align="center">
  <img src="https://github.com/lucas-aragno/wodle/blob/master/images/site.png">
</p>

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


## How it works?

Your site will have different folders:

### Pages Folder

This folder contains your pages files and their names matches their routes, so if you want to add a new page on `/new-page` you will need to add a new component on this folder called `new-page.js`. For advanced routing check [here](https://github.com/zeit/next.js/#routing).

The scaffold comes with some page components prebuilt on the `components` folder.

## Components Folder

In this folder you will find all the pre-built components on the site, the core components of this scaffold app are:

* SideBar

A sidebar component that gets items and renders a Nav with their NavItems, the content for this component it's on `content/sideBarOptions.js`

* Main

This components just wraps whatever you want to display on the main section (the center of the site).

* MainArticle

This component renders the main Article, as you see on the index and each particular article. A demo of the content that can be processed by this component it's on `content/mainArticle`.

* ArticleList

This component renders a list of articles as you will see on each individual page from the sidebar menu, you can see the lists on `content/` on the `<something>Articles.js` files


among others

## Styles Folder

Your styles folder is for all your css (right now almost empty thanks to functional CSS and Tachyons)

### Extending the Site

You can continue deleting pages (removing files from the `pages` folder) adding more pages, articles, options following the patterns on the scaffold or just change everything as you want! You can read great guides on Next.js site and Tachyons to make your awesome website or blog!


based on previous art [chibicode.com](https://github.com/chibicode/chibicode.com) and [jspg](https://github.com/bryanjos/jspg)
