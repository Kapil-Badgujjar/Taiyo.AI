import React from "react";
import { Provider } from "react-redux";  
import store from "./app/store";  //store for manage our global state
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <Provider store={store}>      {/* Wrapping our application in Provider so we can access the redux store anywhere */}
      <div className="">

        {/* Header section of our application */}
        <header className="App-header">
          <h1 className="bg-white text-purple-900 text-center text-xl md:text-4xl p-4 sm:p-6 font-bold drop-shadow-lg">
            Contact Management Application
          </h1>
        </header>

        {/* Main section of our application */}
        <main className="flex flex-col sm:flex-row w-full min-h-full">

          {/* Side menu component ( contact button and charts button) */}
          <Sidebar /> 

          {/* Right with Outlet to render other routed components */}
          <div className="w-full min-h-fit overflow-y-scroll">
            <Outlet /> {/* outlet from react-router-dom */}
          </div>
        </main>
      </div>
    </Provider>
  );
}
export default App;