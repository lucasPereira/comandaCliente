/*global _*/
/*global VisaoConteudo*/
/*global VisaoNavegacaoVazia*/

(function (contexto) {
	"use strict";

	var VisaoInicio = VisaoConteudo.extend({
		render: function (inicio) {
			var template = _.template(inicio);
			this.$el.html(template());
		}
	});

	var VisaoNavegacaoInicio = VisaoNavegacaoVazia.extend({});

	contexto.VisaoInicio = VisaoInicio;
	contexto.VisaoNavegacaoInicio = VisaoNavegacaoInicio;
}(this));
