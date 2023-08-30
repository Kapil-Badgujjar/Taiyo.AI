import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import NewContactForm from './components/NewContactForm/NewContactForm';
import EditContactForm from './components/EditContactForm/EditContactForm';
import ChartsAndMaps from './components/ChartsAndMaps/ChartsAndMaps';
import Dashboard from './components/Dashboard/Dashboard';
import LineChart from './components/LineChart/LineChart';
import LeafletMap from './components/LeafletMap/LeafletMap';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/',
        element: <Contacts />
      },
      {
        path: 'add-new-contact',
        element: <NewContactForm />,
      },
      {
        path: 'edit-contact/:id',
        element: <EditContactForm />
      },
      {
        path: 'charts',
        element: <ChartsAndMaps />,
        children: [
            {
              path: 'dashboard',
              element: <Dashboard />
            },
            {
              path: 'line-chart',
              element: <LineChart />
            },
            {
              path: 'map',
              element: <LeafletMap />
            }
        ]
      }
    ]
  }
])
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
