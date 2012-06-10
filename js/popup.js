(function() {
    // chrome.extension.onRequest.addListener(
    //   function(request, sender, sendResponse) {
    //     console.log(request.ogpData);
    //     sendResponse({message: "success"});
    //   });

    chrome.tabs.getSelected(null,function(tab) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute('src', 'http://blazing-sunset-2499.herokuapp.com/form/?share=' + encodeURIComponent(tab.url));
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('style', 'cursor: pointer;margin: 0; padding: 0; border: none; overflow:hidden; width:200px; height:300px; background-color: translucend;');
        iframe.setAttribute('allowTransparency', 'true');

        document.body.appendChild(iframe);
    });
})();
