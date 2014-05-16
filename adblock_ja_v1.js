// ==UserScript==
// @name Adblock new
// @description Webページ上の広告を削除する拡張機能です
// @version 1.5
// @include http://*
// @require jquery
// ==/UserScript==
$("#ad").remove();
$("#ads").remove();
$("#ad_header").remove();
$("#ad_footer").remove();
$("#ad_wrapper").remove();
$("#adBlock").remove();
$("#appliBnr").remove();
$("#ad_cloud_overlay_space").remove();
$("#header_ad").remove();
$("#footer_ad").remove();
$("#cwnf_cocolog_sp-hbnr").remove();
$("#pr_near_restaurant").remove();
$("#riAfPtsWrap").remove();
$("#FnYahooImArea").remove();
$("#bottomAdBannerArea").remove();
$(".ad").remove();
$(".ad2").remove();
$(".ads").remove();
$(".ad_header").remove();
$(".ad_footer").remove();
$(".maist").remove();
$(".tdftad").remove();
$(".headerBnrArea").remove();
$(".subAdBannerArea").remove();
$("._naver_ad_area").remove();
$('div[id^="y_gc_div"]').remove();
$('div[id^="nend_adspace"]').remove();
$('div[id^="gads"]').remove();
$('div[id^="google_afc"]').remove();
$('div[id^="imobile_adspotdiv"]').remove();
$('div[id^="smpBanner"]').remove();
$('div[class^="ad_frame"]').remove();
$('div[class^="adstir_rtb_div"]').remove();
$('div[class^="adlantis"]').remove();
$('div[class^="imobile_adspot"]').remove();
$('div[class^="FTAdBanner"]').remove();
$('div[class^="pr_area"]').remove();
$('div[class^="microad"]').remove();
$('div[class^="ad_frame"]').remove();
$('div[class^="adsense"]').remove();
$('div[class$="adBlock"]').remove();
$('iframe[id^="google_ads"]').remove();
$('iframe[name^="AD"]').remove();
$('iframe[src^="http://rcm-jp.amazon.co.jp/"]').remove();
$('iframe[src^="http://ad.jp.ap.valuecommerce.com/"]').remove();
$('iframe[id$="NinjaAd"]').remove();
$('a[href^="http://clcount.com/papyless/"]').remove();
$('a[href^="http://sp.trax-ad.jp/"]').remove();
$('a[href^="http://ad.maist.jp/"]').remove();
$('a[href^="http://red.st-hatena.com/go"]').remove();
$('span[class^="iPhoneAd"]').remove();
$('ul[class="tdftad"]').remove();
$('nav[class="manga_banner"]').remove();
if (location.href.indexOf("m.blogs.yahoo.co.jp/")>=0) {
	$(".posBlogIM").remove();
} else if (location.href.indexOf("blogs.yahoo.co.jp/")>=0) {
	$(".interestMatchWrap").remove();
} else if (location.href.indexOf("http://m.chiebukuro.yahoo.co.jp/")>=0) {
	$(".spIm").remove();
} else if (location.href.indexOf("nicovideo.jp/")>=0) {
	$("#banner-top").remove();
	$("#banner-side").remove();
} else if (location.href.indexOf("http://jp.akinator.com/")>=0) {
	$("#pub-header").remove();
	$("#pub-droite").remove();
} else if (location.href.indexOf("http://www.atmarkit.co.jp/")>=0) {
	$("#crec").remove();
	$("#frec").remove();
} else if (location.href.indexOf('oricon.co.jp/') >= 0) {
	$('#myBanner,#AndroidApp').remove();
} else if (location.href.indexOf('fc2.com/') >= 0) {
	$('div:regex(id,nend_adspace_)').remove();
} else if (location.href.indexOf('http://s.tabelog.com/') >= 0) {
	$('#pr_near_restaurant').remove();
} else if (location.href.indexOf("http://codezine.jp/")>=0) {
	$("#topbanner").remove();
	$('div[class="sidebanner"]').remove();
	$('div[class="banner_468"]').remove();
} else if (location.href.indexOf('atwiki.jp/') >= 0) {
	$('div.adlantis_sp_sticky_container, #adingoFluct2_overlay').remove();
$('div[class^="koukoku"]').remove();
}
