import React from 'react'
import Index from './view'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <Index></Index>
    </Provider>
  )
}

export default App;
