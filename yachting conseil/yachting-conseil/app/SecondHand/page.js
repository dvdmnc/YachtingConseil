'use client'
import {React, useState} from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ActiveLastBreadCrumbs from '../components/BreadCrumbs'
import MultiActionAreaCard from '../components/Card'
import Link from '@mui/material/Link'
import Select from '../components/Select';


function SecondHand() {
  const[boatType, setBoatType] = useState('Type de bateau...');  
  const[price, setPrice] = useState('Prix...')
  const[length, setLength] = useState('Longueur...')
  {/* we pass the setters to each Select elements to retrieve the choices of the user, then if we had a DB we could have looked for matching boats */}
  return (
    <>
    <Box className="sh-i-section-one background-sh">
        <Typography variant="h3" className='sh-i-section-one-title'>Occasions</Typography>
        <Box className="sh-i-section-one-search">
          <Typography variant="h5">Rechercher un bateau:</Typography>
          <Box className="sh-i-section-one-select-container">
            <Select title={boatType} elements={['Type de bateau...','Voilier', 'Bateau à moteur']} setter={setBoatType}/>
            <Select title={price} elements={['Prix...','< 50000 €', '50000 € - 80000€','80000 € - 120000 €','120000 € - 200000 €', '> 200000 €']} setter={setPrice}/>
            {/*Search Component */}
            <Select title={length} elements={['Longueur...','< 10 m', 'Entre 10m et 14m', '< 14m']} setter={setLength}/>
            <Button variant="contained" className="sh-i-section-one-button">
              OK
            </Button>
          </Box>
        </Box>
    </Box>
    <Box className="sh-i-section-two">
      <ActiveLastBreadCrumbs />
      <Box className="sh-i-section-two-card-container">
        <Link href='/SecondHand/MotorBoats' underline='none'><MultiActionAreaCard image={'/images/bateauMoteur.jpeg'} title={"Bateaux à moteur"} /></Link>
        <Link href='/SecondHand/SailingBoats' underline='none'><MultiActionAreaCard image={'/images/voilier.jpeg'} title={"Voiliers"} /></Link>
      </Box>
      <Box className='sh-i-section-two-content'>
        <Button variant="contained" className='section-three-button'>Contactez-nous</Button> {/* reuse of CSS */}
        <Typography variant="body1">Nous vous
  proposons une large sélection de bateaux récents, sous mandat, dont nous avons l'historique et qui ont fait l'objet d'une expertise </Typography>
        <p></p>
        <Typography>Nous avons LE
  BATEAU de VOS REVES, parmi des marques réputées : Airon, Amer, <Link href='#'>Apreamare</Link>, <Link href='#'>Astondoa</Link>, Azimut, Bavaria, <Link href='#'>Boston Whaler</Link>, Bertram, <Link href='#'>Beneteau</Link>, Canados, <Link href='#'>Couach</Link>, Cranchi, Chris Craft, <Link href='#'>Fairline</Link>, Ferretti, Fiart, Fountaine Pajot, Four Winns, Grand Banks, Guy Couach, <Link href='#'>Ilver</Link>, Itama, Jeanneau, Leonard, Maiora, Mano Marine, <Link href='#'>Menorquin</Link>, Nova Marine, Pershing, <Link href='#'>Princess</Link>, Riva, Rio, Riviera, Rodman, <Link href='#'>Sasga</Link>, San Lorenzo, Sunseeker, <Link href='#'>Sessa Marine</Link>, Sea Ray, <Link href='#'>Sealine</Link>, Tiara, Uniesse, Van Dutch, Wally, Windy, White Shark, et pour les voiliers Amel, Alubat, Bavaria, Dehler, Dufour, Etap, Gib Sea, Grand Soleil, Hallberg Rassy, Hunter, Lagoon, Pogo, Poncin, X-Yachts, Wauquiez... pour n'en citer que quelques unes !</Typography>
      </Box>
    </Box>
    </>
  )
}

export default SecondHand