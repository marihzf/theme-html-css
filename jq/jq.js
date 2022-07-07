<script>
		$(document).ready(function(){
			$('div.question').click(function(){
				$(this).next('.answer').addClass('current')
				$(this).siblings('.answer').not('.current').slideUp()
				$(this).next('.answer').slideToggle().toggleClass('open');
				if($(this).next('.answer').hasClass('open'))
					$(this).css('background-image' , "url('img/up-arrow.png')");
				else
					$(this).css('background-image' , "url('img/arrow.png')");
				$(this).next('.answer').removeClass('current')
			})

			$('.popupclick , .loginpop').click(function(){
				$('.backpopup').show();
				$('.popup').show(1000);

			})
			$('.backpopup').click(function(){
				$(this).hide();
				$('.popup').hide(1000);
			})
			$('.fa-window-close').click(function(){
				$('.backpopup').hide();
				$('.popup').hide(1000);
			})
			
            $(window).scroll(function(){
               if($(window).scrollTop()>300) {
                   $(".gotop").show();
               } else {
                   $(".gotop").hide();
               }
           })
            $(".gotop").click(function(){
               
               $('html,body').animate({scrollTop:0},'800');
           })
         
		})
	</script>