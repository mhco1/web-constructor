import React from 'react'

function Tree(props) {
    return (
        <div className="comp-tree p-2" >
            <TreeGroup visible={true}>{props.children}</TreeGroup>
        </div>
    )
}

function TreeGroup(props) {
    var visible = props.visible ? '':' d-none ';
    var btn = <span role="button" className="badge bg-primary rounded-pill me-1" onClick={TreeClick}>+</span>;
    var content = props.children.map((el, id, arr) => {
        var next = arr[id +1]
        return (
            Array.isArray(el) ?
                <TreeGroup visible={false} key={id}>{el}</TreeGroup> :
                <TreeItem key={id}>{Array.isArray(next) ? btn : ''}{el}</TreeItem>
        )
    })

    return (
        <ul className={visible + "list-group border border-0"}>
            {content}
        </ul>
    );
}

function TreeItem(props) {
    var clas = [
        'list-group-item list-group-item-action',
        'd-flex frow-lol fcol-lsl',
        'text-center text-primary border border-0 rounded-2 mb-1 p-1'
    ];
    return <li className={clas.join(' ')}>{props.children}</li>
}

function TreeClick(event) {
    var respTarget;
    var btn    = event.target;
    var group  = [...btn.parentElement.parentElement.children];
    var target = btn.parentElement;
    target = group[group.indexOf(target)+1];

    respTarget = target.classList.toggle('d-none');

    respTarget ? (btn.innerText = '+') : (btn.innerText = '-');
}

export default Tree