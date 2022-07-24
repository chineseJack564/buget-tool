import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContextProvider from '../contexts/AuthContext';
import Layout from '../components/Layout';
import LoginPage from '../views/login/login';
import CreateBudgetView from '../views/CreateBudget/CreateBudget';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { useLocation } from 'react-router-dom';
import ShowBudgetView from '../views/showBudget/ShowBudget';
function AppRouter() {
    const {state} =  useLocation();
    return ( 
        <AuthContextProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<PublicRouter component={<LoginPage />} />}/>
                    <Route exact path="create-budget" element={<PrivateRouter component={<CreateBudgetView />}/>}/>
                    {state ? <Route exact path="budget-resume" element={<PrivateRouter component={<ShowBudgetView />}/>}/> : null}
                </Routes>
            </Layout>
        </AuthContextProvider>
     );
}

export default AppRouter;