
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { PrivateRoute } from "../components/hooks/require-auth";
import CarritoPage from "../components/pages/carrito-page";
import CatalogPage from "../components/pages/catalog-page";
import ContactPage from "../components/pages/contact-page";
import HomePage from "../components/pages/home-page";
import Login from "../components/pages/login-page";
import PerfilUsuario from "../components/pages/perfil-page";
import PreviewPage from "../components/pages/preview_page/preview-page";
import PrivacyPage from "../components/pages/privacy-page";
import PaginaProducto from "../components/pages/product-page";
import Register from "../components/pages/register-page";
import ResultsPage from "../components/pages/results-page";
import TerminosPage from "../components/pages/terms-page";


const router = createBrowserRouter([

  // PRINCIPALES
  // guardar token en localstorage porque pues, toca xd

  {
    path: "/",
    element: <HomePage></HomePage>,
  },

  {
    path: "/home",
    element: <HomePage></HomePage>,
    pageTitle: "a"
  },

  {
    path: "/about",
    element: <HomePage></HomePage>,
  },

  {
    path: "/contact",
    element: <ContactPage></ContactPage>,
  },

  {
    path: "/privacy",
    element: <PrivacyPage></PrivacyPage>,
  },

  {
    path: "/terms",
    element: <TerminosPage></TerminosPage>,
  },

  // CONTENIDO

  {
    path: "/catalogo",
    element: <CatalogPage></CatalogPage>,
  },

  {
    path: "/preview",
    element: <PreviewPage></PreviewPage>
  },

  {
    path: "/catalogo/categoria/",
    element: <CatalogPage></CatalogPage>
  },

  {
    path: "/catalogo/categoria/:categoryId",
    element: <CatalogPage></CatalogPage>
  },

  {
    path: "/product/:id",
    element: <PaginaProducto></PaginaProducto>
  },

  {
    path: "search/:name",
    element: <ResultsPage></ResultsPage>
  },

  // AUTENTICACION Y USUARIO

  {
    path: "/login",
    element: <Login></Login>
  },

  {
    path: "/register",
    element: <Register></Register>
  },

  {
    path: "/perfil",
    element: <PrivateRoute><PerfilUsuario></PerfilUsuario></PrivateRoute>,
  },

  // {  
  //   path: "/perfilusuario",
  //   element: <PerfilUsuario></PerfilUsuario>
  // },

  // PASARELA DE PAGO

  {
    path: "/carrito",
    element: <PrivateRoute><CarritoPage></CarritoPage></PrivateRoute>
  },

  {
    path: "/checkout",
    element: <CatalogPage></CatalogPage>
  },

  {
    path: "/checkout/confirm",
    element: <CatalogPage></CatalogPage>
  },

  // ADMINISTRACION

  {
    path: "/admin",
    element: <CatalogPage></CatalogPage>
  },

  {
    path: "/admin/crud",
    element: <CatalogPage></CatalogPage>
  },

  {
    path: "/admin/crud/productos",
    element: <CatalogPage></CatalogPage>
  },

  {
    path: "/admin/crud/productos/agregar/{id}",
    element: <CatalogPage></CatalogPage>
  },

  {
    path: "/admin/crud/productos/actualizar/{id}",
    element: <CatalogPage></CatalogPage>
  },

  {
    path: "/admin/crud/productos/eliminar/{id}",
    element: <CatalogPage></CatalogPage>
  },


]);



export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

