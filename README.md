# GitHub to Portfolio

**Transformez votre profil GitHub en un portfolio web partageable !**

## Présentation du projet

GitHub to Portfolio est une application web qui permet de transformer un profil GitHub public en un portfolio personnalisé.

L'utilisateur saisit son pseudo GitHub et l'application récupère les informations publiques de son profil ainsi que ses dépôts afin de les présenter de manière claire et organisée.

L'objectif est de valoriser les projets réalisés par un développeur et de faciliter leur présentation et leur partage.

## Membres du groupe

- Ingride
- Julien
- Edgar

## Liens du projet

- **Dépôt GitHub :** https://github.com/Neliuzx/github-to-portfolio
- **Application en ligne :** https://neliuzx.github.io/github-to-portfolio/
- **Tableau Kanban :** https://github.com/users/Neliuzx/projects/3

## Fonctionnalités

L'application propose les fonctionnalités suivantes :

- Recherche d'un profil GitHub à partir d'un pseudo.
- Affichage de la photo de profil (avatar).
- Affichage du nom ou du pseudo GitHub.
- Présentation des informations du profil.
- Affichage des dépôts sous forme de cartes.
- Présentation du nom, de la description et du langage principal de chaque dépôt.
- Accès direct au code source des projets.
- Filtrage des dépôts par langage de programmation.
- Possibilité d'inclure les forks.
- Génération d'une URL partageable contenant le pseudo GitHub.
- Interface responsive adaptée aux ordinateurs et aux téléphones.
- Mode démo permettant de tester l'application sans dépendre des appels à l'API GitHub.

## Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure des pages |
| CSS3 | Mise en forme et design responsive |
| JavaScript | Fonctionnement et interactions de l'application |
| API REST GitHub | Récupération des profils et des dépôts publics |

## Installation et lancement local

### Prérequis

- Un navigateur web récent.
- MAMP installé sur votre ordinateur.
- Git pour récupérer le projet.

### 1. Cloner le dépôt

Ouvrez un terminal et exécutez :

```bash
git clone https://github.com/Neliuzx/github-to-portfolio.git
```

### 2. Placer le projet dans MAMP

Copiez le dossier `github-to-portfolio` dans le répertoire :

```text
C:\MAMP\htdocs\
```

### 3. Démarrer MAMP

- Ouvrez MAMP.
- Cliquez sur **Start Servers**.
- Vérifiez que le serveur Apache est démarré.

### 4. Accéder à l'application

Ouvrez votre navigateur et saisissez :

```text
http://localhost/github-to-portfolio/
```

Si Apache utilise le port 8888 :

```text
http://localhost:8888/github-to-portfolio/
```

**Important :** il faut utiliser une adresse HTTP via MAMP et non ouvrir directement le fichier `index.html` avec `file:///`.

## Utilisation de l'application

1. Ouvrir l'application.
2. Saisir un pseudo GitHub dans le formulaire.
3. Lancer la génération du portfolio.
4. Consulter les informations du profil.
5. Découvrir les dépôts présentés sous forme de cartes.
6. Filtrer les dépôts selon leur langage.
7. Activer l'option permettant d'inclure les forks.
8. Partager l'URL générée pour permettre à d'autres personnes de consulter le portfolio.

## Mode démo

Un mode démo est disponible afin de tester l'application sans effectuer d'appels à l'API GitHub.

Ce mode utilise des fichiers JSON versionnés dans le projet pour présenter des données de démonstration.

Il permet notamment de tester l'affichage du profil et des dépôts ainsi que les différentes fonctionnalités de l'interface.

## Organisation du travail en équipe

Le projet est réalisé en groupe de trois étudiants.

Pour organiser le développement, nous utilisons :

- Un dépôt GitHub commun.
- Un tableau Kanban pour suivre l'avancement des tâches.
- Des issues pour découper les fonctionnalités.
- Des branches dédiées pour développer les différentes fonctionnalités.
- Des Pull Requests pour proposer et faire relire les modifications avant leur fusion.

### Organisation des branches

Nous utilisons les branches suivantes :

- `main` : version principale du projet.
- `develop` : branche de développement commune.
- `feature/*` : branches dédiées aux fonctionnalités.

Les modifications sont développées sur des branches dédiées, puis proposées dans des Pull Requests vers `develop` avant leur intégration dans `main`.

### Suivi des tâches

Le tableau Kanban est organisé selon quatre colonnes :

- À faire
- En cours
- En revue
- Terminé

[Accéder au tableau Kanban](https://github.com/users/Neliuzx/projects/3)

## Vérifications automatisées

Une GitHub Action est configurée pour automatiser des vérifications du projet lors des Pull Requests vers la branche `develop`.

Ces vérifications permettent de contrôler les modifications proposées et de faciliter leur intégration dans le projet.

Les résultats sont consultables directement dans GitHub, dans la section des vérifications des Pull Requests.

## Déploiement

L'application est déployée avec GitHub Pages.

Vous pouvez consulter le portfolio à cette adresse :

**https://neliuzx.github.io/github-to-portfolio/**

## Objectifs pédagogiques

Ce projet nous permet de mettre en pratique :

- La manipulation de l'API REST GitHub.
- Le développement d'une application web avec HTML, CSS et JavaScript.
- La création d'une interface responsive.
- L'utilisation de Git et GitHub.
- Le travail collaboratif avec les branches et les Pull Requests.
- Le suivi d'un projet avec un tableau Kanban.
- L'automatisation des vérifications avec GitHub Actions.
- Le déploiement d'une application web.

---

**Projet réalisé dans le cadre de la formation à la Normandie Web School – **
