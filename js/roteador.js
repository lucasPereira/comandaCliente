/*global _*/
/*global $*/
/*global Backbone*/
/*global VisaoConteudoInicio*/
/*global VisaoNavegacaoInicio*/

(function (contexto) {
	"use strict";

	var Roteador = Backbone.Router.extend({
		configuracoes: {
			uriRest: "http://localhost:8081"
		},

		initialize: function () {
			_.bindAll(this,
				"rotearInicio",
				"obterUriRest"
			);
			this.inicializarRoteamentos();
			this.inicializarConfiguracoes();
			this.visaoConteudo = null;
			this.visaoNavegacao = null;
		},

		inicializarRoteamentos: function() {
			this.route("", "route:inicio", this.rotearRaiz);
			this.route("inicio", "route:inicio", this.rotearInicio);
		},

		inicializarConfiguracoes: function () {
			$.ajaxPrefilter(this.obterUriRest);
			Backbone.history.start();
		},

		rotearRaiz: function () {
			this.navigate("inicio", {trigger: true});
		},

		rotearInicio: function () {
			this.alterarTela(new VisaoConteudoInicio());
			this.alterarNavegacao(new VisaoNavegacaoInicio());
		},

		alterarNavegacao: function(visaoNavegacao) {
			if (this.visaoNavegacao) {
				this.visaoNavegacao.remove();
			}
			this.visaoNavegacao = visaoNavegacao;
			this.visaoNavegacao.render();
		},

		alterarTela: function(visaoConteudo) {
			$.get(this.obterUriTemplate(), function (template) {
				if (this.visaoConteudo) {
					this.visaoConteudo.remove();
				}
				this.visaoConteudo = visaoConteudo;
				this.visaoConteudo.render(template);
			});
		},

		obterUriTemplate: function () {
			var uri = Backbone.history.fragment;
			var template = "tpl/" + uri + ".tpl";
			return template;
		},

		obterUriRest: function (opcoes) {
			var testeUriTemplate = /^tpl\//;
			if (!testeUriTemplate.test(opcoes.url)) {
				opcoes.url = (this.configuracoes.uriRest + opcoes.url);
			}
		}
	});

	contexto.Roteador = Roteador;
}(this));
