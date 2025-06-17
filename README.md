# try-vue3-vuefire ![](https://img.shields.io/badge/node-22.16.0-green?style=flat) ![](https://img.shields.io/badge/npm-10.9.2-2ecc71?style=flat)

Discovering **VueFire** (https://vuefire.vuejs.org/) while studying the related course: https://www.vuemastery.com/courses/firebase-with-vue3-and-vuefire/firebase-fundamentals

**YOU MUST HAVE** an existing **Firebase** account, and create a **Cloud Firestore Database**.

## Learn and Review

- Firebase (_Cloud Firestore Database_)
- VueFire
- Vite environment ([.env.example](./.env.example)) - See [Vite Docs](https://vite.dev/guide/env-and-mode.html#env-variables)
- Vuetify (https://vuetifyjs.com/en/getting-started/installation/#existing-projects)

## How this project was created

`npm create vue`

```bash
> npx
> create-vue

┌  Vue.js - The Progressive JavaScript Framework
│
◇  Project name (target directory):
│  try-vue3-vuefire
│
◇  Select features to include in your project: (↑/↓ to navigate, space to select, a to toggle all, enter to confirm)
│  TypeScript

Scaffolding project in /Users/lightzane/Documents/dev/try-vue3-vuefire...
│
└  Done. Now run:

   cd try-vue3-vuefire
   npm install
   npm run dev

| Optional: Initialize Git in your project directory with:

   git init && git add -A && git commit -m "initial commit"
```

## Install Dependencies

### VueFire and Firebase

> Note: YOU MUST HAVE an existing **Firebase** account and create a **Cloud Firestore Database**

https://vuefire.vuejs.org/guide/getting-started.html#Installation

```bash
npm i vuefire firebase
```

## Cleanup Boilerplate

**To follow the course** copy the few key codes: https://github.com/Code-Pop/firebase-with-vue-3-and-vuefire/tree/02-begin

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
