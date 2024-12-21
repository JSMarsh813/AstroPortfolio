import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_Cx8_luhe.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/","adapterName":"@astrojs/netlify","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"otherprojects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/otherprojects","isIndex":false,"type":"page","pattern":"^\\/otherprojects\\/?$","segments":[[{"content":"otherprojects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/otherprojects.astro","pathname":"/otherprojects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://main--vermillion-mandazi-4ce414.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/src/pages/otherprojects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/otherprojects@_@astro":"pages/otherprojects.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DwXwamWP.mjs","D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DfWFFwT7.mjs","@/components/SpaceForDesktopSidebar":"_astro/SpaceForDesktopSidebar.DvdlvBji.js","D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/src/components/buttons/NavToggleButton":"_astro/NavToggleButton.BuI-pPkF.js","D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/src/components/navigation/MobileNavContainer":"_astro/MobileNavContainer.CsmxAp8k.js","@astrojs/react/client.js":"_astro/client.BpwqiXr7.js","D:/janet/tech-magic/github/projects/astro-portfolio/adorable-apogee/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.i1BLOK4z.js","astro:scripts/page.js":"_astro/page.DlXkxCA4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/wireFrame.BtIk4izB.png","/_astro/about.Dv9U8l7D.css","/favicon.svg","/robots.txt","/images/accessiblity.svg","/images/background.jpg","/images/background2.jpg","/images/backgrounddark.jpg","/images/comingSoon.jpg","/images/diamond.svg","/images/dotsBackground.png","/images/friendapp.mp4","/images/friendapp.webm","/images/github.svg","/images/icon-arrow-down.svg","/images/icon-arrow-up.svg","/images/icon-envelope.svg","/images/icon-menu-close-bright.svg","/images/icon-menu-close.svg","/images/icon-menu-hamburger-bright.svg","/images/icon-menu-hamburger.svg","/images/leaping-rabbit.mp4","/images/leaping-rabbit.webm","/images/linkedIn.svg","/images/NASA picture of the day.mp4","/images/nasa.webm","/images/nourishedByKeto.mp4","/images/nourishedByKeto.webm","/images/petProfileTailor.mp4","/images/petProfileTailor.webm","/images/pokemon-gym.mp4","/images/pokemon-gym.webm","/images/pokemonREADMEgiphy.gif","/images/responsive-devices-flexible-svgrepo-com.svg","/images/responsive.svg","/images/service-palette.svg","/images/tataru.mp4","/images/tataru.webm","/images/thumbnail.png","/images/twitter.svg","/images/ufancy.mp4","/images/ufancy.webm","/images/wellfound.svg","/_astro/client.BpwqiXr7.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.i1BLOK4z.js","/_astro/disclosure.XMdCE_ul.js","/_astro/index.CrDnYwTo.js","/_astro/index.hIESyhSu.js","/_astro/jsx-runtime.DkhmsINC.js","/_astro/MobileNavContainer.CsmxAp8k.js","/_astro/navStore.Cg4hzDsj.js","/_astro/NavToggleButton.BuI-pPkF.js","/_astro/page.DlXkxCA4.js","/_astro/SpaceForDesktopSidebar.DvdlvBji.js","/_astro/page.DlXkxCA4.js","/about/index.html","/otherprojects/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"PjaB3dricQEz6zmwOIeoU7miy1af8wuiMlpolKojON0="});

export { manifest };
