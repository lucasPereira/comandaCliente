/*global _*/
/*global Backbone*/

(function (contexto) {
	"use strict";

	var VisaoErroGet = Backbone.View.extend({
		initialize: function (container) {
			this.$el = container;
			_.bindAll(this,
				"render"
			);
		},

		render: function () {
			var template = _.template($("#erroGetTemplate").html());
			this.$el.html(template);
		}
	});

	var VisaoErroPost = Backbone.View.extend({
		initialize: function (container) {
			this.$el = container;
			_.bindAll(this,
				"render"
			);
		},

		render: function () {
			var template = _.template($("#erroPostTemplate").html());
			this.$el.html(template);
		}
	});

	var VisaoErroPut = Backbone.View.extend({
		initialize: function (container) {
			this.$el = container;
			_.bindAll(this,
				"render"
			);
		},

		render: function () {
			var template = _.template($("#erroPutTemplate").html());
			this.$el.html(template);
		}
	});

	var VisaoSucessoPut = Backbone.View.extend({
		initialize: function (container) {
			this.$el = container;
			_.bindAll(this,
				"render"
			);
		},

		render: function () {
			var template = _.template($("#sucessoPutTemplate").html());
			this.$el.html(template);
		}
	});


	contexto.VisaoErroGet = VisaoErroGet;
	contexto.VisaoErroPost = VisaoErroPost;
	contexto.VisaoErroPut = VisaoErroPut;
	contexto.VisaoSucessoPut = VisaoSucessoPut;
}(this));
