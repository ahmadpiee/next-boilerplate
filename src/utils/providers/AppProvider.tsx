'use client'
import { AnimatePresence } from 'framer-motion'
import { persistor, store } from '@store/index'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AnimatePresence>{children}</AnimatePresence>
      </PersistGate>
    </Provider>
  )
}
