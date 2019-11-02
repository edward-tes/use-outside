# A React Hooks `useOutside` 

React Hooks for when click elements's outside 

## How to use it

```js
import {useOutside} from "use-outside"
improt React from "react"

export function Demo() {
  const ref = React.createRef()

  useOutside([ref], () => {
    // NOTE: handle outside cllick
  })

  return <div ref={ref}></div>
}
```

## Options 

`useOutside(elements, onOutside, eventName)`

### Elements

All the elements will be ignored for the event

### onOutside

When the event trigger not on the elements, it will be triggered

### eventName

Default is `click`