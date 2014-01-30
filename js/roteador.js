(function (contexto) {
	var Roteador = Backbone.Router.extend({
		initialize: function (aplicacao) {
			this.route("", "route:inicio", aplicacao.rotearInicio);
			this.route("usuarios", "route:usuarios", aplicacao.rotearUsuarios);
		}
	});

	contexto.Roteador = Roteador;
}(this));
