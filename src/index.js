import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './views/login/login';
import CreateBudgetView from './views/CreateBudget/CreateBudget';
import ShowBudgetView from './views/showBudget/ShowBudget';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
import "./App.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      {/* <LoginPage /> */}
      {/* <CreateBudgetView /> */}
      <ShowBudgetView />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
