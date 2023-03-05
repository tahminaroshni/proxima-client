# Proxima

Proxima is a web application that allows users to add, update, and delete their project information. This is application is split into two parts, the client-side and server-side.

## Features

 * **Add project information:** Users can add their project information such as title, description, and GitHub repository link. 
 * **Update project information:** Users can update their existing project information. 
 * **Delete project information:** Users can delete their existing project information. 
 * **Autentication system:** JWT is used for authentication and Bcrypt is used for password hashing. 
 * **User specific information:** Each user can only see their own project information. 

## Tools

 * **React:** JavaScript library for buildin user interfaces.
 * **React Router:** Library for client-side routing in a React application.
 * **Tailwind CSS:** Utility-first CSS framework for stylin websites.
 * **Node.js:** JavaScript runtime for running JavaScript on the server side.
 * **Express:** Web application framework for Node.js to create a RESTful API.
 * **MongoDB:** NoSQL database that stores data in JSON-like documents.
 * **Mongoose:** MongoDB object modeling tool that provides a higher-level API for interacting with the database.
 * **JWT:** JSON Web Tokens for authentication and authorization in web applications.
 * **Bcrypt:** Password hashing function for securely storing passwords in the database.
 
## Installation
 
To install the project, you'll need to clone the repository and set up the environment variables for both the client-side and server-side.
 1. Clone the client repository:\
    `git clone https://github.com/tahminaroshni/proxima-client.git`
 2. Clone the server repository:\
    `git clone https://github.com/tahminaroshni/proxima-server.git`
 3. Install dependencies run for both the client and server side:\
    `npm install`
 4. Set up environment variables:\
   * For the client-side, create a `.env` file in the root directory and add the following line, replacing `<base_url>` with the URL of the server-side:\
     `REACT_APP_BASE_URL=<base_url>`
   * For the server-side, create a `.env` file in the root directory and add the following line, replacing `<mongo_uri>` with the MongoDB URI and `<secret>` with a secret string for JWT:\
     `MONgO_URI=<mongo_uri>`
     `SECRET=<secret>`
 5. Start both the client and server side:\
     `npm start`
     
 ## Links
 
 * [Live Demo](Live Demo)
 * [Front-End Repository](Front-End Repository)
 * [Back-End Repository](Back-End Repository)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
