// designスクロールアニメーション一覧
const targetElementMore = document.querySelectorAll(".createFlexPicMore");
document.addEventListener("scroll", function() {
  console.log("画面の高さ",window.innerHeight);
  for (let i = 0; i < targetElementMore.length; i++){
    targetElementMore[i].style.transitionDelay = (i*.07)+'s';
    targetElementMore[i].style.animationDelay = (i*.2)+'s';
    const getElementDistanceMore = targetElementMore[i].
    getBoundingClientRect().top + targetElementMore[i].clientHeight * .6
    if (window.innerHeight > getElementDistanceMore){
      targetElementMore[i].classList.add('move');
    };
    if(targetElementMore[i].classList.contains('move') == true){
      targetElementMore[i].style.transitionDelay = '';
    }
  }
})
// designスクロールアニメーション一覧

// クリックされたら拡大
const targetElementMoreLarge = document.querySelectorAll('.createFlexPicMoreLarge');
    for (let i = 0; i < targetElementMore.length; i++){
        targetElementMore[i].addEventListener('click' , function(){
            document.querySelector('.designMenubutton').classList.toggle('open');
            document.querySelector('.largePicture').classList.toggle('open');
            targetElementMoreLarge[i].classList.toggle('open');
        });
        document.querySelector('.designMenubutton').addEventListener('click' , function(){
              document.querySelector('.designMenubutton').classList.remove('open');
              document.querySelector('.largePicture').classList.remove('open');
              targetElementMoreLarge[i].classList.remove('open');
            });
      }
    
// クリックされたら拡大

$(function () {
  var topBtn = $('#topButton');
  topBtn.hide();
  //スクロールが500に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スルスルっとスクロールでトップへもどる
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});