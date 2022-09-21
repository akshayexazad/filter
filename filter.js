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

  }