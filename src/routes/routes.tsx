import { RouteObject } from 'react-router-dom';
import { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Prestation from '../pages/Prestation/Prestation';
import Projet from '../pages/Projet/Projet';
import SingleProject from '../pages/SingleProject/SingleProject';
import Galerie from '../pages/Galerie/Galerie';
import LegalNotice from '../pages/LegalNotice/LegalNotice';
import NotFound from '../pages/NotFound/NotFound';


// Le typage de route est la pour s'assurer que chaque route contient bien un élément React valide
// '&' permet de forcer le typage de 'element', il assure que 'element' soit uniquement de type 'ReactElement'

type AppRoute = RouteObject & {
    element: ReactElement;
}

const routes: AppRoute[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '', element: <Home />},
            {path: 'prestation', element: <Prestation />},
            {path: 'projet', element: <Projet />},
            {path: 'projet/:slug', element: <SingleProject /> }, // Dynamique Page
            {path: 'galerie', element: <Galerie />},
            {path: 'legal', element: <LegalNotice />},
            {path: '*', element: <NotFound />}
        ]
    },
    
];

export default routes;