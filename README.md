### API TESTING EXAMPLE

This repository contains the following:

1) Simple NodeJS Express web service with basic CRUD operations
2) A suite of API tests that test the web service by making REST calls using the [Jest](https://jestjs.io/) and [SuperTest](https://github.com/visionmedia/supertest#readme) test frameworks.

##### NODEJS Express Web Service Setup

After cloning the repository, run the following commands to install the dependencies for the service:

    cd sample-api-test
    npm install

To start the web service:

    npm start

To stop the service:

    pm2 kill


##### API Test Suite Setup

Run the following commands to install the dependencies for API tests:

    cd sample-api-test/integration-tests
    npm install

To run the tests:

    npm test


##### Resources

**Jest** - https://jestjs.io/
**SuperTest** - https://github.com/visionmedia/supertest#readme



