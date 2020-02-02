# Drum Root

[![Build Status](https://travis-ci.com/zero-to-mastery/drum-root.svg?branch=master)](https://travis-ci.com/zero-to-mastery/drum-root)

A React Web App for Creating and Sharing Drum Loops. See [Drum Root API](https://github.com/rgavinc/drum-root-api) for Back End Service.

## Features

- Create Drum Loops
- Record Custom Sounds
- Save and Share Drum Loops With Others

## Tech

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

## Team

- Project Lead - [joshtru](https://github.com/joshtru)
- Front End Lead - needed
- Back End Lead - [yashShelatkar](https://github.com/yashShelatkar)
- QA Lead - [zbc](https://github.com/zbc)
- Database Lead - [Aneesh](https://github.com/aneesh4995)
- Designer/ Styling Lead - needed

### Past Team Lead Members

- [rgavinc](https://github.com/rgavinc) - Project Lead _Oct 2019 - Jan 2020_
- [Dhaval](https://github.com/Dhaval1403) - Front End Lead _Oct 2019 - Nov 2019_
- [rvvergara](https://github.com/rvvergara) - QA Lead _Oct 2019 - Dec 2019_
- [marcoseoane](https://github.com/marcoseoane) - Front End Lead _Nov 2019 - Dec 2019_
- [linconkusunoki](https://github.com/linconkusunoki) - Designer/ Styling Lead _Oct 2019 - Jan 2020_

---

## Running Locally in Development Mode

The backend code should be running in order for the front end to behave correctly. See [Drum Root API](https://github.com/rgavinc/drum-root-api).

To get started with the front end, fork the repository and run the following commands:

    npm install
    npm run dev

## Building and Deploying in Production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

## Running Storybook

Storybook is a way to view the components in isolation. To view Drum Root's storybook, run the following command:

    npm run storyboook

## Running Test in Development Mode

If you are the first time to start the tests, run the following command to ensure all related packages installed:

    npm install

To get started with Unit Test, run the following command:

    npm run test

To get started with Integration/End to End Test, run the following command:

    npm run test:e2e
