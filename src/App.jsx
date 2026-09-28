import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
       index: true,
       element: <Home/>
      },
      {
       path:":id",
       element: <ProductDetail/>
      },
      {
        path: "about",
      element: <h1>About Page</h1>
      },
      {
        path: "product/:id",
        element: <ProductDetail />
      },
      {
        path:"service",
        element: <h1>Service Page</h1>
      },
      {
        path:"contact",
        element: <h1>Contact Page</h1>
      }
      
    ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}

export default App;
