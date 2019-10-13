import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { ThemeProvider } from 'emotion-theming'
import { theme } from './styled'
import { BrowserRouter as Router } from 'react-router-dom'

const ProviderWrapper: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                {children}
            </Router>
        </Provider>
    </ThemeProvider>
)

export default ProviderWrapper
