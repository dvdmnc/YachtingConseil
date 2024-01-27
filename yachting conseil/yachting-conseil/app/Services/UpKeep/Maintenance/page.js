import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ActiveLastBreadCrumbs from '../../../components/BreadCrumbs'
import BackButton from '../../../components/BackButton'
import Link from '@mui/material/Link'

function Maintenance() {
  return (
    <>
    <Box className="section-two full-height background-marmech"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>ENTRETIEN ET MAINTENANCE</Typography> {/* reusing CSS of previous components */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h4"><strong>Entretien et Maintenance</strong></Typography>
        <p></p>
        <Typography variant="body1">Nous vous communiquons les coordonnées de professionnels avec lesquels nous travaillons en toute confiance depuis des années, que ce soit pour l’entretien, la maintenance ou le refit de votre <Link>bateau à moteur</Link> ou <Link>voilier d'occasion</Link> tout comme le ferait un <strong>chantier naval</strong></Typography>
        <p></p>
        <Typography>Aussi bien pour de petites réparations que pour des travaux plus importants, concernant : <strong>la sellerie, les tauds, la peinture de coque et/ou de pont, l'antifouling, le carénage, les voiles, le gréement, l'électricité, l'électronique,</strong> les boiseries, coffres et cloisons, <strong>le teck</strong>, <strong>la plomberie</strong>, l'installation d'un<strong>propulseur d’étrave ou de poupe</strong>, d’une climatisation réversible, d’un <strong>dessalinisateur</strong>, d'un <strong>groupe électrogène</strong>, d'une <strong>passerelle hydrolique</strong>, d'une<strong> plage de bain</strong> en teck etc...</Typography>
        <p></p>
        <Button variant="contained" className='section-three-button'>Contactez-nous !</Button> {/* reuse of CSS */}
    </Box>
  </>
  )
}

export default Maintenance