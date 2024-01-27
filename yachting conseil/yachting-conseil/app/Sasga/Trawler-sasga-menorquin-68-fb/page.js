import BoatDetails from "../../components/BoatDetails";
import React from "react";
import sasga68 from '../../../public/images/sasga 68.jpeg'

const itemData = [
    {
        img: '/images/sasga68/pic1.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic2.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic3.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic4.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic5.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic6.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic7.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic8.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic9.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic10.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic11.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic12.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic13.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic14.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic15.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic16.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic17.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic18.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic19.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
    {
        img: '/images/sasga68/pic20.jpeg',
        title: 'Trawler SASGA MENORQUIN 68 FB',
    },
];

const categories = [
    {
        title: 'Équipements du pont',
        description: 'Guindeau électrique Ancre Bruce 50 Kg 100 m de chaîne'
    },
    {
        title: 'Équipements de confort',
        description: 'Agencement standard en 3 cabines (cabine propriétaire dans la largeur totale de la coque) & 3 salles d\'eau. Compartiment cuisine et personnel indépendant, confortable pour 2. Possibilité de version 4 cabines & 4 salles d\'eau... parmi de nombreuses autres options, selon le désir du propriétaire.'
    },
    {
        title: 'Équipements de cuisine',
        description: 'Gazinière électrique 3 feux + hotte Réfrigérateur/congélateur 231 L'
    },
    {
        title: 'Équipements éléctriques',
        description: 'Générateur Kohler 13.5 Kw Chauffe eau 60 L'
    },
    {
        title: 'Équipements de navigation',
        description: 'Flaps automatiques Humphree'
    },
    {
        title: 'Description',
        description: 'Bateau NEUF de grande qualité. \nPrix indiqué HORS TAXES, départ chantier\nChoix d\'agencement, d\'options et de matériaux à définir.\nNous contacter pour le détail des équipements,la liste des options, ou une cotation\nPlace de port disponible dans le Var.\nContact : Yachting Conseil - Distributeur Sasga Menorquin pour la Côte d\'Azur- (+33) 06 81 32 27 13 ou (+33) 06 80 84 35 39 '
    },
]

function Sasga68() {
    return (
        <>
            <BoatDetails mainpic={sasga68} pictures={itemData} title={'Trawler SASGA MENORQUIN 68 FB'} year={'2024'} price={'2 164 905 €'} engine={'2 X 725 CV VOLVO D110'} fuel={'Diesel'}  length={'21.24m'} width={'5.8m'} cabins={'4'} categories={categories} secondhand={false}/>
        </>
    )
}

export default Sasga68