/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 21:36:37
 * @LastEditTime: 2022-03-30 22:41:36
 * @LastEditors: Pacific_D
 * @Description: 
 * @FilePath: \cr-frontend\src\index.tsx
 */
import { ColorModeScript } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom"
import { App } from "./pages/App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()
