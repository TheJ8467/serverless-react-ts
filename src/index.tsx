import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './components/App'
import './tailwind.css'
import './index.css'

const el = document.getElementById('root') as HTMLElement
const root = createRoot(el)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
