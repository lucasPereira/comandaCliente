/*global _*/
/*global VisaoConteudo*/
/*global VisaoNavegacao*/

(function (contexto) {
	"use strict";

	var ModeloCategoria = Backbone.Model.extend({
		idAttribute: "id_categoria"
	});

	var ColecaoCategorias = Backbone.Model.extend({
		model: ModeloCategoria,

		url: "/categorias"
	});

	var VisaoCardapio = VisaoConteudo.extend({
		initialize: function () {
			_.bindAll(this,
				"receberCategorias"
			);
		},

		obterCategorias: function () {
			new ColecaoCategorias().fetch({
				success: this.receberCategorias
			});
		},

		receberCategorias: function (a, b, c) {
			console.log(a);
			console.log(b);
			console.log(c);
			a.each(function (categoria) {
				console.log(categoria);
			});
		},

		render: function (cardapio) {
			var categorias = this.obterCategorias();
			var template = _.template(cardapio);
			this.$el.html(template());
		}
	});

	var VisaoNavegacaoCardapio = VisaoNavegacao.extend({
		initialize: function () {
			this.fixarTitulo("Cardápio");
		}
	});


	contexto.VisaoCardapio = VisaoCardapio;
	contexto.VisaoNavegacaoCardapio = VisaoNavegacaoCardapio;
}(this));
