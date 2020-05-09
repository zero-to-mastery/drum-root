<p align="center">
<a href="https://github.com/zero-to-mastery/drum-root">
<img src="./docs/images/drum-root.svg" width="60%" alt="drum-root" />
</a>
</p>

[![Build Status](https://travis-ci.com/zero-to-mastery/drum-root.svg?branch=master)](https://travis-ci.com/zero-to-mastery/drum-root)
![GitHub](https://img.shields.io/github/license/joshtru/drum-root)
![GitHub top language](https://img.shields.io/github/languages/top/zero-to-mastery/drum-root?color=gree&style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/zero-to-mastery/drum-root)
![GitHub contributors](https://img.shields.io/github/contributors/zero-to-mastery/drum-root?color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/zero-to-mastery/drum-root)

Drum root is a React Web App for Creating and Sharing Drum Loops. See [Drum Root API](https://github.com/rgavinc/drum-root-api) for Back End Service.

## Features

- Create Drum Loops
- Record Custom Sounds
- Save and Share Drum Loops With Others

---

## Table of content

- [Installation](#Installation)
- [Running](#Running)
  - [Locally in Development Mode](#Locally-in-Development-Mode)
  - [Storybook](#Storybook)
- [Testing](#Testing)
  - [in Development Mode](#in-Development-Mode)
- [Building and Deploying](#Building-and-Deploying)
  - [For Production](#For-Production)
- [Contributing](#Contributing)
  - [What To Know Before Contributing](#What-To-Know-Before-Contributing)
  - [Adding Name To Contributors List](#Adding-Name-To-Contributors-List)
- [Style Guide](#Style-Guide)
- [Technologies](#Technologies)
  - [Front End](#Front-End)
  - [Back End](#Back-End)
- [Team Leaders](#Team-Leaders)
  - [Current Team Lead Members](#Past-Team-Lead-Members)
  - [Past Team Lead Members](#Past-Team-Lead-Members)
- [License](#License)

---

## Installation

To get it working, you need to install all the dependencies. And the best way to do this is through the [Command Line Interface (CLI)](https://en.wikipedia.org/wiki/Command-line_interface).

To get started, make sure you have either of the package manager, [NPM](https://docs.npmjs.com/about-npm/) or [Yarn](https://yarnpkg.com/getting-started) installed and working on your machine.

> To install the packages through npm, run the command

    npm install

> To install the packages through yarn, run the command

    yarn add

**_NOTE_**: In the rest of the documentation, you will come across npm being used for running commands. To use **_yarn_** in place of **_npm_** for the commands, simply substitute npm for yarn. Example, `npm start` as `yarn start`. For more help, checkout [migrating from npm](https://classic.yarnpkg.com/en/docs/migrating-from-npm/)

---

**[⬆ Back to Top](#Table-of-content)**

## Running

### Locally in Development Mode

The backend code should be running in order for the front end to behave correctly. See [Drum Root API](https://github.com/rgavinc/drum-root-api).

To get started with the front end, fork the repository and run the following command on your local machine:

    npm run dev

### Storybook

Storybook is a way to view the components in isolation. To view Drum Root's storybook, run the following command:

    npm run storyboook

---

## Testing

### in Development Mode

If this is your first time running tests, begin by ensuring your packages are installed. If not, [install packages](#Installation).

To get started with Unit Test, run the following command:

    npm run test

To get started with Integration/End to End Test, run the following command:

    npm run test:e2e

---

**[⬆ Back to Top](#Table-of-content)**

## Building and Deploying

### For Production

If you wanted to run this site in production, you should have installed packages. If not, [install packages](#Installation), then build the site with `npm run build` and run it with `npm start`:

    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

---

**[⬆ Back to Top](#Table-of-content)**

## Contributing

Drum Root happily accepts contributions.

## What To Know Before Contributing

To begin contribution, there are some things you need to know, like what to do first, where to find tasks, any additional questions, and notes provided for contributors. You can begin at [**_Contributing to Drum Root_**](./CONTRIBUTING.md#Contributing-to-Drum-Root)

## Adding Name To Contributors List

We recommend every contributor to add their name to the contributors list. A detailed intructions on how to get this done be found at [**_DRUM ROOT CONTRIBUTORS_**](./CONTRIBUTORS.md#Drum-Root-Contributors)

---

**[⬆ Back to Top](#Table-of-content)**

## Style Guide

The style guide is a set of standard outlined on how code should be written. We currently follow the [AirBnB style guide](https://github.com/airbnb/javascript), but you can checkout [Drum Root style guide](https://github.com/zero-to-mastery/drum-root/wiki/Drum-Root-Style-Guide) for any additional information.

---

**[⬆ Back to Top](#Table-of-content)**

## Technologies

### Front End

- [React](https://reactjs.org/) - JavaScript UI Library
- [Next.js](https://nextjs.org/) - Server Side Rendering
- [Styled Components](https://www.styled-components.com/) - Styling
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - A library to test React UI components
- [Puppeteer](https://developers.google.com/web/tools/puppeteer) - A Node Library for Controlling Headless Chrome or Chromium. Used for end to end Testing
- [Storybook](https://storybook.js.org/) - Tool for Developing UI Components in Isolation

### Back End

- [Express](https://expressjs.com/) - Web Framework for Node.js
- [PostgreSql](https://www.postgresql.org/) - Relational Database(Coming Soon)
- [Redis](https://redis.io/) - In-Memory Data Structure Store used for Authorization(Coming Soon)

---

**[⬆ Back to Top](#Table-of-content)**

## Team Leaders

### Current Team Lead Members

- Project Lead - [joshtru](https://github.com/joshtru)
- Front End Lead - needed
- Back End Lead - [yashShelatkar](https://github.com/yashShelatkar)
- QA Lead - [zbc](https://github.com/zbc)
- Database Lead - [Aneesh](https://github.com/aneesh4995)
- Designer/ Styling Lead - [LukasHirt](https://github.com/LukasHirt)

### Past Team Lead Members

- [rgavinc](https://github.com/rgavinc) - Project Lead _Oct 2019 - Jan 2020_
- [Dhaval](https://github.com/Dhaval1403) - Front End Lead _Oct 2019 - Nov 2019_
- [rvvergara](https://github.com/rvvergara) - QA Lead _Oct 2019 - Dec 2019_
- [marcoseoane](https://github.com/marcoseoane) - Front End Lead _Nov 2019 - Dec 2019_
- [linconkusunoki](https://github.com/linconkusunoki) - Designer/ Styling Lead _Oct 2019 - Jan 2020_

---

**[⬆ Back to Top](#Table-of-content)**

## License

This project is licensed under the MIT License - see the [License](./LICENSE) file for details

**[⬆ Back to Top](#Table-of-content)**
