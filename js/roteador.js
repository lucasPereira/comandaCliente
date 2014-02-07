/*global Backbone*/

(function (contexto) {
	"use strict";

	var Roteador = Backbone.Router.extend({
		initialize: function (aplicacao) {
			this.route("", "route:inicio", aplicacao.rotearInicio);
			this.route("inicio", "route:inicio", aplicacao.rotearInicio);
			this.route("usuarios", "route:usuarios", aplicacao.rotearUsuarios);
			this.route("usuarios/cadastrar", "route:usuarios/cadastrar", aplicacao.rotearUsuariosCadastrar);
		}
	});

	contexto.Roteador = Roteador;
}(this));
