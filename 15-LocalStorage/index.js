(function(){
    const addItems = document.querySelector(".add-items");
    const itemList = document.querySelector(".plates");

    class LocalTapas {
        constructor() {
            this.items = JSON.parse(localStorage.getItem("items")) || [];
            this.tempTodoText = '';
            this.render();
        }

        get temporaryTodoText() {
            return this.tempTodoText;
        }

        set temporaryTodoText(text) {
            this.tempTodoText = text;
        }

        _setLocal() {

            localStorage.setItem("items", JSON.stringify(this.items));
            this.render();
        }

        addItem(item) {
            const newitem = {
                name: item,
                id: this.items.length > 0 ? this.items[this.items.length - 1].id + 1 : 1,
                done: false,
            };
            this.items.push(newitem);
            this._setLocal();
        };

        deleteItem(idx) {
            this.items = this.items.filter(item => item.id !== idx);
            this._setLocal();
        }
        
        editItem(text, idx) {
            this.items = this.items.map(item => item.id === idx ? {...item, name: text} : item);
            this._setLocal();
        }
        
        toggleItem(idx) {
            this.items = this.items.map(item => item.id === idx ? {...item, done: !item.done} : item);
            this._setLocal();
        }

        render() {
            itemList.innerHTML = this.items.map(item => {
                return `
                    <li id=${item.id}>
                        <input type="checkbox" id="${item.id}" ${item.done ? 'checked' : ''} />
                        <label class="checkbox" for="${item.id}"></label>
                        <span class="editable" contenteditable="true">${item.name}</span>
                        <button class="delete">Delete</button>
                    </li>
                `;
            }).join('');
        };
    }

    const restaurant = new LocalTapas();

    // add item
    addItems.addEventListener("submit", function(e){
        e.preventDefault();
        restaurant.addItem(this.querySelector("[type=text]").value);
        this.reset();
    });

    // delete || toggle item
    itemList.addEventListener("click", function(e){

        if(e.target.className === "delete"){
            const id = parseInt(e.target.parentElement.id);
            restaurant.deleteItem(id);
        }

        if(e.target.className === "checkbox"){
            const id = parseInt(e.target.parentElement.id);
            restaurant.toggleItem(id);
        }
    });

    // edit
    itemList.addEventListener('input', function(e){
        if (e.target.className === 'editable') {
            restaurant.temporaryTodoText = e.target.innerText;
        }
    });
    
    itemList.addEventListener('focusout', function(e){
        if (restaurant.temporaryTodoText) {
            const id = parseInt(e.target.parentElement.id)
            restaurant.editItem(restaurant.temporaryTodoText, id);

            restaurant.temporaryTodoText = '';
        }
    });
})();
