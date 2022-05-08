jQuery(document).ready(function($){
    $(".show-more-btn").click(function(e){
      $(".show-more-item:hidden").slice(0,9).fadeIn();
      if ($(".show-more-item:hidden").length < 1) $(this).fadeOut();
    })
  })
  $(document).ready(function() {	
    var $result = $('#search_box-result');
    
    $('#search').on('keyup', function(){
      var search = $(this).val();
      if ((search != '') && (search.length > 1)){
        $.ajax({
          type: "POST",
          url: "./serials/ajax_search.php",
          data: {'search': search},
          success: function(msg){
            $result.html(msg);
            if(msg != ''){	
              $result.fadeIn();
            } else {
              $result.fadeOut(100);
            }
          }
        });
       } else {
        $result.html('');
        $result.fadeOut(100);
       }
    });
   
    $(document).on('click', function(e){
      if (!$(e.target).closest('.search_box').length){
        $result.html('');
        $result.fadeOut(100);
      }
    });
    
    $(document).on('click', '.search_result-name a', function(){
      $('#search').val($(this).text());
      $result.fadeOut(100);
      return false;
    });
    
    $(document).on('click', function(e){
      if (!$(e.target).closest('.search_box').length){
        $result.html('');
        $result.fadeOut(100);
      }
    });
    
  });

 














  