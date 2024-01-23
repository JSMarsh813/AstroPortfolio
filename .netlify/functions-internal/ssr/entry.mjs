import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0kxpQyYJ.mjs';

const _page0  = () => import('./chunks/generic_6yA-pItl.mjs');
const _page1  = () => import('./chunks/index_wzR4uSbR.mjs');
const _page2  = () => import('./chunks/otherprojects_92XKSUrm.mjs');
const _page3  = () => import('./chunks/about_bxEmKdCy.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/otherprojects.astro", _page2],["src/pages/about.astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
