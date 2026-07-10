import Loader from './Loader'

const Categories = ({ categories = [], loading = false, error = false }) => {
  return (
    <div>
      <section className="categories" id="categories">
        <div className="container">
          <div className="section-head">
            <h2>Pick a category</h2>
            <span className="count" id="category-count">{categories.length} categories</span>
          </div>

          <div className="row" id="category-grid">
            {loading && (
              <div className="col-12 d-flex justify-content-center py-5">
                <Loader />
              </div>
            )}

            {error && (
              <div className="col-12">
                <p className="alert alert-warning mb-0">Our API seems to be down at the moment.</p>
              </div>
            )}

            {categories.length > 0 && categories.map((cat) => (
              <div key={cat.idCategory} className="col-12 col-sm-6 col-lg-4 card-col">
                <article className="recipe-card">
                  <span className="pin" aria-hidden="true"></span>
                  <div className="recipe-thumb-wrap">
                    <img className="recipe-thumb" src={cat.strCategoryThumb} alt={cat.strCategory} loading="lazy" />
                  </div>
                  <div className="recipe-body">
                    <div className="recipe-id">CAT. {cat.idCategory}</div>
                    <h3 className="recipe-title">{cat.strCategory}</h3>
                    <p className="recipe-desc">{cat.strCategoryDescription}</p>
                    <a href="#" className="recipe-link" data-category={cat.strCategory}>
                      View recipes <span className="arrow">&rarr;</span>
                    </a>
                  </div>
                </article>
              </div>
            ))}

            {/* Static dummy data — becomes <CategoryGrid categories={categories} /> mapping
            <CategoryCard category={cat} /> in React. Shape matches TheMealDB's response:

            const categories = [
              { idCategory: "1", strCategory: "Beef", strCategoryThumb: "...", strCategoryDescription: "..." },
              { idCategory: "3", strCategory: "Dessert", strCategoryThumb: "...", strCategoryDescription: "..." },
              { idCategory: "8", strCategory: "Seafood", strCategoryThumb: "...", strCategoryDescription: "..." },
            ]; */}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Categories