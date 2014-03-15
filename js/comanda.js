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
				"ativarRota",
				"obterUriRest"
			);
			$.ajaxPrefilter(this.obterUriRest);
			this.roteador = new Roteador(this);
			this.visaoNavegacaoPrincipal = new VisaoNavegacaoPrincipal();
			this.visaoNavegacaoPrincipal.render();
			this.ativo = null;
			Backbone.history.start();
		},

		rotearInicio: function () {
			this.ativarRota(new VisaoInicio());
		},

		rotearUsuarios: function () {
			this.ativarRota(new VisaoUsuarios());
		},

		rotearUsuariosCadastrar: function () {
			this.ativarRota(new VisaoUsuariosCadastrar());
		},

		obterUriRest: function (opcoes) {
			opcoes.url = (this.configuracoes.uriRest + opcoes.url);
		},

		ativarRota: function (rota) {
			if (this.ativo != null) {
				this.ativo.undelegateEvents();
			}
			this.ativo = rota;
			this.ativo.render();
		}
	};

	contexto.ComandaAplicacao = ComandaAplicacao;
}(this));
