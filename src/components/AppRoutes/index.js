import { BrowserRouter, Route } from 'react-router-dom';

export default function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<></>} />
         </Routes>
      </BrowserRouter>
   );
}
