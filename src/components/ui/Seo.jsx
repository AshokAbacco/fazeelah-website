import { useEffect } from 'react';
import { school } from '../../data/schoolData.js';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

/** Per-page SEO: title, description, canonical, Open Graph and Twitter tags. */
export default function Seo({ title, description, path, image = '/og-image.jpg' }) {
  useEffect(() => {
    const url = `${school.siteUrl}${path === '/' ? '/' : path}`;
    const img = image.startsWith('http') ? image : `${school.siteUrl}${image}`;
    document.title = title;
    setMeta('name', 'description', description);
    setCanonical(url);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', img);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', img);
  }, [title, description, path, image]);

  return null;
}
