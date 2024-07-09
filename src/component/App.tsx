import './App.css'
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '../mui.component'
import { CardActions, Container } from '@mui/material'

function App() {

  return (
    <>
    <Card sx={{
      width: '17.5%'
    }}>
      <CardActionArea sx={{padding: 1}}>
        <CardMedia
        component="img"
        style={{borderRadius: '5%'}}
        image='src/assets/images/image-qr-code.png'
        />
      </CardActionArea>
        <CardContent>
          <Typography 
          gutterBottom 
          align='center' 
          component='div'
          sx={{
            margin:'20px',
            lineHeight: 1.2,
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700, 
            fontSize: '15px'
          }}>
          Improve your front-end skills by building projects
          </Typography>
          <Typography 
          align='center'
          sx={{
            lineHeight: 1.2,
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 200,
            fontSize: '15px'
          }}>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Typography>
        </CardContent>
    </Card>
    </>
  )
}

export default App