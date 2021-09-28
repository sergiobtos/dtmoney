import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from "miragejs";
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Aplicação Web com ReactJS",
          type: "deposit",
          category: "jobs",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "house",
          amount: 800,
          createdAt: new Date("2021-03-01 10:00:00"),
        },
      ],
    });
  },

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
