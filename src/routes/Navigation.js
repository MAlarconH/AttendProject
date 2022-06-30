import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { map } from "lodash"
import routes from './routes'
import { Error404 } from '../pages'

export function Navigation() {
  console.log("routes --->", Error404)

  return (
    <BrowserRouter>
      <Routes>
        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              // route.path="*" ? (<redirect to=""/>) : (<route.layout> </route.layout>)
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}


