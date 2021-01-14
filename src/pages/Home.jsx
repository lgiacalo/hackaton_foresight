import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../css/home.css";

const Home = () => {
  return (
    <main className="pageContainer Home">
      <Helmet>
        <title>Cabinett</title>
        <link rel="canonical" href="https://cabinett.netlify.app/" />
        <meta
          name="description"
          content="Le spécialiste des toilettes, en tout genre, de tous les pays et pour tous les prix !"
        />
      </Helmet>
      <h1>Home Page</h1>
      <Link to="/categories/">Liste Catégories</Link>
      <section>
        <article className="animation-phare">
          <Link to="/" title="">
            <img
              src="https://via.placeholder.com/800x305.png?text=Focus+sur+les+economies+d+eau"
              alt=""
            />
          </Link>
        </article>
        <div className="animation-dual-group">
          <article className="animation-dual">
            <Link to="/" title="">
              <img
                className=""
                src="https://via.placeholder.com/800x342.png?text=Voir+tous+nos+guides"
                alt=""
              />
            </Link>
          </article>
          <article className="animation-dual">
            <Link to="/" title="">
              <img
                className="animation-triplet"
                src="https://via.placeholder.com/800x342.png?text=Toilettes+sans+eau"
                alt=""
              />
            </Link>
          </article>
        </div>
      </section>
      <article className="bests">
        <div className="best-product-list">
          <h2>Notre sélection de toilettes high-tech</h2>
          <article className="best-product-card">
            <Link to="/" title="Plus d'info">
              <img
                className="productImg"
                src="https://francoischarron.com/datascontent/toilette-numi-lumieres.jpg"
                alt=""
              />
              <h3>Luxe Platinium 2 Plus</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <article className="best-product-card">
            <Link to="/" title="Plus d'info">
              <img
                className="productImg"
                src="https://francoischarron.com/datascontent/toilette-numi-lumieres.jpg"
                alt=""
              />
              <h3>Dual Flush Elongated Toilet</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <Link to="/" title="Tous les toilettes japonais">
            Voir tous les toilettes japonais
          </Link>
        </div>
        <div className="best-product-list">
          <h2>Notre sélection de toilettes classiques</h2>
          <article className="best-product-card">
            <Link to="/" title="Plus d'info">
              <img
                className="productImg"
                src="https://francoischarron.com/datascontent/toilette-numi-lumieres.jpg"
                alt=""
              />
              <h3>Presqu'île</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <article className="best-product-card">
            <Link to="/" title="Plus d'info">
              <img
                className="productImg"
                src="https://francoischarron.com/datascontent/toilette-numi-lumieres.jpg"
                alt=""
              />
              <h3>Escale</h3>
              <span className="best-product-link">Plus d'info</span>
            </Link>
          </article>
          <Link to="/" title="Tous les toilettes japonais">
            Voir tous les toilettes occidentaux
          </Link>
        </div>
      </article>
      <article className="chapo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </article>
    </main>
  );
};

export default Home;
