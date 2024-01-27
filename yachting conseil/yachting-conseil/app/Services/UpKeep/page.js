import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import MultiActionAreaCard from '../../components/Card'
import Link from '@mui/material/Link'


function UpKeep() {
  return (
    <>
    <Box className="sh-i-section-one background-upkeep"> {/* reuse of previous CSS */}
        <Typography variant="h3" className='sh-i-section-one-title'>ENTRETIEN - MAINTENANCE</Typography> {/* reuse of previous CSS */}
    </Box>
    <Box className="sh-i-section-two"> {/* reuse of previous CSS */}
      <ActiveLastBreadCrumbs />
      <Box className="sh-i-section-two-card-container"> {/* reuse of previous CSS */}
        <Link href='/Services/UpKeep/MarineMechanic' underline='none'><MultiActionAreaCard image={'/images/marinemechanic.jpeg'} title={"Mécanique Marine"} /></Link>
        <Link href='/Services/UpKeep/Maintenance' underline='none'><MultiActionAreaCard image={'/images/upkeep-maintenance.jpeg'} title={"ENTRETIEN - MAINTENANCE"} /></Link>
      </Box>
    </Box>
    </>
  )
}

export default UpKeep