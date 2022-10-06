## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Setup](#setup)
* [Usage](#usage)

## General Information
- Product Development Studio

## Technologies Used
- gatsby - version ^4.17.2
- @fullpage/react-fullpage - version ^0.1.26
- react - version ^18.1.0
- react-slick - version ^0.29.0
- gatsby-plugin-sass - version ^5.17.0

## Setup
To run this project, install it locally using npm:

```
$ npm install
$ gatsby develop
```

## Usage
- Data site located `/src/utils/utils.js`
- File by path `/src/pages/index.js` this is the main file for displaying the initial page.
- Folder by path `/src/styles` contains a file of variables and a file with basic common styles.
If you need create styles of component you should create a file with the extension `.sass` in the component folder 
and connect style in file with the extension `.js`. Example: `import "./Form.sass"`
- Image save in `/static` folder. Connect image `<img src='image name' alt=""/>`
- The project uses a react-slider. File `/src/components/Section/SectionType/SectionSlider.js`.
In order for the slider to work with different markup options must be specified props identifier,
example `slideType={'team'}` and create markup in `switch (slideType) { case "team":}`

Deploy
- Open PR to main branch and  go to [site](https://svistel-website-3j048rg0j-rsvistel.vercel.app) `https://svistel-website-3j048rg0j-rsvistel.vercel.app`