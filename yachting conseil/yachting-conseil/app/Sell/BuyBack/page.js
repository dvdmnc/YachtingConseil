import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import BackButton from '../../components/BackButton'

function Estimate() {
  return (
    <>
    <Box className="sh-i-section-one background-buyb"> {/* reuse of previous CSS */}
        <Typography variant="h3" className='sh-i-section-one-title'>RACHAT BATEAU</Typography> {/* reuse of previous CSS */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reuse of previous CSS */}
        <Typography variant='h5'><strong>Rachat Bateau</strong></Typography>
        <ul>
            <li>Vous avez un projet qui nécessite de la trésorerie rapidement</li>
            <li>Vous n'avez plus les mêmes motivations ou capacités d'utilisation de votre bateau dans de bonnes conditions</li>
            <li>Vous avez acquis un bateau en succession et ne souhaitez pas le conserver</li>
            <li>Votre bateau nécessite des frais importants de remise en état que vous ne souhaitez pas assumer</li>
            <li>Vous avez un changement de vie professionnelle (mutation) ou familiale (arrivée d'un bébé) </li>
            <li>Vous n'avez plus de place de port </li>
        </ul>
        <Typography>et par conséquent, vous souhaitez vendre votre bateau rapidement ? Nous pouvons vous proposer une solution.</Typography>
        <Typography>N'hésitez pas à nous contacter pour en discuter</Typography>
        <p></p>
        <Button variant="contained" className='section-three-button'>Demande info rachat bateau</Button> {/* reuse of CSS */}
    </Box>
    </>
  )
}

export default Estimate