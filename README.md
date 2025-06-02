# 📐 NormaFix - Assistant de Normalisation de Base de Données

**NormaFix** est une application éducative qui permet de :
- Comprendre les formes normales (1FN, 2FN, 3FN, BCNF),
- Saisir une table non normalisée,
- Voir automatiquement sa transformation étape par étape,
- Lire des explications pédagogiques à chaque étape.

## 🧠 Concepts pédagogiques couverts

| Forme normale | Objectif |
|---------------|----------|
| **1FN** | Éliminer les champs contenant plusieurs valeurs (colonnes atomiques) |
| **2FN** | Supprimer les dépendances partielles aux clés primaires composées |
| **3FN** | Supprimer les dépendances transitives entre colonnes non-clés |
| **BCNF** | Améliorer la cohérence même en cas de dépendances sur des super-clés |

## 🚀 Fonctionnalités

- Visualisation de la table saisie.
- Détection automatique des violations de FN.
- Affichage progressif des corrections.
- Explications claires intégrées à l'app.
- Interface professionnelle et responsive.

## ▶️ Lancer localement

```bash
npm install
npm start
---

© 2025 - NormaFix