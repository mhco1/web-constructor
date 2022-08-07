import React from 'react'

window.onbeforeunload = (e) => {
    idControl.use = [];
    idControl.await = [];
};

var idControl = {
    use: [],
    await: [],
    define: function () {
        this.use.unshift(
            this.await.length > 0 ? this.await.shift() : (this.use.length +1)
        );

        return this.use[0];
    },
    undefine: function (id) {
        this.await.push(id);
        this.use = use.filter(el => el != id)

        return this.use[0];
    },
}

export default idControl;