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

function MotorBoats() {
  const[boatType, setBoatType] = useState('Type de Bateau...');
  const[price, setPrice] = useState('Prix...')
  const[length, setLength] = useState('Longueur...')
  {/* we pass the setters to each Select elements to retrieve the choices of the user, then if we had a DB we could have looked for matching boats */}
  return (
    <>
    <Box className="sh-i-section-one background-sh-mb"> {/* reusing previous CSS */}
        <Typography variant="h3" className='sh-i-section-one-title'>Bateaux à moteur</Typography>{/* reusing previous CSS */}
        <Box className="sh-i-section-one-search">
          <Typography variant="h5">Rechercher un bateau :</Typography>
          <Box className="sh-i-section-one-select-container"> {/* reusing previous CSS */}
            <Select title={boatType} elements={['Type de Bateau...','Voilier', 'Bateau à moteur']} setter={setBoatType}/>
            <Select title={price} elements={['Prix...','< 50000 €', '50000 € - 80000€','80000 € - 120000 €','120000 € - 200000 €', '> 200000 €']} setter={setPrice}/>
            {/*Search Component */}
            <Select title={length} elements={["Longueur...",'< 10 m', 'Entre 10m et 14m', '< 14m']} setter={setLength}/>
            <Button variant="contained" className="sh-i-section-one-button">
              OK
            </Button>
          </Box>
        </Box>
    </Box>
    <Box className="sh-i-section-two"> {/* reuse of previous CSS */}
      <ActiveLastBreadCrumbs />
      <Grid container spacing={2} sx={{justifyContent:"center"}}>
            <Grid item md={4} sm={6} xs={12}>
              {/* This display can also be achieved by pulling every MotorBoats from a DB as an array, then map through the array */}
                <MultiActionAreaCard title={'Flybridge COUACH 1900 Mediterranean'} image={'/images/couach.jpeg'} content={<CustomizedTables price={'1 390 000 €'} year={'2018'} engine={'2 X	900 CV VOLVO PENTA D13C2-A'} fuel={'Diesel'} length={'19 m'} width={'4.5 m'} cabins={'3'}/>} />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <MultiActionAreaCard title={'Cabin Cruiser PRINCESS V40'} image={'/images/princessv40.jpeg'} content={<CustomizedTables price={'620 000 €'} year={'2020'} engine={'2 X 330 CV VOLVO PENTA D6-330 DP'} fuel={'Diesel'}  length={'11.64 m'} width={'3.73 m'} cabins={'1'}/>} />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <MultiActionAreaCard title={'Cabin Cruiser Sea Water PHANTOM 400'} image={'/images/phantom400.JPEG'} content={<CustomizedTables price={'490 000 €'} year={'2021'} fuel={'Essence'} engine={'2 X 300 CV Mercruiser V8'} length={'12.7 m'} width={'4.2 m'} cabins={'1'} />} />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Link href='/SecondHand/MotorBoats/Cabin-Cruiser-Galeon-445' underline='none'>
                <MultiActionAreaCard title={'Cabin Cruiser GALEON 445'} image={'/images/galeon445.jpeg'} content={<CustomizedTables price={'475 000 €'} year={'2017'} engine={'2 X 435 CV VOLVO PENTA D6 435 IPS 600'} fuel={'Diesel'} length={'13.28 m'} width={'4.18 m'} cabins={'2'}/>} />
              </Link>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default MotorBoats