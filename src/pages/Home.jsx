// src/pages/Home.jsx
import data from "../data/data";
import Card from "../Components/Card";

const Home = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">All Products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map(({id,img,title,price})=> (
          <Card
            key={id}
            id={id}
            img={img}
            title={title}
            price={price}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
