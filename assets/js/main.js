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

  // フェードイン
  $(function () {
    function fadeInOnScroll() {
      $('.fade-in-up, .fade-in-right, .fade-in-zoom, .fade-in-left').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight + 100) {
          // すべて同じ処理（即時 action 付与）
          $(this).addClass('action');
        }
      });
    }

    fadeInOnScroll();

    $(window).on('scroll', function () {
      fadeInOnScroll();
    });
  });

  $(function () {
    $(".faq-question").on("click", function () {
      var parent = $(this).closest(".faq-item");
      parent.toggleClass("open"); // 矢印だけ切り替え
      parent.find(".faq-answer").stop().slideToggle(300); // 開閉はここでだけ制御
    });
  });


  // トップへ戻る
  $(function () {
    var $pageTop = $("#page-top");

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        $pageTop.addClass("show");
      } else {
        $pageTop.removeClass("show");
      }
    });

    $pageTop.on("click", function () {
      $("html, body").animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });


})