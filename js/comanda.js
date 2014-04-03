/*global Backbone*/

(function (contexto) {
	"use strict";

	var VisaoConteudo = Backbone.View.extend({
		el: "#conteudo"
	});

	var VisaoNavegacao = Backbone.View.extend({
		el: "#navegacao",

		initialize: function () {
			this.uriAnterior = "#inicio";
			this.titulo = "Comanda";
		},

		fixarUriAnterior: function (uri) {
			this.uriAnterior = ("#" + uri);
		},

		fixarTitulo: function (titulo) {
			this.titulo = titulo;
		},

		render: function (navegacao) {
			var template = _.template(navegacao, {
				uriAnterior: this.uriAnterior,
				titulo: this.titulo
			});
			this.$el.html(template);
		}
	});

	var VisaoNavegacaoVazia = Backbone.View.extend({
		el: "#navegacao",

		render: function () {
			this.$el.html("");
		}
	});

	contexto.VisaoConteudo = VisaoConteudo;
	contexto.VisaoNavegacao = VisaoNavegacao;
	contexto.VisaoNavegacaoVazia = VisaoNavegacaoVazia;
}(this));
