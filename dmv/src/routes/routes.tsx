import { RouteObject } from 'react-router-dom';
import { ReactElement } from 'react';

import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Galerie from '../pages/Galerie/Galerie';
import NotFound from '../pages/NotFound/NotFound';
import Prestation from '../pages/Prestation/Prestation';
import Projet from '../pages/Projet/Projet';
import Layout from '../components/Layout/Layout';


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
            {path: 'galerie', element: <Galerie />},
            {path: 'contact', element: <Contact />},
            {path: '*', element: <NotFound />}
        ]
    },
    
];

export default routes;