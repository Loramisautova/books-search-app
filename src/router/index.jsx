import React, { useMemo } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { ROUTES } from './consts';
import { MainPage } from '../pages/Main';
import { Header } from '../components/Header';
import { ResultsPage } from '../pages/Results';
import { DetailsPage } from '../pages/Details';

export const AppRouter = () => {
    const location = useLocation();

    const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);

    return (
        <Switch>
            <Route path={[ROUTES.SEARCH.PATH, ROUTES.DETAILS.PATH]}>
                <Header />
                <Switch>
                    <Route path={ROUTES.SEARCH.PATH} exact>
                        {queryParams.get('q') ? <ResultsPage /> : <Redirect to={ROUTES.MAIN.PATH} />}
                    </Route>
                    <Route component={DetailsPage} path={ROUTES.DETAILS.PATH} />
                </Switch>
            </Route>
            <Route component={MainPage} path={ROUTES.MAIN.PATH} exact />
            <Redirect to={ROUTES.MAIN.PATH} />
        </Switch>
    );
}
