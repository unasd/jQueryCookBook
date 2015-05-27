(function($){
	// 이러한 메서드들은 jQuery.fn에서 우리의 prototype으로 복사 될 것이다.
	var copiedMethods = 'bind unbind one trigger triggerHandler'.split(' ');

	// 빈 생성자
	function Listener(){};

	$.each(copiedMethods, function(i, name){
		Listener.prototype[name] = $.fn[name];
	});

	// 우리의 jQuery.fn.each도 교체될 필요가 있다. 
	Listener.prototype.each = function(fn){
		fn.call(this);
		return this;
	};

	$.Listener = function(data){
		return $.extend(new Listener(), data);
	};
})(jQuery);