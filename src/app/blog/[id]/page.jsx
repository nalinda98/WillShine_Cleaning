export async function generateMetadata({ params }) {
  const id = params.id;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });

  return {
    title: `Product: ${title}`,
  };
}


export default async function ProductDetails({ params }) {
  const id = params.id;
  return <h1>Details about product {id}</h1>;
}

