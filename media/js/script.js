let data = {
    text: "",
    list: [],
    ids: 0
};

new Vue({
    el: "#app",
    data: data,
    methods: {
        addText: addText,
        del: del
    }
});

function addText() {
    this.ids ++;
    if (this.text !== "") {
        this.list.push(
            {
                text: this.text,
                id: this.ids
            }
        );
        this.text = "";
    }
}
function del(item_id) {
    for (let i in this.list) {
        if (this.list[i].id == item_id)
            this.list.splice(i, 1);
    }
}