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
		el: "#usuariosContainer",

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

		obterUsuariosComSucesso: function (usuariosColecao) {
			var template = _.template($("#usuariosTemplate").html(), {
				usuarios: usuariosColecao.models
			});
			this.$el.html(template);
		},

		obterUsuariosComFracasso: function () {
			console.log("Fracasso");
		}
	});

	contexto.UsuariosVisao = UsuariosVisao;
}(this));
