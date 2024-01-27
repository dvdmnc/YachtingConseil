import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import BackButton from '../../components/BackButton'

function Ashes() {
  return (
    <>
    <Box className="section-two full-height background-ash"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>DISPERSION DE CENDRES EN MER</Typography> {/* reusing CSS of previous components */}
    </Box>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h4"><strong>Dispersion de cendres en mer</strong></Typography>
        <p></p>
        <Typography variant="body1">Pour le dernier voyage d'un proche défunt, nous vous proposons un service de <strong>dispersion de cendres funéraires en mer</strong>.</Typography>
        <p></p>
        <Typography> La dispersion est autorisée en France, tant qu'elle respecte la règlementation maritime et à condition que la dispersion soit effectuée à plus de 300 m d'une côte. Par contre, cet acte est interdit dans une rivière, un fleuve ou un cours d’eau.</Typography>
        <p></p>
        <Typography><strong>Dispersion de cendres ou immersion d'une urne biodégradable ?</strong></Typography>
        <p></p>
        <Typography>Vous avez deux possibilités : </Typography>
        <p></p>
        <Typography>*la dispersion des cendres à la surface de l'eau (prévoir une urne non scellée) : l’urne est ouverte et les cendres sont dispersées au gré du vent.</Typography>
        <p></p>
        <Typography>ou</Typography>
        <p></p>
        <Typography>*l'immersion de l'urne funéraire (à 3 milles nautiques minimum, soit 6 km) : l'urne - qui doit impérativement être biodégradable - est déposée à la surface de la mer et s’immerge doucement dans les fonds marins.</Typography>
        <p></p>
        <Typography><strong>2 lieux de dispersion vous sont proposés</strong></Typography>
        <p></p>
        <Typography><strong>*</strong> dans la rade de <strong>Hyères</strong>, face aux îles d'Or. Contactez-nous au 04 94 66 49 56 ou par mail : contact@yachting-conseil.ocm</Typography>
        <p></p>
        <Typography><strong>*</strong> près de <strong>Cannes</strong>, par l'intermédiaire de notre confrère Yacht Consultant. Contacter Mr Emmanuel Skaf au 06 14 55 35 35 ou par mail : e.skaf@yacht-consultant.eu</Typography>
        <p></p>
        <Typography>Vous pourrez en toute paix et sérénité vous recueillir et procéder à cet ultime au revoir.</Typography>
        <p></p>
        <Typography>A l'issue de la dispersion, si vous le souhaitez, nous vous remettrons un point GPS écrit avec les coordonnées précises du lieu de dispersion.</Typography>
        <p></p>
        <Typography>Nous vous proposons plusieurs formules selon le nombre de personnes à accueillir à bord. <Link href='/Contact'>Contactez-nous pour les détails et tarifs</Link></Typography>
    </Box>
  </>
  )
}

export default Ashes