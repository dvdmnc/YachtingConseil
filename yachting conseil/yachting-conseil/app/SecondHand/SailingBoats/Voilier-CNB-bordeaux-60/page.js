import BoatDetails from "../../../components/BoatDetails";
import React from "react";
import cnbbordeaux60 from '../../../../public/images/voiliercnb60.jpeg'
const itemData = [
    {
        img: '/images/cnb60/pic1.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic1.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic2.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic3.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic4.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic5.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic6.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic7.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic8.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic9.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic10.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic11.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic12.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic13.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic14.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic15.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic16.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic17.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic18.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
    {
        img: '/images/cnb60/pic19.jpeg',
        title: 'Voilier CNB BORDEAUX 60',
    },
];

const categories = [
    {
        title: 'Équipements du pont',
        description: 'Pont entièrement en teck avec joints gris (entretien annuel), bossoirs en carbone sur mesure et démontables avec accastillage (2022), mât de charge inox pour moteur annexe, 2 barres à roue en carbone et teck (vernis 2022), sorties de pont eau douce avant et arrière (pompes de lavage indépendantes), sièges pliables en teck sur balcon arrière, table de cockpit en teck avec frigo intégré, passerelle carbone pliable, 8 pare battages gonflables (compresseur 24v) + 8 pare battages lourds, garage à annexe, ancre Delta inox 40kg + 100m chaine de 12 inox + ancre Fortress avec 20m de chaine, plateforme arrière (sur vérins hydrauliques), annexe Highfield 3,10m Hypalon + moteur d\'annexe Honda 6cv de 2021, sellerie de cockpit et matelas de pont, hélice Gori 3 pales repliables. TOILES DE PONT : Toutes les toiles d’ombrage et de protection ont été confectionnées avec du tissu Serge Ferrari. 1 bimini (protection barreur), 1 capote de descente avec pare brise démontable, 2 rallonges de cockpit, 2 tauds de bôme, 1 taud de pont avant, toiles de protection pour : consoles de barres, barres à roue, winches, table de cockpit, grand taud d’hivernage. SELLERIES : Toute la sellerie intérieur et extérieur a été confectionnée avec du tissu Serge Ferrari. Matelas de pont, assises et dossier du cockpit, banquettes carré, banquettes cabines.'
    },
    {
        title: 'Équipements TV',
        description: 'Système Bose dans le carré, TV Samsung dans le carré, système Fusion dans la cabine propriétaire, routeur WiFi DLink.'
    },
    {
        title: 'Équipements de cuisine',
        description: 'Appareils électro ménagers : four et plaque induction Techimplex 220V, lave vaisselle Miele Inox 220V, lave linge Miele 220V, micro ondes Sharp 220V, cafetière Nespresso 220V, 1 frigo Frigoboat 24V, 1 frigo Isotherm 24V, 1 congélateur Vitrifrigo 24V, machine à glaçons 220V, vaisselle complète pour 10 personnes.'
    },
    {
        title: 'Équipements éléctriques',
        description: 'Propulseur d\'étrave Side Power, Générateur Onan 11kw 2275 h au 31.12.2023 (hiverné), air conditionné Webasto réversible 4 blocs, ballon d\'eau chaude 80 L, dessalinisateur Sea Recover Aquamatic 280 l/h (400h), 3 cuves à eaux noires de 80 l, 3 chargeurs de batteries, 1 convertisseur chargeur Victron 5000W 24V/220V 120 A + un Mastervolt 60 A 24V de 2020 + 1 chargeur 20A 12V, 8 batteries lithium Victron 200 A en 24V de 2022 + 4 batteries gel 24V , guindeau électrique Lewmar 2000 W, 3 toilettes Tecma à dépression, compresseur, 2 rideaux occultants électriques.  '
    },
    {
        title: 'Équipements de sécurité',
        description: 'Armement hauturier complet, radeau de sauvetage Sea Safe 8 personnes de 2019 (révisé 2025), balise de détresse RLS Ocean Signal (révisée 2027), gilets de sauvetage avec harnais et longes pour 8 personnes, 2 balises personnelles AIS Safelink.'
    },
    {
        title: 'Équipements voile',
        description: 'VOILES : Jeu de voiles North Sails en 3DI : GV lattée 2018 (révision programmée fin 2023), génois 2016 sur enrouleur Facnor (révision programmée fin 2023), Solent 2020 sur enrouleur et autovireur, trinquette de 2016 sur étai fixe, enrouleur Facnor et autovireur (révision programmée fin 2023), trinquette 2020 sur étai largable, emmagasineur Facnor et autovireur, spi asymétrique 2016 avec chaussette (révision programmée fin 2023), gennacker 2023 sur enrouleur hydraulique Facnor. ACCASTILLAGE : 4 winches électriques Harken (entretien annuel), poulies de pont, renvoi de pied de mât Harken (entretien annuel), chariots écoutes de génois, autovireur, accastillage spi Harken (entretien annuel). GREEMENT DORMANT : installation changée en 2018, mât carbone implanté sur la quille, 3 étages de barres de flèche carbone avec éclairage Led, haubans et galhaubans en Rod Navtec, pataras avec patte d’oie sur vérins hydrauliques Navtec, bôme V carbone Hall Spars équipée 3 ris, lazy jack Dyneema, halebas hydraulique Navtec (révision Navtec 2022)'
    },
    {
        title: 'Équipements de navigation',
        description: 'Pack équipements Raymarine : 2 écrans lecteur/traceur 16’ (carré + cockpit), 3 écrans lecteur/traceur 8’ (consoles de cockpit), 3 répétiteurs pied de mât (montés sur support carbone), pilote avec pompe hydraulique et vérin monté sur secteur de barre, télécommande de pilote, AIS émetteur/récepteur, 2 combinés VHF (carré et cockpit), VHF portative et étanche, radar radôme 48 NM, téléphone satellite (Iridium GO et Routeur Wifi D Link).'
    },
    {
        title: 'Description',
        description: 'Ce Bordeaux 60 est le plus récent de la série (n°46 dans la production) et le plus abouti\nIl n\'a jamais été loué et il est entretenu à la perfection\nIl offre des volumes généreux avec 3 cabines et 3 salles d\'eau (lits avec lattes, literie fournie par Victoria Yachting : matelas, housses de matelas, draps housse, couettes et housses de couette, oreillers et housses d’oreiller)\nCarré très lumineux avec table transformable en grand lit (2 matelas 200x160), cuisine ouverte sur le salon.\nEn partie avant : une cabine skipper avec un accès indépendant, plancher intérieur en bois, covering gris fait en Décembre 2023.Inventaire complet sur demande. \nCe bateau d\'exception s\'adresse à un connaisseur qui saura apprécier ses équipements et son état.\nContact : Manuel D\'Almeida 06 81 32 27 13 ou Benoît Ravel 06 80 84 35 39'
    },
]

function CNBBordeaux60() {
    return (
        <>
            <BoatDetails mainpic={cnbbordeaux60} pictures={itemData} title={'Voilier CNB BORDEAUX 60'} year={'2016'} price={'790 000 €'} engine={'1 X 180 CV Volvo D4-180'} fuel={'Diesel'} transmission={'Repliable GORI'} hours={'2275 h'} length={'18.38m'} width={'5.18m'} cabins={'3'} categories={categories} secondhand={true}/>
        </>
    )
}

export default CNBBordeaux60