import React from 'react';
import {useOutside} from "../.././es"

import "./styles.scss"

export function OneTarget () {
  const [visible, setVisible] = React.useState(false)

  const panelRef = React.createRef()
  const btnRef = React.createRef()
  useOutside([panelRef, btnRef], React.useCallback(() => {
    console.log("outside", visible)
    setVisible(false)
  }))

  const handleClick = React.useCallback(() => {
    console.log(visible)
    setVisible(!visible)
  }, [visible])


  return <div>
    <button class="btn" ref={btnRef} onClick={handleClick}>Toggle Display</button>
    <div class={`panel ${!visible && "panel--hide"}`} ref={panelRef}>This is a panel, When You click outside,  I will hide</div>
  </div>
}