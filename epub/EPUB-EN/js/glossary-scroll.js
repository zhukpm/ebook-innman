var gnav = document.getElementById("glossary-nav");
var epub = document.getElementById("epubContainer");
var nav_lets = gnav.children;
var gnavOfftop = gnav.offsetTop + 1;

var anim = true;
epub.addEventListener('scroll', function (evt) {
    if (anim) {
        anim = false;
        setTimeout(
            function scroll_(evt) {
                anim = true;
                if (epub.scrollTop > gnavOfftop) {
                    gnav.classList.add("glnav-scrolled");
                    gnav.style.top = (epub.scrollTop - gnavOfftop) + "px";
                } else {
                    gnav.classList.remove("glnav-scrolled");
                    gnav.style.top = "0";
                }
            }, 400)
    }
})

function rmActives() {
    for (var i = 0; i < nav_lets.length; i++) {
        nav_lets[i].classList.remove("gl-active")
    }
}

for (let i = 0; i < nav_lets.length; i++) {
    let nav_letter = nav_lets[i];
    nav_letter.addEventListener('click', function (evt) {
        if (!this.classList.contains("gl-disabled")) {
            rmActives();
            this.classList.add("gl-active");
            let kw_letter = document.getElementById(this.getAttribute("data-value"));
            // console.log(kw_letter);
            if (kw_letter != null) {
                const y = kw_letter.getBoundingClientRect().top + epub.scrollTop - (epub.offsetTop + gnav.offsetHeight);
                // console.log("y="+y);
                // console.log(kw_letter.getBoundingClientRect().top);
                // console.log(epub.scrollTop);
                // console.log(epub.offsetTop);
                // console.log(gnav.offsetHeight);
                scrollTo(y, 350);
                // epub.scrollTo({top: y, behavior: 'smooth'});
            }
        }
    })
}

// c = element to scroll to or top position in pixels
// e = duration of the scroll in ms, time scrolling
// d = (optative) ease function. Default easeOutCuaic
function scrollTo(c,e,d){d||(d=easeOutCuaic);
    var a=epub;
    var b=a.scrollTop;0>=e||("object"===typeof b&&(b=b.offsetTop),
    "object"===typeof c&&(c=c.offsetTop),function(a,b,c,f,d,e,h){
        function g(){0>f||1<f||0>=d?a.scrollTop=c:(a.scrollTop=b-(b-c)*h(f),
            f+=d*e,setTimeout(g,e))}g()}(a,b,c,0,1/e,20,d))};
function easeOutCuaic(t){t--;return t*t*t+1;}