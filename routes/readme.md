# API : Assignments application 

## Membres du groupe 

- RABE Princia Malanto n°15 
- ANDRIANANTENAINA Ranjanirina André n°07

## Description du projet

Partie **Back-end** d'une application de gestion de devoirs à rendre, sous Angular. Cet API est écrit en **node JS** avec comme base de données **MongoDB** dans le cloud. 

Lien de l'API déployé sur render : https://mbds-api.onrender.com/  

## Prérequis et installation

Node version 20.1.0

1. Cloner le dépôt sur GitHub avec git clone
2. Exécuter les commandes :
    1. 'npm run build' 
    2. 'npm run start'

## Fonctionnalités développées 

## Gestion des devoirs ##

- Liste des devoirs avec pagination . 

- Ajout/modification/suppression de devoirs 

- Récupération de devoir par son id 

## Authentification ##

- Authentification à l'aide de JWT (JSON Web Tokens) basé sur le tutoriel de [freeCodeCamp](https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/)

- Création d'un modèle 'User' avec Mongoose

## Ajout de nouvelles propriétés au modèle de devoir ##

- Les propriétés : matière (avec le nom, l'avatar, le prof), auteur, note, remarques



