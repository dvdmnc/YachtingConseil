import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import BackButton from '../../components/BackButton'

function Funding() {
  return (
    <>
    <Box className="section-two full-height background-fun"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>FINANCEMENT BATEAU</Typography> {/* reusing CSS of previous components */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h4"><strong>Financement Bateau</strong></Typography>
        <p></p>
        <Typography variant="body1">Si vous souhaitez mettre en place un financement pour l'acquisition de votre bateau, nous pouvons faire établir très rapidement une simulation de financement.</Typography>
        <p></p>
        <Typography>Il existe différentes formules, en <strong>Crédit classique</strong> ou en <strong>Leasing/LOA</strong> (Location avec Option d'Achat), pour un bateau sur lequel la TVA n’a pas été acquittée. Dans le cadre d'un leasing, vous bénéficiez d'une TVA à 10%.  </Typography>
        <p></p>
        <Typography>Nous travaillons avec un courtier qui met en concurrence plusieurs organismes de <strong>crédit et/ou leasing spécialisés dans le nautisme</strong>, tels que : SGB Finance, CGI, Capitole Finance (Ecureuil Lease), April Marine, Generali, CMCIC Bail, Lease BPCE etc...</Typography>
        <p></p>
        <Typography>Notre courtier gère le montage du dossier en collaboration avec nous.</Typography>
    </Box>
  </>
  )
}

export default Funding