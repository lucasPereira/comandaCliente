/*global _*/
/*global $*/
/*global console*/
/*global Backbone*/
/*global Roteador*/
/*global UsuariosVisao*/

(function (contexto) {
	"use strict";

	var ComandaAplicacao = function () {
		this.inicializar();
	};

	ComandaAplicacao.prototype.configuracoes = {
		uriRest: "http://localhost:8081"
	};

	ComandaAplicacao.prototype.inicializar = function () {
		_.bindAll(this,
			"rotearInicio",
			"rotearUsuarios",
			"obterUriRest"
		);
		$.ajaxPrefilter(this.obterUriRest);
		this.roteador = new Roteador(this);
		this.usuariosVisao = new UsuariosVisao();
		Backbone.history.start();
	};

	ComandaAplicacao.prototype.rotearInicio = function () {
		console.log("Roteador iniciado.");
	};

	ComandaAplicacao.prototype.rotearUsuarios = function () {
		this.usuariosVisao.render();
	};

	ComandaAplicacao.prototype.obterUriRest = function (opcoes) {
		opcoes.url = (this.configuracoes.uriRest + opcoes.url);
	};

	contexto.ComandaAplicacao = ComandaAplicacao;
}(this));
