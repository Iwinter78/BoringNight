window.onload = function() {
    const createIframe = document.createElement('iframe');
    createIframe.src = "https://www.youtube.com/embed/brwS_ZmVaRc";
    createIframe.width = "560";
    createIframe.height = "315";
    createIframe.autoplay = "1";
    document.body.appendChild(createIframe);
}