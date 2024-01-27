import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import BackButton from '../../components/BackButton'

function Expertise() {
  return (
    <>
    <Box className="section-two full-height background-exp"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>EXPERTISE BATEAU</Typography> {/* reusing CSS of previous components */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h4"><strong>Expertise Bateau</strong></Typography>
        <p></p>
        <Typography variant="body1">Lors de l'achat de votre bateau, en qualité de professionnels, nous vous conseillons une expertise. Néanmoins, celle-ci n'est pas obligatoire. Le choix vous appartient.</Typography>
        <p></p>
        <Typography>Quoi qu'il en soit, nous pouvons vous communiquer les coordonnées de plusieurs experts maritimes ayant l’agrément SESAM, parmi lesquels vous choisissez celui qui vous convient. </Typography>
        <p></p>
        <Typography>Puis nous planifions l’expertise, nous prenons rendez-vous avec le chantier et nous sommes présents pour le <strong>tenu/suspendu</strong>, le contrôle des hélices et de la coque, et l'<strong>essai en mer</strong></Typography>
        <p></p>
        <Typography>Dans les 15 jours qui suivent, l'expert vous transmet son rapport d'expertise et ses conclusions écrites.</Typography>
    </Box>
  </>
  )
}

export default Expertise