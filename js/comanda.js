/*global _*/
/*global $*/
/*global Backbone*/
/*global Roteador*/
/*global VisaoInicio*/
/*global VisaoNavegacaoPrincipal*/
/*global VisaoUsuariosCadastrar*/
/*global VisaoUsuarios*/

(function (contexto) {
	"use strict";

	var ComandaAplicacao = function () {
		this.inicializar();
	};

	ComandaAplicacao.prototype = {
		configuracoes: {
			uriRest: "http://localhost:8081"
		},

		inicializar: function () {
			_.bindAll(this,
				"rotearInicio",
				"rotearUsuarios",
				"rotearUsuariosCadastrar",
				"obterUriRest"
			);
			$.ajaxPrefilter(this.obterUriRest);
			this.roteador = new Roteador(this);
			this.visaoInicio = new VisaoInicio();
			this.visaoUsuarios = new VisaoUsuarios();
			this.visaoUsuariosCadastrar = new VisaoUsuariosCadastrar();
			this.visaoNavegacaoPrincipal = new VisaoNavegacaoPrincipal();
			this.visaoNavegacaoPrincipal.render();
			Backbone.history.start();
		},

		rotearInicio: function () {
			this.visaoInicio.render();
		},

		rotearUsuarios: function () {
			this.visaoUsuarios.render();
		},

		rotearUsuariosCadastrar: function () {
			this.visaoUsuariosCadastrar.render();
		},

		obterUriRest: function (opcoes) {
			opcoes.url = (this.configuracoes.uriRest + opcoes.url);
		}
	};

	contexto.ComandaAplicacao = ComandaAplicacao;
}(this));
