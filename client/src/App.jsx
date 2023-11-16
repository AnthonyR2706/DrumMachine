import { React, useState }from 'react'
import { DrumButton, Toggle } from './components'


const App = () => {
  const [getVolume, setVolume] = useState(.5)
  const [getPower, setPower] = useState(true)
  const [getBank, setBank] = useState(false)
  const [getText, setText] = useState('Heater Kit')
  const propPack = {
    getVolume: getVolume,
    getPower: getPower,
    getBank: getBank,
    setText: setText,
  };
  return (
    <div className='app__wrapper'>
        <div className='drumContainer'>
          <div className='buttonContainer'>
            <DrumButton 
              text={"Q"}
              audio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')}
              altAudio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3')}
              audioText = "Heater 1"
              altAudioText = "Chord 1"
              {...propPack}
            />
            <DrumButton 
              text={"W"}
              audio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')}
              altAudio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')}
              audioText = "Heater 2"
              altAudioText = "Chord 2"
              {...propPack}
              />
            <DrumButton 
              text={"E"}
              audio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')}
              altAudio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')}
              audioText = "Heater 3"
              altAudioText = "Chord 3"
              {...propPack}
              />
            <DrumButton 
              text={"A"}
              audio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')}
              altAudio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3')}
              audioText = "Heater 4"
              altAudioText = "Shaker"
              {...propPack}
              />
            <DrumButton 
              text={"S"}
              audio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')}
              altAudio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3')}
              audioText = "Clap"
              altAudioText = "Open HH"
              {...propPack}
              />
            <DrumButton 
              text={"D"}
              audio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')}
              altAudio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')}
              audioText = "Open HH"
              altAudioText = "Closed HH"
              {...propPack}
              />
            <DrumButton 
              text={"Z"}
              audio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')}
              altAudio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3')}
              audioText = "Kick n' Hat"
              altAudioText = "Punchy Kick"
              {...propPack}
              />
            <DrumButton 
              text={"X"}
              audio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')}
              altAudio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')}
              audioText = "Kick"
              altAudioText = "Side Stick"
              {...propPack}
              />
            <DrumButton 
              text={"C"}
              audio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')}
              altAudio={new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')}
              audioText = "Closed HH"
              altAudioText = "Snare"
              {...propPack}
              />
          </div>
          <div className='contentContainer'>
            <div className='toggleText'>Power</div>
            <Toggle 
            power = {true}
            setState = {setPower}
            getState = {getPower}
            />
            <div className='soundText' id='demo'>{getText}</div>
            <input type="range" min="0" max="1" step="0.01"  value={getVolume} class="slider" id="myRange" onChange={(event) => {setVolume(event.target.value); setText(`Volume: ${Math.floor(event.target.value * 100)}`)}} />
            <div className='toggleText'>Bank</div>
            <Toggle 
            power={false}
            setState = {setBank}
            getState = {getBank}
            isBank = {true}
            setText = {setText}
            />
          </div>
        </div>
    </div>
  )
}

export default App