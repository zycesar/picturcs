$(function(){
	var list=$('ul li');
	var content=$('.content');
	var imgs=$('.content .imgbox img');
	var index=0;
	var imgsrc;
	var btnL=$('.btnL');
	var btnR=$('.btnR');
	$(document).on('mousedown',false);
	list.on('click',function(){
		index=$(this).index();
		imgsrc=list.eq(index).find('img').attr('src');
		content.addClass('block');
		imgs.attr('src',function(){
			return imgsrc;
		});
	})
	btnL.on('mousedown',false);
	// btnL.on('click',function(){
	// 	index--;
	// 	if(index<0){index=list.length-1}
	// 	imgsrc=list.eq(index).find('img').attr('src');
	// 	imgs.attr('src',function(){
	// 	return imgsrc;
	// 	});
	// })
	btnR.on('mousedown',false);
	// btnR.on('click',function(){
	// 	index++;
	// 	if(index>list.length-1){index=0}
	// 	imgsrc=list.eq(index).find('img').attr('src');
	// 	imgs.attr('src',function(){
	// 	return imgsrc;
	// 	});
	// })
	$('.close').on('click',function(){
			content.removeClass('block')
	})
	content.on('click',function(e){
		var ev=e.target;
		    ev.preventDefault;
		if(ev.className=='btnL'){
			index--;
			if(index<0){index=list.length-1}
			imgsrc=list.eq(index).find('img').attr('src');
			imgs.attr('src',function(){
			return imgsrc;
		});
		}
		if(ev.className=='btnR'){
			index++;
			if(index>list.length-1){index=0}
			imgsrc=list.eq(index).find('img').attr('src');
			imgs.attr('src',function(){
			return imgsrc;
		});
		}
		if(ev.className=='content block'){
		    content.removeClass('block')
		}
		var imgboxW=$('.imgbox').width();
		var imgboxH=$('.imgbox').height();
		var imgboxL=$('.imgbox').offset().left;
		var imgboxT=$('.imgbox').offset().top;
		if(e.pageX<imgboxL+imgboxW/2){
			btnL.trigger('click');
		}
		if(e.pageX>imgboxL+imgboxW/2){
			btnR.trigger('click')
		}


	})

})