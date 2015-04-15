var generators = require("yeoman-generator");

module.exports = generators.Base.extend({
	init: function() {
		this.copy("index.html", "index.html");
	}
});