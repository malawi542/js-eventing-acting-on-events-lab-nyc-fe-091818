const dodger=document.getElementById('dodger')
// let dodgerPosition=0;
function moveDodger(event){
  let oldLeft=dodger.style.left
  const keycode=event.which
  if(oldLeft==='0px'){
    return
  }
  if(keycode===37){
    if(oldLeft==='0px'){
    return
     }
    let oldDodger=dodger.style.left
    oldLeft=parseInt(oldLeft, 10)
     dodger.style.left=(oldLeft-10) +'px'
  }
  else if(keycode===39){
    moveDodgerRight(event)
  }
  else if(keycode===38){
    
  }
  else if(keycode===40){
    
  }
  else if(keycode===39){
    
  }
}
dodger.style.backgroundColor = '#ff5bab'
function moveDodgerRight(event){
  if(event.which===39){
    let oldLocation=dodger.style.left
    oldLocation=parseInt(oldLocation,10)
    dodger.style.left=(oldLocation+10) +'px'
    if(oldLocation ==="360px"){
      
    }
  }
}
document.addEventListener('keydown',moveDodger)
// dodger.style.left='380px'