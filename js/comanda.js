/*global Backbone*/

(function (contexto) {
	"use strict";

	var VisaoConteudo = Backbone.View.extend({
		el: "#conteudo"
	});

	var VisaoNavegacao = Backbone.View.extend({
		el: "#navegacao"
	});

	contexto.VisaoConteudo = VisaoConteudo;
	contexto.VisaoNavegacao = VisaoNavegacao;
}(this));
