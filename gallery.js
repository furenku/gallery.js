$(document).ready(function(){

   var galeria = u.createNewDiv({
      id:'slider-1', classNames:'slider columns h-55-v p0', css: { backgroundColor: 'black'}
   });
   var thumbs = u.createNewDiv({
      id:'slider-2', classNames:'slider-thumbs columns h-30-v p0'
   });


   galeria.insertBefore('#galeria-contenido');
   thumbs.insertBefore('#galeria-contenido');

   $('#galeria-contenido .wp-caption').each(function(){

      makeSlide( $(this) ).appendTo(galeria);

      var img =  $(this).find('img');

      var hipsterimg =
      u.createNewDiv({
        classNames: 'squareH p0'
      }).html(
         u.createNewDiv({
            classNames: 'color-white-bg card',
            css: { padding: '10px',  margin: '0 10px' }
         }).html(
           u.createNewDiv({classNames:'imgLiquid imgLiquidFill'}).html( img.clone() )
         )
      );


      makeSlide( hipsterimg ).appendTo(thumbs);

   })
   $('#galeria-contenido img').each(function(){

      makeSlide( $(this).clone() ).appendTo(galeria);

      var hipsterimg =
      u.createNewDiv({
       classNames: 'squareH p0'
      }).html(
         u.createNewDiv({
            classNames: 'color-white-bg card',
            css: { padding: '10px',  margin: '0 10px' }
         }).html(
           u.createNewDiv({classNames:'imgLiquid imgLiquidFill'}).html( $(this).clone() )
         )
      );


      makeSlide( hipsterimg ).appendTo(thumbs);
   })
   $('#galeria-contenido').remove();



   $('#slider-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-thumbs'
   });
   $('#slider-2').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      asNavFor: '.slider',
      dots: true,
      centerMode: true,
      centerPadding: 0,
      focusOnSelect: true,
   });
   $('.imgLiquid.imgLiquidFill').imgLiquid();
   $('.imgLiquid.imgLiquidNoFill').imgLiquid({fill:false});
   u.squareH();

});



function makeSlide( element ) {


   var next_element = '';
   next_element = element.next();

   element.width('100%')

   var slide = u.createNewDiv({
      classNames:'slide w-100 h-100'
   });
   slide.html( element );

   if( element.find('img').parent().length > 0 ){
      element.find('img').parent().addClass('w-100 h-100 imgLiquid imgLiquidFill');
   } else {
      slide.addClass('w-100 h-100 imgLiquid imgLiquidFill');
   }

   element.find('.wp-caption-text').addClass('absDownR p4 color-white-bg-opacity m2 fontXS');
   element.find('.wp-caption-text').parent().addClass('rel p5')
   return slide;
}
