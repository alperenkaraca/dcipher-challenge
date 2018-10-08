import React from 'react'
import Dashboard from '../components/Dashboard.jsx'
import store from '../store'
import Provider from 'react-redux/es/components/Provider'

const RootContainer = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
)

export default RootContainer
