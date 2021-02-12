// console.log('EXECUTING CUSTOM SCRIPT');
    function attachExtReaderCss(evt) {
        // console.log("Executing css injection script");
        var cssId = 'ru-reader.min.css';
        if (!document.getElementById(cssId)) {
            var body = document.getElementsByTagName('body')[0];
            var link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            // TODO: reset to ''epub/EPUB/css/' + cssId' before build
            // link.href = '../../../../' + 'epub/EPUB/css/' + cssId;
            link.href = 'epub/EPUB/css/' + cssId;
            link.media = 'all';
            body.appendChild(link);
            // console.log("Appending link to body script");
        }
        // var headCssId = "ru-css-head";
        // if (!document.getElementById(headCssId)) {
        //     // Убираем padding у тела основного контента сразу, чтобы убрать глитч при нажатии F5
        //     var a = "", // "#epubContainer.stylesEnabled sections#spreadL>section,#epubContainer.stylesEnabled sections#spreadR>section{padding-left:0}",
        //         b = ""; // "#epubContent,#epubContent>sections>section.k-section{height:100%!important}"
        //     var css = a + b;
        //     var head = document.head || document.getElementsByTagName('head')[0],
        //         style = document.createElement('style');
        //     head.appendChild(style);
        //     style.id = headCssId;
        //     style.type = 'text/css';
        //     if (style.styleSheet) {
        //         style.styleSheet.cssText = css;
        //     } else {
        //         style.appendChild(document.createTextNode(css));
        //     }
        // }

        if (document.getElementsByClassName("part-cover-page").length > 0) {
            if (!document.getElementById("tabMenuLayerBottom")) {
                var tmb = document.getElementById("tabMenu");
                var lay = document.createElement('div');
                lay.id = "tabMenuLayerBottom";
                lay.classList.add("tab-layer");
                lay.classList.add("layer-bottom");
                tmb.appendChild(lay)
            }
            if (!document.getElementById("tabMenuLayerTop")) {
                var tmb = document.getElementById("readerHeader");
                var lay = document.createElement('div');
                lay.id = "tabMenuLayerTop";
                lay.classList.add("tab-layer");
                lay.classList.add("layer-top");
                tmb.appendChild(lay)
            }

        } else {
            if (document.getElementById("tabMenuLayerBottom")) {
                document.getElementById("tabMenuLayerBottom").remove()
            }
            if (document.getElementById("tabMenuLayerTop")) {
                document.getElementById("tabMenuLayerTop").remove()
            }
        }
    }

    // function fixNextPrevPages(evt) {
    //     var f = function (pageId) {
    //         var e = document.getElementById(pageId);
    //         if (e) {
    //             alert(e);
    //             var ifr = e.getElementsByTagName("iframe")[0], ifrdoc;
    //             alert(ifr);
    //             if (ifr.contentDocument) {
    //                 ifrdoc = ifr.contentDocument
    //             } else if (ifr.contentWindow) {
    //                 ifrdoc = ifr.contentWindow.document
    //             }
    //             if (ifrdoc) {
    //                 var css = "@media (min-width: 1300px){html{padding-left:330px}}"
    //                 var head = ifrdoc.head || ifrdoc.getElementsByTagName('head')[0],
    //                     style = ifrdoc.createElement('style');
    //                 head.appendChild(style);
    //                 style.type = 'text/css';
    //                 if (style.styleSheet) {
    //                     style.styleSheet.cssText = css;
    //                 } else {
    //                     style.appendChild(ifrdoc.createTextNode(css));
    //                 }
    //             }
    //         }
    //     }
    //     f("nextPage");
    //     f("prevPage");
    //
    // }

    document.addEventListener("DOMContentLoaded", attachExtReaderCss);
    // document.addEventListener("load", fixNextPrevPages);
// window.addEventListener ?
//     window.addEventListener("load", attachExtReaderCss,false) :
//     window.attachEvent && window.attachEvent("onload", attachExtReaderCss);

// if(window.attachEvent) {
//     window.attachEvent('onload', attachExtReaderCss);
//     console.log("window.attachEvent");
// } else {
//     if(window.onload) {
//         console.log("window.onload - exists");
//         var curronload = window.onload;
//         window.onload = function (evt) {
//             curronload(evt);
//             attachExtReaderCss(evt);
//         };
//     } else {
//         console.log("window.onload - doesn't exist");
//         window.onload = attachExtReaderCss;
//     }
// }
