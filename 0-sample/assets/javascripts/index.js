$(function () {

  ////////// 関数 //////////
  /*
   *  スクロールでグロナビの色変更
   *
   * @param {jquery} $target : 対象の要素
   * @param {int}        top : 上部からのスクロール量
   * @param {int}      point : 表示位置
   *
   */
  function scrollHeaderFix($target, top, point) {
    let $navList = $target.find('li');

    if(top > point) {
      $navList.addClass('is-scrolled');
    } else {
      $navList.removeClass('is-scrolled');
    }
  }


  ////////// イベント //////////

  /* スクロールでグロナビの色変更 */
  $(window).scroll(function() {
    scrollHeaderFix($('.js-gNav'), $(this).scrollTop(), 30);
  });
});