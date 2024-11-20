import React from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recommendations from "./Components/Recommendations/Recommendations";
import VideoContainer from "./Components/VidoeContainer/VideoContainer";
import WatchPage from "./Components/Watch/WatchPage";
import { Provider } from "react-redux";
import appStore from "./Utils/Store/AppStore";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: (
            <div>
              {" "}
              <Recommendations /> <VideoContainer />{" "}
            </div>
          ),
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
    <>
      <div>
        <Header />

        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </>
    </Provider>
  );
};

export default App;
