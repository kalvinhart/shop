# My eShop

This project is a work-in-progress eCommerce store built in React and Typescript, currently with a Node & Express backend (which is being rewritten in C# .Net for a future update). It integrates with Stripe for customer payments.

Products and categories are created using a custom CMS ([viewable here.](https://github.com/kalvinhart/shop-cms)) and product images are uploaded there via AWS S3.

Authentication is handled by the Express backend with JSON Web Tokens.

You can find a live version of this project hosted [here](https://mernestore.herokuapp.com).

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
