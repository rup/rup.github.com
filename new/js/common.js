(function($, document) {

	var pluses = /\+/g;
	function raw(s) {
		return s;
	}
	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	$.cookie = function(key, value, options) {

		// key and at least value given, set cookie...
		if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
			options = $.extend({}, $.cookie.defaults, options);

			if (value == null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// key and possibly options given, get cookie...
		options = value || $.cookie.defaults || {};
		var decode = options.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				return decode(parts.join('='));
			}
		}
		return null;
	};

	$.cookie.defaults = {};

})(jQuery, document);
$(function(){

    if( $("#wrapper.page-front").size() ){
        slider.init();
    }

    $("a[href=#]").click(function(e){
        e.preventDefault();
    });

    $(".model .pic").hover(function(){
        $(this).find("a.more").animate(
                    {
                        left:"43%",
                        opacity:1
                    },"fast"
                );
        $(this).find("a.zoom").animate(
                    {
                        right:"43%",
                        opacity:1
                    },"fast"
                )
    },function(){
        $(this).find("a.more").stop(true).animate(
            {
                left:"35%",
                opacity:0
            },"fast"
        );
        $(this).find("a.zoom").stop(true).animate(
            {
                right:"35%",
                opacity:0
            },"fast"
        )
    });


    $("div.pic a.zoom").click(function() {
    $.fancybox([
    {'href' : './images/wedding-1.jpg','title' : '我不真的凭我的眼睛来爱你'},
    {'href' : './images/wedding-2.jpg','title' : '在你身上我看见了千处错误'},
    {'href' : './images/wedding-3.jpg','title' : '但我的心却爱着眼睛所轻视'},
    {'href' : './images/wedding-4.jpg','title' : '溺爱着，不理睬面前的景象'},
    {'href' : './images/wedding-5.jpg','title' : '我耳朵不听你舌尖传的愉悦音色'},
    {'href' : './images/wedding-6.jpg','title' : '我那期待着爱抚的敏感触觉'},
    {'href' : './images/wedding-7.jpg','title' : '甘愿做你那高傲之心的奴隶'},
    {'href' : './images/wedding-8.jpg','title' : '她诱使我犯罪，她令我受苦'}
    ], {
    'padding' : 8,
    'type' : 'image',
    'changeFade' : 300,
    'titlePosition' : 'inside',
    'transitionIn' : 'elastic',
    'transitionOut' : 'elastic'
    });
    });




    $("a.et-sample-setting[id^='et-sample-color']").click(function(){
        var color = "#"+$(this).attr("rel");
        $("body").css({
            "background-color":color
        });
        $.cookie('bg-color', color);
    });

    $("a.et-sample-setting[id^='et-sample-texture']").click(function(){
        var url = $(this).attr("rel");
        url = "url(images/body-"+url+".png)";
        $("body").css({
            "background-image":url
        });
        $.cookie('bg-image', url);
    });

        var $panel=$("#et-control-panel");
        var $close=$("#et-control-close");
        $close.click(function(){
            if($close.is(".control-open")){
                $panel.animate({
                left:0
            },"fast",function(){
                    $close.removeClass("control-open");
                    $.cookie('panel-open', true);
            })
            }else{
                $panel.animate({
                left:-169
            },"fast",function(){
                    $close.addClass("control-open");
                    $.cookie('panel-open', false);
            })
            }

       });

    var $music = document.getElementById("music");
    var $control = $("div.play-control");
    if($.cookie("music-play") == "true"){
        $control.css({
            "background-position":"0 -90px"
        });
        $music.play();
    }else if($.cookie("music-play") == undefined){
        $.cookie("music-play",false)
    }else{
        $control.css({
            "background-position":"0 0"
        });

        $music.pause();
    }


    $control.click(function(){
       if($.cookie("music-play") == "true"){
           $control.css({
               "background-position":"0 0"
           });

           $music.pause();
           $.cookie("music-play",false);
       }else{
           $control.css({
               "background-position":"0 -90px"
           });
           $music.play();
           $.cookie("music-play",true);
       }
    });

    if($.cookie('bg-color')){
        $("body").css({
                    "background-color":$.cookie('bg-color')
                });
    }
    if($.cookie('bg-image')){
        $("body").css({
                    "background-image":$.cookie('bg-image')
                });
    }
    if($.cookie('panel-open') == "true"){
        $panel.css({
            "left":0
        });
    }else{
        $panel.css({
            "left":"-169px"
        });
        $close.addClass("control-open")
    }



});