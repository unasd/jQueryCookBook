jQuery.fn.myPlugin = function () {
	return this
	.on('click.myPlugin', function(){
		console.log('click');
	})
	.bind('mousedown.myPlugin', function(){
		console.log('mousedown');
	});
};

jQuery.fn.disposeMyPlugin = function(){
	return this.off('.myPlugin');
};