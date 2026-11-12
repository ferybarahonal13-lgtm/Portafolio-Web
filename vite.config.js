import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import HtmlCssPurgePlugin from 'vite-plugin-purgecss';

export default defineConfig({
    base: '/Portafolio-Web/',
    build: {
        minify: true,
        cssMinify: true
    },
    plugins: [
        HtmlCssPurgePlugin({
            safelist: ['invalido']
        }),
        ViteMinifyPlugin()
    ]
});