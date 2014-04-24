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
			this.colecaoCategorias = new ColecaoCategorias();
			this.colecaoCategorias.fetch({
				success: this.receberCategorias
			});
		},

		receberCategorias: function (evento, categorias) {
			var template = _.template(this.templateCardapio);
			console.log(this.colecaoCategorias.models);
			console.log(categorias);
			this.$el.html(template({
				categorias: categorias
			}));
		},

		render: function (templateCardapio) {
			this.templateCardapio = templateCardapio;
			this.obterCategorias();
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
