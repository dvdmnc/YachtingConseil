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

function Sasga() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Box className="section-two full-height background-sas"> {/* reusing CSS of previous components */}
            <Typography variant="h3" className='sh-i-section-one-title'>SASGA MENORQUIN</Typography> {/* reusing CSS of previous components */}
        </Box>
        <ActiveLastBreadCrumbs />
        <Grid container spacing={2} sx={{justifyContent:"center"}}>
            {/* This display can also be achieved by pulling every Sasga Boat from a DB as an array, then map through the array */}
            <Grid item md={4} sm={6} xs={12}>
                <Link href='Sasga/Trawler-sasga-menorquin-68-fb' underline='none'>
                    <MultiActionAreaCard title={'Trawler SASGA MENORQUIN 68 FB'} image={'/images/sasga 68.jpeg'} content={<CustomizedTables price={'2 164 905 €'} year={'2024'} engine={'2 X 725 CV VOLVO D11'} fuel={'Diesel'} length={'21.24 m'} width={'5.8 m'} cabins={'4'}/>} />
                </Link>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <Link underline='none'>
                    <MultiActionAreaCard title={'Trawler SASGA MENORQUIN 55'} image={'/images/sasga 55.jpeg'} content={<CustomizedTables price={'895 000 €'} year={'2024'} engine={'2 X 480 CV VOLVO V6'} fuel={'Diesel'} length={'16.5 m'} width={'5 m'} cabins={'3'}/>} />
                </Link>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <Link underline='none'>
                    <MultiActionAreaCard title={'Trawler SASGA MENORQUIN 42'} image={'/images/sasga 42.jpeg'} content={<CustomizedTables price={'541 370 €'} year={'2024'} engine={'2 X 320 CV VOLVO'} fuel={'Diesel'} length={'13.2 m'} width={'4 m'} cabins={'2'}/>} />
                </Link>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <Link underline='none'>
                    <MultiActionAreaCard title={'Trawler SASGA MENORQUIN 34 HT'} image={'/images/sasga 34.jpeg'} content={<CustomizedTables price={'391 105 €'} year={'2024'} engine={'2 X 270 CV VOLVO'} fuel={'Diesel'} length={'10 m'} width={'3.8 m'} cabins={'2'}/>} />
                </Link>
            </Grid>
        </Grid>
        <Box className='sh-i-section-two-content'> {/* reuse of CSS */}
            <Button variant="contained" className='section-three-button'>Commandez votre Sasga Menorquin NEUF !</Button> {/* reuse of CSS */}
            <Typography variant="body1"><strong>Your dream
    starts here !</strong></Typography>
            <p></p>
            <Typography>Les <strong>MENORQUIN</strong>'s sont des bateaux à
    semi-déplacement construits par le chantier Sasga Yachts sur l'île de Minorque aux Baléares. Ces bateaux de caractère aux lignes élégantes sont inspirés du lliaut, le bateau de pêche traditionnel de l'île. Ils ont évolué au fil des années pour intégrer les technologies de pointe, notamment le moulage de la coque en résine infusée,
    qui offre une grande solidité structurelle et une bonne stabilité aussi bien en navigation qu'au mouillage. Confort et performance sont également au rendez-vous avec de nouvelles motorisations proposées. </Typography>
            <p></p>
            <Typography>La gamme propose quatre modèles parfaitement adaptés à la navigation en Méditerranée : </Typography>
            <ul>
                <li>34' hard top </li>
                <li>42' hard top ou flybridge</li>
                <li>55' hard top ou flybridge</li>
                <li>68' flybridge</li>
            </ul>
            <Typography>Des bateaux de qualité, construits dans le
    souci du détail.</Typography>
            <p></p>
            <Typography>Le chantier <strong>SASGA Yachts</strong>, c'est une histoire de famille, une philosophie, mais aussi des valeurs... des personnalités
    attachantes, une équipe réactive et professionnelle, des infrastructures impeccables... Visiter le chantier, c'est tomber sous le charme de ces bateaux !</Typography>
        </Box>
    </ThemeProvider>
    </>
  )
}

export default Sasga