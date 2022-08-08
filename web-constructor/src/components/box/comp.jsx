
var Box = function(){
    var clas = [
        '.c-box-b-primary',
        '.c-box-b-secondary',
        '.c-box-b-success',
        '.c-box-b-danger',
        '.c-box-b-warning',
        '.c-box-b-info',
        '.c-box-b-white',
        '.c-box-b-dark',
    ]

    document.querySelectorAll(clas.join(', ')).forEach(el => {
        var box, border;
        var _match = el.className.matchAll(/c-box-b-([a-z]*)/g);
        var match = [];

        for(var _el of _match){match.push(..._el)}

        box = match[0];
        border = match[1];

        el.classList.remove(box);
        el.className += 'shadow-sm border border-'+border+' rounded-2 p-2 m-2';
    })

    document.querySelectorAll('.c-box').forEach(el => {
        el.classList.remove('c-box');
        el.className += 'shadow-sm bg-dark text-light rounded-2 p-2 m-2';
    })
}

export default Box;
