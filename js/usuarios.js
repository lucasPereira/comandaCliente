/*global _*/
/*global $*/
/*global Backbone*/
/*global VisaoNavegacaoSecundaria*/

(function (contexto) {
	"use strict";

	var Usuario = Backbone.Model.extend({});

	var Usuarios = Backbone.Collection.extend({
		model: Usuario,

		url: "/usuarios"
	});

	var VisaoUsuarios = Backbone.View.extend({
		el: "#conteudoPrincipal",

		initialize: function () {
			this.usuarios = new Usuarios();
			this.visaoNavegacaoSecundaria = new VisaoNavegacaoSecundaria();
			this.visaoNavegacaoSecundaria.adicionarEnlace("#usuarios/cadastrar", "Cadastrar");
			_.bindAll(this,
				"render",
				"mostrarUsuarios",
				"mostrarErro"
			);
		},

		render: function () {
			this.visaoNavegacaoSecundaria.render();
			this.usuarios.fetch({
				success: this.mostrarUsuarios,
				error: this.mostrarErro
			});
		},

		mostrarUsuarios: function () {
			var template = _.template($("#usuariosTemplate").html(), {
				usuarios: this.usuarios.models
			});
			this.$el.html(template);
		},

		mostrarErro: function () {
			var template = _.template($("#erroAoCarregarTemplate").html());
			this.$el.html(template);
		}
	});

	var VisaoUsuariosCadastrar = Backbone.View.extend({
		el: "#conteudoPrincipal",

		initialize: function () {
			this.visaoNavegacaoSecundaria = new VisaoNavegacaoSecundaria();
			this.visaoNavegacaoSecundaria.adicionarEnlace("#usuarios", "Voltar");
			_.bindAll(this,
				"render"
			);
		},

		render: function () {
			this.visaoNavegacaoSecundaria.render();
			this.$el.html("Formulário de cadastro.");
		}
	});

	contexto.VisaoUsuarios = VisaoUsuarios;
	contexto.VisaoUsuariosCadastrar = VisaoUsuariosCadastrar;
}(this));
