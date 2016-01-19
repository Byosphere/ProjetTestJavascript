$(document).ready(function(){

	var Person = Backbone.Model.extend({

		url:function(){

			return 'data/person.json';

		},
		parse:function(resp, xhr) {

			return resp.results;
		}

	});

	var PersonVue = Backbone.View.extend({

		

	});

	var unePerson = new Person();
	unePerson.fetch();
	console.log(unePerson);

});
