import './App.css'
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '../mui.component'

function App() {

  return (
      <Card
      sx={{ 
        border: 'none',
        width: '17.5rem',
        borderRadius: '15px',
        boxShadow: 'none',
      }}>
        <CardActionArea sx={{padding:1.5}}>
          <CardMedia
          component="img"
          style={{borderRadius: '5%'}}
          image='/src/assets/images/image-qr-code.png'
          />
        </CardActionArea> 
          <CardContent>
            <Typography 
            gutterBottom 
            align='center' 
            component='div'
            sx={{
              lineHeight: 1.2,
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700, 
              fontSize: '17.5px'
            }}>
            Improve your front-end skills by building projects
            </Typography>
            <Typography
            align='center' 
            sx={{
              margin:'10px',
              lineHeight: 1.2,
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 50,
              fontSize: '12px',
              color: 'hsl(220, 15%, 55%)'
            }}
            >
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </Typography>
          </CardContent>
      </Card>
  )
}

export default App