var generators = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");

module.exports = generators.Base.extend({
	promptForJquery: function() {
		var done = this.async();
		
		// Print the Yeoman greeter
		this.log(yosay("Really " + chalk.italic.cyan("really") + " simple HTML!"));
		
		var prompts = [{
			type: "confirm",
			name: "addJqueryCdnScriptTag",
			message: "Do you want to load jQuery in your html file?"
		}];
		
		this.prompt(prompts, function(props) {
			this.useJquery = props.addJqueryCdnScriptTag;
			done();
		}.bind(this));
	},
	templateHtmlFile: function() {
		var scriptTag = "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.js\"></script>";
		var context = {
			jquery_cdn_script_tag: this.useJquery ? scriptTag : ""
		};
		
		this.template("_index.html", "index.html", context);
	}
});