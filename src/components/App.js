import React, { useState } from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Properties />,
//     },
//     {
//       path: "/add-property",
//       element: <AddProperty />,
//     },
//     {
//       path: "/sign-up",
//       element: <CreateAccount />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//   ]);

//   return (
//     <AuthContext>
//       <RouterProvider router={router} />
//     </AuthContext>
//   );
// };

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="add-property" element={<AddProperty />} />
        </Routes>
    </div>
  );
};

export default App;