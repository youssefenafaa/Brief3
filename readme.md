///////////////////////////////BRUME — Coffee Customizer ///////////////////////////////////
Une application web interactive qui permet aux clients de composer leur café idéal, de visualiser leurs choix en temps réel, de suivre l'évolution du prix et de consulter un récapitulatif avant de valider leur sélection.
Le projet est réalisé avec HTML5, CSS3 et Vanilla JavaScript, en suivant un processus de développement structuré, avec GitFlow et une gestion de projet Kanban.
//// Objectifs du projet
- Proposer une interface élégante et simple à utiliser.
- Permettre la personnalisation d'un café selon plusieurs options.
- Mettre à jour l'aperçu du produit et le prix en temps réel.
- Afficher un récapitulatif de la configuration choisie.
- Créer une interface responsive adaptée aux ordinateurs, tablettes et mobiles.
- Appliquer de bonnes pratiques de collaboration avec Git et GitHub.
////// Fonctionnalités
1. Page Configurateur
- Présentation du café avec image, nom, description et prix de base.
- Choix de la taille du gobelet.
- Sélection des options et suppléments disponibles, par exemple le lait ou le sirop.
- Mise en évidence des options sélectionnées.
- Mise à jour dynamique de l'aperçu et du prix total.
2. Page Résumé
- Affichage du café sélectionné et de ses options.
- Présentation du détail du prix et du montant total.
- Possibilité de revenir au configurateur pour modifier la sélection.
- Confirmation de la configuration avant de poursuivre le parcours.
3. Stockage de la configuration — Bonus
La configuration peut être enregistrée dans localStorage ou sessionStorage, puis relue sur la page Résumé. Cela permet de conserver les choix de l'utilisateur lors du passage d'une page à l'autre.
Le stockage côté navigateur est utilisé pour ce projet pédagogique. Il ne remplace pas un système de commande ou de paiement côté serveur.

4. Responsive design
- Mise en page horizontale sur desktop : aperçu du produit à gauche et options à droite.
- Mise en page verticale sur mobile.
- Boutons et options suffisamment grands pour une utilisation tactile.
- Utilisation de Flexbox et/ou CSS Grid selon les besoins.
//// Technologies utilisées
- HTML5 — structure sémantique des pages.
- CSS3 — design, Flexbox/CSS Grid et media queries.
- Vanilla JavaScript — événements, manipulation du DOM et calcul dynamique du prix.
- Git & GitHub — versionnement et collaboration.
- GitHub Projects — suivi des tâches sous forme de Kanban.
- Figma — maquettes et référence visuelle.