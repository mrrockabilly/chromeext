module.exports = function(grunt){
	//project configuration
	grunt.initConfig({
		//taks configured here
		concat:{
			release: {
				src: ['js/values.js', 'js/prompt.js'],
				dest: 'release/main.js'
			}
		},
		copy:{
			release: {
				src: 'manifest.json',
				dest: 'release/manifest.json'
			}
		},
		jshint: {
			files: ['js/values.js', 'js/prompt.js']
		},
		watch: {
			files: ['<%= jshint.files %>', 'manifest.json'],
			tasks: ['default']
		}
		
	});
	//plugins loaded here
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//tasks registered here
	grunt.registerTask('default', ['jshint', 'concat', 'copy']);
};