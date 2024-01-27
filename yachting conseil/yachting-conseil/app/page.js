'use client'

import SwipeableTextMobileStepperCarousel from "./components/Carousel"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';
import Image from 'next/image';
import Link from '@mui/material/Link'
import FolderList from "./components/List"
import LogoPng from "../public/images/logo transparent.png"
import english from "../public/images/england-flag.jpg"
import german from "../public/images/german-flag.jpg"
import italian from "../public/images/italian-flag.jpg"
import spanish from "../public/images/spanish-flag.jpg"
import secondhand from "../public/images/bateau 2.png"
import sasga from "../public/images/bateau.png"
import anchor from "../public/images/encre.png"
import sales from "../public/images/poignées de main.png"
import boatservice from "../public/images/rose des vents.png"
import shipyard from "../public/images/chantier naval.png"
import star from "../public/images/médaille.png"
import web from "../public/images/web.png"
import computer from "../public/images/ordinateur.png"
import thumb from "../public/images/pouce.png"


export default function Home() {
  return (
    <main>
      <SwipeableTextMobileStepperCarousel />
      <Box className="section-one">
        <Typography variant="h3" className="section-one-header">Nos <strong>dernières occasions</strong></Typography>
        <Button variant="contained" className='section-one-button' href='/SecondHand'>Consulter toutes nos annonces</Button>
      </Box>
      <Box className="section-two">
        <Image 
            src={LogoPng}
            alt="Logo Header"
            className="section-two-img"
            />
        <Typography variant="h5" className="section-two-header">Spécialiste bateau neuf et occasion</Typography>
      </Box>
      <Box className="section-three">
          <Box className="left-grid">
              <Typography variant="h5" className="section-three-team-header">Notre <strong>équipe</strong></Typography>
              <FolderList/>
          </Box>
          <Box className="right-grid">
            <Button variant="contained" className='section-three-button' href='/Contact'>Prenez rendez-vous</Button>
            <Box className="flag-box" id="flags">
              <Image src={english} className="english" alt="english-flag"/><Typography className="flag-text">Our experienced team welcomes you in English</Typography>
            </Box>
            <Box className="flag-box">
              <Image src={german} className="german" alt="german-flag"/><Typography className="flag-text"> Unser erfahrenes Team empfängt Sie auf Deutsch</Typography>
            </Box>
            <Box className="flag-box">
              <Image src={spanish} className="spanish" alt="spanish-flag"/><Typography className="flag-text">Nuestro experimentado equipo le da la bienvenida en español</Typography>
            </Box>
            <Box className="flag-box">
              <Image src={italian} className="italian" alt="italian-flag"/><Typography className="flag-text">Il nostro team di esperti vi dà il benvenuto in italian</Typography>
            </Box>
            <ul id="team-member-description">
              <li><strong>Manuel D'ALMEIDA</strong>, gérant et commercial, met à votre disposition son expertise de plus de 35 ans dans le nautisme.</li>
              <li><strong>Isabelle D'ALMEIDA</strong>, assistante de direction trilingue, travaille depuis 20 ans dans le nautisme et vous accueille en Français, Anglais ou Allemand.</li>
              <li><strong>Benoît RAVEL</strong>, associé et commercial, formé par Manuel en 2009, met à votre disposition son expertise acquise au fil des années et sa grande qualité d'écoute.</li>
              <li><strong>Jean-Marie CARIOU</strong> les rejoint en 2024 au poste de commercial et vous accueille en Français, Anglais, Espagnol ou Italien.</li>
            </ul>
            <Typography variant="body1" className="section-three-p"><strong>1. Nous vous assistons</strong> de A à Z pour l’<Link className="link-section-three" underline="none" href='/SecondHand'>achat</Link> de votre futur bateau ou pour la <Link className="link-section-three" underline="none" href="/Sell">vente</Link> de votre bateau actuel, y compris pour les formalités administratives auprès des douanes et des affaires maritimes, le contrôle de l’état hypothécaire du navire, la reprise d'un leasing en cours.</Typography>
            <Typography variant="body1"><strong>2. Nous vous conseillons :</strong> dans notre rubrique "<Link className="link-section-three" underline="none" href='/Services'>Services</Link> " section <Link className="link-section-three" underline="none" href='/Services/Advices'>Conseils</Link> nous abordons les thèmes qui peuvent intéresser tout plaisancier : comment choisir son bateau ? Quels sont les salons nautiques à ne pas manquer ? Quels sont les nouveaux équipements dont on ne peut se passer ? etc...</Typography>
            <Typography variant="body1">Et nous vous informons sur les dernières normes de sécurité dans le nautisme, l’équipement et armement obligatoires, la réglementation en vigueur selon les zones de navigation : hauturier ou côtier, et les différentes catégories de navigation A, B, C ou D.</Typography>
          </Box>
      </Box>
      <Box className="section-four">
        <Box className="section-four-row-one">
          <Box className="section-four-item">
            <Link href='/SecondHand'><Image src={secondhand} className="section-four-image" alt="occasions"/></Link>
            <Typography className="section-four-title">Occasions</Typography>
          </Box>
          <Box className="section-four-item">
            <Link href='/Sasga'><Image src={sasga} className="section-four-image" alt="sasga menorquin"/></Link>
            <Typography className="section-four-title">Sasga Menorquin</Typography>
          </Box>
          <Box className="section-four-item">
            <Link href='/Harbour'><Image src={anchor} className="section-four-image" alt="places de port"/></Link>
            <Typography className="section-four-title">Places de port</Typography>
          </Box>
        </Box>
        <Box className='section-four-row-two'>
          <Box className="section-four-item">
            <Link href='/Sell'><Image src={sales} className="section-four-image" alt="gestion de vente"/></Link>
            <Typography className="section-four-title">Gestion de vente</Typography>
          </Box>
          <Box className="section-four-item">
            <Link href='/Services'><Image src={boatservice} className="section-four-image" alt="services nautiques"/></Link>
            <Typography className="section-four-title">Services nautiques</Typography>
          </Box>
          <Box className="section-four-item">
            <Link href='/Services/ShipYard'><Image src={shipyard} className="section-four-image" alt="chantier naval"/></Link>
            <Typography className="section-four-title">Chantier naval</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="section-five">
        <Typography variant="h3" className="section-five-header">Nos <strong>Services</strong></Typography>
        <Typography variant="body1" className="section-five-text">Afin de vous apporter un service le plus complet possible dans la <Link className="section-five-link" href='/Sell'>mise en vente</Link> de votre bateau ou dans l’<Link className="section-five-link" href='/SecondHand'>achat</Link> d’un nouveau, nous vous mettons en contact avec des professionnels sérieux pour les services suivants : <Link className="section-five-link" href='/Services/UpKeep/MarineMechanic'>mécanique marine</Link>, <Link className="section-five-link" href='/Services/UpKeep/Maintenance'>entretien et maintenance</Link>, <Link className="section-five-link" href='/Harbour'>stationnement</Link> à flots ou à sec, <Link className="section-five-link" href='/Services/ShipYard'>grutage</Link>, <Link className="section-five-link" href='/Services/Expertise'>expertise</Link>, <Link className="section-five-link" href='/Services/Insurance'>assurance</Link>, <Link className="section-five-link" href='/Services/Funding'>financement</Link>, <Link className="section-five-link" href='/Services/Transportation'>transport</Link> terre ou mer.</Typography>
        <Typography variant="body1" className="section-five-text">Nous vous proposons également un service de <Link className="section-five-link" href='/Services/Ashes'><strong>dispersion de cendres en mer</strong></Link>... pour des raisons plus philosophiques que financières !</Typography>
        <Typography variant="body1" className="section-five-text">Nous avons également acquis une bonne expertise du <strong>refit d'unités Apreamare</strong> et tous types de Gozzo.</Typography>
        <Typography variant="body1" className="section-five-text"><strong>Nos atouts</strong> :</Typography>
        <ul className="section-five-li">
          <li>plus de 35 années d’expérience, savoir-faire et compétence, notamment en mécanique et électronique</li>
          <li>une équipe multilingue : Français - Anglais - Italien - Espagnol - Allemand </li>
          <li>une entreprise au format quasi-familial avec une petite équipe unie qui partage la même passion pour la Mer, mais aussi une éthique et des valeurs communes, humaines, respect de l'environnement...</li>
          <li>des annonces web sur les meilleurs sites du nautisme</li>
          <li>un fil d'actualité sur les réseaux sociaux</li>
          <li>notre participation à des <Link className="section-five-link">salons nautiques</Link> : Cannes, Düsseldorf, Gênes, Barcelone, Mandelieu, La Ciotat ...</li>
          <li>des publicités et <Link className="section-five-link">articles de presse</Link> dans les magazines spécialisés</li>
        </ul>
        <Box className="section-five-final">
          <Box className="section-five-final-item">
           <Image src={star} className="section-five-final-item-image" alt="expérience"/>
           <Typography variant="h5" className="section-five-final-item-text">35 années d'expérience</Typography>
          </Box>
          <Box className="section-five-final-item">
           <Image src={web} className="section-five-final-item-image" alt="secretariat multilangues"/>
           <Typography variant="h5" className="section-five-final-item-text">Secrétariat 3 langues</Typography>
          </Box>
          <Box className="section-five-final-item">
           <Image src={computer} className="section-five-final-item-image" alt="multi-plateformes"/>
           <Typography variant="h5" className="section-five-final-item-text">20 sites d'annonces</Typography>
          </Box>
          <Box className="section-five-final-item">
           <Image src={thumb} className="section-five-final-item-image" alt="clients satisfaits"/>
           <Typography variant="h5" className="section-five-final-item-text">99% de clients satisfaits</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="section-six">
        <Typography variant="h3" className="section-five-header">Nos <strong>Actualités</strong></Typography>
        <Box className="section-six-content-container">
          <iframe className="section-six-video" src="https://www.youtube.com/embed/DcDgaWV8ddg?enablejsapi=1"></iframe>
          <Box className="section-six-news">
              {/*TODO*/}
          </Box>
        </Box>
      </Box>
    </main>
  )
}
