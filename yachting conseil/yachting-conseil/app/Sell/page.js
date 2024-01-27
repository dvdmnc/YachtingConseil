import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ActiveLastBreadCrumbs from '../components/BreadCrumbs'
import MultiActionAreaCard from '../components/Card'
import Link from '@mui/material/Link'


function Sell() {
  return (
    <>
    <Box className="sh-i-section-one background-sell"> {/* reuse of previous CSS */}
        <Typography variant="h3" className='sh-i-section-one-title'>VENDRE VOTRE BATEAU</Typography> {/* reuse of previous CSS */}
    </Box>
    <Box className="sh-i-section-two"> {/* reuse of previous CSS */}
      <ActiveLastBreadCrumbs />
      <Box className="sh-i-section-two-card-container"> {/* reuse of previous CSS */}
        <Link href='/Sell/Estimate' underline='none'><MultiActionAreaCard image={'/images/estimate-bg.jpeg'} title={"Estimation"} /></Link>
        <Link href='/Sell/BuyBack' underline='none'><MultiActionAreaCard image={'/images/buyback-bg.jpeg'} title={"Rachat Bateau"} /></Link>
      </Box>
      <Box className='sh-i-section-two-content'> {/* reuse of previous CSS */}
        <Typography variant="body1">Vous souhaitez vendre votre bateau dans <strong>les meilleures conditions possibles</strong> et <strong>en toute sérénité</strong> ? N'hésitez pas à nous le confier à la vente. </Typography>
        <p></p>
        <Typography>Notre procédure de travail est simple et rodée : </Typography>
        <ul>
            <li>Après recherches sur internet d'unités similaires proposées à la vente, après avoir vu votre bateau et en fonction de ses équipements, son âge, son état, sa motorisation et son historique, nous évaluons son juste prix. Si ce prix vous convient, nous constituons un dossier complet, avec factures d'entretien, immatriculation du bateau etc... et nous faisons un reportage photos avec appareil grand angle et éventuellement un drone.</li>
            <li> Nous signons ensemble un mandat de vente et mettons votre bateau en ligne sur les sites les plus réputés et reconnus du nautisme à l'échelle internationale. </li>
            <li>Nous communiquons ensuite sur votre bateau, par des newsletters régulières et des e-mailings selon un plan marketing qui inclut des diffusions sur les réseaux sociaux.</li>
            <li> Nous gérons ensuite toutes les demandes d'information, effectuons les visites, assurons la négociation à toutes les étapes successives de la vente, du compromis jusqu'à l'acte de vente final, en passant par une expertise et un essai en mer. </li>
            <li>Nous effectuons la mise en mains avec le nouveau propriétaire et effectuons les formalités administratives de changement de propriétaire.</li>
        </ul>
        <Button variant="contained" className='section-three-button'>Contactez-nous</Button> {/* reuse of CSS */}
      </Box>
    </Box>
    </>
  )
}

export default Sell