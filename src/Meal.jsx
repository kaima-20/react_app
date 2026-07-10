import "./assets/meal.css";
import Categories from './meal-components/Categories'
import Hero from './meal-components/Hero'
import Header from './meal-components/Header'
import Footer from './meal-components/Footer'
import { useState, useEffect } from "react";

const Meal = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMealCategories = () => {
    setLoading(true);
    setError(false);

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(function(data){
        setLoading(false);
        setError(false);
        setCategories(data.categories || []);
      })
      .catch(function(err){
        setLoading(false);
        setError(true);
        setCategories([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMealCategories();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Categories categories={categories} loading={loading} error={error} />
      <Footer />
    </>
  )
}
export default Meal