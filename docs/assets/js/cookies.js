var setCookies = function () {
    // load jsll for trackings
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function () {
        // remote script has loaded
    };
    script.src = 'https://az725175.vo.msecnd.net/scripts/jsll-4.js';
    document.querySelector('head').append(script);

    // load Bing maps API script
    var p_script = document.createElement('script');
    p_script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=ApJ2A2UhiPdlajurjmSf94xP9WIUbEJgPWfe0cHtE9xtePwDUV957ffieSI2KcL4';
    document.querySelector('head').append(p_script);
}
var config = {
    userConsentCookieName: "MSCC",
    useDefaultContentName: true,
    useShortNameForContentBlob: false,
    autoCapture: {
        lineage: true
    },
    coreData: {
        appId: "visionAiAnalytics"
    },
    callback: {
        pageName: null
    }
};
if (typeof awa !== 'undefined') {
    awa.init(config);
}

if (mscc.hasConsent()) {
    setCookies();
} else {
    mscc.on("consent", setCookies);
}