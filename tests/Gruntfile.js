module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        less: {
            options: {
                compress: false,
                sourceMap: false
            },

            global: {
                files: {
                    'css/style.css': 'css/source/style.less'
                }
            }
        },

        autoprefixer: {
            global: {
                options: {
                    browsers: ['last 3 versions', 'ie 9'],
                    map: false
                },
                src: 'css/style.css',
                dest: 'css/style.css'
            }
        },

        watch: {
            global: {
                files: 'css/**/*.less',
                tasks: 'less'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['less', 'autoprefixer', 'watch']);
};