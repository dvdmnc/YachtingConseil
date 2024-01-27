import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import BackButton from '../../components/BackButton'
import SYContentImg from '../../../public/images/shipyard-content.jpg'

function ShipYard() {
  return (
    <>
    <Box className="section-two full-height background-SY"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>CHANTIER NAVAL</Typography> {/* reusing CSS of previous components */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h5"><strong>Chantier Naval</strong></Typography>
        <p></p>
        <Typography>Pour les bateaux que nous vendons, nous assurons un service complet sur le chantier « <Link>Port Gapeau</Link> » situé à côté de notre bureau.</Typography>
        <p></p>
        <Typography>Une situation idéale, au bord de la rivière Le Gapeau, juste avant son embouchure sur la mer, à côté de la célèbre résidence Simone Berriau, aux salins d'Hyères, et face aux îles d'Or : Port-Cros, Porquerolles et Le Levant.</Typography>
        <p></p>
        <Image src={SYContentImg} className='SY-content-img'/>
        <p></p>
        <Typography> Services proposés par Port Gapeau :</Typography>
        <ul>
            <li>stationnement à flots, plus de 60 places</li>
            <li>stationnement au sec, 340 places.</li>
            <li>entretien de la coque, carénage, nettoyage, traitement préventif et curatif osmose</li>
            <li>manutentions jusqu'à 16 tonnes : mise à l'eau, mise à terre, démâtage, chargement ou déchargement sur camion</li>
            <li>refit pour faire rajeunir votre bateau : peinture de coque, vernis, shampoing moquettes</li>
        </ul>
        <Button variant="contained" className='section-three-button'><strong>Contactez-nous pour étudier ensemble vos besoins</strong></Button> {/* reuse of CSS */}
    </Box>
  </>
  )
}

export default ShipYard