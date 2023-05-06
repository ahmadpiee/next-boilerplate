import { combineReducers } from '@reduxjs/toolkit'
import storage from '@store/storage'

// reducers
import { aboutApi } from './slice/about-us'
import { authApi } from './slice/auth'

export const combineReducer = combineReducers({
  [aboutApi.reducerPath]: aboutApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})

export const combineMiddleware = [aboutApi.middleware, authApi.middleware]

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
}
