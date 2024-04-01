import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mtable from "./Components/Datatable/Mtable";
import Sidenav from "./Components/NestedMenu/Sidenav";
import Homepage from "./Components/Homepage";
import DataComponent from "./Components/Charts/Fetch";
import SearchTable from "./Components/SearchTable/SearchTable"
import Addtable from "./Components/AddUser/AddUsers"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />, // Render Homepage component
    children: [
      { path: '/table', element: <Mtable /> },
      { path: '/nestedmenu', element: <Sidenav /> },
      { path: '/recharts', element: <DataComponent />},
      { path: '/stable', element: <SearchTable />},
      { path: '/add', element:<Addtable />}
    ]}])

function App() {
  return (
      <RouterProvider router={router} />
);
}

export default App;