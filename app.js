var list=document.getElementById('list');
function additem(){
    var todo=document.getElementById('todotask');
    var li=document.createElement('li');
    var litext=document.createTextNode(todo.value);
    li.appendChild(litext);
    var delbtn=document.createElement("button");
    var deltext=document.createTextNode('Delete');
    delbtn.classList.add('btn');
    delbtn.classList.add('btn-primary');
    delbtn.classList.add('ml-1');
    delbtn.classList.add('mt-1');
    delbtn.setAttribute("onclick","delitem(this)");
    delbtn.appendChild(deltext);
    var editbtn=document.createElement('button');
    var edittext=document.createTextNode('Edit');
    editbtn.classList.add('btn');
    editbtn.classList.add('btn-primary');
    editbtn.classList.add('ml-1');
    editbtn.classList.add('mt-1');
    editbtn.setAttribute("onclick","editvalue(this)");
    editbtn.appendChild(edittext);
    li.appendChild(editbtn);
    li.appendChild(delbtn);
    list.appendChild(li);
    todo.value="";
}
function delitem(obj){
    obj.parentNode.remove();
}
function delall(){
    list.innerHTML="";
}
function editvalue(obj){
obj.parentNode.firstChild.nodeValue=prompt("Enter new value",obj.parentNode.firstChild.nodeValue);
}