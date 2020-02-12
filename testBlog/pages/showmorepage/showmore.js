
            $(document).ready(function(){
                $('.accordion .one').addClass('active').next().slideToggle();
              function close_accordion_section() {
              $('.accordion-header').removeClass('active');
              $('.accordion-header').next().slideUp(300);
              }
  
              $(".accordion-header").click( function(e) {
  
              var currentAttrValue = $(this).attr('data-id');
              console.log (currentAttrValue);
              if($(e.target).is('.active')) {
              close_accordion_section();
              }else {
              close_accordion_section();
  
              // Add active class to section title
              $(this).addClass('active');
              // Open up the hidden content panel
              $(this).next().slideDown(300);
              }
  
              e.preventDefault();
              }); 
  
  
  
              });