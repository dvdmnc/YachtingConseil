'use client'
import {React, useState, useEffect} from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import ActiveLastBreadCrumbs from '../../../components/BreadCrumbs'
import BackButton from '../../../components/BackButton'
import ImageList from '../../../components/ImageList'

const itemData = [
    {
      img: '/images/choice-boat1.jpg',
      title: 'Trawer Escapade 36',
    },
    {
      img: '/images/choice-boat2.jpg',
      title: 'Astondoa 655 Coupé',
    },
    {
      img: '/images/choice-boat3.jpg',
      title: 'Menorquin 54',
    },
    {
      img: '/images/choice-boat4.jpg',
      title: 'Guy Couach 1900',
    },
    {
      img: '/images/choice-boat5.jpg',
      title: 'Apréamare 7.50',
    },
    {
      img: '/images/choice-boat6.jpg',
      title: 'Princess V45',
    },
    {
      img: '/images/choice-boat7.jpg',
      title: 'Jeanneau Leader 40',
    },
    {
      img: '/images/choice-boat8.jpg',
      title: 'Foutaine Pajot Queensland 55',
    },
    {
      img: '/images/choice-boat9.jpg',
      title: 'Fairline Targa 52',
    },
    {
      img: '/images/choice-boat10.jpg',
      title: 'Pointu Barquette Marseillaise',
    },
    {
      img: '/images/choice-boat11.jpg',
      title: 'Amel Santorin',
    },
  ];

function Choice() {
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
        <Typography variant="h4"><strong>Comment bien choisir son bateau ?</strong></Typography>
        <p></p>
        {screenWidth > 1024 ? <ImageList itemData={itemData} columns={4}/> : <ImageList itemData={itemData} columns={2}/>}{/* way of setting our own breakpoints as it is not possible with the ImageList MUI component */}
        <p></p>
        <Typography variant="body1">Pour que votre Rêve devienne Réalité, en évitant quelques écueils… voici nos conseils :</Typography>
        <p></p>
        <Typography><strong>Ø Se poser les bonnes questions</strong></Typography>
        <p></p>
        <Typography>Bien que cela paraisse évident, il est bon d’effectuer une petite introspection et de se poser quelques questions essentielles avant de foncer tête baissée dans la prospection :</Typography>
        <p></p>
        <Typography>* quelles sont les raisons qui motivent mon achat ? En d’autres termes, quelle sera l’utilisation de mon bateau : la pêche ? Ou les sports nautiques tractés ? Ou plutôt la balade au gré du vent ? Sortir à plusieurs ou en petit comité : combien de passagers ? Pouvoir sortir pour 1 heure ou 2 ou plutôt pour la journée entière ? Ou bien passer quelques nuits à bord ? Faire du cabotage ou de la croisière hauturière ?</Typography>
        <p></p>
        <Typography>* quel budget est-ce que je souhaite consacrer à l’achat mais aussi à l’entretien annuel de mon bateau ? Il est bon d’établir un budget prévisionnel des coûts annuels : assurance, taxe de navigation (DAFN), place de port, et entretien mécanique sont la base. On compte en général 10% de la valeur du bateau en coût annuel d’entretien et fonctionnement, hors carburant bien-sûr.</Typography>
        <p></p>
        <Typography><strong>Ø Orienter son choix</strong></Typography>
        <p></p>
        <Typography>* voilier ou bateau à moteur (voilier pour les navigateurs dans l’âme qui veulent être en prise directe avec les éléments, les amoureux d’écologie et ceux qui disposent de temps ; bateau à moteur pour les sports nautiques ou pour les actifs qui ont moins de temps ou veulent profiter de plusieurs mouillages dans la même journée)</Typography>
        <p></p>
        <Typography>* runabout (à la journée) ou cabin cruiser (au moins une cabine, plus de confort)</Typography>
        <p></p>
        <Typography>*open, flybridge, timonier (pour la pêche), hard top, multicoque, trawler (semi-déplacement, moins rapide mais plus économique)</Typography>
        <p></p>
        <Typography>* le design : classique intemporel (Princess, Fairline, Guy Couach, Cranchi), avec du cachet (Menorquin, Apreamare), du volume (trawler : Grand Banks, Escapade), le mythe  (Riva), des lignes tendues et sportives (Sunseeker, Uniesse, Baia), ou avant-gardiste (la gamme Coupé d’Astondoa, Van Dutch, Wally), et enfin le main-stream (Jeanneau, Beneteau, Bavaria…)</Typography>
        <p></p>
        <Typography>* motorisation  « in board » ou « hors-bord », diesel ou essence, Z-drive ou ligne d’arbre ? Pour un bateau de ski, on privilégie l’inboard, sinon pour un bateau open de moins de 10m, l’idéal est le hors-bord : un entretien plus simple car on peut relever l’embase, donc sortir le moteur du milieu salé corrosif. Pour une taille supérieure, on passe en bi-moteurs (plus sécurisant). Le diesel est recommandé pur un bateau de plus de 10m de long, pour une question de consommation et de fiabilité.</Typography>
        <p></p>
        <Typography><strong>Ø Se renseigner</strong></Typography>
        <p></p>
        <Typography>Dans l’océan de marques et de modèles différents que l’on trouve sur le marché du nautisme, on peut vite se sentir « noyé » ! Faites des recherches sur internet et visitez quelques uns des multiples salons nautiques proposés tout au long de l’année, en France et en Europe.</Typography>
        <p></p>
        <Typography>Le choix du constructeur est important, car il joue sur la valeur et la décote du bateau à la revente. Nous vous conseillons de vous orienter vers les valeurs sûres.</Typography>
        <p></p>
        <Typography><strong>Ø Neuf ou occasion ? </strong></Typography>
        <p></p>
        <Typography>Bien-sûr, cela dépend en premier lieu de votre budget. En achetant du neuf, vous pouvez choisir certains matériaux, options et coloris, donc personnaliser votre bateau ; certains chantiers proposent presque du « sur mesure ». Acheter d’occasion a aussi ses avantages, notamment le fait que le bateau soit déjà rôdé et équipé d’un certain nombre d’options sans surcoût. Choisissez une occasion récente, demandez les factures d’entretien et un historique…</Typography>
        <p></p>
        <Typography><strong>Pour conclure </strong> : adressez-vous à un professionnel qui saura vous conseiller en fonction de vos souhaits, votre programme de navigation et votre budget, sélectionnera des unités fiables dont il aura vérifié l’historique en amont, pour vous orienter en fonction de tous les critères ci-dessus vers des bateaux dont l’historique aura été vérifié, organisera les visites, négociera avec un propriétaire parfois rigide, vous aidera pour des besoins particuliers et s’occupera des démarches administratives, pour vous assurer un achat serein.</Typography>
        <p></p>
    </Box>
  </>
  )
}

export default Choice