#### Marco Formante

# KASA

## Description du Projet
Kasa est une application de location immobilière développée dans le cadre d'un projet de formation chez **OpenClassrooms**. 

## Thème
Le projet consiste à refondre une plateforme de réservation de logements (type Airbnb) en utilisant des technologies modernes pour garantir une expérience utilisateur fluide, rapide et responsive. L'accent est mis sur la clarté de l'interface et la facilité de navigation entre les différentes annonces.


## Installation

Pour cloner et lancer ce projet localement, suivez ces étapes :

### 1. Cloner le dépôt
Ouvrez votre terminal et exécutez la commande suivante :
```bash
git clone https://github.com/MarcoFormante/kasa.git
```

### 2. Accéder au répertoire
```bash
cd kasa
```

### 3. Installer les dépendances
Assurez-vous d'avoir Node.js installé, puis lancez :

```bash
npm install
```

### 4. Configuration des variables d'environnement

Avant de lancer l'application, créez un file nommé `.env` à la racine du projet et ajoutez les informations suivantes :

```env
JWT_SECRET="your_secret"
NODE_ENV="development"
API_URL="http://localhost:8000"
```

### 5. Lancer le serveur Backend

Une fois les dépendances installées et le fichier `.env` configuré, lancez le serveur backend. Cela initialisera automatiquement la base de données locale **SQLite** :

```bash
npm run start
```
**Note :** Au premier lancement, le script initialize() créera le fichier kasa.sqlite3 et importera les données depuis le fichier properties.json.

### 6. Lancer le serveur Frontend (Interface)

Ouvrez un **deuxième terminal** (en gardant le premier ouvert pour le backend) et lancez la commande suivante :

```bash
npm run dev
```

L'application sera alors accessible sur votre navigateur à l'adresse suivante :
http://localhost:3000


## Design & Maquette

Le développement de l'interface s'appuie sur une maquette de référence pour garantir la cohérence visuelle et l'expérience utilisateur.

Vous pouvez consulter la maquette Figma du projet ici :
[KASA - Maquette Figma](https://www.figma.com/design/UEw5iG40U3V0NeqBr91rd9/KASA-NEW?node-id=44-653&t=jziBwKxgWVRAAU93-0)

## Tests Unitaires

La fiabilité de l'application est assurée par une série de tests automatisés utilisant **Jest** et **React Testing Library**.

Les tests principaux couvrent les fonctionnalités critiques suivantes :

1. **Carousel Component** : Vérification du défilement des images et de l'affichage des index.
   - Fichier : `app/components/Carousel/Carousel.test.jsx`

2. **Favorite Button** : Test de l'ajout et de la suppression des favoris avec la gestion du context.
   - Fichier : `app/components/Apartment/FavoriteBtn.test.jsx`

Pour lancer les tests, exécutez la commande :
```bash
npm test
```

## Documentation Technique

Le code source est documenté en utilisant le standard **JSDoc**, ce qui facilite la compréhension de la logique des composants et des fonctions de l'application.

Vous pouvez consulter la documentation complète (générée localement) à l'adresse suivante :
[Documentation JSDoc](http://127.0.0.1:5500/docs/global.html)

**Note :** Assurez-vous d'avoir lancé un serveur local (comme Live Server sur VS Code) pour accéder au fichier HTML de la documentation.

## Gestion de Projet

Le projet a été réalisé en suivant le backlog officiel :
[Lien vers le Backlog Notion](https://www.notion.so/openclassrooms/Product-Backlog-et-sp-cifications-techniques-pour-le-site-de-Kasa-25d484f1fa6180c7924beb3ae178fa58)

> **Note :** J'ai effectué uniquement le **Sprint 1 (obligatoire)** pour ce projet.


### Accès au Projet

Pour tester les fonctionnalités d'authentification et les favoris, vous pouvez utiliser les identifiants suivants :

* **Email** : `jean.dupont@gmail.com`
* **Mot de passe** : `exemple2026`


### Démo en ligne

Vous pouvez consulter la version publique du site ici : 
[https://kasa-gamma-ten.vercel.app/](https://kasa-gamma-ten.vercel.app/)

*Note : Sur la version en ligne, vous pouvez accéder uniquement aux pages ne nécessitant pas d'authentification.*

### Accès au Projet Complet

Pour tester l'intégralité des fonctionnalités (connexion, gestion des favoris, etc.), vous devez cloner le dépôt GitHub et lancer le projet localement.