import { React, useEffect } from 'react'

const DrumButton = ({text, audio, altAudio, getVolume, getPower, getBank, audioText, altAudioText, setText}) => {
  var isKeyDown = false;
  const id = `drumButton${text}`
  const handleClick = () => {
    audio.volume = getVolume;
    altAudio.volume = getVolume;
    document.getElementById(id).classList.toggle("pressed");
    if(getPower){
      document.getElementById(id).classList.toggle("on");
      if(!getBank){
        if (audio.paused) {
          audio.play();
        }else{
          audio.currentTime = 0
        }
        setText(audioText)
      } else {
        if (altAudio.paused) {
          altAudio.play();
        }else{
          altAudio.currentTime = 0
        }
        setText(altAudioText)
      }
      setTimeout(() => {
        document.getElementById(id).classList.toggle("on");
      }, 100);
    }
    setTimeout(() => {
      document.getElementById(id).classList.toggle("pressed");
    }, 100);
  }
  useEffect(() => {
    document.addEventListener("keydown", function(event) {
      if (event.key.toUpperCase() == text) {
        if (!isKeyDown) {
          isKeyDown = true;
        } else {
          return
        }
        event.preventDefault();
        //handleClick();
        document.getElementById(`drumButton${text}`).click();
        //document.getElementById(`drumButton`).click();
        event.stopPropagation()
      }
    })
    document.addEventListener('keyup', function(event) {
      isKeyDown = false;
    });
  }, []);
  return (
    <div className='drumButton' tabIndex="1" id={id} onClick={handleClick}>
        {text}
    </div>
  )
}

export default DrumButton