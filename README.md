# My eCommerce Store

This project is a work-in-progress eCommerce store built in React and Typescript, currently with a Node & Express backend. It integrates with Stripe for customer payments.

Products and categories are created using a custom CMS ([viewable here.](https://github.com/kalvinhart/shop-cms)) and product images are uploaded there via AWS S3.

Authentication is handled by the Express backend with JSON Web Tokens.

You can find a live version of this project hosted [here](https://mernestore.herokuapp.com).

## Running Locally

#### Prerequisites

- Node JS
- MongoDB
- A free developer account with Stripe

#### 1. Clone the repo and install dependencies

```bash
git clone
npm i
cd ./client/
npm i
```

#### 2. Create a .ENV file in the root folder

This should include the following variables:

- `MONGO_URI_DEV` - the URI to access your local Mongo DB. This is usually `mongodb://localhost:27017/{{database_name}}`
- `JWT_SECRET` - a secret string used by the JWT package when creating access tokens.
- `STRIPE_SECRET_KEY` - a secret key provided to you on your Stripe dashboard.

#### 3. Create a .ENV file in the `client` folder

This should include the following variables:

- `REACT_APP_STRIPE_PUBLISHABLE_KEY` - a publishable key provided to you on your Stripe dashboard.

#### 4. Start your MongoDB

Usually this is just done by entering the `mongod` command on the command line.

#### 5. Start the application

To run in development mode using nodemon:

```bash
npm run dev
```

## Features

- Browse all products. These can be sorted and filtered as required. Results are paginated.
- Search for a product. Enter a search term in the search bar to reveal search suggestions.
- View individual product descriptions.
- Add products to cart in the required quantity.
- See a list of recently viewed products.
- Add products to wishlist - the UI for this is currently not implemented but the products can be added which are stored in the database.
- View your cart. Cart information is stored in local storage which is loaded on application start up. 
- Adjust products in your cart.
- Authentication - you must sign in to your account in order to proceed to checkout.
- Proceed to checkout and pay for your items via Stripe integration.

## Technologies/Packages

The packages used in creating this application are:

### Front End

- react
- react-router-dom
- reduxjs toolkit
- typescript
- stripe
- styled-components
- axios
- react-hook-form
- react-hot-toast

### Back End

- aws-sdk
- bcrypt
- cors
- express
- jsonwebtoken
- mongoose
- passport-jwt
- stripe
