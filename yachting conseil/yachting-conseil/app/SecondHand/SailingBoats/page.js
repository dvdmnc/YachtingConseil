'use client'
import {React, useState} from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Select from '../../components/Select'
import Button from '@mui/material/Button';
import ActiveLastBreadCrumbs from '../../components/BreadCrumbs'
import MultiActionAreaCard from '../../components/CardDetailed'
import CustomizedTables from '../../components/Table'
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link'

function  SailingBoats() {
  const[boatType, setBoatType] = useState('Type de Bateau...');
  const[price, setPrice] = useState('Prix...')
  const[length, setLength] = useState('Longueur...')
  {/* we pass the setters to each Select elements to retrieve the choices of the user, then if we had a DB we could have looked for matching boats . */}
  return (
    <>
    <Box className="sh-i-section-one background-sh-v"> {/* reusing previous CSS */}
        <Typography variant="h3" className='sh-i-section-one-title'>Voiliers</Typography>{/* reusing previous CSS */}
        <Box className="sh-i-section-one-search">
          <Typography variant="h5">Rechercher un bateau :</Typography>
          <Box className="sh-i-section-one-select-container"> {/* reusing previous CSS */}
            <Select title={boatType} elements={['Type de Bateau...','Voilier', 'Bateau à moteur']} setter={setBoatType}/>
            <Select title={price} elements={['Prix...','< 50000 €', '50000 € - 80000€','80000 € - 120000 €','120000 € - 200000 €', '> 200000 €']} setter={setPrice}/>
            {/*Search Component */}
            <Select title={length} elements={['Longueur...','< 10 m', 'Entre 10m et 14m', '< 14m']} setter={setLength}/>
            <Button variant="contained" className="sh-i-section-one-button">
              OK
            </Button>
          </Box>
        </Box>
    </Box>
    <Box className="sh-i-section-two"> {/* reuse of previous CSS */}
      <ActiveLastBreadCrumbs />
      <Grid container spacing={2} sx={{justifyContent:"center"}}>
        {/* This display can also be achieved by pulling every SailingBoats from a DB as an array, then map through the array */}
            <Grid item md={4} sm={6} xs={12}>
              <Link href='/SecondHand/SailingBoats/Voilier-CNB-bordeaux-60' underline='none'>
                <MultiActionAreaCard title={'Voilier CNB BORDEAUX 60'} image={'/images/voiliercnb60.jpeg'} content={<CustomizedTables price={'790 000 €'} year={'2016'} engine={'1 X 180 CV VOLVO D4 180'} fuel={'Diesel'} length={'18.38 m'} width={'5.18 m'} cabins={'3'}/>} />
              </Link>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <MultiActionAreaCard title={'Cabin Cruiser NAUTITECH 40 OPEN'} image={'/images/nautitech40.jpeg'} content={<CustomizedTables price={'490 000 €'} year={'2019'} engine={'2 X 40 CV VOLVO D2'} fuel={'Diesel'}  length={'11.98 m'} width={'6.91 m'} cabins={'3'}/>} />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <MultiActionAreaCard title={'Voilier rapide PLAN DAVID REARD JMP 39'} image={'/images/voilierdavid.jpeg'} content={<CustomizedTables price={'279 000 €'} year={'2022'} fuel={'Essence'} engine={'1 X 55 CV Yanmar 4JH-ACE'} length={'11.85 m'} width={'3.85 m'} cabins={'3'} />} />
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default SailingBoats