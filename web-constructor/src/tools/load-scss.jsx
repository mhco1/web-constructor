
var loadScss = function (wc_darkmode){
    var href, el;

    if(wc_darkmode){
        href = '/src/scss/dark-mode-t.scss';
    } else {
        href = '/src/scss/dark-mode-f.scss';
    }

    el = document.createElement('style');
    el.innerText = '* {transition: background-color 1s, color 2s !important;}';
    el.classList.add('_wc_remove');
    document.querySelector('head').append(el);

    document.querySelectorAll('.wc_scss').forEach(el => el.className = "_wc_remove");

    el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    el.className = 'wc_scss';
    document.querySelector('head').appendChild(el);

    setTimeout(function(){
        //debugger
        document.querySelectorAll('._wc_remove').forEach(el => el.remove());
    },1000)
}

export default loadScss;