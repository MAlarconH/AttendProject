import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import { Error404 }  from "../pages";
import { BasicLayout } from "../layouts"

const routes = [

    ...routesAdmin,
    ...routesClient, 

    {
        // Revisar el error404 :c 
        layout: BasicLayout,
        component: Error404,
    }
];

export default routes;