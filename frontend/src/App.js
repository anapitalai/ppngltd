import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import EmailScreen from './screens/EmailScreen'
import LogoBanner from './components/LogoBanner'
import CommercialScreen from './screens/CommercialScreen'
import OtherservicesScreen from './screens/OtherservicesScreen'
import VaccantlandScreen from './screens/VaccantlandScreen'
import ResidentialScreen from './screens/ResidentialScreen'
import ObsidianEmailScreen from './screens/ObsidianEmailScreen'
import ImageModal from './components/ImageModal'

const App = () => {
  return (
    <Router>
      <LogoBanner />
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/contacts' component={ContactScreen} />
          <Route path='/email' component={EmailScreen} />
          <Route path='/obsidian-email' component={ObsidianEmailScreen} />

          <Route path='/otherservices' component={OtherservicesScreen} />
          <Route path='/residential' component={ResidentialScreen} />
          <Route path='/vacant' component={VaccantlandScreen} />
          <Route path='/commercial' component={CommercialScreen} />
          <Route path='/about' component={AboutScreen} />

          <Route path='/modal' component={ImageModal} />


        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
