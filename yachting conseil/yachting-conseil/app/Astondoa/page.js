'use client'

import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ActiveLastBreadCrumbs from '../components/BreadCrumbs'
import CustomizedTables from '../components/Table'
import MultiActionAreaCard from '../components/CardDetailed'
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from '@mui/material/Link'

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1024,
      },
    },
  });

function Astondoa() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Box className="section-two full-height background-ast"> {/* reusing CSS of previous components */}
            <Typography variant="h3" className='sh-i-section-one-title'>ASTONDOA</Typography> {/* reusing CSS of previous components */}
        </Box>
        <ActiveLastBreadCrumbs />
        <Grid container spacing={2} sx={{justifyContent:"center"}}>
            {/* This display can also be achieved by pulling every Sasga Boat from a DB as an array, then map through the array */}
            <Grid item md={4} sm={6} xs={12}>
                <Link href='/Astondoa/Cabin-Cruiser-Astondoa-AX8' underline='none'>
                    <MultiActionAreaCard title={'Cabin Cruiser ASTONDOA AX8'} image={'/images/ax8.jpeg'} content={<CustomizedTables price={'4 970 000 €'} year={'2024'} engine={'2 X 1000 CV VOLVO PENTA IPS 1350'} length={'24.46 m'} width={'6.22 m'}/>} />
                </Link>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <MultiActionAreaCard title={'Flybridge ASTONDOA 66 FlyBridge'} image={'/images/flybridge66.jpeg'} content={<CustomizedTables price={'895 000 €'} year={'2024'} engine={'2 X 1000 CV VOLVO PENTA IPS 1350'} fuel={'Diesel'}  length={'20.12 m'} width={'5.3 m'} />} />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <MultiActionAreaCard title={'FlyBridge ASTONDOA AS5'} image={'/images/flybridgeS5.png'} content={<CustomizedTables price={'1 631 000 €'} year={'2024'} engine={'2 X 725 CV VOLVO PENTA D11 IPS 950'} length={'17.6 m'} width={'4.94 m'} />} />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <MultiActionAreaCard title={'Open ASTONDOA 377 Coupe'} image={'/images/377coupe.jpeg'} content={<CustomizedTables price={'391 105 €'} year={'2024'} engine={'2 X 320 CV VOLVO PENTA D4 DPI'} fuel={'Diesel'} length={'11.61 m'} width={'3.56 m'} cabins={'2'}/>} />
            </Grid>
        </Grid>
        <Box className='sh-i-section-two-content'> {/* reusing CSS of previous components */}
            <Typography variant="h5">Chez Astondoa, Expérience rime avec Excellence !</Typography>
            <br></br>
            <p></p>
            <Typography>Le chantier Espagnol ASTONDOA est un chantier familial fondé en 1916... soit il y a plus de 100 ans ! Astondoa fabrique donc des bateaux depuis 4 générations.</Typography>
            <p></p>
            <Typography>L'ADN du chantier Astondoa est basé sur le triple principe de <strong>Professionalisme - Fiabilité - Qualité</strong></Typography>
            <p></p>
            <Typography>Chaque unité est construite avec passion, pour offrir à son armateur des moments uniques à bord, du plus festif au plus intime, et pour séduire chacun de ses membres, du plus jeune au plus grand... un bateau dans lequel chacun peut se reconnaître et se retrouver, s'épanouir et profiter de la mer.</Typography>
            <p></p>
            <Typography>Depuis plus d'un siècle, toute l'équipe d'Astondoa est en recherche constante d'<strong>innovation </strong>dans la technologie et le design, pour fabriquer des yachts 100% sur mesure, adaptés aux besoins et critères de chaque propriétaire. Chaque bateau est donc unique, pour répondre jusque dans le moindre détail aux priorités, aspirations et exigences de son futur propriétaire. </Typography>
            <p></p>
            <Typography>Chez Astondoa, tout est réalisé sur place : </Typography>
            <ul>
                <li>le travail du bois</li>
                <li>la mécanique</li>
                <li>le polyester</li>
                <li>la sellerie</li>
            </ul>
            <Typography>Parmi les différentes gammes proposées, il y a assurément LE YACHT de vos rêves :</Typography>
            <ul>
                <li>la gamme <strong>Coupé</strong> propose deux modèles : le <Link>377 Coupé</Link> (en hors bord ou en inboard) et le <strong>655 Coupé</strong></li>
                <li>la gamme <strong>Flybridge</strong> se décline en 1 modèle : le <Link>66 Flybridge</Link></li>
                <li>la gamme <strong>AS</strong> propose deux modèles : l'<Link>AS5</Link> et l'<strong>AS8</strong></li>
                <li>la gamme <strong>AX</strong> se décline en 1 modèle avec le <strong>nouvel AX8</strong> présenté en novembre 2023</li>
                <li>la gamme <strong>Century</strong> comporte 3 modèles : <strong>100, 110, 125</strong></li>
                <li>la gamme <strong>Steel</strong> propose deux modèles de superyachts : <strong>151</strong> et <strong>197</strong></li>
            </ul>
            <Typography>Vous souhaitez visiter ce chantier spectaculaire et découvrir une équipe totalement dédiée à la fabrication de yachts de qualité ?</Typography>
        <p></p>
        <Button variant="contained" className='section-three-button'>Contactez-nous !</Button> {/* reuse of CSS */}
        </Box>
    </ThemeProvider>
    </>
  )
}

export default Astondoa