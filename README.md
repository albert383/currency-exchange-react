# Currency Exchange - React

## About

This project is a simple Currency Exchange application built using **React**, **CSS**, **JavaScript**, **Create React App**, and **JSX**. The application allows users to enter a specific amount in PLN, choose a currency to convert to, and receive the calculated exchange rate. The app is responsive and features a clean, user-friendly design.

## Technologies Used

- **React**: Library for building user interfaces.
- **JavaScript (ES6+)**: For the logic behind the currency conversion and managing state.
- **CSS**: Styled using Flexbox for layout and media queries for responsiveness.
- **Create React App**: For bootstrapping the application.
- **Webpack and Babel**: Bundling and transpiling JavaScript code.
- **JSX**: Syntax extension for JavaScript used in React components.

## Features

- **Currency Conversion**: 
  - Users can input an amount in PLN and select a currency (EUR, CHF, USD) to see the converted value.
- **Responsive Design**:
  - Fully responsive, adapting to different screen sizes, including desktops, tablets, and mobile devices, ensuring a seamless user experience.
- **Form Validation**:
  - Input fields are validated to ensure that users provide valid numerical values before conversion.
- **Real-time Calculations**:
  - The exchange rate is updated in real-time when the user selects a currency or changes the input amount.
   **Real-time Clock**:
  - A clock is displayed at the top of the application, showing the current date and time in the format: "Dzisiaj jest sobota, 25 lipca, 17:02:23". The clock updates every second.
    **Styled-components**:
  -  All styles have been migrated to styled-components, making it easier to manage styles and ensuring modularity.

## Recent Updates

### Currency Selection with `Select` Dropdown
- Replaced radio buttons with a dropdown (`<select>`) for selecting currencies, providing a cleaner user interface.
- The available currencies (EUR, USD, CAD, GBP, CHF) are fetched dynamically from the **CurrencyAPI**.

### API Integration
- Integrated with the **CurrencyAPI** to fetch real-time exchange rates.
- The base currency is set to PLN, and exchange rates are fetched for multiple currencies.

### State Management
- A custom hook `useCurrencyRates` is used to manage application state, including:
  - The selected currency.
  - The entered amount in PLN.
  - The fetched exchange rates.
  - The last update date of the exchange rates from the API.
  - Error and loading states to handle API responses effectively.

### Date Display from API
- The application displays the last updated date of the exchange rates, retrieved from the API, below the conversion result.

### Loading Indicator
- A loading indicator is displayed with a delay of 3 seconds, showing a message while the exchange rates are being fetched from the API.

## Demo

![Adding Task](https://zapodaj.net/images/a0de31e9d61fb.gif)

You can see the app live at: [albert383.github.io/currency-exchange-react](https://albert383.github.io/currency-exchange-react/)

## Installation and Setup Instructions

1. **Clone the repository to your local machine**:

   ```bash
   git clone https://github.com/albert383/currency-exchange-react.git
   cd currency-exchange-react


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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