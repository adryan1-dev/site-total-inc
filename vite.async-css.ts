import type { Plugin } from 'vite'

/** Load built CSS without blocking first paint; critical shell styles live in index.html. */
export function asyncCss(): Plugin {
  return {
    name: 'async-css',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<link\s+rel="stylesheet"(\s+crossorigin(?:="[^"]*")?)?\s+href="([^"]+\.css)"\s*\/?>/g,
        [
          '<link rel="preload" as="style"$1 href="$2" onload="this.onload=null;this.rel=\'stylesheet\'">',
          '<noscript><link rel="stylesheet"$1 href="$2"></noscript>',
        ].join(''),
      )
    },
  }
}
