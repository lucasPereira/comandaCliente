(function (contexto) {
	contexto.Comanda = Backbone.View.extend({
		container: "#comanda",

		events: {
			"click button#iniciar": "dizerOi"
		},

		initialize: function () {
			_.bindAll(this, "render", "dizerOi");
			this.render();
		},

		render: function () {
			var teste = Dom.$(documento).criarElemento("button");
			teste.fixarAtributo("id", "iniciar");
			teste.texto = "Inicializar";
			Dom.$(this.container).adicionarNodo(teste);
		},

		dizerOi: function () {
			console.log("LOL");
			var teste = Dom.$(documento).criarElemento("p");
			teste.texto = "Oi";
			Dom.$(this.container).adicionarNodo(teste);
		}
	});
}(this));
