import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import './css/styles.css'
import './css/media.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'


const main = ReactDOMClient.createRoot(document.getElementById('main'))
const header = ReactDOMClient.createRoot(document.getElementById('header'))
const footer = ReactDOMClient.createRoot(document.getElementById('footer'))

header.render(<Header />)
main.render(<Main />);
footer.render(<Footer />)