'use client'

import localFont from 'next/font/local'

import './globals.css'
import { useState, useEffect } from 'react';
import Box from '@mui/system/Box';
import Image from 'next/image'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Languages from "../public/images/langs.png"
import Logo from "../public/images/logo-header.png"
import Stack from "@mui/material/Stack"
import Divider from '@mui/material/Divider';
import CustomizedMenus from './components/Menu'
import MenuSmallScreen from './components/MenuSmallScreen'
import { Montserrat } from 'next/font/google'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logofooter from '../public/images/logo transparent.png'
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Bein from '../public/images/being-yachts.png'

export const montserrat = Montserrat({ subsets: ['latin'], variable:'--Montserrat' })

export const AvenirLTProBook = localFont({ src: '../assets/fonts/AvenirLTProBook.otf', variable:'--AvenirLT' })

export const HelveticaNeue = localFont({src: '../assets/fonts/Helvetica Neue Regular.otf', variable:'--HelveticaNeue'})

export default function RootLayout({ children }) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Vente bateau neuf occasion, Place de port Hyères Toulon Var (83) | Yachting Conseil</title>
      </head>
      <body>
        <header id="header" className={`${scroll ? " sticky" : ""}`}>
          <Box className='languages'>
            <Link href="/#flags" underline='none'>
              <Image 
              src={Languages} alt="languages"/>
            </Link>
          </Box>
          <Box className='menu-container'>
            <Link href="/">
            <Image 
            src={Logo}
            alt="Logo Header"
            className="logo-header"
            />
            </Link>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              className='menu-icon'
              onClick={() => {
                const menu = document.getElementById('menu-smaller')
                if (menu.style.display == 'none'){
                  menu.style.display = 'block';
                  
                }
                else{
                  menu.style.display = 'none'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box className="menu">
              <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />} alignItems="center">
                <CustomizedMenus title={{'title':'occasions',"url": '/SecondHand'}} elements={[{"name": 'Bateaux à moteur',"url": "/SecondHand/MotorBoats"}, {"name": "Voiliers", "url" : "/SecondHand/SailingBoats"}]}/>
                <Link href='/Sasga' underline="none" className="menu-item">sasga menorquin</Link>
                <Link href='/Astondoa' underline="none" className="menu-item">astondoa</Link>
                <Link href='/Harbour' underline="none" className="menu-item">places de port</Link>
                <CustomizedMenus title={{"title": 'services', 'url': '/Services'}} elements={[{'name':'Boat Staging', 'url':'/Services/BoatStaging'}, {'name':"Entretien - Maintenance", 'url':'/Services/UpKeep'},{'name':"Dispersion de cendres en mer", 'url':'/Services/Ashes'}, {'name':"Expertise",'url':'/Services/Expertise'}, {'name':"Assurance", 'url':'/Services/Insurance'},{'name':"Financement", 'url':'/Services/Funding'},{"name":"Transport",'url':'/Services/Transportation'},{'name':"Conseils",'url':'/Services/Advices'}, {'name':"Chantier Naval",'url':'/Services/ShipYard'}]}/>
                <CustomizedMenus title={{'title':'vendre votre bateau','url':'/Sell'}} elements={[{'name':'Estimation','url':'/Sell/Estimate'}, {'name':"Rachat Bateau",'url':'/Sell/BuyBack'}]}/>
                <CustomizedMenus title={{'title':'actualités','url':'#'}} elements={[{'name':"A remplir", 'url':'#'} /*will have to find a way to pass the latest news as elements */]}/>
                <Link underline="none" className='menu-item' href='/Contact'>contact</Link>
              </Stack>
            </Box>
          </Box>
          <Box id="menu-smaller" className='menu-smaller'>
              <br></br>
              <Stack direction="column" spacing={2} alignItems="center" >
                <MenuSmallScreen title={{'title':'occasions',"url": '/SecondHand'}} elements={[{"name": 'Bateaux à moteur',"url": "/SecondHand/MotorBoats"}, {"name": "Voiliers", "url" : "/SecondHand/SailingBoats"}]}/>
                <Link href='/Sasga' underline="none" className="menu-item small">sasga menorquin</Link>
                <Link href='/Astondoa' underline="none" className="menu-item small">astondoa</Link>
                <Link href='/Harbour' underline="none" className="menu-item small">places de port</Link>
                <MenuSmallScreen title={{"title": 'services', 'url': '/Services'}} elements={[{'name':'Boat Staging', 'url':'/Services/BoatStaging'}, {'name':"Entretien - Maintenance", 'url':'/Services/UpKeep'},{'name':"Dispersion de cendres en mer", 'url':'/Services/Ashes'}, {'name':"Expertise",'url':'/Services/Expertise'}, {'name':"Assurance", 'url':'/Services/Insurance'},{'name':"Financement", 'url':'/Services/Funding'},{"name":"Transport",'url':'/Services/Transportation'},{'name':"Conseils",'url':'/Services/Advices'}, {'name':"Chantier Naval",'url':'/Services/ShipYard'}]}/>
                <MenuSmallScreen title={{'title':'vendre votre bateau','url':'/Sell'}} elements={[{'name':'Estimation','url':'/Sell/Estimate'}, {'name':"Rachat Bateau",'url':'/Sell/BuyBack'}]} />
                <MenuSmallScreen title={{'title':'actualités','url':'#'}} elements={[{'name':"A remplir", 'url':'#'} /*will have to find a way to pass the latest news as elements */]} />
                <Link underline="none" className='menu-item small' href='/Contact'>contact</Link>
              </Stack>
              <br></br>
            </Box>
        </header>
        {children}
        <footer>
          <Box className="section-six-content-container footer-container">
            <Box className="footer-row">
              <Typography variant="h5" className="footer-row-title">Nous trouver</Typography>
              <iframe className="footer-row-one-map"  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.5539940769017!2d6.191927715777886!3d43.113887079143524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c92452786b8b6b%3A0x706a7b8519e8619b!2sYachting%20Conseil!5e0!3m2!1sfr!2sfr!4v1585731223515!5m2!1sfr!2sfr'></iframe>
            </Box>
            <Box className="footer-row two">
              <Image src={logofooter} className="footer-row-two-logo" alt="Yachting-conseil-logo"/>
              <Typography variant="h5" className="footer-row-title small">2228 Bld du Front de Mer</Typography>
              <Typography variant="h5" className="footer-row-title small">Résidence Simone Berriau</Typography>
              <Typography variant="h5" className="footer-row-title small">Les Salins</Typography>
              <Typography variant="h5" className="footer-row-title small">83400 Hyères</Typography>
              <Link className="footer-link"><Typography variant="h5" className="footer-row-title margin phone"><PhoneIcon/>+33 (0)4 94 66 49 56</Typography></Link>
              <Link className="footer-link"><Typography variant="h5" className="footer-row-title margin mobile"><PhoneAndroidIcon/>+33 (0)6 81 32 27 13 </Typography></Link>
              <Link className="footer-link"><Typography variant="h5" className="footer-row-title margin mobile"><PhoneAndroidIcon/>+33 (0)6 80 84 35 39 </Typography></Link>
              <Button variant="outlined" className="footer-button" href='/Contact'>Nous écrire</Button>
            </Box>
            <Box className="footer-row">
              <Typography variant="h5" className="footer-row-title">Nous suivre</Typography>
              <ul className='footer-list'>
                <li><Link href="https://www.facebook.com/pages/Yachting-Conseil/201165046700183" className='footer-link socials'><FacebookIcon/> facebook</Link></li>
                <li><Link src="" className='footer-link socials'><YouTubeIcon/> Youtube</Link></li>
                <li><Link href="https://www.instagram.com/yachting_conseil/?hl=fr" className='footer-link socials'><InstagramIcon/> Instagram</Link></li>
              </ul>
              <Image src={Bein} className="footer-row-three-logo" alt="bein-yachts-logo"/>
            </Box>
          </Box>
          <nav className="bottom-nav">
            <Link className="bottom-nav-link">Création de sites internet -</Link>
            <Link className="bottom-nav-link"> Nos partenaires -</Link>
            <Link className="bottom-nav-link"> Mention Légales -</Link>
            <Link className="bottom-nav-link"> Confidentialité</Link>
          </nav>
        </footer>
      </body>
    </html>
  )
}
