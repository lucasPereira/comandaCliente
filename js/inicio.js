/*global _*/
/*global VisaoConteudo*/
/*global VisaoNavegacao*/

(function (contexto) {
	"use strict";

	var VisaoConteudoInicio = VisaoConteudo.extend({
		el: "#conteudo",

		render: function (inicio) {
			var template = _.template(inicio);
			this.$el.html(template());
		}
	});

	var VisaoNavegacaoInicio = VisaoNavegacao.extend({});

	contexto.VisaoConteudoInicio = VisaoConteudoInicio;
	contexto.VisaoNavegacaoInicio = VisaoNavegacaoInicio;
}(this));
