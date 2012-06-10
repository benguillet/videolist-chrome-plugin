(function() {
    var context_video = {
        "type": "normal",
        "title": "videoLike this video",
        "contexts": ["video"],
        "onclick": function (info, tab) {
            var url = gen_url("video", tab.title, info.pageUrl, "", info.srcUrl);
            window.open(url, popup_settings.title, popup_settings.specs);
        }
    };

    var context_page = {
        "type": "normal",
        "title": "videoLike this page",
        "contexts": ["all"],
        "onclick": function (info, tab) {
            var url = gen_url("page", tab.title, info.pageUrl);
            window.open(url, popup_settings.title, popup_settings.specs);
        }
    };

    var gen_url = function(media_type, title, _location, message, content_url) {
        var url = "http://www.mogreet.com/moshare/it/";
        url += "?share=" + encodeURIComponent(_location);
        url += "&title=" + encodeURIComponent(title);
        url += "&media_type=" + encodeURIComponent(media_type);
        url += "&channel=chrome_plugin";

        if (content_url) {
            url += "&content_url=" + encodeURIComponent(content_url);
        }
        if (media_type == "image") {
            url += "&thumbnail=" + encodeURIComponent(content_url);
        }
        if (message) {
            url += "&message=" + encodeURIComponent(message);
        }
        return url;
    };

    var context_menu_video = chrome.contextMenus.create(context_video);
    var context_menu_page  = chrome.contextMenus.create(context_page);
})();
