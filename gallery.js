var ignoreImgsWithClass = 'synved-share-image';

$(document).ready(function(){

   var galeria = u.createNewDiv({
      id:'slider-1', classNames:'slider columns h-55-v p0', css: { backgroundColor: 'white'}
   });
   var thumbs = u.createNewDiv({
      id:'slider-2', classNames:'slider-thumbs columns h-30-v p0'
   });


   galeria.insertBefore('#galeria-contenido');
   thumbs.insertBefore('#galeria-contenido');

   var gallery_title = "Galería";

   if( $('#contenedor-principal .titulo h1').length > 0 )
      gallery_title = $('#contenedor-principal .titulo h1').html();


   var slide_count = 0;

   $('#galeria-contenido .wp-caption').each(function(){


      var slide_title = "";
      var img_src  = $(this).find('img').attr('src');


      if( $(this).find('.wp-caption-text').length > 0 )
         slide_title = $(this).find('.wp-caption-text').html();

      var lightboxlink = $('<a>');
      lightboxlink.css('color','#333');
      lightboxlink.attr('data-lightbox', gallery_title );
      lightboxlink.attr('href', img_src );
      lightboxlink.attr('data-title', slide_title );
      lightboxlink.html( makeSlide( $(this) ) );


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
      lightboxlink.find('img').parent().removeClass('imgLiquidFill').addClass('imgLiquidNoFill');
      lightboxlink.appendTo( galeria );

      slide_count++;

   })
   $('#galeria-contenido img').each(function(){

      if( $(this).hasClass( ignoreImgsWithClass ) ) {
         $(this).remove();
      } else {

      var slide_title = "";
      var img_src  = $(this).attr('src');

      var lightboxlink = $('<a>');
      lightboxlink.css('color','#333');
      lightboxlink.attr('data-lightbox', gallery_title );
      lightboxlink.attr('href', img_src );
      lightboxlink.attr('data-title', slide_title );
      lightboxlink.html( makeSlide( $(this) ) );


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
      lightboxlink.find('img').removeClass('imgLiquidFill').addClass('imgLiquidNoFill');
      lightboxlink.appendTo( galeria );

      slide_count++;

      }
   })


   $('#galeria-contenido').remove();

   var max_slides_lg = Math.min(slide_count, 4);
   var max_slides_md = Math.min(slide_count, 3);
   var max_slides_sm = Math.min(slide_count, 2);


   var breakpoints = [];

   $('#slider-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-thumbs'
   });
   $('#slider-2').slick({
      slidesToShow: max_slides_lg,
      slidesToScroll: max_slides_lg,
      asNavFor: '.slider',
      dots: true,
      centerMode: true,
      centerPadding: 0,
      focusOnSelect: true,
      responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: max_slides_md,
           slidesToScroll: max_slides_md,
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: max_slides_sm,
           slidesToScroll: max_slides_sm
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: max_slides_sm,
           slidesToScroll: max_slides_sm
         }
       }
     ]
   });


   $('.imgLiquid.imgLiquidFill').imgLiquid();
   $('.imgLiquid.imgLiquidNoFill').imgLiquid({fill:false});


   u.squareH();


   lightbox.option({
      showImageNumberLabel: false
   })


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
