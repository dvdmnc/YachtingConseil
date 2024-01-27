'use client'

import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ActiveLastBreadCrumbs from '../components/BreadCrumbs'
import MultiActionAreaCard from '../components/Card'
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

function Services() {
  return (
    <>
    <ThemeProvider theme={theme} >
        <Box className="section-two full-height background-con">
            <Typography variant="h3" className='sh-i-section-one-title'>SERVICES</Typography> {/* reuse of previous CSS */}
        </Box>
        <Box className="sh-i-section-two"> {/* reuse of previous CSS */}
            <ActiveLastBreadCrumbs />
            <Grid container spacing={2} sx={{justifyContent:"center"}}>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='/Services/UpKeep' underline='none'><MultiActionAreaCard image={'/images/maintenance-bg.jpeg'} title={"Entretien - Maintenance"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='/Services/Advices' underline='none'><MultiActionAreaCard image={'/images/bateaufond.jpeg'} title={"Conseils"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='/Services/BoatStaging' underline='none'><MultiActionAreaCard image={'/images/boatstaging.jpeg'} title={"Boat Staging"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='/Services/Ashes' underline='none'><MultiActionAreaCard image={'/images/ashes.jpeg'} title={"Dispersions de cendres en mer"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='/Services/Expertise' underline='none'><MultiActionAreaCard image={'/images/expertise.jpeg'} title={"Expertise"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='/Services/Insurance' underline='none'><MultiActionAreaCard image={'/images/insurance.jpeg'} title={"Assurance"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='/Services/Funding' underline='none'><MultiActionAreaCard image={'/images/funding.jpeg'} title={"Financement"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='/Services/Transportation' underline='none'><MultiActionAreaCard image={'/images/transportation.jpeg'} title={"Transport"} /></Link>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Link href='/Services/ShipYard' underline='none'><MultiActionAreaCard image={'/images/shipyard.jpeg'} title={"Chantier Naval"} /></Link>
                </Grid>
            </Grid>
            <Box className='sh-i-section-two-content'> {/* reuse of previous CSS */}
                <Typography variant="body1">Pour vous apporter un service complet dans la <Link>mise en vente</Link> de votre bateau ou dans l’<Link>achat</Link> d’une nouvelle unité, nous vous mettons en contact avec des professionnels sérieux pour les services suivants : <Link>mécanique marine</Link>, <Link>entretien et maintenance</Link>, <Link>stationnement</Link> à flots ou à sec, grutage, <Link>expertise</Link>, <Link>assurance</Link>, <Link>financement</Link> : crédit ou leasing, <Link>transport</Link> terre ou mer.</Typography>
                <p></p>
                <Typography>Nous vous proposons également un  service de <Link><strong>dispersion de cendres en mer</strong></Link>... pour des raisons philosophiques plus que financières ! En effet, notre tarif reste le même et n'a pas augmenté depuis des années.</Typography>
                <p></p>
                <Typography>Nous avons également acquis une bonne expertise du <strong>refit d'unités Apreamare</strong> et tous types de Gozzo.</Typography>
                <p></p>
                <Typography><strong>Nos atouts :</strong></Typography>
                <ul>
                    <li><strong>plus de 35 années d’expérience, savoir-faire et compétence</strong>, notamment en mécanique et électronique</li>
                    <li>un secrétariat trilingue Français - Anglais - Allemand </li>
                    <li>une entreprise familiale avec une éthique, des valeurs humaines et le respect de l'environnement</li>
                    <li>notre regroupement <Link>BeinYachts</Link> et un réseau européen de professionnels</li>
                    <li>des annonces web sur les meilleurs sites du nautisme, mises à jour en moins de 24h</li>
                    <li>notre participation à des <Link>salons nautiques</Link> : Cannes, Düsseldorf, Barcelone, Mandelieu la Napoule, La Ciotat...</li>
                    <li>des publicités et <Link>articles de presse</Link> dans les magazines spécialisés</li>
                </ul>
                <p></p>
            </Box>
        </Box>
    </ThemeProvider>
    </>
  )
}

export default Services