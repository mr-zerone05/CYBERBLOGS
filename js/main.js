(function(){

	// Highlight current nav item
	var hasCurrent = false;

	// Chuyển đường dẫn tương đối thành đường dẫn tuyệt đối
	function absolute(href) {
	    var link = document.createElement("a");
	    link.href = href;
	    return (link.protocol+"//"+link.host+link.pathname+link.search+link.hash);
	}

	// Bỏ lớp được chọn khỏi tất cả các mục menu
	$('#main-nav > li').each(function(){
		$(this).removeClass('current-menu-item current_page_item');
	});
	var links = $('#main-nav > li > a');
	var urls = window.location.href;
	// Tại sao duyệt từ sau về trước? Vì trang chủ có thể là https://xxxxx/,
	// như vậy sẽ khớp với tất cả các mục
	for (var i = links.length; i >= 0; i--) {
		if(urls.indexOf(absolute(links[i])) != -1){
			$(links[i]).parent().addClass('current-menu-item current_page_item');
			// Tại sao vẫn phải đặt hasCurrent? Vì không loại trừ trang chủ ở
			// định dạng https://xxxx/index.html
			hasCurrent = true;
			break;
		}		
	}


	if (!hasCurrent) {
		$('#main-nav > li:first').addClass('current-menu-item current_page_item');
	}
})();



// article toc
var toc = document.getElementById('toc')

if (toc != null) {
	window.addEventListener("scroll", scrollcatelogHandler);
	var tocPosition = 194+25;

	function scrollcatelogHandler(e) {
		 var event = e || window.event,
		     target = event.target || event.srcElement;
		 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		 if (scrollTop > tocPosition) {
		     toc.classList.add("toc-fixed");
		 } else {
		     toc.classList.remove("toc-fixed");
		 }
	}
}


$('#main-navigation').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    } else {
      $('#main-navigation').addClass('main-navigation-open');
    }
  });

$('#content').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    }
  });