# Site DMV - Production

-> Ce projet est un site vitre pour la société DMV - Production.

## Instalation

git clone https://github.com/Guillaume811/site_dmv.git
cd site_DMV
npm install
npm start

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Structure du projet

Dossier/Fichier -----------> Description

src/ ----------------------> Code source principal
src/assets ---------------->  Fonts et Pictures
src/components ------------> Composants réutilisable
src/data ------------------> NavLinks
src/page ------------------> Pages du site
src/routes ----------------> Routes du site
src/services --------------> Instance de service + fonctions
src/styles ----------------> fonts, globals, mixins, variables et main
src/types -----------------> types global, gallery, prestations et projects

public/pictures -----------> Image pour la gallery, les projects et les prestations
public/gallery.json -------> Données dynamiques pour la pages gallery
public/prestation.json ----> Données dynamiques pour la pages prestations (tabs)
public/projects.json ------> Données dynamiques pour la/les pages projects (Card + Single Page)

## Fonctionnalités

-> Parallax effect
-> Annimations
-> Grid dynamique
-> Chargement JSON
-> Card dynamique
-> Tabs dynamique
-> Page dynamique
-> Modal
-> Contact Form

## Stack technique

-> React
-> TypeScript
-> Sass (Scss)
-> React Router
-> Motion

## Contribution

-> Guillaume HUGUET

## License

Ce projet est sous licence MIT.

**Important**

Les contenus (textes, images, données) présents dans ce projet appartiennent au client.  
Ils sont inclus ici uniquement à des fins de démonstration.  
Merci de ne pas réutiliser ni diffuser ces données.
