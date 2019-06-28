$(function() {
  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      var $quantityNum = $(this).siblings('.quantity-num');
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      var $quantityNum = $(this).siblings('.quantity-num');
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});

function GreatBalancer(block){
    var wrapWidth = $(block).parent().width(),  // 1
     blockWidth = $(block).width(),          // 2
     wrapDivide = Math.floor(wrapWidth / blockWidth),     // 3
     cellArr = $(block);
    for(var arg = 1;arg<=arguments.length;arg++) {           // 4.1
     for (var i = 0; i <= cellArr.length; i = i + wrapDivide) {
     var maxHeight = 0,
      heightArr = [];
     for (j = 0; j < wrapDivide; j++) {               // 4.2
     heightArr.push($(cellArr[i + j]).find(arguments[arg]));
      if (heightArr[j].outerHeight() > maxHeight) {
       maxHeight = heightArr[j].outerHeight();
      }
     }
     for (var counter = 0; counter < heightArr.length; counter++) {           // 4.3
      $(cellArr[i + counter]).find(arguments[arg]).outerHeight(maxHeight);
      }
     }
    }
  }

GreatBalancer(".product",".product-img",".product-title",".product-tipe",".product-price",".product-count");

var s_win_w = $(window).width();
$(window).resize(function(){
  win_w = $(window).width();
  if (win_w >= s_win_w*1.3 || win_w <= s_win_w*0.7 || win_w >= s_win_w*1.1 || win_w <= s_win_w*0.8) {
    location.reload();
  }
});