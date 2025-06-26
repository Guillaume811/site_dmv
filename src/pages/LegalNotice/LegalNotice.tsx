import React from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";
import BackgroundHeading from '../../assets/pictures/background/heading.jpg';

const LegalNotice: React.FC = () => {
    return (
        <div>
            <HeadingSection title='Mentions Légales' backgroundImage={BackgroundHeading} />
            <BasicSection className={stylesBasicSection.sectionLegal}>
                <h2>1. Éditeur du site</h2>
                <p>
                    <ul>
                        <li><strong>Le présent site est édité par :</strong> Drone My View Production</li>
                        <li><strong>Statut juridique :</strong> auto-entrepreneur</li>
                        <li><strong>Siège social :</strong> 10 rue de la gare 13860 Peyrolles-en-Provence France</li>
                        <li><strong>Numéro SIRET :</strong> 98745754600016</li>
                        <li><strong>Numéro de TVA intracommunautaire :</strong> TVA non applicable, art. 293 B du CGI</li>
                        <li><strong>Responsable de la publication :</strong> Abran Jean-Baptiste</li>
                        <li><strong>Contact :</strong> <a href="mailto:dmv.production@outlook.fr">dmv.production@outlook.fr</a> - <a href="tel:0781950275">07 81 95 02 75</a></li>
                    </ul>
                </p>

                <h2>2. Hébergement</h2>
                <p>
                    <ul>
                        <li><strong>Le site est hébergé par :</strong> Netlify, Inc.</li>
                        <li><strong>Adresse :</strong> 512 2nd Street, Fl 2, San Francisco, CA 94107</li>
                        <li><strong>Site web :</strong> <a href="https://www.netlify.com/">netlify.com</a></li>
                    </ul>
                </p>

                <h2>3. Conception / Développement</h2>
                <p>
                    <ul>
                        <li><strong>La conception graphique et le développement du site ont été réalisés par :</strong> Djénius</li>
                        <li><strong>Adresse :</strong> 1171 route de l'Aérodrome, 84140 Montfavet</li>
                        {/*<li><strong>Site web :</strong> <a href="https://www.netlify.com/">netlify.com</a></li>*/}
                        <li><strong>Contact :</strong> <a href="mailto:guillaumehuguet.djenius@gmail.com">guillaumehuguet.djenius@gmail.com</a></li>
                    </ul>
                </p>

                <h2>4. Propriété intellectuelle</h2>
                <p>
                    L’ensemble du contenu présent sur ce site (textes, images, graphismes, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de Drone My View Production, sauf mentions contraires.<br/><br/>
                    Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord écrit de Drone My View Production. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>

                <h2>5. Responsabilité</h2>
                <p>
                    L’éditeur s’efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour de ces informations, qu'elles soient de son fait ou du fait des tiers partenaires.<br/><br/>
                    Le site peut contenir des liens hypertextes vers d’autres sites. Drone My View Production ne peut être tenu responsable des contenus de ces sites externes.<br/><br/>
                    L’utilisateur du site reconnaît disposer des compétences nécessaires pour accéder et utiliser ce site et avoir vérifié que la configuration informatique utilisée ne contient aucun virus et qu’elle est en parfait état de fonctionnement.
                </p>

                <h2>6. Gestion des cookies</h2>
                <p>
                    Le site utilise des cookies à des fins de mesure d’audience via Google Analytics.<br/><br/>
                    <strong>Types de cookies utilisés :</strong><br/><br/>
                    <strong>Cookies de mesure d’audience :</strong><br/>
                    permettent de collecter des informations anonymes sur la navigation afin d’améliorer le contenu et l’expérience utilisateur.<br/><br/>
                    <strong>Gestion des cookies :</strong><br/>
                    Lors de votre première visite, un bandeau vous informe de la présence de ces cookies et vous permet d’accepter ou de refuser leur utilisation.<br/><br/>
                    Vous pouvez à tout moment modifier vos préférences de cookies en cliquant sur le bouton de gestion des cookies présent en bas de page (ou selon l’emplacement défini sur le site).<br/><br/>
                    Pour en savoir plus sur la gestion des cookies par Google Analytics, consultez la page : <a href="https://policies.google.com/technologies/cookies?hl=fr">policies.google.com</a>
                </p>

                <h2>7. Politique de confidentialité</h2>
                <p>
                    <strong>Données collectées via le formulaire de contact :</strong><br/><br/>
                    Nom<br/>
                    Prénom<br/>
                    Adresse email<br/>
                    Nom de la société<br/><br/>
                    Ces données sont collectées uniquement pour répondre aux demandes transmises via le formulaire de contact.<br/><br/>
                    <strong>Fondement légal :</strong><br/>
                    Le traitement repose sur le consentement de l’utilisateur (article 6.1.a du RGPD).<br/><br/>
                    <strong>Durée de conservation :</strong><br/>
                    Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact.<br/><br/>
                    <strong>Destinataires des données :</strong><br/>
                    Les données collectées sont destinées exclusivement à Drone My View Production et ne sont en aucun cas cédées ou vendues à des tiers.<br/><br/>
                    <strong>Données de navigation :</strong><br/>
                    Les données de navigation sont collectées de manière anonymisée via Google Analytics et utilisées uniquement à des fins statistiques.<br/><br/>
                    <strong>Droits des utilisateurs :</strong><br/>
                    Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
                    <ul>
                        <li>Droit d’accès, de rectification, de suppression et de portabilité de vos données</li>
                        <li>Droit de limitation et d’opposition au traitement de vos données</li>
                        <li>Droit de retirer votre consentement à tout moment</li>
                    </ul>
                    Pour exercer vos droits, vous pouvez contacter : Drone My View Production<br/>
                    Email : <a href="mailto:dmv.production@outlook.fr">dmv.production@outlook.fr</a><br/>
                    Adresse : 10 rue de la gare 13860 Peyrolles-en-Provence France<br/><br/>
                    En cas de non-réponse satisfaisante, vous avez la possibilité de déposer une réclamation auprès de la CNIL : <a href="https://www.cnil.fr">cnil.fr</a>
                </p>

                <h2>8. Loi applicable</h2>
                <p>
                    Le présent site est régi par la loi française. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
                </p>

            </BasicSection>
        </div>
    );
};

export default LegalNotice;