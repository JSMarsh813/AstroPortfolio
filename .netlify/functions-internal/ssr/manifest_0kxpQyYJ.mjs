import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_Tj6vjdcQ.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"otherprojects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/otherprojects","type":"page","pattern":"^\\/otherprojects\\/?$","segments":[[{"content":"otherprojects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/otherprojects.astro","pathname":"/otherprojects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://main--vermillion-mandazi-4ce414.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/src/pages/otherprojects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_H_MITd1U.mjs","\u0000@astrojs-manifest":"manifest_0kxpQyYJ.mjs","D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_6yA-pItl.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_wzR4uSbR.mjs","\u0000@astro-page:src/pages/otherprojects@_@astro":"chunks/otherprojects_92XKSUrm.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_bxEmKdCy.mjs","@/components/SpaceForSidebar":"_astro/SpaceForSidebar.80KnjXwu.js","@/components/navigation/Header":"_astro/Header.H96ev8NM.js","@astrojs/react/client.js":"_astro/client.xc6m7CZm.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.W4s6FoD2.css","/favicon.svg","/robots.txt","/images/background.jpg","/images/backgrounddark.jpg","/images/dotsBackground.png","/images/friendapp.mp4","/images/friendapp.webm","/images/github.svg","/images/icon-arrow-down.svg","/images/icon-arrow-up.svg","/images/icon-envelope.svg","/images/icon-menu-close-bright.svg","/images/icon-menu-close.svg","/images/icon-menu-hamburger-bright.svg","/images/icon-menu-hamburger.svg","/images/leaping-rabbit.mp4","/images/leaping-rabbit.webm","/images/linkedIn.svg","/images/NASA picture of the day.mp4","/images/nasa.webm","/images/petProfileTailor.mp4","/images/petProfileTailor.webm","/images/pokemon-gym.mp4","/images/pokemon-gym.webm","/images/pokemonREADMEgiphy.gif","/images/service-palette.svg","/images/twitter.svg","/images/wellfound.svg","/_astro/client.xc6m7CZm.js","/_astro/Header.H96ev8NM.js","/_astro/index.iEt0lyHB.js","/_astro/SpaceForSidebar.80KnjXwu.js","/_astro/store.YfFYaQAs.js","/index.html","/otherprojects/index.html","/about/index.html"]});

export { manifest };
