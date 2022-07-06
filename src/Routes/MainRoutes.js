import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Settings from './../pages/Settings';

export const Mainroutes = {
        path: "/",
        element: <DashboardLayout/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/settings',
                element: <Settings/>
            },

        ],
}
