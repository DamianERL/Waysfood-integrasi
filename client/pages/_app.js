import '../styles/globals.css'
import '../styles/tailwind.css'
import App from 'next/app';
import { UserContextProvider } from '../app/userContext';
import { CartContextProvider } from '../app/cartContext';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (  
      <CartContextProvider>
        <UserContextProvider>
          <Component {...pageProps} />  
        </UserContextProvider>
      </CartContextProvider>
    );
  }
}

export default MyApp;
