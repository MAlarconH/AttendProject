import { AdminLayout } from "../layouts"
import { HomeAdmin, UsersAdmin, CategoriesAdmin, EventAdmin } from "../pages/Admin"


const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true,
    },

    {
        path: "/admin/users",
        layout: AdminLayout,
        component: UsersAdmin,
        exact: true,
    },

    {
        path: "/admin/categorias",
        layout: AdminLayout,
        component: CategoriesAdmin,
        exact: true,
    },

    {
        path: "/admin/events",
        layout: AdminLayout,
        component: EventAdmin,
        exact: true,
    },
];

export default routesAdmin;