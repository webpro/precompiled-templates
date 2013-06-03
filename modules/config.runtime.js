require.config({
    paths: {
        text:       '../lib/requirejs-text/text',
        handlebars: '../lib/handlebars/handlebars.runtime',
        hogan:      '../lib/hogan/web/builds/2.0.0/template-2.0.0',
        dust:       '../lib/dustjs-linkedin-amd/dust-core-1.2.2'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        },
        hogan: {
            exports: 'Hogan'
        }
    }
});
