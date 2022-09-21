 // delete element 
 let del=document.getElementById('btn');
 del.addEventListener('click', deleteone)

function  deleteone(){
 let ulc=document.getElementById('ulc')
let ele=  ulc.lastElementChild;
 ulc.removeChild(ele);
}

// addelement
let add =document.getElementById('btn-add');
add.addEventListener('click' , addone)

function addone(){

 let iptxt=document.getElementById('textip').value;
 let addid=document.getElementById('ulc');
let  elmcreate=document.createElement('li');
let addtext=document.createTextNode(iptxt)
elmcreate.appendChild(addtext);
addid.appendChild(elmcreate)

let iptxt2=document.getElementById('textip2').value;
 let addid2=document.getElementById('ulc');
//    let  elmcreate2=document.createElement('li');
let addtext2=document.createTextNode(iptxt2) 
elmcreate.appendChild(addtext2);
addid.appendChild(elmcreate)

}






let itemlist=document.getElementById('ulc');



let filter= document.getElementById('filter');
  //filter event
  filter.addEventListener('keyup',filteritem)

//function filter item
function filteritem(e){
  // convert twext to lower case
  var text = e.target.value.toLowerCase();
  // get list
  let listitem=itemlist.getElementsByTagName('li');
  // convert to an Array
Array.from(listitem).forEach(function(listitem){
  var itemname = listitem.firstChild.textContent;
  if(itemname.toLowerCase().indexOf(text)!= -1){
      listitem.style.display='block';
  }else{
      listitem.style.display='none';
  }
})
}