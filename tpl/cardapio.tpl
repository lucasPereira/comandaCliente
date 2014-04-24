<div id="cardapio">
	<ul class="categorias">
	<% _.each(categorias, function (categoria) { %>
		<li>
			<a href="<%= categoria.uri %>">
				<h1><%= categoria.nome %></h1>
				<h2><%= categoria.descricao %></h2>
			</a>
		</li>
	<% }); %>
	</ul>
</div>
