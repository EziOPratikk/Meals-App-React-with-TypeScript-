import { Route, Routes } from 'react-router-dom';

import AllMeals from './pages/AllMeals';
import NewMeal from './pages/NewMeal';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeals />}></Route>
        <Route path='/new-meal' element={<NewMeal />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
