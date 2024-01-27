import BoatDetails from "../../components/BoatDetails";
import React from "react";
import astondoaAX8 from '../../../public/images/ax8.jpeg'

const itemData = [
    {
        img: '/images/astondoaax8/pic1.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic2.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic3.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic4.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic5.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic6.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic7.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic8.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic9.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic10.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic11.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic12.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic13.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic14.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic15.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
    {
        img: '/images/astondoaax8/pic16.jpeg',
        title: 'Cabin Cruiser ASTONDOA AX8',
    },
];

const categories = [
    {
        title: 'Description',
        description: 'BATEAU NEUF. \nAstondoa est un chantier Espagnol de plus de 100 ans qui offre une haute qualité de matériaux et de finitions, qui reste identique sur tous les modèles produits, de la plus petite unité au plus grand super yacht.\nPerformance et sécurité en mer.L\'AX8 est le dernier modèle créé par le chantier, lancé fin 2023.\nPrix indiqué Hors Taxes et hors options, départ chantier à Santa Pola, près d\'Alicante.\nGarantie 2 ans\nLeasing possible\nPossibilité place de port.\nEquipements standard et optionnels sur demande.\nNous contacter : Yachting Conseil, importateur Astondoa France (+33) 06 81 32 27 13 ou (+33) 06 80 84 35 39'
    },
]

function AstondoaAX8() {
    return (
        <>
            <BoatDetails mainpic={astondoaAX8} pictures={itemData} title={'Cabin Cruiser ASTONDOA AX8'} year={'2024'} price={'4 970 000 €'} engine={'2 X 1000 CV VOLVO PENTA IPS 1350'} fuel={'Diesel'}  length={'24.46m'} width={'6.22m'} cabins={'6'} categories={categories} secondhand={false}/>
        </>
    )
}

export default AstondoaAX8