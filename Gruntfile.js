module.exports = function(grunt) {

    grunt.initConfig({

        requirejs: {
            modules: {
                exclude: ['text', 'handlebars', 'hogan', 'dust', 'data/data'],
                options: {
                    appDir: 'modules',
                    baseUrl: '.',
                    mainConfigFile: 'modules/config.js',
                    modules: [
                        {name: 'module-handlebars', exclude: '<%= requirejs.modules.exclude %>'},
                        {name: 'module-hogan', exclude: '<%= requirejs.modules.exclude %>'},
                        {name: 'module-dust', exclude: '<%= requirejs.modules.exclude %>'}
                    ],
                    dir: 'dist',
                    stubModules: ['hb', 'hgn', 'dst'],
                    optimize: 'uglify2'
                }
            }
        },

        copy: {
            config: {
                files: [{src: ['dist/config.runtime.js'], dest: 'dist/config.js'}]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['requirejs:modules', 'copy:config']);

};
