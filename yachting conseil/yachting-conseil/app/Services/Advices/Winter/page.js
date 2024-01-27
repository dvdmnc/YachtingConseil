import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import ActiveLastBreadCrumbs from '../../../components/BreadCrumbs'
import BackButton from '../../../components/BackButton'
import Link from '@mui/material/Link'

function Winter() {
  return (
    <>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h4"><strong>Hivernage : 7 idées reçues qui ont la vie dure !</strong></Typography>
        <p></p>
        <Typography variant="body1">Un article paru dans Voile et Moteur liste au nombre de 7 les idées reçues concernant l'hivernage.</Typography>
        <p></p>
        <Typography>Découvrez cet article en cliquant sur le lien ci-dessous</Typography>
        <p></p>
        <Link href="https://www.voileetmoteur.com/bateaux-a-moteur/pratique-univers_moteur/entretien/stop-aux-idees-recues-sur-lhivernage-des-bateaux/85952">Lien</Link>
    </Box>
  </>
  )
}

export default Winter