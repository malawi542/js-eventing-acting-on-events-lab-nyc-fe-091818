const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

// dodger.style.left = '380px'

function moveDodger(event) {
  let oldLeft=dodger.style.left
  const keycode = event.which
  if(keycode === '0px') {
    return
  }
    // figure out where it is now
    if ( keycode=== 37) {
      if(keycode === '0px') {
    return
    }
    let oldDodger = dodger.style.left
    oldLeft = parseInt(oldLeft, 10)
    dodget.style.left=(oldLeft -10)+ 'px'
    }
    
    else if(keycode===39) {
      moveDodgerRight(event)
    }
    else if(keycode===38){
      
    }
    else if(keycode===40)
    }
    // 180
    
    // 170 + 'px'
    // starts at 180px
    // move over 10px 
  }
  // } else if (keycode === 39) {
  //   // this is the right arrow key
  // } else if (keycode === 38) {
  //   // up arrow key
  // } else if (keycode === 40) {
  //   // down
  // }
  
}

// document.addEventListener('keyDown', moveDodger)

function moveDodgerRight(event) {
  if(event.which === 39) {
    let oldLocation = dodger.style.left
    // '180px'
    
    if (oldLocation === '360px') {
      return
    }
    
    oldLocation = parseInt(oldLocation, 10)
    
    dodger.style.left = (oldLocation + 10) + 'px'
  } 
}