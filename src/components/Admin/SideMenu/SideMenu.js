import React from 'react';
import { Menu, Icon} from "semantic-ui-react";
import { Link, useLocation} from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./SideMenu.scss";

export function SideMenu(props) {
    const { children } = props;
    const { pathname } = useLocation();
    console.log(useLocation());

  return (
    <div className='side-menu-admin'>
        <MenuLeft pathname={pathname} />
        <div className='content'> { children } </div>
    </div>
  )
}

//Menu lateral
function MenuLeft(props) {
    const { pathname } = props;
    const { auth } = useAuth();
    console.log(auth)

    return (
        <Menu fixed='left' borderless className='side' vertical>

            <Menu.Item as={Link} to={'/admin'} active={pathname === "/admin"} >
                <Icon name='home' /> Home
            </Menu.Item>

            <Menu.Item as={Link} to={'/admin/categorias'} active={pathname === "/admin/categorias"} >
                <Icon name='archive' /> Categorias
            </Menu.Item>

            <Menu.Item as={Link} to={'/admin/events'} active={pathname === "/admin/events"} >
                <Icon name='calendar outline' /> Eventos
            </Menu.Item>

            <Menu.Item as={Link} to={'/admin/assists'} active={pathname === "/admin/assists"} >
                <Icon name='history' /> Historial de asistencias
            </Menu.Item>

            {auth.me?.is_staff && (
                <Menu.Item as={Link} to={'/admin/users'} active={pathname === "/admin/users"} >
                    <Icon name='users' /> Usuarios
                </Menu.Item>
            )}

        </Menu>
    )
}
