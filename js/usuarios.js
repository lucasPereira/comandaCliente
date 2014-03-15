/*global _*/
/*global $*/
/*global Backbone*/
/*global VisaoNavegacaoSecundaria*/

(function (contexto) {
	"use strict";

	var Usuario = Backbone.Model.extend({
		urlRoot: "/usuario",

		idAttribute: "login"
	});

	var Usuarios = Backbone.Collection.extend({
		model: Usuario,

		url: "/usuarios"
	});

	var VisaoUsuario = Backbone.View.extend({
		el: "#conteudoPrincipal",

		events: {
			"submit form": "salvar"
		},

		initialize: function (usuario) {
			this.usuario = usuario;
			this.visaoNavegacaoSecundaria = new VisaoNavegacaoSecundaria();
			_.bindAll(this,
				"salvar",
				"mostrarSucesso",
				"mostrarErro",
				"render"
			);
		},

		salvar: function (evento) {
			evento.preventDefault();
			var formulario = this.$el.find("form");
			this.usuario.save({
				nome: formulario.find("input.nome").val(),
				login: formulario.find("input.login").val(),
				senha: formulario.find("input.senha").val(),
				email: formulario.find("input.email").val(),
				id_responsabilidade: 1
			}, {
				success: this.mostrarSucesso,
				error: this.mostrarErro
			});
		},

		mostrarSucesso: function () {
			new VisaoSucessoPut(this.$el.find(".mensagem")).render();
		},

		mostrarErro: function () {
			new VisaoErroPut(this.$el.find(".mensagem")).render();
		},

		render: function () {
			this.visaoNavegacaoSecundaria.render();
			var template = _.template($("#usuarioTemplate").html(), {
				usuario: this.usuario
			});
			this.$el.html(template);
		},
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

		mostrarUsuarios: function () {
			var template = _.template($("#usuariosTemplate").html(), {
				usuarios: this.usuarios.models
			});
			this.$el.html(template);
		},

		mostrarErro: function () {
			new VisaoErroGet(this.$el).render();
		},

		render: function () {
			this.visaoNavegacaoSecundaria.render();
			this.usuarios.fetch({
				success: this.mostrarUsuarios,
				error: this.mostrarErro
			});
		}
	});

	var VisaoUsuariosCadastrar = Backbone.View.extend({
		el: "#conteudoPrincipal",

		events: {
			"submit form": "cadastrar"
		},

		initialize: function () {
			this.visaoNavegacaoSecundaria = new VisaoNavegacaoSecundaria();
			this.visaoNavegacaoSecundaria.adicionarEnlace("#usuarios", "Voltar");
			_.bindAll(this,
				"cadastrar",
				"mostrarUsuario",
				"mostrarErro",
				"render"
			);
		},

		cadastrar: function (evento) {
			evento.preventDefault();
			var formulario = this.$el.find("form");
			var usuario = new Usuario();
			usuario.save({
				nome: formulario.find("input.nome").val(),
				login: formulario.find("input.login").val(),
				senha: formulario.find("input.senha").val(),
				email: formulario.find("input.email").val(),
				id_responsabilidade: 1
			}, {
				success: this.mostrarUsuario,
				error: this.mostrarErro
			});
		},

		mostrarUsuario: function (ususario) {
			this.undelegateEvents();
			new VisaoUsuario(ususario).render();
		},

		mostrarErro: function () {
			new VisaoErroPut(this.$el.find(".mensagem")).render();
		},

		render: function () {
			this.visaoNavegacaoSecundaria.render();
			var template = _.template($("#usuariosCadastrarTemplate").html());
			this.$el.html(template);
		}
	});

	contexto.VisaoUsuarios = VisaoUsuarios;
	contexto.VisaoUsuariosCadastrar = VisaoUsuariosCadastrar;
}(this));
