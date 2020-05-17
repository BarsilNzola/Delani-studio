$(document).ready(function(){
  $(".icon1").click(function(){
    $(".icon1").hide(1200);
    $(".p1").toggle(1200);
    $(".p1").show(1200);
  })
  $(".p1").click(function(){
    $(".p1").hide(1200);
    $(".icon1").toggle(1200);
    $(".icon1").show(1200);
  });

$(document).ready(function(){
    $(".icon2").click(function(){
      $(".icon2").hide(1200);
      $(".p2").toggle(1200);
      $(".p2").show(1200);
    })
    $(".p2").click(function(){
      $(".p2").hide(1200);
      $(".icon2").toggle(1200);
      $(".icon2").show(1200);
    });
});

$(document).ready(function(){
    $(".icon3").click(function(){
      $(".icon3").hide(1200);
      $(".p3").toggle(1200);
      $(".p3").show(1200);
    })
    $(".p3").click(function(){
      $(".p3").hide(1200);
      $(".icon3").toggle(1200);
      $(".icon3").show(1200);
    });
});

$(document).ready(function(){
    $('.text').hover(function () {
    $(this).animate({opacity:'1'});
    },
    function () {
    $(this).animate({opacity:'0'});
})  