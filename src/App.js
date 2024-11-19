import React from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recommendations from "./Components/Recommendations/Recommendations";
import VideoContainer from "./Components/VidoeContainer/VideoContainer";
import WatchPage from "./Components/Watch/WatchPage";
const App = () => {

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Body/>,
    children:[

      {
        path:'/',
        element:<div>  <Recommendations /> <VideoContainer /> </div>
      },
      {
        path:'/watch',
        element:<WatchPage/>
      }
    ]
  }
])




  return (
    <>

      <div>
        <Header />
     
    <RouterProvider router={appRouter}>

    </RouterProvider>
      </div>

   
    </>
  );
};

export default App;
