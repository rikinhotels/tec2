jQuery(document).ready(function(){"use strict";function e(){r++;var e=Math.round(r/i*100);jQuery(".l-preloader-counter").text(e+"%"),jQuery(".l-preloader-bar").stop().animate({height:e+"%"},200)}function t(){jQuery(".l-preloader-counter").text("100%"),jQuery(".l-preloader-bar").stop().animate({height:"100%"},200),window.setTimeout(function(){jQuery(".l-preloader").animate({height:0},300,function(){jQuery(".l-preloader").remove()})},200)}jQuery.magnificPopup&&jQuery("a[ref=magnificPopup][class!=direct-link]").magnificPopup({type:"image"}),jQuery().carousello&&jQuery(".w-clients.type_carousel").carousello({use3d:!1,resizeDelay:100}),jQuery(".contacts_form").each(function(){jQuery(this).find(".g-form").submit(function(){var e=jQuery(this),t,n,r,i=e.find("input[name=name]"),s=e.find("input[name=email]"),o=e.find("input[name=phone]"),u=e.find("textarea[name=message]").val(),a=0;return i.length&&(t=i.val(),t===""&&i.data("required")===1&&(jQuery.jGrowl(window.nameFieldError),a++)),s.length&&(n=s.val(),n===""&&s.data("required")===1&&(jQuery.jGrowl(window.emailFieldError),a++)),o.length&&(r=o.val(),r===""&&o.data("required")===1&&(jQuery.jGrowl(window.phoneFieldError),a++)),u===""&&(jQuery.jGrowl(window.messageFieldError),a++),a===0&&jQuery.ajax({type:"POST",url:window.ajaxURL,dataType:"json",data:{action:"sendContact",name:t,email:n,phone:r,message:u},success:function(t){t.success&&(jQuery.jGrowl(window.messageFormSuccess),i.length&&i.val(""),s.length&&s.val(""),o.length&&o.val(""),e.find("textarea[name=message]").val(""))},error:function(){}}),!1})}),jQuery().waypoint&&jQuery(".w-counter").waypoint(function(){var e=jQuery(this).find(".w-counter-number"),t=parseInt(e.text(),10),n="",r="",i=0;jQuery(this).data("count")&&(t=parseInt(jQuery(this).data("count"),10)),jQuery(this).data("prefix")&&(n=jQuery(this).data("prefix")),jQuery(this).data("suffix")&&(r=jQuery(this).data("suffix"));var s=Math.ceil(t/25),o=setInterval(function(){i+=s,e.text(n+i+r),i>=t&&(e.text(n+t+r),window.clearInterval(o))},40)},{offset:"85%",triggerOnce:!0});if(jQuery(".l-preloader").length){var n=jQuery(".l-section").first().find(".l-subsection-hh > img"),r=0,i=0,s=jQuery(".l-preloader");jQuery(".l-subsection").each(function(){var e=jQuery(this),t=e.css("background-image").match(/url\((['"])?(.*?)\1\)/);t&&(n=n.add(jQuery("<img>").attr("src",t.pop())))}),s.hasClass("type_spinner")?n.imagesLoaded().always(function(){window.setTimeout(function(){jQuery(".l-preloader").animate({height:0},300,function(){jQuery(".l-preloader").remove()})},200)}):(i=n.length,jQuery("<div class='l-preloader-bar'></div>").appendTo(s),jQuery("<div class='l-preloader-counter'></div>").text("0%").appendTo(s),n.imagesLoaded().progress(e).always(t))}jQuery(window).load(function(){jQuery(".no-touch .l-subsection.with_parallax").each(function(){jQuery(this).parallax("50%","0.3")})}),jQuery(".flexslider").each(function(){var e=jQuery(this);if(e.closest(".w-portfolio-item-details-h").length)return;e.flexslider({directionalNav:!0,controlNav:!1,smoothHeight:!1,start:function(){e.removeClass("flex-loading")}})})});