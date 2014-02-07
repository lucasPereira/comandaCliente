/*global _*/
/*global Backbone*/
/*global VisaoNavegacaoSecundaria*/

(function (contexto) {
	"use strict";

	var VisaoInicio = Backbone.View.extend({
		el: "#conteudoPrincipal",

		initialize: function () {
			this.visaoNavegacaoSecundaria = new VisaoNavegacaoSecundaria();
			_.bindAll(this,
				"render"
			);
		},

		render: function () {
			this.visaoNavegacaoSecundaria.render();
			this.$el.html("Bem vindo ao Comanda.");
		}
	});

	contexto.VisaoInicio = VisaoInicio;
}(this));
