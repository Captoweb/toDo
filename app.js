let array = [
    {id: 1, name: "сделать что то (name 1)", done: false},
    {id: 2, name: "сделать что то (name 2)", done: false},
    {id: 3, name: "сделать что то (name 3)", done: false},
];
// {id: 1, name: "сделать что то", done: false, created_at: "4 сентября 12:00"}
// можно пока без времени

// собрать все элементы при помощи document.querySelectorAll
// проверить циклом
// если элемент имеет атрибут checked, то добавить класс с перечеркиванием линии

render(); 


function add() {
    let inputValue = document.querySelector('.add-task_input').value;
    if (inputValue != '') {
       // console.log(array.length);
        array.push({id: array.length + 1, name: inputValue, done: false});
       // console.log(array);
    }
  
   render(); 
}
 
    
function render() {
    let out = '';
    for (let key in array) {
        out += `<li class="list-item">`;
        out +='<div>';
        out +=`<input type="checkbox">`;
        out += `${array[key].name}`;
        out +='</div>';
        out +=`<img class="deleteImg" src="img/close.svg">`;
        out += `</li>`;
    }
    document.querySelector('.list').innerHTML = out;
    document.querySelector('.add-button').onclick = add;
}

render();

function deleteItem() {
    console.log('hello');
    console.log(this);
    this.style.background = '#7CFC00';
    this.remove();
}

let delBtn = document.querySelectorAll('.list-item');
console.log(delBtn);
delBtn.forEach(function(elem){
    elem.onclick = deleteItem;
})

// после добавления в пустой массив - элементы НЕ удалаяются
// а если массив не пустой то - удалаяются
// а как удалять по id ? или это только на сервере ?
// наверное это проблемы асинхронности

