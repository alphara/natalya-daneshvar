$(document).ready(function(){
	
	/*menu*/
	$('.scroll_header').removeClass('scrolling');
	function scroll(){
		var $window_top = $(window).scrollTop();
		if($window_top > 84){
			$('.scroll_header').addClass('scrolling');
		}
		else {
			$('.scroll_header').removeClass('scrolling');
		}
	}
	scroll();
	$(document).scroll(function(){
		 scroll();
	});
	/*end menu*/
	
	/*form*/
	
	$('.fields_block').each(function(){
		$('input[name="date"]').mask('99.99.9999');
		$('input[name="time"]').mask('99:99');
		
		$('input[type="text"]', $(this)).on('keyup',function(){
			if($(this).attr('maxlength') == $(this).val().length) {
				$(this).next().focus();
			}
			if($(this).attr('name') == 'name'){
				$('.name_reciever').html($(this).val());
			}
		})
		
	});
	
	$('body').on('click', '.toggle-mnu', function(e){
		e.preventDefault();
		$('.toggle-mnu').toggleClass('on');
		$('.top-menu').fadeToggle(300);
	});
	
	$('.sort_filter').each(function(){
		let $initial_color = $(this).css('border-color');
		let $parent = $(this);
		$('select', $parent).focus(function(){
			let $color = '#26a1e0';
			$parent.attr('style', 'border-color:'+$color+'!important');
		}).blur(function(){
			$parent.attr('style', 'border-color:'+$initial_color);
		}).change(function(){
			$(this).trigger('blur');
		})

	});
	
	function form_validation(){
		let $pass = false;
		let $parent = $('.fields_block');
		$('input[type="text"], select', $parent).on('keyup blur',function(){
			$pass = true;
			$('input[type="text"], select', $parent).each(function(){
				if(!$(this).val()){
					$pass = false;
				}
				if($(this).attr('maxlength') && $(this).attr('maxlength') != $(this).val().length){
					$pass = false;
				}
			})
			if($pass == true){
				$('.download', $parent).removeClass('disabled')
			}
			else {
				$('.download', $parent).addClass('disabled')
			}
		});
	}
	form_validation();
	
	/*end form*/
	
	
	/*switch reports*/
	
	function switch_reports($item){
		
		var $dataid = $item.attr('data-id'),	
			$pos = $item.offset().left + $item.width()/2 - 30;
		$('.switching_item').hide();
		$('.switching_item[data-id="'+$dataid+'"]').show();
		$('.switcher_arrow').animate({'left':$pos}, 300);
	}
	
	$('.item_swither_btn.active').each(function(){
		var $item = $(this);
		switch_reports($item);
	});
	
	$('.item_swither_btn').click(function(){
		$('.item_swither_btn').removeClass('active');
		$(this).addClass('active');
		var $item = $(this);
		switch_reports($item);
	});
	
	
	/*end switch reports*/
	
	
	/*radio btn*/
	
	$('body').on('change', 'label.radio :radio', function(e, script) {
		var $this = $(this);
		$this.parents('label').toggleClass('active', $this.is(':checked'));
		if(!script && $this.is(':radio'))
		{
			$(':radio[name="'+$this.attr('name')+'"]').trigger('change', [true]);
		}
	})
	
	/*end radio btn*/
	
	
	
})
	