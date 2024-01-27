import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import BackButton from '../../components/BackButton'

function Estimate() {
  return (
    <>
    <Box className="sh-i-section-one background-est"> {/* reuse of previous CSS */}
        <Typography variant="h3" className='sh-i-section-one-title'>ESTIMATION</Typography> {/* reuse of previous CSS */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reuse of previous CSS */}
        <Typography variant='h5'><strong>Estimation</strong></Typography>
        <Typography variant="body1">  Vous souhaitez faire estimer votre bateau par un professionnel  qui a une véritable connaissance du marché, car :</Typography>
        <ul>
            <li>vous envisagez de le vendre</li>
            <li>vous envisagez de le faire reprendre pour l'acquisition d'un nouveau bateau</li>
            <li>vous souhaitez simplement connaître sa valeur actuelle</li>
            <li>vous avez un nouveau projet qui nécessite de la trésorerie et vous voulez vendre votre bateau rapidement. </li>
        </ul>
        <Typography>N'hésitez pas à nous contacter.</Typography>
        <p></p>
        <Button variant="contained" className='section-three-button'><strong>Je souhaite une estimation</strong></Button> {/* reuse of CSS */}
    </Box>
    </>
  )
}

export default Estimate