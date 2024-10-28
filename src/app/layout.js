// app/layout.js
"use client";
import { Provider } from 'react-redux';
import store from '../store/store'; // Adjusted import path
import Header from '../app/component/header/Header'; // Adjusted import path
import Footer from '../app/component/FooterPart/Footer'; // Adjusted import path
import '../app/styles/globals.css';


const RootLayout =({ children })=> {
  return (
    <html lang="tr">
      <body>
        <Provider store={store}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
export default RootLayout