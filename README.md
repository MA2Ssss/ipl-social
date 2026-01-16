# IPL Social

## Auteur
- Nom : TOUZANI
- Prénom : NAWFAL
- Email Vinci : nawfal.touzani@student.vinci.be

## Repository GitHub
https://github.com/MA2Ssss/ipl-social

## Description
Ce projet a été réalisé dans le cadre du cours DevOps (BIMV2190).

Il met en place une pipeline d’intégration continue (CI) à l’aide de GitHub Actions.
Cette pipeline exécute automatiquement les tests unitaires à chaque push afin de garantir
la qualité du code.

Le projet implémente une fonction de validation d’adresse email en TypeScript en suivant
la méthodologie Test Driven Development (TDD), où les tests sont écrits avant le code.

## Validation email
La fonction vérifie que :
- l'adresse contient un @
- le domaine contient un point (pas en dernière position)
- il n'y a aucun espace
- il y a du texte avant et après le @

## Lancer les tests
```bash
npm test
