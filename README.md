
<p align="center">
  <img src="https://github.com/user-attachments/assets/a109b415-ee01-4a48-8bbd-f599c27ba14b" />
</p>

**RecordLog** est une application web permettant de gérer une collection d'artistes et d'albums musicaux (records), avec un affichage riche incluant des informations détaillées et une intégration Spotify.

## 🚀 Fonctionnalités

- 🔍 Liste des **artists** et des **records**
- 📄 Page détaillée pour chaque **album** :
  - Informations complètes
  - Intégration de l'embed **Spotify**
- 🔐 Connexion via **Keycloak** (SSO)
  - Comptes gérés dans Keycloak
  - Les utilisateurs connectés peuvent **ajouter** des artistes et des albums (les routes existent dans le back mais ne sont pas encore implémentées dans le front).
- 📊 Logs récupérés et visibles avec Elastic 

## 🖥️ Aperçu

<p align="center">
  <img src="https://github.com/user-attachments/assets/22c47ae2-bdf3-49dc-8799-bfa795b52f15" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/b894d579-fb09-4a1e-8d0c-796b53cf9ddf" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/701e5aa5-0caa-4cee-b162-5a4584fc8cb1" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/c026eadd-248b-4c27-94ae-391d7da32f14" />
</p>

### Frontend
- [Angular](https://angular.io/)

### Backend
- Java + Spring Boot
- Le repo du back est disponible ici  : [Lien](https://github.com/UgoBlent/RecordLog-Back)

### Authentification
- [Keycloak](https://www.keycloak.org/)
    
