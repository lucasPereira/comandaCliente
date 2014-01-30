(function (contexto) {
	var ComandaColecao = Backbone.Collection.extend({
		apiRest: function (uri) {
			return "http://localhost:8186" + uri;
		}
	});

	contexto.ComandaColecao = ComandaColecao;
}(this));
