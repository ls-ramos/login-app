## Login app
This project is a demonstration of a login functionality 

## General structure of the project

  ```
   |-public`
   |---locales
   |-----de
   |-----en
   |-----pt
   |-src
   |---components
   |---__mocks__
   |---models
   |---pages
   |---styles
   |---test
   |-----components
   |-----pages
   |---utils
  ```

## What would i do better if i had more time with this project ?

- Improve the quality of the unit tests for a more secure and resilient application by adding more tests and testing more specific behaviors

- Improve the work flow regarding localization, because at the moment if a new text is added the programmer needs to manually add translations to each translation files

- Improve the UI in general by making it more modern and more flexible with the addition of themes, mostly the addition of a dark theme :)!

- Improve mobile experience, based on my current tests on 2 different android phones and 2 different browsers it is possible to use the application in a cellphone but the experience can be improved

- Set the jwt cookie as https-only with the server and make requests in axios using `withCredentials` flag for enhance security, for now the jwt cookie is only set with `secure` and `sameSite` flags but still accessible with `document.cookies`

- Improve the Snackbar component as i believe it can be better implemented to avoid future bugs

## Challenges of this project
- It was the first time I implemented an application almost fully with Typescript and Hooks and without the use of state management such as mobx, so it was a nice challenge to review the use of those concepts

- There was an error during the deployment due packages incompatibilities, but it was resolved by changing the script of AWS amplify to use a specific version of nodeJS

## Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`
Launches the test runner in the interactive watch mode.

### `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
