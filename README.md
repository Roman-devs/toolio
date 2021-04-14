# TooLio
 
To run the app, all you need is to clone this repository and switch into the frontend folder.
Once in there, you may run the frontend server after installing npm:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Alternatively you may check out the app via the provided deployment Link!

## About

TooLio is a B2B platform, that enables users to post Inquiries of machining parts onto the platform. Once an Inquiry is posted, other users may
make offers for the production of the inquired parts. The goal is to simplify the process of finding suppliers with appropriate machining tools for the production of CAD prototypes in any material desired - for example: 3D printers etc.

This web application was programmed within 4 weeks of the NeueFische Fullstack-Development Bootcamp. It serves as my capstone project and will be enhanced with features in the future. 

## Implemented Features

* The user is automatically redirected to the login page of the app
    * Routing is ensured by using React Router and Authorization with Protected Routes
* The connected MongoDB only stores hashed Passwords using ```BCryptEndoder```
* ```Spring Security``` with ```JWT```-token ensures that only valid users may initiate GET and PUT Requests
* Currently, the Requests that are also implemented in the Frontend are:
    * GET all inquiries \
          Get all Inquiries from the MongoDB to be displayed on Overview page
    * GET an inquiry by ID \
          This is required when making an offer
    * DELETE an inquiry by ID\
      Deletes an inquiry from the database
    * POST an inquiry to the Database\
          Inquiry will be written in the database
    * GET all offers that are received\
          In the account of the user, all offers can be displayed as a list with cards
    * POST an offer to the database\
    Creates an offer with a form which is then written into the database and added to both the posting user, as well as the recipient. 

## Features to be implemented

In order to ensure a more realistic approach to the B2B concept, a file upload for e.g. technical drawings or pictures in general will be implemented. 
The MVP currently does not implement this feature.
    
        

