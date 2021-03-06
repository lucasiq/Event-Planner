module.exports = function(grunt) {

    "use strict"

    grunt.initConfig({

        watch: {
            options: {
                livereload: true,
                nospawn: true
            },
            js: {
                files: ["js/*.js", "js/controllers/*.js", "js/model/*.js"],
                options: {
                  livereload: true,
                  keepAlive: true
                }
            },
            html: {
                files: ["*.html","partials/*.html"],
                options: {
                  livereload: true,
                  keepAlive: true
                }
            },
            css: {
                files: "style/*.css",
                options: {
                  livereload: true,
                  keepAlive: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        },

        pkg: grunt.file.readJSON('package.json')
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask( "default", [ "connect", "watch" ]);

};