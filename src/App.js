import React from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recommendations from "./Components/Recommendations/Recommendations";
import VideoContainer from "./Components/VidoeContainer/VideoContainer";
import WatchPage from "./Components/Watch/WatchPage";
import { Provider } from "react-redux";
import appStore from "./Utils/Store/AppStore";
import SearchReuslt from "./Components/SearchResult/SearchReuslt";
import ReginoalTrend from "./Components/ReginoalTrending/ReginoalTrend";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (<div>
        <Header className="" />
        <Body className=""/>
      </div>),
      children: [
        {
          path: "/",
          element: (
            <div className="pt-10" >
              {" "}
               <VideoContainer />{" "}
            </div>
          ),
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/search",
          element: <SearchReuslt />,
        },
        {
          path: "/globaltrending",
          element: <ReginoalTrend />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
   
     

    
        <RouterProvider router={appRouter}>
      
          <Body/>
       
        </RouterProvider>

 
    </Provider>
  );
};

export default App;
