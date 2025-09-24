$(function () {


  // TOPへボタン
  $(function () {
    var $topButton = $(".top-to-js");
    var $footer = $("footer"); // フッター要素を取得

    // トップへスクロール
    $topButton.click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $("html, body").animate({
        scrollTop: 0
      }, 500);
    });

    // スクロール時の処理
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var footerTop = $footer.offset().top;

      // フッターに達したかどうか
      if (scrollTop + windowHeight >= footerTop) {
        $topButton.fadeOut();
      } else {
        $topButton.fadeIn();
      }
    });
  });

  //フェードイン
$(function() {
  function fadeInOnScroll() {
    $('.fade-in-up, .fade-in-right, .fade-in-zoom,.fade-in-left').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 100) {
        if ($(this).hasClass('fade-in-zoom')) {
          // zoomだけ遅延
          var el = $(this);
          setTimeout(function(){
            el.addClass('action');
          }, 300); // 0.3秒遅延
        } else {
          $(this).addClass('action');
        }
      }
    });
  }

  fadeInOnScroll();

  $(window).on('scroll', function() {
    fadeInOnScroll();
  });
});
  
})