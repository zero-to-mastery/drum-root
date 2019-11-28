# Drum Root

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
- [Puppeteer](https://developers.google.com/web/tools/puppeteer) - A Node Library for Controlling Headless Chrome or Chromium. Used for end to end Testing(Coming Soon)
- [Storybook](https://storybook.js.org/) - Tool for Developing UI Components in Isolation

### Back End

- [Express](https://expressjs.com/) - Web Framework for Node.js
- [PostgreSql](https://www.postgresql.org/) - Relational Database(Coming Soon)
- [Redis](https://redis.io/) - In-Memory Data Structure Store used for Authorization(Coming Soon)

## Team

- Project Lead - [rgavinc](https://github.com/rgavinc)
- Front End Lead - [marcoseoane](https://github.com/marcoseoane)
- Back End Lead - [yashShelatkar](https://github.com/yashShelatkar)
- QA Lead - [rvvergara](https://github.com/rvvergara)
- Database Lead - [Aneesh](https://github.com/aneesh4995)
- Designer/ Styling Lead - [linconkusunoki](https://github.com/linconkusunoki)

### Past Team Lead Members

- [Dhaval](https://github.com/Dhaval1403)

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

Storybook is a way to view the compoonent's in isolation. To view Drum Root's storybook run the following command:

    npm run storyboook

## Running Test in Development Mode

If you are the first time to start the tests, run the following command to ensure all related packages installed:

    npm install

To get started with Unit Test, run the following command:

    npm run test

To get started with Integration/End to End Test, run the following command:

    npm run test:e2e
