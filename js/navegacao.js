/*global _*/
/*global $*/
/*global Backbone*/

(function (contexto) {
	"use strict";

	var ItemDeNavegacao = Backbone.Model.extend({});

	var ItensDeNavegacao = Backbone.Collection.extend({
		model: ItemDeNavegacao
	});

	var VisaoNavegacaoPrincipal = Backbone.View.extend({
		el: "#navegacaoPrincipal",

		initialize: function () {
			this.itensDeNavegacao = new ItensDeNavegacao([
				new ItemDeNavegacao({ uri: "#inicio", nome: "Início" }),
				new ItemDeNavegacao({ uri: "#usuarios", nome: "Usuários" })
			]);
			_.bindAll(this,
				"render",
				"selecionarItem"
			);
		},

		render: function () {
			var template = _.template($("#navegacaoPrincipalTemplate").html(), {
				itens: this.itensDeNavegacao.models
			});
			this.$el.html(template);
			this.$el.on("click", "ul > li > a", this.selecionarItem);
		},

		selecionarItem: function (evento) {
			this.$el.find(".active").removeClass("active");
			$(evento.target.parentNode).addClass("active");
		}
	});

	var VisaoNavegacaoSecundaria = Backbone.View.extend({
		el: "#navegacaoSecundaria",

		initialize: function () {
			this.itensDeNavegacao = new ItensDeNavegacao();
			_.bindAll(this,
				"render"
			);
		},

		adicionarEnlace: function (uri, nome) {
			var novoItem = new ItemDeNavegacao({ uri: uri, nome: nome });
			this.itensDeNavegacao.add([novoItem]);
		},

		render: function () {
			if (this.itensDeNavegacao.isEmpty()) {
				this.$el.empty();
			} else {
				var template = _.template($("#navegacaSecundariaTemplate").html(), {
					itens: this.itensDeNavegacao.models
				});
				this.$el.html(template);
			}
		}
	});

	contexto.VisaoNavegacaoPrincipal = VisaoNavegacaoPrincipal;
	contexto.VisaoNavegacaoSecundaria = VisaoNavegacaoSecundaria;
}(this));
