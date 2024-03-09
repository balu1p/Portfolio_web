import ReactDOM from 'react-dom/client.js';
import Home from './src/Components/Home';
import Skill from './src/Components/Skill';
import Project from './src/Components/Projects';
import Contact from './src/Components/Contact.js';
import Navbar from './src/Components/Navbar.js';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const AppLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/skill',
                element: <Skill/>,
            },
            {
                path: '/projects',
                element: <Project/>,
            },
            {
                path: '/contactus',
                element: <Contact/>,
            },
        ],
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);