if(!self.define){let n,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=r,n.onload=e,document.head.appendChild(n)}else n=r,importScripts(r),e()})).then((()=>{let n=e[r];if(!n)throw new Error(`Module ${r} didn’t register its module`);return n})));self.define=(i,l)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let u={};const o=n=>r(n,s),t={module:{uri:s},exports:u,require:o};e[s]=Promise.all(i.map((n=>t[n]||o(n)))).then((n=>(l(...n),u)))}}define(["./workbox-7369c0e1"],(function(n){"use strict";self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"_nuxt/_id_.09bba20f.js",revision:null},{url:"_nuxt/_id_.193f285c.js",revision:null},{url:"_nuxt/_id_.9382961a.js",revision:null},{url:"_nuxt/_id_.9fa7611d.css",revision:null},{url:"_nuxt/_id_.f2e56b84.js",revision:null},{url:"_nuxt/entry.0d8e9afd.css",revision:null},{url:"_nuxt/entry.ff4a4271.js",revision:null},{url:"_nuxt/error-404.23f2309d.css",revision:null},{url:"_nuxt/error-404.7f077d87.js",revision:null},{url:"_nuxt/error-500.0e1a1f53.js",revision:null},{url:"_nuxt/error-500.aa16ed4d.css",revision:null},{url:"_nuxt/error-component.7287d72d.js",revision:null},{url:"_nuxt/index.0bae5a38.js",revision:null},{url:"_nuxt/SelectInput.791cc464.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.295a6886.js",revision:null},{url:"manifest.webmanifest",revision:"66e0baf478848e873651a433a9147829"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/")))}));