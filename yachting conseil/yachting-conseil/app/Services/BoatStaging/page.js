import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Button from '@mui/material/Button';
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import BackButton from '../../components/BackButton'
import BSContentImg from '../../../public/images/boatstaging-img.jpg'

function BoatStaging() {
  return (
    <>
    <Box className="section-two full-height background-BS"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>BOAT STAGING</Typography> {/* reusing CSS of previous components */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h5"><strong>Boat Staging</strong></Typography>
        <p></p>
        <Typography>Un bien <strong>mis en valeur</strong> est un bien qui <strong>se vend plus vite</strong>... Sur le même principe que le Home Staging, nous mettons à votre disposition notre expertise et nous vous donnons quelques astuces et conseils pour <strong>présenter votre bateau sous son meilleur jour</strong>... afin qu'il se démarque et sorte du lot, parmi les multiples unités proposées sur le marché et qui ont des caractéristiques similaires.</Typography>
        <p></p>
        <Typography>Outre les règles de base : </Typography>
        <ul>
            <li>un bon nettoyage intérieur et extérieur </li>
            <li>du rangement pour épurer la décoration</li>
            <li>le retrait des effets trop personnels qui empêchent l'acheteur potentiel de se projeter</li>
            <li>le retrait des éléments qui surchargent la décoration </li>
        </ul>
        <Typography>Nous pouvons envisager ensemble :</Typography>
        <ul>
            <li>une "mise en vitrine" : c'est-à-dire une décoration épurée et attractive </li>
            <li>un éventuel refit / remise en état : des retouches de peintures ou de vernis, un coup de polish, la réparation des vaigrages qui le nécessitent, d'une cloison, d'un équipement etc... bref des interventions peu coûteuses, mais qui vont <strong>valoriser</strong> votre bateau en vue de sa présentation.</li>
        </ul>
        <p></p>
        <Image src={BSContentImg} className='BS-content-img'/>
        <p></p>
        <Button variant="contained" className='section-three-button'><strong>Demandez-nous un devis</strong></Button> {/* reuse of CSS */}
    </Box>
  </>
  )
}

export default BoatStaging