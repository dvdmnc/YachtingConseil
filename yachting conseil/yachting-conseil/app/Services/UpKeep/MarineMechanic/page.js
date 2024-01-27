import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ActiveLastBreadCrumbs from '../../../components/BreadCrumbs'
import BackButton from '../../../components/BackButton'

function MarineMechanic() {
  return (
    <>
    <Box className="section-two full-height background-marmech"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>MECANIQUE MARINE</Typography> {/* reusing CSS of previous components */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h4"><strong>Mécanique Marine</strong></Typography>
        <p></p>
        <Typography variant="body1">Que votre bateau soit motorisé en <strong>essence</strong> ou <strong>diesel</strong>, <strong>in-board</strong> ou <strong>hors-bord</strong>, <strong>in-base</strong> ou <strong>ligne d'arbre</strong>, <strong>IPS</strong> ou saildrive...</Typography>
        <p></p>
        <Typography>Que ce soit pour l'entretien, pour une révision, l'hivernage de votre bateau, ou pour une panne mécanique, voire même une remotorisation...</Typography>
        <p></p>
        <Typography>Nous vous orientons vers des professionnels de la mécanique marine avec lesquels nous travaillons, et qui sont spécialisés dans les marques les plus fiables : Volvo Penta, Yanmar, Man, Caterpillar, Nanni diesel, Iveco, MTU, GM, Cummins, Perkins, Mercruiser, Yamaha, Honda, Suzuki, Evinrude etc. </Typography>
        <p></p>
        <Button variant="contained" className='section-three-button'>Contactez-nous !</Button> {/* reuse of CSS */}
    </Box>
  </>
  )
}

export default MarineMechanic