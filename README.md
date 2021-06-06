# Gists Api App

Use the API provided by Github Gist API, to create 
A basic single-page application using the API provided by [Github Gist API](https://docs.github.com/en/rest/reference/gists) with any Web framework. The goal of this application is to allow its users to enter a username and get the full list of public Gists for that user.

## Important dependecies/libraries
- [Ant Design React](https://ant.design/) for designs (modal)
- [ESLint](https://eslint.org/) for writing clean code
- [Axios](https://www.npmjs.com/package/axios) for request data from API
- [Sass](https://sass-lang.com/)

## Installation

Fist be sure that you have nodeJS intalled. If not, use this [link](https://nodejs.org/en/) to download and install node.

Open the `/front-react` folder and install packages using

```bash
npm install
```

## Start the application

In `/front-react` folder use the command

```bash
npm start
```

The application will open at `http://localhost:3000/` showing the main page of the application.

![Main Page](https://raw.githubusercontent.com/iustina02/GistsApiApp/main/GistsApp.PNG)



## Features
Here's the list of full functionality required for the assignment: 

- Search: When a user enters a username, they should be able to get a full list of public Gists by that user. 

- Filetypes: Convert the filetypes of the files in the Gist into a tag/badge (For example, if the returned Gist has a list of files containing Python and Javascript files, the items listed should have the respective tags/badges). 

- Forks: Additionally, include with the list of the Gists, the username and avatar of the last 3 users who have forked it. 

- Gist contents: When clicking one of the Gist's file, display the content of the file

![Modal](https://raw.githubusercontent.com/iustina02/GistsApiApp/main/GistsAppModal.png)

- Style: the application is responsive 
