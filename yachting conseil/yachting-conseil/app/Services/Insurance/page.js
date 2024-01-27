import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import BackButton from '../../components/BackButton'

function Insurance() {
  return (
    <>
    <Box className="section-two full-height background-ins"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>ASSURANCE BATEAU</Typography> {/* reusing CSS of previous components */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h4"><strong>Assurance Bateau</strong></Typography>
        <p></p>
        <Typography variant="body1">Une fois votre bateau choisi, si vous le souhaitez, nous pouvons demander à plusieurs courtiers d’assurance spécialisés dans le nautisme de vous adresser un <strong>devis d’assurance</strong>, en fonction de la valeur, de l’année, de la motorisation et des équipements de votre bateau. </Typography>
        <p></p>
        <Typography>A vous de choisir la formule qui vous convient. </Typography>
        <p></p>
        <Typography>Nous travaillons depuis plusieurs années avec Generali Favier Casanova et April Marine, professionnels reconnus, pour lesquels nous avons toujours eu de bons retours de nos clients... et en matière d'assurance, comme nous le savons tous, il ne s'agit pas uniquement d'avoir un tarif compétitif, mais aussi et surtout une bonne couverture et un réel service en cas de problème. </Typography>
        <p></p>
    </Box>
  </>
  )
}

export default Insurance