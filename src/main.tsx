import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Survey from './pages/Survey/';
import Header from './components/Header';
import Error from './components/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import { createGlobalStyle } from 'styled-components';
import { SurveyProvider, ThemeProvider } from './utils/Context';
import GlobalStyle from './utils/style/GlobalStyle';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
