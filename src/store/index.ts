'use client'

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import {
  persistConfig,
  combineMiddleware,
  combineReducer,
} from '@store/reducers'
import { isNotProduction } from '@utils/helpers/process-env'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
// hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const reducers = persistReducer(persistConfig, combineReducer)

export const store = configureStore({
  reducer: reducers,
  devTools: isNotProduction,
  middleware: (defaultMiddleware) => {
    if (isNotProduction) {
      return defaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(logger)
        .concat(combineMiddleware)
    } else {
      return defaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(combineMiddleware)
    }
  },
})

export const persistor = persistStore(store)

// export const selectAbout = (state: RootState) => state.about
