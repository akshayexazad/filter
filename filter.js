// delete element .............
let del=document.getElementById('btn');
del.addEventListener('click', deleteone)

function  deleteone(){
let ulc=document.getElementById('ulc')
let ele=  ulc.lastElementChild;
ulc.removeChild(ele);
}

// addelement.............
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
let addtext2=document.createTextNode(iptxt2);
elmcreate.appendChild(addtext2);
addid.appendChild(elmcreate);

}
//filter.............
let filter= document.getElementById('filter');
  //filter event
  filter.addEventListener('keyup',filteritem);

  function filteritem(){
   let iptxtval= document.getElementById('filter').value.toUpperCase();
    let ulselect=document.getElementById('ulc')
   let liselect= ulselect.getElementsByTagName('li');
    
   for(let i=0;i<liselect.length;i++){
        let txtval = liselect[i].textContent;
        if(txtval.toUpperCase().indexOf(iptxtval)> -1){
          liselect[i].style.display='block';
        }else{
          liselect[i].style.display='none';
        }
     }
 };