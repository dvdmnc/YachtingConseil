import BoatDetails from "../../../components/BoatDetails";
import React from "react";
import Galeon445 from '../../../../public/images/galeon445.jpeg'

const itemData = [
    {
        img: '/images/galeon445.jpeg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic1.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic2.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic3.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic4.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic5.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic6.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic7.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic8.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic9.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic10.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic11.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic12.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic13.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic14.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic15.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
    {
        img: '/images/galeon445-pics/pic16.jpg',
        title: 'Cabin Cruiser Galeon 445',
    },
];

const categories = [
    {
        title: 'Équipements du pont',
        description: 'Pont en teck, guindeau électrique, grand bain de soleil avant avec taud de soleil, passerelle hydraulique rétractable, plage de bain hydraulique, store électrique à l\'arrière du hard top.'
    },
    {
        title: 'Équipements de confort',
        description: 'L\'aménagement du 445 HTS (hard top sport) offre espace et confort, dans un style aéré et élégant. C\'est la vedette estivale par excellence. Le cockpit comprend un coin repas avec un canapé en forme de U, convertible en bain de soleil arrière, un bar/cuisine extérieure et un poste de pilotage avec banquette 2 places. A l\'intérieur, une table de repas et banquette en U, face à une grande cuisine avec grill, frigo et évier. A l\'avant, une belle cabine avec sa salle d\'eau, qui est également accessible par le salon. A l\'arrière se situe la master cabin avec un grand lit, une banquette et un accès à une salle d\'eau privative spacieuse.'
    },
    {
        title: 'Équipements TV',
        description: 'Une grande télévision dans le salon et une télévision dans chaque cabine, poste radio Fusion.'
    },
    {
        title: 'Équipements de cuisine',
        description: 'Une cuisine extérieure avec grill, évier et frigo, et une cuisine intérieure avec grand frigo, four multifonctions, plaque à induction 2 feux.'
    },
    {
        title: 'Équipements éléctriques',
        description: 'Batteries moteurs, batteries de service, générateur (petite puissance), chargeur de batteries, convertisseur 12V/220V Victron, climatisation dans les cabines et salon.'
    },
    {
        title: 'Équipements de sécurité',
        description: 'Survie et équipement de sécurité.'
    },
    {
        title: 'Équipements de navigation',
        description: 'GPS / Radar Raymarine, loch et sondeur Raymarine , pilote automatique Raymarine , VHF Raymarine, flaps avec indicateurs, compas.'
    },
    {
        title: 'Description',
        description: 'Ce Galeon 445 Hard Top Sport a de belles lignes sportives, il reste très manoeuvrant grâce à ses IPS et son joystick, tout en maintenant un niveau de confort exceptionnel \n LOA à reprendre.\n Contact : Yachting Conseil, distributeur SASGA MENORQUIN Côte d\'Azur - 06 81 32 27 13 ou 06 80 84 35 39 '
    },
]

function CabinCruiser445() {
    return (
        <>
            <BoatDetails mainpic={Galeon445} pictures={itemData} title={'Cabin Cruiser Galeon 445'} year={'2017'} price={'475 000 €'} engine={'2 X 435 CV Volvo Penta D6 435 IPS 600'} fuel={'Diesel'} transmission={'IPS 600'} hours={'352 h'} length={'13.28m'} width={'4.18m'} cabins={'2'} categories={categories} secondhand={true}/>
        </>
    )
}

export default CabinCruiser445