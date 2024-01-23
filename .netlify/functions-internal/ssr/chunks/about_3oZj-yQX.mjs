export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_FhMft-st.mjs').then(n => n.a);

export { page };
