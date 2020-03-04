// okay so I'm goning to credit where I got this code, cause it it's mine
//credit : https://codepen.io/nis130/pen/jONMqja
jQuery(document).ready(function() 
{
  jQuery('.skillbar').each(function() 
  {
      jQuery(this).find('.skillbar-bar').animate
      (
        { width: jQuery(this).attr('data-percent') 
      }, 2000);
  });

  function startAnimation(){
    jQuery('.skills2').each(function(){

      jQuery(this).find('.skillbar2').animate({
        width:jQuery(this).attr('data-percent')
      },0); 
      
  });
   } 
});