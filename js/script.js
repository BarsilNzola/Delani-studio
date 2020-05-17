$(document).ready(function(){
  $(".icon1").click(function(){
      $(".icon1").hide();
      $(".p1").toggle();
      $(".p1").show();
  });
  $(".p1").click(function(){
    $(".p1").hide();
    $(".icon1").toggle();
    $(".icon1").show();
  });
});

$(document).ready(function(){
    $(".icon2").click(function(){
      $(".icon2").hide();
      $(".p2").toggle();
      $(".p2").show();
    });
    $(".p2").click(function(){
      $(".p2").hide();
      $(".icon2").toggle();
      $(".icon2").show();
    });
});

$(document).ready(function(){
    $(".icon3").click(function(){
      $(".icon3").hide();
      $(".p3").toggle();
      $(".p3").show();
    });
    $(".p3").click(function(){
      $(".p3").hide();
      $(".icon3").toggle();
      $(".icon3").show();
    });
});

$(document).ready(function(){
    $('.text').hover(function () {
    $(this).animate({opacity:'1'});
    },
    function () {
    $(this).animate({opacity:'0'});
})
});
$(document).ready(function(){
    $('#submission').submit(function(event){
        var display1 = $('input:first').val();
        var display2 = $('input#mce-EMAIL').val();
        if(display1 && display2 != ''){
            alert (display1 + ' we have received your message. Thank you for reaching out to us.');
        }else {
            alert ('Invalid input');
        }
        event.preventDefault();
    })
});