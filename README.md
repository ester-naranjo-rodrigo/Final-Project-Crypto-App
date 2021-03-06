# Final-Project-Crypto-App

This project is a web application where users can access to the following funcionalities:
  - Without log in:
    - Current values of cryptocurrencies
    - Historic charts and values of cryptocurrencies
    - Currency converter
    
  - With log in:
    - Profile where users can store and see their investments
    - Detailed charts of each cryptocurrency investment along time
## Cryptocurrency values in Real Time 
For this first version of the project, I have chosen 12 cryptocurrencies but future versions will increase the number of cryptocurrencies analized. [Financial Modeling Prep API](https://financialmodelingprep.com/developer/docs/) is the public API used to obtain historic and current cryptocurrency values. The current cryptocurrency values are dispayed in "Home":

![alt text](https://github.com/ester-naranjo-rodrigo/Final-Project-Crypto-App/blob/main/img/home.PNG)

## Historic set of values  
You can access to historic values choosing the period you want and displaying it in a candlestick chart (values of open/high/low/close are shown of each day). Users can access to this seccion clicking in the cryptocurrency they want in "Home".

![alt text](https://github.com/ester-naranjo-rodrigo/Final-Project-Crypto-App/blob/main/img/historic.PNG)

## Log In 
Users can access to their account or create an account if they have not any. Only logged in users can use Portfolio options:

![alt text](https://github.com/ester-naranjo-rodrigo/Final-Project-Crypto-App/blob/main/img/logIn.PNG)

## Portfolio
Users can access, manage, store, edit and delete easily their personal settings and their investments, the app store and update all inverstment and user data in real time (MySQL database connection). The inversions are grouped and displayed by cryptocurrency, all investments sections have a "Show Chart" option to obtain more detailed data about the user investment by cryptocurrency along time based in the invested quantity and historical values:

![alt text](https://github.com/ester-naranjo-rodrigo/Final-Project-Crypto-App/blob/main/img/portfolio.PNG)

## Detailed Investments charts
Users can obtain all their investment detailed by cryptocurrency and represented along time in a chart where they can zoom and display diary data.

![alt text](https://github.com/ester-naranjo-rodrigo/Final-Project-Crypto-App/blob/main/img/portfoliochart.PNG)

## Exchange util
Currency converter to calculate live currency values:

![alt text](https://github.com/ester-naranjo-rodrigo/Final-Project-Crypto-App/blob/main/img/exchange.PNG)
