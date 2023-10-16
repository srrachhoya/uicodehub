import './globals.css'
import Navbar from './componets/Navbar'


export default function RootLayout({ children }) {
  return (
    <html lang="en">

<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UiCodeHub</title>

      <body>
        
        <Navbar/>
        
        {children}
        
        
        </body>

    </html>
  )
}
