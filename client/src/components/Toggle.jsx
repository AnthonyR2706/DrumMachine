import { React, useState }from 'react'

const Toggle = ({power, setState, getState, isBank, setText}) => {
  const [isChecked, setIsChecked] = useState(power)
  
  const checkHandler = () => {
    setIsChecked(!isChecked)
    setState(!getState)
    if(isBank){
      if(getState){
        setText("Heater Kit")
      } else {
        setText("Smooth Piano Kit")
      }
    }
  }
  return (
    <div className='toggle'>
        <label class="switch">
          <input type="checkbox" onChange={checkHandler} checked={isChecked}/>
          <span class="sliderToggle"/>
        </label>
    </div>
  )
}

export default Toggle