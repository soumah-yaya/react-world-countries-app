import { createBrowserRouter } from 'react-router-dom'
import { Home, Detail } from "../pages";
import { countryLoader } from './country-loader'
import App from '../App'
import { detailLoader } from './detail-loader';
import { PageNotFound } from '../components';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: countryLoader,
                errorElement: <PageNotFound />
            },
            {
                path: '/:countryId',
                element: <Detail />,
                loader: detailLoader,
                errorElement: <PageNotFound />
            }
        ]

    },
    {
        path:'*',
        element: <PageNotFound/>
    }
])

export default router