// タイトルの影
// $(function(){
//   $('#backGroundTitleNoanime').typoShadow();
//   $('#designNoanime').typoShadow();
//   $('#about').typoShadow();
//   $('#QandA').typoShadow();
//   $('#blandTitleContact').typoShadow();
// })

// スクロールイベントPC
$(function () {
  var topBtn1 = $('#topScroll');
  topBtn1.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
$(function () {
  var topBtn2 = $('#aboutScroll');
  topBtn2.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.about').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
$(function () {
  var topBtn3 = $('#DesignScroll');
  topBtn3.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.design').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
$(function () {
  var topBtn4 = $('#QandAScroll');
  topBtn4.click(function () {
      $('body,html').animate({
          scrollTop: window.pageYOffset + document.querySelector('.QandA').getBoundingClientRect().top
      }, 500);
      return false;
  });
});
$(function () {
  var topBtn5 = $('#ContactScroll');
  topBtn5.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.blandTitleContact').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
// スクロールイベントPC

// モバイルメニュー
document.querySelector('.menubutton').addEventListener("click", function() {
  this.classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})
// モバイルメニュー

// スクロールイベントスマホ
$(function () {
  var topBtn1 = $('#topScrollMobile');
  topBtn1.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
document.getElementById('topScrollMobile').addEventListener("click", function() {
  document.querySelector('.menubutton').classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})

$(function () {
  var topBtn2 = $('#aboutScrollMobile');
  topBtn2.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.about').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
document.getElementById('aboutScrollMobile').addEventListener("click", function() {
  document.querySelector('.menubutton').classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})

$(function () {
  var topBtn3 = $('#DesignScrollMobile');
  topBtn3.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.design').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
document.getElementById('DesignScrollMobile').addEventListener("click", function() {
  document.querySelector('.menubutton').classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})

$(function () {
  var topBtn4 = $('#QandAScrollMobile');
  topBtn4.click(function () {
      $('body,html').animate({
          scrollTop: window.pageYOffset + document.querySelector('.QandA').getBoundingClientRect().top
      }, 500);
      return false;
  });
});
document.getElementById('QandAScrollMobile').addEventListener("click", function() {
  document.querySelector('.menubutton').classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})

$(function () {
  var topBtn5 = $('#ContactScrollMobile');
  topBtn5.click(function () {
      $('body,html').animate({
          scrollTop: document.querySelector('.blandTitleContact').getBoundingClientRect().top + window.pageYOffset
      }, 500);
      return false;
  });
});
document.getElementById('ContactScrollMobile').addEventListener("click", function() {
  document.querySelector('.menubutton').classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
})
// スクロールイベントスマホ

// ヘッダー歯車画像
const haguruma = document.querySelector('.hagurumaPic');
let   hagurumaDeg = 0,
      scrollMeasure = scrollY;
window.addEventListener("scroll", function() {
  hagurumaDeg += 60;
  if(hagurumaDeg == 360){
    hagurumaDeg = 0
  };
  let allScroll = document.querySelector('.blandTitleContact').getBoundingClientRect().top + window.pageYOffset;
  scrollMeasure = scrollY
  scrollMove = (scrollMeasure/allScroll)*100;
  console.log(scrollMeasure / allScroll)
  document.querySelector('.hagurumaPic').style.transform = 'rotate'+'('+hagurumaDeg+'deg)'
  document.querySelector('.hagurumaPic').style.left =  scrollMove + '%';
  document.querySelector('.headerUnderLineCover').style.width =  scrollMove + '%';
  if(scrollMove >= 99){
    document.querySelector('.hagurumaPic').style.left =  100 + '%';
  document.querySelector('.headerUnderLineCover').style.width =  100 + '%';
  }
})
// ヘッダー歯車画像

// 背景画像の変更
$(window).on('scroll', function (){

  var backGroundChangeDesign = $('#design'),
      backGroundChangeAbout = $('#about'),
      backGroundChangeQandA = $('#QandA');
  
  backGroundChangeDesign.each(function () {
  
    var backGroundChangeDesignOffset = $(this).offset().top;
    var backGroundChangeDesignScrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(backGroundChangeDesignScrollPos < backGroundChangeDesignOffset - wh + (wh / 1) ){
      document.getElementById('backGroundImgFirst').style.display = 'block';
      document.getElementById('backGroundImgSecond').style.display = 'none';
      document.getElementById('backGroundImgThird').style.display = 'none';
      document.getElementById('backGroundImgForth').style.display = 'none';
    }else if(backGroundChangeDesignScrollPos > backGroundChangeDesignOffset - wh + (wh / 1) ){
      document.getElementById('backGroundImgFirst').style.display = 'none';
      document.getElementById('backGroundImgSecond').style.display = 'block';
      document.getElementById('backGroundImgThird').style.display = 'none';
      document.getElementById('backGroundImgForth').style.display = 'none';
    }
  });
  backGroundChangeAbout.each(function () {
  
    var backGroundChangeAboutOffset = $(this).offset().top;
    var backGroundChangeAboutScrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(backGroundChangeAboutScrollPos > backGroundChangeAboutOffset - wh + (wh / 1) ){
      document.getElementById('backGroundImgFirst').style.display = 'none';
      document.getElementById('backGroundImgSecond').style.display = 'none';
      document.getElementById('backGroundImgThird').style.display = 'block';
      document.getElementById('backGroundImgForth').style.display = 'none';
    }
  });
  backGroundChangeQandA.each(function () {
  
    var backGroundChangeQandAOffset = $(this).offset().top;
    var backGroundChangeQandAScrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(backGroundChangeQandAScrollPos > backGroundChangeQandAOffset - wh + (wh / 1) ){
      document.getElementById('backGroundImgFirst').style.display = 'none';
      document.getElementById('backGroundImgSecond').style.display = 'none';
      document.getElementById('backGroundImgThird').style.display = 'none';
      document.getElementById('backGroundImgForth').style.display = 'block';
    }
  });

});
// 背景画像の変更終わり

// ギャラリー
let galleryAnimationCount = 0;
const galleryTitleAreaPic = document.querySelectorAll(".galleryTitleAreaPic"),
      galleryTitleAreaPicTop = document.querySelectorAll(".galleryTitleAreaPicTop"),
      galleryTitleAreaPicLeft = document.querySelectorAll(".galleryTitleAreaPicLeft img"),
      galleryTitleAreaPicRight = document.querySelectorAll(".galleryTitleAreaPicRight img"),
      galleryTitleAreaPicBackColor = document.querySelectorAll(".galleryTitleAreaPicBackColor");
document.addEventListener("scroll", function() {
  // console.log("画面の高さ",window.innerHeight);
  for (let i = 0; i < galleryTitleAreaPic.length; i++){
    const getElementDistance = galleryTitleAreaPic[i].getBoundingClientRect().top + galleryTitleAreaPic[i].clientHeight * .6
    if (window.innerHeight > getElementDistance){
      galleryTitleAreaPic[i].style.opacity = 1;
      galleryTitleAreaPicLeft[i].style.width = 100 + '%';
      galleryTitleAreaPicLeft[i].style.height = 100 + '%';
      galleryTitleAreaPicRight[i].style.width = 100 + '%';
      galleryTitleAreaPicRight[i].style.height = 100 + '%';

      galleryTitleAreaPicRight[i].addEventListener('transitionend',function(){
        const titleDescription = document.querySelectorAll(".titleDescription");
        titleDescription[i].style.opacity=1;
        galleryTitleAreaPicTop[i].style.opacity=1;
        galleryTitleAreaPicBackColor[i].style.top=6+'px',
        galleryTitleAreaPicBackColor[i].style.left=6+'px';

        const targetElement = titleDescription[i];
        texts = targetElement.textContent,
        textsArray = [];

        targetElement.textContent = "";

        for (let j = 0; j < texts.split("").length; j++) {

          if(texts.split("")[j] === " "){
            textsArray.push(" ")
          }else{
          textsArray.push('<span><span style="animation-delay:' +(j * 0.08)+ 's;" style="animation-delay:' +(j * 0.08)+ 's;">' + texts.split("") [j] +'</span></span>')
          }
        }
        
        for (let k = 0; k < textsArray.length; k++) {
          targetElement.innerHTML += textsArray[k];
        }
      })
    };
  };
})

// ギャラリーおわり

// ギャラリー　マウスオーバーで発火

const designLink = document.querySelectorAll(".designLink"),
      titleDescription = document.querySelectorAll(".titleDescription"),
      titleDescriptionMouseover = document.querySelectorAll(".titleDescriptionMouseover");
$(function(){
  for (let i = 0; i < designLink.length; i++){
    designLink[i].addEventListener('mouseenter',function(){
      titleDescriptionMouseover[i].style.opacity=1;
      galleryTitleAreaPicTop[i].style.opacity=0;
      galleryTitleAreaPicBackColor[i].style.top=0+'px';
      galleryTitleAreaPicBackColor[i].style.left=0+'px';
      const titleDescriptionMouseoverTargetElement = titleDescriptionMouseover[i];
        texts = titleDescriptionMouseoverTargetElement.textContent,
        textsArray = [];

        titleDescriptionMouseoverTargetElement.textContent = "";

        for (let j = 0; j < texts.split("").length; j++) {

          if(texts.split("")[j] === " "){
            textsArray.push(" ")
          }else{
          textsArray.push('<span><span style="animation-delay:' +(j * 0.08)+ 's;">' + texts.split("") [j] +'</span></span>')
          }
        }
        
        for (let k = 0; k < textsArray.length; k++) {
          titleDescriptionMouseoverTargetElement.innerHTML += textsArray[k];
        }

        // $('.designLink')
        // for (let m = 0; m < titleDescriptionAAA.length; m++) {
        //   for (let l = 0; l < textsArray.length; l++) {
        //     titleDescription[l].style.transitionDelay=l*.1 + 's';
        //     titleDescription[l].style.transform='translateY('+100+'%)';
        //   }
        // }
        titleDescription[i].style.opacity=0;
        titleDescription[i].style.top=0;
        titleDescriptionMouseover[i].style.bottom= -20 +'px';
    })
    designLink[i].addEventListener('mouseleave',function(){
      galleryTitleAreaPicTop[i].style.opacity=1;
      galleryTitleAreaPicBackColor[i].style.top=6+'px',
      galleryTitleAreaPicBackColor[i].style.left=6+'px';
      titleDescription[i].style.opacity=1;
      titleDescription[i].style.top=-1+'em';
      titleDescriptionMouseover[i].style.opacity=0;
      titleDescriptionMouseover[i].style.bottom= -30 +'px';
      
    })
  };
})

// ギャラリー　マウスオーバーで発火　終わり

// アバウトエリア　スクロールして表示されたら発火
$(window).on('scroll', function (){

  var about = $('.aboutTitle1');
  
  about.each(function () {
  
    var aboutOffset = $(this).offset().top;
    var aboutScrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(aboutScrollPos > aboutOffset - wh + (wh / 2) ){
      $('.aboutTitle1').css({
        opacity:1,
        top:0
      })
      $('.introductionDescription').css({
        opacity:1,
        top:0
      })
      $('.aboutTitle2').css({
        opacity:1,
        top:0
      })
    }
  });

  var selfIntroductionFlex = $('.selfIntroductionFlex');
  
  selfIntroductionFlex.each(function () {
  
    var selfIntroductionFlexOffset = $(this).offset().top;
    var selfIntroductionFlexScrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(selfIntroductionFlexScrollPos > selfIntroductionFlexOffset - wh + (wh / 2) ){
      $('.selfIntroductionFlex').css({
        opacity:1,
        top:0
      })
    }
  });
});

const workDescriptionTitle = document.querySelectorAll(".workDescriptionTitle"),
      workDescriptionContent = document.querySelectorAll(".workDescriptionContent");

document.addEventListener("scroll", function(){
  for (let i = 0; i < workDescriptionContent.length; i++){
    const getElementDistance = workDescriptionContent[i].getBoundingClientRect().top + workDescriptionContent[i].clientHeight * .6
    if (window.innerHeight > getElementDistance){
      workDescriptionTitle[i].style.opacity = 1;
      workDescriptionTitle[i].style.top = 0;
      workDescriptionContent[i].style.opacity = 1;
      workDescriptionContent[i].style.top = 0;
    }
  }
})

// アバウトエリア　スクロールして表示されたら発火終わり

// QandA
function QandA(number){
  document.querySelector('.QandAMenu'+number).addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".AnswerArea" + number).classList.toggle("open");
    document.querySelector(".questionAreaLi" +number).classList.toggle("open");
  })
}
QandA(1);
QandA(2);
QandA(3);
QandA(4);
QandA(5);
QandA(6);
QandA(7);
QandA(8);
QandA(9);
QandA(10);
QandA(11);

  // QandA


  $(function(){
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
      // スマホ・タブレット（iOS・Android）の場合の処理を記述
  
      // 背景画像の変更
  $(window).on('scroll', function (){
  
    var backGroundChangeDesign = $('#design'),
        backGroundChangeAbout = $('#about'),
        backGroundChangeQandA = $('#QandA');
    
    backGroundChangeDesign.each(function () {
    
      var backGroundChangeDesignOffset = $(this).offset().top;
      var backGroundChangeDesignScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(backGroundChangeDesignScrollPos < backGroundChangeDesignOffset - wh + (wh / 1) ){
        document.getElementById('backGroundImgFirstMobile').style.display = 'block';
        document.getElementById('backGroundImgSecondMobile').style.display = 'none';
        document.getElementById('backGroundImgThirdMobile').style.display = 'none';
        document.getElementById('backGroundImgForthMobile').style.display = 'none';
      }else if(backGroundChangeDesignScrollPos > backGroundChangeDesignOffset - wh + (wh / 1) ){
        document.getElementById('backGroundImgFirstMobile').style.display = 'none';
        document.getElementById('backGroundImgSecondMobile').style.display = 'block';
        document.getElementById('backGroundImgThirdMobile').style.display = 'none';
        document.getElementById('backGroundImgForthMobile').style.display = 'none';
      }
    });
    backGroundChangeAbout.each(function () {
    
      var backGroundChangeAboutOffset = $(this).offset().top;
      var backGroundChangeAboutScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(backGroundChangeAboutScrollPos > backGroundChangeAboutOffset - wh + (wh / 1) ){
        document.getElementById('backGroundImgFirstMobile').style.display = 'none';
        document.getElementById('backGroundImgSecondMobile').style.display = 'none';
        document.getElementById('backGroundImgThirdMobile').style.display = 'block';
        document.getElementById('backGroundImgForthMobile').style.display = 'none';
      }
    });
    backGroundChangeQandA.each(function () {
    
      var backGroundChangeQandAOffset = $(this).offset().top;
      var backGroundChangeQandAScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(backGroundChangeQandAScrollPos > backGroundChangeQandAOffset - wh + (wh / 1) ){
        document.getElementById('backGroundImgFirstMobile').style.display = 'none';
        document.getElementById('backGroundImgSecondMobile').style.display = 'none';
        document.getElementById('backGroundImgThirdMobile').style.display = 'none';
        document.getElementById('backGroundImgForthMobile').style.display = 'block';
      }
    });
  
  });
  // 背景画像の変更終わり
  
      // triangleAnimation
  
  $(window).on('scroll', function (){
  
    var triangleChange = $('#design');
    
    triangleChange.each(function () {
    
      var triangleChangeOffset = $(this).offset().top;
      var triangleChangeScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(triangleChangeScrollPos > triangleChangeOffset - wh + (wh / 1.7) ){
        $('.triangleInnerRight').css({
          borderBottom:31.5+'vh solid transparent',
          borderTop:31.5+'vh solid rgb(49, 49, 49)',
          borderLeft:69+'vw solid transparent'
        })
        $('.triangleInnerInnerRight').css({
          borderBottom:31+'vh solid transparent',
          borderTop:31+'vh solid rgb(255, 241, 211)',
          borderLeft:68+'vw solid transparent'
        })
        $('.backGroundTriangleOut').css({
          // borderBottom:31+'vw solid transparent',
          borderRight:48+'vh solid transparent',
          borderTop:48+'vh solid transparent',
          borderLeft:100+'vw solid rgb(255, 241, 211)'
        })
        $('.backGroundTriangleInner').css({
          // borderBottom:31+'vw solid transparent',
          // borderTop:31+'vw solid rgb(255, 241, 211)',
          borderLeft:98.5+'vw solid rgb(49, 49, 49)'
        })
      }
      if(triangleChangeScrollPos > triangleChangeOffset - wh + (wh / .5) ){
        $('.backGroundTriangleOut2').css({
          // borderBottom:31+'vw solid transparent',
          borderBottom:48.25+'vh solid transparent',
          borderTop:48.25+'vh solid rgb(255, 241, 211)',
          borderLeft:100+'vw solid transparent'
        })
        $('.backGroundTriangleInner2').css({
          borderLeft:98.75+'vw solid transparent'
        })
        $('.triangleLeft').css({
          borderRight:32+'vh solid transparent',
          borderTop:32+'vh solid transparent',
          borderLeft:70+'vw solid rgb(255, 241, 211)'
        })
      }
    });
  
    var triangleChangeAreaAbout = $('#about');
    
    triangleChangeAreaAbout.each(function () {
    
      var triangleChangeAreaAboutOffset = $(this).offset().top;
      var triangleChangeAreaAboutScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(triangleChangeAreaAboutScrollPos > triangleChangeAreaAboutOffset - wh + (wh / 1.7) ){
        $('.triangleInnerLeft').css({
          borderBottom:31.5+'vh solid transparent',
          borderTop:31.5+'vh solid rgb(49, 49, 49)',
          borderRight:69+'vw solid transparent'
        })
        $('.triangleInnerInnerLeft').css({
          borderBottom:31+'vh solid transparent',
          borderTop:31+'vh solid rgb(255, 241, 211)',
          borderRight:68+'vw solid transparent'
        })
      }
      if(triangleChangeAreaAboutScrollPos > triangleChangeAreaAboutOffset - wh + (wh / .5) ){
        $('.triangleRight').css({
          borderLeft:32+'vh solid transparent',
          borderTop:32+'vh solid transparent',
          borderRight:70+'vw solid rgb(255, 241, 211)'
        })
      }
    });
  
  
    var triangleChangeAreaQandA = $('#QandA');
    
    triangleChangeAreaQandA.each(function () {
    
      var triangleChangeAreaQandAOffset = $(this).offset().top;
      var triangleChangeAreaQandAScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(triangleChangeAreaQandAScrollPos > triangleChangeAreaQandAOffset - wh + (wh / 1.7) ){
        $('.triangleInnerInnerRightAreaQandA').css({
          borderBottom:22.5+'vh solid transparent',
          borderTop:22.5+'vh solid rgb(255, 241, 211)',
          borderLeft:70+'vw solid transparent'
        })
        $('.triangleInnerRightAreaQandA').css({
          borderBottom:22+'vh solid transparent',
          borderTop:22+'vh solid rgb(49, 49, 49)',
          borderLeft:69+'vw solid transparent'
        })
      }
      if(triangleChangeAreaQandAScrollPos > triangleChangeAreaQandAOffset - wh + (wh / .7) ){
        $('.triangleInnerInnerRightAreaQandA2').css({
          borderLeft:70+'vw solid rgb(255, 241, 211)',
          borderTop:22.5+'vh solid transparent',
          borderRight:22.5+'vh solid transparent'
        })
        $('.triangleInnerRightAreaQandA2').css({
          borderLeft:69+'vw solid rgb(49, 49, 49)',
          borderTop:22+'vh solid transparent',
          borderRight:22+'vh solid transparent'
        })
      }
    });
  
  
    var triangleChangeAreaContact = $('#contactTitle');
    
    triangleChangeAreaContact.each(function () {
    
      var triangleChangeAreaContactOffset = $(this).offset().top;
      var triangleChangeAreaContactScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(triangleChangeAreaContactScrollPos > triangleChangeAreaContactOffset - wh + (wh / 1.7) ){
        $('.triangleInnerLeftContact').css({
          borderBottom:31.5+'vh solid transparent',
          borderTop:31.5+'vh solid rgb(49, 49, 49)',
          borderRight:69+'vw solid transparent'
        })
        $('.triangleInnerInnerLeftContact').css({
          borderBottom:31+'vh solid transparent',
          borderTop:31+'vh solid rgb(255, 241, 211)',
          borderRight:68+'vw solid transparent'
        })
        $('.triangleRightContact').css({
          borderLeft:32+'vh solid transparent',
          borderTop:32+'vh solid transparent',
          borderRight:70+'vw solid rgb(255, 241, 211)'
        })
      }
      if(triangleChangeAreaContactScrollPos > triangleChangeAreaContactOffset - wh + (wh / 1.5) ){
        // $('.triangleRightContact').css({
        //   borderLeft:23+'vw solid transparent',
        //   borderTop:23+'vw solid transparent',
        //   borderRight:70+'vw solid rgb(255, 241, 211)'
        // })
      }
    });
  });
  
  // triangleAnimationおわり
    }else{
      // PCの場合の処理を記述
  
      // 背景画像の変更
  $(window).on('scroll', function (){
  
    var backGroundChangeDesign = $('#design'),
        backGroundChangeAbout = $('#about'),
        backGroundChangeQandA = $('#QandA');
    
    backGroundChangeDesign.each(function () {
    
      var backGroundChangeDesignOffset = $(this).offset().top;
      var backGroundChangeDesignScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(backGroundChangeDesignScrollPos < backGroundChangeDesignOffset - wh + (wh / 1) ){
        document.getElementById('backGroundImgFirst').style.display = 'block';
        document.getElementById('backGroundImgSecond').style.display = 'none';
        document.getElementById('backGroundImgThird').style.display = 'none';
        document.getElementById('backGroundImgForth').style.display = 'none';
      }else if(backGroundChangeDesignScrollPos > backGroundChangeDesignOffset - wh + (wh / 1) ){
        document.getElementById('backGroundImgFirst').style.display = 'none';
        document.getElementById('backGroundImgSecond').style.display = 'block';
        document.getElementById('backGroundImgThird').style.display = 'none';
        document.getElementById('backGroundImgForth').style.display = 'none';
      }
    });
    backGroundChangeAbout.each(function () {
    
      var backGroundChangeAboutOffset = $(this).offset().top;
      var backGroundChangeAboutScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(backGroundChangeAboutScrollPos > backGroundChangeAboutOffset - wh + (wh / 1) ){
        document.getElementById('backGroundImgFirst').style.display = 'none';
        document.getElementById('backGroundImgSecond').style.display = 'none';
        document.getElementById('backGroundImgThird').style.display = 'block';
        document.getElementById('backGroundImgForth').style.display = 'none';
      }
    });
    backGroundChangeQandA.each(function () {
    
      var backGroundChangeQandAOffset = $(this).offset().top;
      var backGroundChangeQandAScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(backGroundChangeQandAScrollPos > backGroundChangeQandAOffset - wh + (wh / 1) ){
        document.getElementById('backGroundImgFirst').style.display = 'none';
        document.getElementById('backGroundImgSecond').style.display = 'none';
        document.getElementById('backGroundImgThird').style.display = 'none';
        document.getElementById('backGroundImgForth').style.display = 'block';
      }
    });
  
  });
  // 背景画像の変更終わり
  
      // triangleAnimation
  
  $(window).on('scroll', function (){
  
    var triangleChange = $('#design');
    
    triangleChange.each(function () {
    
      var triangleChangeOffset = $(this).offset().top;
      var triangleChangeScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(triangleChangeScrollPos > triangleChangeOffset - wh + (wh / 1.7) ){
        $('.triangleInnerRight').css({
          borderBottom:31.5+'vw solid transparent',
          borderTop:31.5+'vw solid rgb(49, 49, 49)',
          borderLeft:69+'vw solid transparent'
        })
        $('.triangleInnerInnerRight').css({
          borderBottom:31+'vw solid transparent',
          borderTop:31+'vw solid rgb(255, 241, 211)',
          borderLeft:68+'vw solid transparent'
        })
        $('.backGroundTriangleOut').css({
          // borderBottom:31+'vw solid transparent',
          borderRight:48+'vw solid transparent',
          borderTop:48+'vw solid transparent',
          borderLeft:100+'vw solid rgb(255, 241, 211)'
        })
        $('.backGroundTriangleInner').css({
          // borderBottom:31+'vw solid transparent',
          // borderTop:31+'vw solid rgb(255, 241, 211)',
          borderLeft:98.5+'vw solid rgb(49, 49, 49)'
        })
      }
      if(triangleChangeScrollPos > triangleChangeOffset - wh + (wh / .5) ){
        $('.backGroundTriangleOut2').css({
          // borderBottom:31+'vw solid transparent',
          borderBottom:48+'vw solid transparent',
          borderTop:48+'vw solid rgb(255, 241, 211)',
          borderLeft:100+'vw solid transparent'
        })
        $('.backGroundTriangleInner2').css({
          borderLeft:98.75+'vw solid transparent'
        })
        $('.triangleLeft').css({
          borderRight:32+'vw solid transparent',
          borderTop:32+'vw solid transparent',
          borderLeft:70+'vw solid rgb(255, 241, 211)'
        })
      }
    });
  
    var triangleChangeAreaAbout = $('#about');
    
    triangleChangeAreaAbout.each(function () {
    
      var triangleChangeAreaAboutOffset = $(this).offset().top;
      var triangleChangeAreaAboutScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(triangleChangeAreaAboutScrollPos > triangleChangeAreaAboutOffset - wh + (wh / 1.7) ){
        $('.triangleInnerLeft').css({
          borderBottom:22.5+'vw solid transparent',
          borderTop:22.5+'vw solid rgb(49, 49, 49)',
          borderRight:69+'vw solid transparent'
        })
        $('.triangleInnerInnerLeft').css({
          borderBottom:22+'vw solid transparent',
          borderTop:22+'vw solid rgb(255, 241, 211)',
          borderRight:68+'vw solid transparent'
        })
      }
      if(triangleChangeAreaAboutScrollPos > triangleChangeAreaAboutOffset - wh + (wh / .5) ){
        $('.triangleRight').css({
          borderLeft:23+'vw solid transparent',
          borderTop:23+'vw solid transparent',
          borderRight:70+'vw solid rgb(255, 241, 211)'
        })
      }
    });
  
  
    var triangleChangeAreaQandA = $('#QandA');
    
    triangleChangeAreaQandA.each(function () {
    
      var triangleChangeAreaQandAOffset = $(this).offset().top;
      var triangleChangeAreaQandAScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(triangleChangeAreaQandAScrollPos > triangleChangeAreaQandAOffset - wh + (wh / 1.7) ){
        $('.triangleInnerInnerRightAreaQandA').css({
          borderBottom:22.5+'vw solid transparent',
          borderTop:22.5+'vw solid rgb(255, 241, 211)',
          borderLeft:70+'vw solid transparent'
        })
        $('.triangleInnerRightAreaQandA').css({
          borderBottom:22+'vw solid transparent',
          borderTop:22+'vw solid rgb(49, 49, 49)',
          borderLeft:69+'vw solid transparent'
        })
      }
      if(triangleChangeAreaQandAScrollPos > triangleChangeAreaQandAOffset - wh + (wh / .7) ){
        $('.triangleInnerInnerRightAreaQandA2').css({
          borderLeft:70+'vw solid rgb(255, 241, 211)',
          borderTop:22.5+'vw solid transparent',
          borderRight:22.5+'vw solid transparent'
        })
        $('.triangleInnerRightAreaQandA2').css({
          borderLeft:69+'vw solid rgb(49, 49, 49)',
          borderTop:22+'vw solid transparent',
          borderRight:22+'vw solid transparent'
        })
      }
    });
  
  
    var triangleChangeAreaContact = $('#contactTitle');
    
    triangleChangeAreaContact.each(function () {
    
      var triangleChangeAreaContactOffset = $(this).offset().top;
      var triangleChangeAreaContactScrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(triangleChangeAreaContactScrollPos > triangleChangeAreaContactOffset - wh + (wh / 1.7) ){
        $('.triangleInnerLeftContact').css({
          borderBottom:22.5+'vw solid transparent',
          borderTop:22.5+'vw solid rgb(49, 49, 49)',
          borderRight:69+'vw solid transparent'
        })
        $('.triangleInnerInnerLeftContact').css({
          borderBottom:22+'vw solid transparent',
          borderTop:22+'vw solid rgb(255, 241, 211)',
          borderRight:68+'vw solid transparent'
        })
        $('.triangleRightContact').css({
          borderLeft:23+'vw solid transparent',
          borderTop:23+'vw solid transparent',
          borderRight:70+'vw solid rgb(255, 241, 211)'
        })
      }
      if(triangleChangeAreaContactScrollPos > triangleChangeAreaContactOffset - wh + (wh / 1.5) ){
        $('.triangleRightContact').css({
          borderLeft:23+'vw solid transparent',
          borderTop:23+'vw solid transparent',
          borderRight:70+'vw solid rgb(255, 241, 211)'
        })
      }
    });
  });
  
  // triangleAnimationおわり
    }
  })
  