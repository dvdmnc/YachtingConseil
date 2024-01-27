import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import BackButton from '../../components/BackButton'

function Transportation() {
  return (
    <>
    <Box className="section-two full-height background-tra"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>TRANSPORT BATEAU</Typography> {/* reusing CSS of previous components */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h4"><strong>Transport Bateau</strong></Typography>
        <p></p>
        <Typography variant="body1">Si votre bateau acheté sur la Côte d'Azur doit être rapatrié sur une autre région ou un autre pays, nous pouvons vous faire adresser un ou plusieurs devis de <strong>transport par la terre ou la mer.</strong></Typography>
        <p></p>
        <Typography>Les sociétés de transport avec lesquelles nous travaillons ont une excellente réputation, des tarifs compétitifs, des rotations fréquentes. </Typography>
        <p></p>
        <Typography>Nous pouvons également, selon nos disponibilités, effectuer nous-même le rapatriement/skippage de votre nouveau navire, s'il vous l'avez acheté par notre intermédiaire à un vendeur du pourtour Méditerranéen. </Typography>
        <p></p>
        <Typography>Nous avons déjà effectué plusieurs rapatriements d'unités provenant d'Italie, Espagne et Baléares, Corse etc... </Typography>
        <p></p>
        <Typography>Et bien entendu pour toute unité SASGA neuve que nous vendons, au départ de Minorque, nous faisons le skippage avec vous ou si nous ne sommes pas disponibles, avec un skipper professionnel.</Typography>
        <p></p>
    </Box>
  </>
  )
}

export default Transportation