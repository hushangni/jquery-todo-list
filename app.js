$(function() {
	console.log('ready');

	$('form').on('submit', function(e) {
		e.preventDefault();

		const $item = $('#item');
		const todoItem = $item.val().trim();

		$item.val('');
		if (todoItem.length > 0) {
			console.log(todoItem);

			const todoHTML = `
				<li>
					${todoItem}
					<label>
						<input type="checkbox">
						<span class="checkmark"></span>
					</label>
				</li>
			`;

			$('ul').append(todoHTML);
		}
	}); // form on submit end

	$('ul').on('click', 'span', function() {
		console.log($(this).parent().parent());
		$(this).parent().parent().toggleClass('completed');
	})

	$('.fa-sync').on('click', function() {
		location.reload();
	});
});