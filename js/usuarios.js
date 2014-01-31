/*global _*/
/*global $*/
/*global console*/
/*global Backbone*/

(function (contexto) {
	"use strict";

	var UsuarioModelo = Backbone.Model.extend({});

	var UsuariosColecao = Backbone.Collection.extend({
		model: UsuarioModelo,

		url: "/usuarios"
	});

	var UsuariosVisao = Backbone.View.extend({
		el: "#usuarios",

		initialize: function () {
			_.bindAll(this,
				"obterUsuariosComSucesso",
				"obterUsuariosComFracasso"
			);
		},

		render: function () {
			var usuariosColecao = new UsuariosColecao();
			usuariosColecao.fetch({
				success: this.obterUsuariosComSucesso,
				error: this.obterUsuariosComFracasso
			});
		},

		obterUsuariosComSucesso: function (colecao, resposta) {
			var menu = $("<ul />");
			_.each(resposta, function (usuario) {
				menu.append($("<li />", {
					text: usuario.nome
				}));
			});
			this.$el.append(menu);
		},

		obterUsuariosComFracasso: function () {
			console.log("Fracasso");
		}
	});

	contexto.UsuariosVisao = UsuariosVisao;
}(this));
