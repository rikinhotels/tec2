// US g-alert
(function(e){"use strict";e.fn.gAlert=function(){return this.each(function(){var t=e(this),n=t.find(".g-alert-close");n&&n.click(function(){t.animate({height:"0",margin:0},400,function(){t.css("display","none")})})})}})(jQuery),jQuery(document).ready(function(){"use strict";jQuery(".g-alert").gAlert()}),function(e){"use strict";e.fn.wTabs=function(){return this.each(function(){function u(){if(!t.hasClass("layout_accordion")||!!t.data("accordionLayoutDynamic"))s>t.width()?(t.data("accordionLayoutDynamic",!0),t.hasClass("layout_accordion")||t.addClass("layout_accordion")):t.hasClass("layout_accordion")&&t.removeClass("layout_accordion")}var t=e(this),n=t.find(".w-tabs-item"),r=t.find(".w-tabs-section"),i=null,s=0,o=!1;n.each(function(){s+=e(this).outerWidth(!0)}),u(),e(window).resize(function(){window.clearTimeout(i),i=window.setTimeout(function(){u()},50)}),r.each(function(i){var s=e(n[i]),u=e(r[i]),a=u.find(".w-tabs-section-title"),f=u.find(".w-tabs-section-content");u.hasClass("active")&&f.slideDown(),a.click(function(){t.hasClass("type_toggle")?o||(u.hasClass("active")?(o=!0,s&&s.removeClass("active"),f.slideUp(null,function(){u.removeClass("active"),o=!1})):(o=!0,s&&s.addClass("active"),f.slideDown(null,function(){u.addClass("active"),o=!1}))):!u.hasClass("active")&&!o&&(o=!0,n.each(function(){e(this).hasClass("active")&&e(this).removeClass("active")}),s&&s.addClass("active"),r.each(function(){e(this).hasClass("active")&&e(this).find(".w-tabs-section-content").slideUp()}),f.slideDown(null,function(){r.each(function(){e(this).hasClass("active")&&e(this).removeClass("active")}),u.addClass("active"),o=!1}))}),s&&s.click(function(){a.click()})})})}}(jQuery),jQuery(document).ready(function(){"use strict";jQuery(".w-tabs").wTabs()}),function(e){"use strict";e.fn.wPortfolio=function(){return this.each(function(){var t=e(this),n=t.find(".w-portfolio-item"),r=!1,i;n.each(function(n,s){var o=e(s).find(".w-portfolio-item-anchor"),u=e(s).find(".w-portfolio-item-details"),a=e(s).find(".w-portfolio-item-details-content"),f=e(s).find(".w-portfolio-hidden-content"),l=u.find(".w-portfolio-item-details-close"),c=u.find(".w-portfolio-item-details-arrow.to_next"),h=u.find(".w-portfolio-item-details-arrow.to_prev"),p=e(s).next(),d=e(s).prev();o.click(function(){if(!e(s).hasClass("active")&&!o.hasClass("external-link")&&!r){r=!0;var l=t.find(".w-portfolio-item.active");l.find(".w-portfolio-item-details").hide(),l.find(".w-portfolio-item-details-content").empty(),l.removeClass("active").css("margin-bottom",""),a.html(f.val()),u.css({display:"block",opacity:0});var c=u.find(".flexslider");if(c.length){var h=c.data("flexslider");h===undefined&&c.flexslider({directionalNav:!0,controlNav:!1,smoothHeight:!0,start:function(){c.removeClass("flex-loading"),e(s).animate({"margin-bottom":u.height()+"px"},100)},after:function(){e(s).animate({"margin-bottom":u.height()+"px"},100)}})}u.stop().animate({opacity:1},300,function(){u.css({opacity:""})}),e(s).css("margin-bottom",u.height()+"px"),u.imagesLoaded().always(function(){e(s).css("margin-bottom",u.height()+"px")}),jQuery("html, body").animate({scrollTop:e(s).offset().top+.7*o.height()+1-window.headerHeight+"px"},{duration:1e3,easing:"easeInOutQuad"}),e(s).addClass("active"),i=n,r=!1}}),l.off("click").click(function(){u.slideUp(300,function(){u.find(".w-portfolio-item-details-content").empty()}),e(s).removeClass("active").animate({"margin-bottom":0},300)}),p.length?c.off("click").click(function(){p.find(".w-portfolio-item-anchor").click()}):c.hide(),d.length?h.off("click").click(function(){d.find(".w-portfolio-item-anchor").click()}):h.hide()})})}}(jQuery),jQuery(document).ready(function(){"use strict";jQuery(".w-portfolio").wPortfolio()});