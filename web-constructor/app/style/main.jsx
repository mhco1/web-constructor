var style = `
    html, body{
        height: 100%;
    }

    body{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    body .invert{
        --mp-color: var(--mss-color);
        --ms-color: var(--mpp-color);
    }

    ${classStyle()}
`

function classStyle(){
    var res = '';
    var clas = [
        ['primary','--p-color'],
        ['secondary','--s-color'],
        ['success','--success-color'],
        ['link','--link-color'],
        ['warning','--warning-color'],
        ['error','--error-color'],
        ['monoPrimary','--mp-color'],
        ['monoSecondary','--ms-color'],
    ].forEach(el =>{
        res += `
            .${el[0]}{
                background-color: var(${el[1]}) !important;
                border-color:  var(${el[1]}) !important;
                color: #0c0a10;
            }

            .${el[0]}Border{
                border-color:  var(${el[1]}) !important;
                color:  var(${el[1]}) !important;
            }
        `
    })
    return res
}

export default function Style(){
    return (
    <>
        <style id="myStyle">{style}</style>
    </>
)}