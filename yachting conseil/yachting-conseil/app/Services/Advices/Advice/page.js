import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import ActiveLastBreadCrumbs from '../../../components/BreadCrumbs'
import BackButton from '../../../components/BackButton'

function Advice() {
  return (
    <>
    <BackButton color={'black'}/><ActiveLastBreadCrumbs />
    <Box className="sh-i-section-two-content"> {/* reusing CSS of previous components */}
        <Typography variant="h4"><strong>6 conseils pour une vente sereine</strong></Typography>
        <p></p>
        <Typography variant="body1">Réussir la vente de son bateau n’est pas chose simple ! Voici quelques conseils pour mettre toutes les chances de votre côté, vous éviter des déboires et vous permettre une vente en toute sérénité.</Typography>
        <p></p>
        <Typography><strong>1. soyez objectif et honnête</strong></Typography>
        <p></p>
        <Typography>Tout vendeur est intimement convaincu que son bateau est LE plus beau bateau du monde, dans un état irréprochable et équipé des meilleures options ! D’autant plus quand vient l’heure de s’en séparer… Pourtant il est important de rester réaliste et de déterminer le bon prix dès le début, si vous souhaitez être contacté. Recherchez les unités similaires (de même taille, même année de fabrication, même motorisation, et avec les mêmes équipements) proposées à la vente sur internet et dans la presse spécialisée, et gardez à l’esprit que les prix indiqués sont des prix d’appel, non pas les prix de vente réels après négociation…  </Typography>
        <p></p>
        <Typography>Vous pouvez également établir une liste des avantages et inconvénients de votre bateau, en vous glissant dans la peau d’un éventuel acquéreur. Enfin, préparez-vous à répondre aux questions qui reviennent régulièrement : pour quelle raison vendez-vous ? Le prix est-il négociable ? Est-ce une première main ? Quelles sont les performances et la consommation ? Quel budget annuel faut-il consacrer à l’entretien ?</Typography>
        <p></p>
        <Typography>Concernant l’historique du bateau, ne cachez rien, car vous êtes tenu au vice caché. Vous avez tapé ? Vous avez subi une avarie ou un dégât quelconque ? Dites-le, surtout si la réparation a été effectuée dans les règles de l’art par un professionnel, avec facture à l’appui.</Typography>
        <p></p>
        <Typography><strong>2. Une présentation impeccable</strong></Typography>
        <p></p>
        <Typography>Un bateau propre, nettoyé et rangé, est la base d’une bonne visite.  Comme en immobilier, l’acquéreur potentiel doit être séduit mais il doit également pouvoir se projeter vivant à bord du bateau. Pour cela, pensez à retirer vos effets personnels. Des petites touches de décoration sont toujours un plus.</Typography>
        <p></p>
        <Typography><strong>3. incontournables, l’expertise et l’essai en mer</strong></Typography>
        <p></p>
        <Typography>Non seulement ils sont essentiels pour rassurer l’acheteur, mais ils sont en outre exigés par certaines compagnies d’assurance. Sortie d’eau, inspection des œuvres vives, de la cale moteur, des coffres sous les planchers, navigation avec démarrage des moteurs et hissage des voiles le cas échéant pour contrôler leur niveau d’usure, vérification du bon fonctionnement de l’électronique et des divers équipements, etc.  </Typography>
        <p></p>
        <Typography><strong>4. des documents à jour</strong></Typography>
        <p></p>
        <Typography>Vous devez être en mesure de fournir à l’acquéreur :</Typography>
        <p></p>
        <Typography>* la liste des équipements qui restent à bord. Sachant que les équipements et options sont l’un des critères qui ont permis d’établir le prix de vente, ils doivent donc impérativement être listés le plus précisément possible et idéalement annexés au compromis de vente.</Typography>
        <p></p>
        <Typography>* les factures d’entretien, d’hivernage et de rénovations. </Typography>
        <p></p>
        <Typography>* tous les documents administratifs nécessaires au changement de propriété: acte de vente, Certificat CE, certificat constructeur, acte de francisation et d’immatriculation ou résiliation de pavillon étranger plus fiche plaisance et demande de francisation si c’est une 1ère immatriculation en France</Typography>
        <p></p>
        <Typography><strong>5. Professionel ou particulier ?</strong></Typography>
        <p></p>
        <Typography>Cela dépend du bateau que vous vendez. Pour une petite unité ou un petit budget, la vente de particulier à particulier est tout-à-fait possible. Vous trouverez tous les documents et informations nécessaires sur internet : modèle d’acte de vente, formalités administratives auprès du service navigation des douanes et auprès des affaires maritimes, pour le changement de propriétaire.</Typography>
        <p></p>
        <Typography>Néanmoins, en nautisme plus que dans tout autre domaine, nous vous recommandons de passer par un professionnel, surtout pour une unité de plus de 10m et un prix de vente de plus de 10.000 €,  et ce pour de nombreuses raisons : ses connaissances et son expertise en matière de nautisme et mécanique marine, sa maîtrise et son expérience de la négociation, et enfin sa responsabilité engagée.</Typography>
        <p></p>
        <Typography>Un professionnel s’occupe de tout : la mise en vente et la promotion de votre bateau sur les sites les mieux référencés, les visites et la présentation de votre bateau sous son meilleur jour, il assume toutes les négociations parfois longues et difficiles, il gère les éventuels problèmes et/ou conflits lors de l’expertise et l’essai en mer, il aide l’acquéreur si besoin pour trouver un financement, une compagnie d’assurance, un transporteur ou un skipper, des intervenants pour d’éventuelles rénovations, il rédige le compromis de vente et l’acte de vente, effectue toutes les formalités administratives auprès du service navigation des douanes et auprès des affaires maritimes pour le transfert de propriété, la résiliation de pavillon si besoin… bref il vous assiste de A à Z.</Typography>
        <p></p>
        <Typography><strong>6. S'assurer du paiement</strong></Typography>
        <p></p>
        <Typography>Si vous vendez de particulier à particulier, établissez et faites signer à l’acquéreur un compromis de vente avec versement d’un acompte, avant d’effectuer tout essai en mer. Cela vous évitera bien des mauvaises surprises… Pour tout paiement, acompte et/ou solde du prix de vente, privilégiez le virement bancaire ou bien le chèque de banque.</Typography>
        <p></p>
    </Box>
  </>
  )
}

export default Advice