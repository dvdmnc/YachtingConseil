'use client'
import {React, useState, useEffect} from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import ActiveLastBreadCrumbs from '../../../components/BreadCrumbs'
import BackButton from '../../../components/BackButton'
import ImageList from '../../../components/ImageList'
import Link from '@mui/material/Link'

const itemData = [
    {
      img: '/images/choice-boat6.jpg',
      title: 'Coque planante Princess V45',
    },
    {
      img: '/images/hull-boat2.jpg',
      title: 'Coque à déplacement grandBanks 46 Classic',
    },
    {
      img: '/images/hull-boat3.jpg',
      title: 'Coque semi planante Menorquin 42',
    },
    {
      img: '/images/hull-boat4.jpg',
      title: 'Catamaran Fountaine Pajot Queensland 55',
    },
    {
      img: '/images/hull-img5.png',
      title: 'Les différents types de carène',
    },
    {
      img: '/images/hull-img6.jpg',
      title: 'Les différents types de carène',
    },
  ];

function HullTypes() {
  const[screenWidth, setScreenWidth] = useState()


    useEffect(() =>{
      setScreenWidth(window.screen.width)

        function handleWindowResize() {
            setScreenWidth(window.screen.width);
            }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []) /* if we don't use this hook, JS try to access window before it's defined and it doesn't work. */
  return (
    <>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h4"><strong>Les différents types de carène</strong></Typography>
        <p></p>
        {screenWidth > 1024 ? <ImageList itemData={itemData} columns={4}/> : <ImageList itemData={itemData} columns={2}/>}{/* way of setting our own breakpoints as it is not possible with the ImageList MUI component */}
        <p></p>
        <Typography variant="body1">Il existe plusieurs types de carène, qui engendrent des vitesses et comportements marins différents. Voici leurs descriptions, leurs avantages et quelques unes des marques qui proposent ce type de carène :</Typography>
        <p></p>
        <Typography><strong>Carène planante</strong></Typography>
        <p></p>
        <Typography>Ce type de carène offre un V constant ou évolutif qui permet de glisser sur l’eau, ce qui résulte en une puissance accrue, donc plus de vitesse et de performance.</Typography>
        <p></p>
        <Typography>On trouve ce type de carène par exemple sur la gamme <Link>Astondoa Coupé</Link>, chez <Link>Sessa Marine</Link>, <Link>Sunseeker</Link>, la gamme des <Link>Princess V</Link>, <Link>Fairline</Link> etc.</Typography>
        <p></p>
        <Typography><strong>Carène à déplacement</strong></Typography>
        <p></p>
        <Typography>C’est le type de carène des voiliers dits « quillards » et des trawlers style <Link>Grand Banks</Link></Typography>
        <p></p>
        <Typography>Répondant au principe d’Archimède, ce type de carène ne déjauge pas et pousse de l’eau pour avancer.</Typography>
        <p></p>
        <Typography>La surface de la coque dans l’eau est légèrement en V, dotée d’une quille profonde pour les voiliers et d’une quille peu profonde mais sur toute la longueur du bateau pour les trawlers.</Typography>
        <p></p>
        <Typography>Cette configuration offre une meilleure stabilité. Par contre, ce type de coque est assez lent, car plafonné. En effet, le bateau ne peut pas dépasser une vitesse théorique maximale, même si la motorisation est importante.</Typography>
        <p></p>
        <Typography>Formule de calcul de la vitesse théorique maximale : <Link href='http://conduitebateau.blogspot.fr/2015/02/drfreetet.html'>lien</Link></Typography>
        <p></p>
        <Typography><strong>Carène semi-planante</strong></Typography>
        <p></p>
        <Typography>Elle est aussi appelée carène à semi-déplacement et associe les caractéristiques des carènes planante et à déplacement. Ce type de carène a un V assez profond sur la partie avant qui s’aplatit progressivement sur l’arrière. Le bateau navigue donc en position semi-déjaugée grâce à son étrave en V et une bonne portance sur la partie arrière. Comme pour les carènes à déplacement, le fond de la coque est doté d’une quille longue peu profonde pour améliorer le contrôle du cap. La vitesse est supérieure à celle d’une coque à déplacement mais inférieure à celle d’une carène planante. La nouvelle génération de bateaux <Link>Menorquin</Link> Sasga Yachts est l’exemple parfait de ce type de carène.</Typography>
        <p></p>
        <Typography><strong>Carène de catamaran</strong></Typography>
        <p></p>
        <Typography> Ce type de carène est constitué de deux coques reliées entre elles par une plateforme. Cette configuration offre une très bonne stabilité et un vaste espace de vie à bord. Ayant peu de surface mouillée, ce type de carène donne des performances supérieures à celles d’un monocoque.</Typography>
        <p></p>
        <Typography>On trouve ce type de carène sur un catamaran voilier de type Lagoon ou  Catana par exemple, et aussi sur un catamaran à moteurs style <Link>Fountaine Pajot Queensland 55</Link></Typography>
        <p></p>
        <p></p>
    </Box>
  </>
  )
}

export default HullTypes