
It is not the behavior of `highlight.js` and requires custom CSS for `<figure>` and `<table>` elements; some themes have built-in support.

You might also notice that all `class` has no `hljs-` prefixed, we will revisit it [later part](#hljs).

### tab_replace

Replace tabs inside code block with given string. By default it is 2 spaces.

### wrap

Hexo _wraps_ the output inside `<figure>` and `<table>` to support line number. You need to disable **both** `line_number` and `wrap` to revert to `highlight.js`'s behavior:

```html
<pre><code class="yaml">
<span class="comment"># _config.yml</span>
<span class="attr">hexo:</span> <span class="string">hexo</span>
</code></pre>
```

Because `line_number` feature relies on `wrap`, you can't disable `wrap` with `line_number` enabled: If you set `line_number` to `true`, `wrap` will be automatically enabled.

### hljs

When `hljs` is set to `true`, all the HTML output will have `class` prefixed with `hljs-` (regardless `wrap` is enabled or not):

```html
<pre><code class="yaml hljs">
<span class="hljs-comment"># _config.yml</span>
<span class="hljs-attr">hexo:</span> <span class="hljs-string">hexo</span>
</code></pre>
```

> Tip: When `line_number` is set to `false`, `wrap` is set to false and `hljs` is set to `true`, you can then use `highlight.js` [theme](https://github.com/highlightjs/highlight.js/tree/master/src/styles) directly in your site.

## PrismJS

```yaml
# _config.yml
highlight:
  enable: false
prismjs:
  enable: true
  preprocess: true
  line_number: true
  tab_replace: ''
```

Prismjs is disabled by default. You should set `highlight.enable` to `false` before enabling prismjs.

### preprocess

Hexo's built-in prismjs supports both browser-side (`preprocess` set to `false`) and server-side (`preprocess` set to `true`).

When use server-side mode (set `preprocess` to `true`), you only need to include prismjs theme (css stylesheet) in your website. When use browser-side (set `preprocess` to `false`), you have to include the javascript library as well.

Prismjs is designed to be used in browser, thus under `preprocess` mode only limited prismjs plugin is supported:

- [Line Numbers](https://prismjs.com/plugins/line-numbers/): Only `prism-line-numbers.css` is required, No need to include `prism-line-numbers.js` in your website. Hexo will generate required HTML mark up mark up for you.
- [Show Languages](https://prismjs.com/plugins/show-language/): Hexo will always have `data-language` attribute added as long as language is given for the code block.
- Any other prism plugins that don't need special HTML markup are supported as well, but you will have to include JavaScript required by those plugins.

All prism plugins are supported if `preprocess` is set to `false`. Here are a few things you should still pay attention to:

- [Line Numbers](https://prismjs.com/plugins/line-numbers/): Hexo won't generate required HTML mark up when `preprocess` is set to `false`. Requires both `prism-line-numbers.css` and `prism-line-numbers.js`.
- [Show Languages](https://prismjs.com/plugins/show-language/): Hexo will always have `data-language` attribute added as long as language is given for the code block.
- [Line Highlight](https://prismjs.com/plugins/line-highlight/): Both Hexo [Tag Plugin - Code Block](tag-plugins#Code-Block) and [Tag Plugin - Backtick Code Block](https://hexo.io/docs/tag-plugins#Backtick-Code-Block) supports Line Highlight syntax (`mark` option). When `mark` option is given, Hexo will generate the corresponding HTML markup.

### line_number

With both `preprocess` and `line_number` set to `true`, you just need to include `prism-line-numbers.css` to make line-numbering work. If you set both `preprocess` and `line_number` to false, you will need both `prism-line-numbers.css` and `prism-line-numbers.js`.

### tab_replace

Replace `\t` inside code block with given string. By default it is 2 spaces.

## Other useful information

- [Highlight.js](https://highlightjs.readthedocs.io/en/latest/)
- [PrismJS](https://prismjs.com/)

The source codes behind Hexo's syntax highlighting are available in:

- [Highlight.js Utility Functions](https://github.com/hexojs/hexo-util/blob/master/lib/highlight.js)
- [PrismJS Utility Functions](https://github.com/hexojs/hexo-util/blob/master/lib/prism.js)
- [Tag Plugin - Code Block](https://github.com/hexojs/hexo/blob/master/lib/plugins/tag/code.js)
- [Tag Plugin - Backtick Code Block](https://github.com/hexojs/hexo/blob/master/lib/plugins/filter/before_post_render/backtick_code_block.js)
