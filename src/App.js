import { useState } from 'react';

import './App.css';
// import { useGlobalContext } from './TableContext';

// Components
import Category from './components/Category';

function App() {
  const [categories, setCategories] = useState([{
    id: 0,
    title: 'first-category',
  }]);

  const createCategory = () => {
    setCategories([...categories, {
      title: 'tentative title',
      id: categories.length
    }])
  }

  return (
    <div>
      <div className="App">
        {categories.map(category => {
          return <Category key={category.id} {...category} />
        })}
      </div>
      <button onClick={() => createCategory()}>Create Category</button>
    </div>
  );
}

export default App;
