'use client'

import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import MultiActionAreaCard from '../../components/Card'
import Link from '@mui/material/Link'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 1024,
      },
    },
  });

function Advices() {
  return (
    <>
    <ThemeProvider theme={theme} >
        <Box className="section-two full-height background-con"> {/* reuse of previous CSS */}
            <Typography variant="h3" className='sh-i-section-one-title'>CONSEILS</Typography> {/* reuse of previous CSS */}
        </Box>
        <Box className="sh-i-section-two"> {/* reuse of previous CSS */}
            <ActiveLastBreadCrumbs />
            <Grid container spacing={2} sx={{justifyContent:"center"}}>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='Advices/Advice' underline='none'><MultiActionAreaCard image={'/images/handshake.jpeg'} title={"6 Conseils pour une vente sereine"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='Advices/Choice' underline='none'><MultiActionAreaCard image={'/images/choice.jpeg'} title={"Comment bien choisir son bateau ?"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='Advices/HullTypes' underline='none'><MultiActionAreaCard image={'/images/hulltypes.jpeg'} title={"Les différent types de carêne"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='Advices/Winter' underline='none'><MultiActionAreaCard image={'/images/winter.png'} title={"Hivernage - 7 idées reçues qui ont la vie dure !"} /></Link>
                </Grid>
            </Grid>
            <Box className='sh-i-section-two-content'> {/* reuse of previous CSS */}
                <Typography variant="body1">Comme tout plaisancier, vous vous posez des questions importantes. Par exemple :</Typography>
                <ul>
                    <li>Pour bien choisir mon bateau, quels sont les critères dont je dois tenir compte ?</li>
                    <li>Quelles sont les clés d'une vente sereine ?</li>
                    <li>Quels sont les salons nautiques à ne pas manquer ?</li>
                    <li>Comment puis-je entretenir mon bateau à distance ?</li>
                    <li>dQuels sont les différents types de carène existants ? Lequel dois-je choisir en fonction de mon programme de navigation ?</li>
                </ul>
                <Typography>pour n'en citer que quelques unes.</Typography>
                <p></p>
                <Typography>Dans cette rubrique, nous tentons d'y répondre. N'hésitez pas à nous faire part des questions qui vous intéressent et sur lesquelles vous aimeriez avoir des réponses.</Typography>
            </Box>
        </Box>
    </ThemeProvider>
    </>
  )
}

export default Advices