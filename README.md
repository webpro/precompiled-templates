# Precompiled Templates

Demo project around precompiled templates for some template engines. The goal is implement and configure things correctly, and to look for minimal footprint and best performance.

* Module format: AMD (using Require.js + optimizer)
* Modules are optimized and external templates will be precompiled and bundled.
* The three optimized modules use the runtime version of each template engine.
* Template engines included are [Handlebars](http://handlebarsjs.com/), [Hogan](http://twitter.github.io/hogan.js/), and [Dust](http://linkedin.github.io/dustjs/).
* Dedicated plugins for require.js + optimizer are used for each engine ([HB](https://github.com/webpro/requirejs-handlebars), [HGN](https://github.com/webpro/requirejs-hogan), [DST](https://github.com/webpro/requirejs-dust)).
* These plugins are stubbed out in the optimized modules.

## Install & build

    npm install
    bower install
    grunt

Working demo at `modules/index.html`. Open browser console for rendered output.

After running `grunt`, the optimized build is at `dist/index.html`. 

## Numbers

### Size of engine: full vs. runtime

Switching to the runtime version for precompiled templates can save lots of bytes:

_ | Handlebars | Hogan | Dust
---|---:|--:|--:
Full library (min) | 37764 | 5885 | 32671
Runtime (min) | 4416 | 2449 | 7291
Runtime (min+gzip) | 1876 | 1117 | 2343

**NOTE** Don't compare apples and oranges: this table is only meant to show the difference between the full and runtime version of a particular engine.

### Size of compiled templates

When precompiling templates from source to a JavaScript function, the size increases (this is normal: e.g. templating syntax is translated to function calls). With a small source template of 220 bytes:

_ | Handlebars | Hogan | Dust
---|--:|--:|--:|
Source | 220 | 220 | 202
Compiled JS | 1061 | 683 | 671

With a larger source template of 27254 bytes:

_ | Handlebars | Hogan | Dust
---|--:|--:|--:|
Source | 27254 | 27254 | 26820
Compiled JS | 45689 | 39274 | 33657
Increase | 68% | 44% | 25%

Note that the Dust source templates are slightly smaller due to its delimiter syntax (`{{..}}` vs. `{..}`).

### Performance

Performance measurements are done using jsPerf: for the [small source template](http://jsperf.com/precompiled-templates-hb-hgn) and the [larger](http://jsperf.com/precompiled-templates-large) one. These charts indicate that Handlebars is the fastest to render precompiled templates.

## Conclusions

* **Footprint**: Hogan has the smallest footprint, both the engine itself and the precompiled templates are small (it also has the smallest feature set!). However, Dust quickly catches up when templates become larger.
* **Performance**: Handlebars seems the fastest engine to render precompiled templates in most cases/browsers (though the tests are very limited in range and scale!).

It's important to note that this is a very rough comparison between template engines using only their most basic features. When adding some complexity (e.g. helpers, partials), size and performance will change.
