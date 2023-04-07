import React from "react";
import { Unauthenticated, Authenticated } from "./Routes.jsx";
import { RouterProvider, Link } from "react-router-dom";

const App = () => {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Home />}>
  //       <Route path="Login" element={<Login />}>
  //         <Route path="store" element={<LoginStore />} />
  //       </Route>
  //       <Route path="Signup" element={<Signup />}>
  //         <Route path="store" element={<SignupStore />} />
  //       </Route>
  //     </Route>
  //   )
  // );
  const Boom = true;
  return <RouterProvider router={Boom ? Unauthenticated : Authenticated} />;
};
export default App;
