(function (contexto) {
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

		obterUsuariosComSucesso: function (collection, response, options) {
			var menu = $("<ul />");
			_.each(response, function (usuario) {
				menu.append($("<li />", {
					text: usuario.nome
				}));
			});
			this.$el.append(menu);
		},

		obterUsuariosComFracasso: function (collection, response, options) {
			console.log("Fracasso");
		}
	});

	contexto.UsuariosVisao = UsuariosVisao;
}(this));
