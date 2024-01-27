import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Button from '@mui/material/Button';
import ActiveLastBreadCrumbs from '../components/BreadCrumbs'

function Harbour() {
  return (
    <>
    <Box className="section-two full-height background-har"> {/* reusing CSS of previous components */}
        <Typography variant="h3" className='sh-i-section-one-title'>PLACES DE PORT</Typography> {/* reusing CSS of previous components */}
    </Box>
    <ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="body1">Pour les unités que nous <Link href='#'>vendons</Link>, nous pouvons vous proposer des solutions de place de port, que ce soit à flots ou à terre, à l'achat ou à la location. </Typography>
        <p></p>
        <Typography>Dans plusieurs ports situés entre Toulon et Cavalaire : Saint Mandrier, Porquerolles, Port Saint-Pierre à Hyères, la SNC Port du Gapeau, port Miramar à La Londe les Maures, port YCIBM de Bormes les Mimosas, port du Lavandou... les solutions sont multiples.</Typography>
        <p></p>
        <Typography>Nous avons également des possibilités de places de port dans les Alpes Maritimes et en Italie, par l'intermédiaire de notre regroupement BeinYachts</Typography>
        <p></p>
        <Button variant="contained" className='section-three-button'>Contactez-nous</Button> {/* reuse of CSS */}
    </Box>
  </>
  )
}

export default Harbour