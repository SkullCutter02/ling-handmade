import React from "react";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <React.Fragment>
      <div className="grid-container">
        {categories.map((category) => {
          return (
            <div className="grid-item" key={category.id}>
              <Link href={`/products/${category.slug}`}>
                <img src="/download.jpeg" alt="Pic" />
              </Link>
              <p className="category-name">{category.name}</p>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-auto-rows: minmax(1fr, auto);
          justify-items: center;
        }

        .grid-item {
          margin-top: 2em;
          margin-bottom: 2em;
          background: #d3d3d3;
          width: 90%;
          height: 300px;
        }

        img {
          height: 80%;
          width: 100%;
          object-fit: cover;
          cursor: pointer;
        }

        .category-name {
          text-align: center;
          margin-top: 5px;
          font-size: 2rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Categories;