import { Button, useTheme } from '@mui/material'
import { ThemeProvider2 } from '..'
import { useContext } from 'react'


export default function Home({mycolor2}) {
    console.log('mc2',mycolor2)
    const theme = useTheme()
    const color = useContext(ThemeProvider2)
    console.log(color)
    return (
    
   <>
            <div>Home Page</div>
            <Button styles={mycolor2}>PRADEEP-USING PROPDRILING<br/></Button>
            <Button styles={color}>PRADEEP2-useContext Hook<br/></Button>
            <Button styles={mycolor2}>PRADEEP3</Button>

   </>
  )
}
