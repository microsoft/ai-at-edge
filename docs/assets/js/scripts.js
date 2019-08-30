// Extend functions
;(function ($, window, undefined) {
    $.devKitExtends = function () {
        mastheadFix();
        menuScroll();

        $('.sidebar__right').addClass('sidebar__right_fix');
        adjustResize();
        $(window).resize(adjustResize);

        var firstPlatform = '';
        if ($('.switcher').length > 0){
            var switchLevel = $('.switcher').next().prop('tagName');
            if (switchLevel[0] != 'H'){
                $('.switcher').remove();
            } else {
                switchLevel = switchLevel[1];
                $('.switch').each(function(){
                    var id = $(this).attr('id');
                    var platform = '';
                    var curPlatform = false;
                    var string = '';
                    $('.page__content').children().each(function(){
                        var curLevel = $(this).prop('tagName');
                        if (curPlatform){
                            if (curLevel[0] == 'H' && curLevel[1] <= switchLevel){
                                $('#' + platform + '_switch_result').html(string);
                                curPlatform = false;
                            } else {
                                string += $(this).clone().wrap('<p>').parent().html();
                                $(this).remove();
                            }
                        } else {
                            if (curLevel[0] == 'H' && curLevel[1] == switchLevel && id.search($(this).attr('id')) != -1){
                                curPlatform = true;
                                string += $(this).clone().wrap('<p>').parent().html();
                                platform = $(this).attr('id');
                                if (firstPlatform == ''){
                                    firstPlatform = platform;
                                    $(this).before('<div id = "' + platform + '_switch_result" class = "switch_result">');
                                    $('#' + platform + '_switch').addClass('switch_active');
                                } else {
                                    $(this).before('<div id = "' + platform + '_switch_result" class = "switch_result" style = "display: none">');
                                    $('#markdown-toc-' + platform).parent().css('display', 'none');
                                }
                                $(this).remove();
                            }
                        }
                    });
                    if (curPlatform){
                        $('#' + platform + '_switch_result').html(string);
                        curPlatform = false;
                    }
                });
                $('.switch').each(function(){
                    $(this).click(platformSwitcher);
                });
            }
        }

        $(window).scroll(tocScroll);

        projectCardClick();
        projectCardDifficultyColor();
        faqMenu();

        feedbackButtonFixed();

        landingPageConfig();
    };

    $.closeReportIssue = function() {
        $('#surveypopup').remove();
    }
     
    $.reportIssuePopup = function(tutorial, step) {
        $('body').append('<div id="surveypopup" class="overlay visible"><div class="surveypopup"><div id="surveytitle">Tell us more<a href="javascript:void(0)" onclick="$.closeReportIssue()">X</a></div><div id="surveydiv"><iframe frameBorder="0" scrolling="0" src="https://www.research.net/r/N9F3LCY?tutorial='+tutorial+'&step='+step+'"></iframe></div></div></div>');    
    }

    $.reportIssue = function() {
        $('.feedback-btns').fadeOut(400, function() {
            $('.survey-monkey').fadeIn(400);
        });
        $('.survey-monkey iframe').each(function() {
            this.onload = function() {
                $(this).fadeOut(400, $.feedbackDisappeared);
            }
        });
    }

    $.feedbackDisappeared = function() {
        $('.feedback-btns').fadeOut(400, function() {
            $('.feedback-btns').html('<h3> Thank you! </h3><p> We appreciate your feedback. </p>').fadeIn(400);
        });
        setTimeout(function() {
            $('.feedback-btns').fadeOut(400);
        }, 2000);
    }

    $.feedbackButtonClick = function(projectName, eventName) {

        try {
            ga('send', 'event', {
                eventCategory: 'stepFinished',
                eventAction: 'click',
                eventLabel: projectName + '-' + eventName
                });
        } catch(e) {
            console.log('ga error: '+e);
        }
    }

    var feedbackButtonFixed = function() {
        var feedbackButtonFixedCallback = function() {
            var articleTop = $('.page__content').position().top;
            if (articleTop > $(window).scrollTop()){
                $('.feedback-btn-fixed').css('bottom', 26 - (articleTop - $(window).scrollTop()));
            } else {
                $('.feedback-btn-fixed').css('bottom', '');
            }
        }
        
        if ($('.page__content').length) {
            feedbackButtonFixedCallback();
            $(window).scroll(feedbackButtonFixedCallback);
            $(window).resize(feedbackButtonFixedCallback);
        }
    }

    var tocScroll = function () {
        $('.toc__menu a').removeClass('toc__menu_active');
        var scrollTop = $(this).scrollTop();
        $('.toc__menu a').each(function() {
            var id = $(this).attr('href');
            var target = $(id).position().top;
            if (scrollTop >= target) {
                $('.toc__menu a').removeClass('toc__menu_active');
                $(this).addClass('toc__menu_active');
            }
        });
    };

    var adjustResize = function () {

        // Resize page hero image container
        vpw = $(window).width();
        vph = $(window).height();
        $('.page__hero--overlay-full').css({'height': vph + 'px'});

        sidebarFix();
    };

    var sidebarFix = function () {
        if (!$('.sidebar__right_fix').length){
            return;
        }
        if (window.innerWidth >= 1024){
            var position = $('.page__content').position();
            var articleRight = position.left + $('.page__content').width();
            
            //if the window is not so width, the width of the toc would depend on the width of window
            if (window.innerWidth < 1280){
                var sidebarWid = document.body.clientWidth - articleRight - 30;
                $('.sidebar__right_fix').css('width', sidebarWid);
            } else {
                $('.sidebar__right_fix').removeAttr("style")
            }
            
            //calculate the left position and the top position for the toc fixed in the window
            $('.sidebar__right_fix').css('left', articleRight);
            var articleTop = position.top;
            var menuHeight = $('.masthead').height();
            if (articleTop < $(this).scrollTop() + menuHeight){
                $('.sidebar__right_fix').css('top', menuHeight + 30);
            } else {
                $('.sidebar__right_fix').css('top', articleTop - $(this).scrollTop() + 30);
            }
    
            //when the toc is used to show, it would use scroll for overflow
            $('.sidebar__right_fix').css('height', "");
            var sidebarBottom = $('.sidebar__right_fix').position().top + $('.sidebar__right_fix').height();
            if (articleTop < $(this).scrollTop() + menuHeight && sidebarBottom > $(window).height() - 30){
                $('.sidebar__right_fix').css('height', $(window).height() - $('.sidebar__right_fix').position().top - 30);
                $('.sidebar__right_fix').css('overflow', 'scroll');
            } else {
                $('.sidebar__right_fix').css('height', "");
                $('.sidebar__right_fix').css('overflow', "");
            }
        }
        else {
            $('.sidebar__right_fix').removeAttr("style");
        }
    };

    var menuScroll = function () {
        var lastScrollTop = 0
        // var greedyNav = $('.masthead .greedy-nav');
        $(window).bind('scroll', function(){
            if (!$('.masthead').length){
                return;
            }
            var scrollTop = $(this).scrollTop();

            if (scrollTop > 50){
                if (scrollTop > lastScrollTop){
                    $('.masthead').hide().removeClass('masthead_fixed');
                } else {
                    $('.masthead__inner-wrap').addClass('masthead_shrink');
                    $('.masthead').addClass('masthead_fixed').show();
                }
            } else {
                $('.masthead').removeClass('masthead_fixed');
                $('.masthead__inner-wrap').removeClass('masthead_shrink');
            }
            lastScrollTop = scrollTop;
            sidebarFix();
        });
    };

    var mastheadFix = function () {
        if ($('.masthead').next().attr('id') !== 'main') {
            $('.masthead .greedy-nav').addClass('reverse-color');
        }
    }

    var trackClickNumber = function (element) {
        var url = $(element).attr('href');
        var redirect = true;
        try {
            dataLayer.push({
                event: 'gtm.linkClick',
                eventTimeout: 2000,
                eventCallback: function() {
                    redirect = false;
                    document.location = url;
                },
                'gtm.element': element,
                'gtm.elementUrl': url,
                'gtm.elementClass': $(element).attr('class') ? $(element).attr('class') : '',
                'gtm.elementId': $(element).attr('id') ? $(element).attr('id') : '',
                'gtm.elementTarget': $(element).attr('target') ? $(element).attr('target') : ''
            });
        } catch (e) {
            console.log('gtm error: ' + e);
        }

        setTimeout(function() {
            if (redirect)
                document.location = url;
        }, 2000);
        return false;
    };

    var platformSwitcher = function () {
        var url = $(this).attr('href');
        $('.switch_result').each(function(){
            if ($(this).attr('id').search(url.substring(1)) != -1){
                $(this).css('display', '');
            } else {
                $(this).css('display', 'none');
            }
        });
        $('.switch').each(function(){
            var tocElement =  $('#markdown-toc-' + $(this).attr('href').substring(1)).parent();
            if ($(this).attr('href') == url){
                tocElement.css('display', '');
                $(this).addClass('switch_active');
            } else {
                tocElement.css('display', 'none');
                $(this).removeClass('switch_active');
            }
        });
        return false;
    };

    var projectCardClick = function() {
        $('.grid__item').each(function() {
            $(this).css('cursor', 'pointer');
            $(this).click(function (event) {
                var target = event.target;
                if (!($(target).prop('className') == 'project-icon'||$(target).prop('className') == 'archive__version')) {
                    var projectTitle = $(this).find('.archive__item-title a');
                    if (projectTitle.length) {
                        trackClickNumber(projectTitle[0]);
                    }
                }
            });
        });
    }

    var projectCardDifficultyColor = function() {
        $('p.project-difficulty').each(function() {
            var difficulty = $(this).html().trim().toLocaleLowerCase();
            if (difficulty == 'easy') {
                $(this).css('background', '#8fc31f');
            } else if (difficulty == 'medium') {
                $(this).css('background', '#f98f40');
            } else if (difficulty == 'hard') {
                $(this).css('background', '#f05a2d');
            }
        });
    }

    var faqMenu = function() {
        if ($('h1').length && $('h1').html().trim() == 'Frequently Asked Questions') {
            var pageContent = $('.page__content').children();
            if (pageContent.length) {
                var pageFront = pageContent[0];
                $('.page__content').children('h2, h3').each(function() {
                    if ($(this).prop('tagName') == 'H2') {
                        $(pageFront).before($(this).clone().removeAttr('id'));
                        $(pageFront).prev().addClass('faq-menu-h2');
                    } else {
                        $(pageFront).before('<li class="faq-menu-li"><a href="#' + $(this).attr('id') + '" class="faq-menu-a">' + $(this).html());
                        $(pageFront).prev().find('a').smoothScroll({offset: -20});
                    }
                })
                $(pageFront).before('<hr class="faq-menu-hr">');
            }
            $('.faq-back-to-top').css('left', $('.page__content').position().left + $('.page__content').width());
            BackToTopDisplay();
            $(window).resize(function() {
                $('.faq-back-to-top').css('left', $('.page__content').position().left + $('.page__content').width());
                BackToTopDisplay();
            });
            $(window).scroll(BackToTopDisplay);
            $('.faq-back-to-top').click(function() {
                $('body').animate({scrollTop: 0}, 500);
                return false;
            });
        }
    }

    var BackToTopDisplay = function() {
        if ($(window).scrollTop() > 20 && window.innerWidth >= 1024){
            $('.faq-back-to-top').css('display', 'block');
        } else {
            $('.faq-back-to-top').css('display', 'none');
        }
    }

    var landingPageConfig = function() {
        var thirdProjectDisappear = function() {
            if (600 <= window.innerWidth && window.innerWidth < 768) {
                $('.layout--splash .grid__item:nth-child(3)').css('display', 'none');
            } else {
                $('.layout--splash .grid__item:nth-child(3)').css('display', 'block');
            }
        }

        thirdProjectDisappear();
        $(window).resize(thirdProjectDisappear);
    }

}(jQuery, window));

$(document).ready(function(){

    // Sticky footer
    var bumpIt = function() {
        $('body').css('margin-bottom', $('.page__footer').outerHeight(true));
      },
      didResize = false;
  
    bumpIt();
  
    $(window).resize(function() {
      didResize = true;
    });
    setInterval(function() {
      if(didResize) {
        didResize = false;
        bumpIt();
      }
    }, 250);
  
    // FitVids init
    $("#main").fitVids();
  
    // Follow menu drop down
    $(".author__urls-wrapper button").on("click", function() {
      $(".author__urls").fadeToggle("fast", function() {});
      $(".author__urls-wrapper button").toggleClass("open");
    });
  
    // init smooth scroll
    $(".toc__menu a").smoothScroll({offset: -20});
  
    $.devKitExtends();
  
    // init backstretch
    $('.page__hero--overlay-full').backstretch();
  
    // add lightbox class to all image links
    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");
  
    // Magnific-Popup options
    $(".image-popup").magnificPopup({
      // disableOn: function() {
      //   if( $(window).width() < 500 ) {
      //     return false;
      //   }
      //   return true;
      // },
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
      },
      removalDelay: 500, // Delay in milliseconds before popup is removed
      // Class that is added to body when popup is open.
      // make it unique to apply your CSS animations just to this exact popup
      mainClass: 'mfp-zoom-in',
      callbacks: {
        beforeOpen: function() {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        }
      },
      closeOnContentClick: true,
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
  
  });
  
$('.tree-expander-indicator').click(function() {
    $(this).parent().parent().toggleClass("is-expanded");
});