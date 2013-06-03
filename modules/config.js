require.config({
    paths: {
        text:       '../lib/requirejs-text/text',
        handlebars: '../lib/handlebars/handlebars',
        hogan:      '../lib/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
        dust:       '../lib/dustjs-linkedin-amd/dust-full-1.2.2',
        hb:         '../lib/requirejs-handlebars/hb',
        hgn:        '../lib/requirejs-hogan/hgn',
        dst:        '../lib/requirejs-dust/dst'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    }
});
