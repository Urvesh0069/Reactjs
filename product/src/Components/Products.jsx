


 const ProductGroup = () => {
  return (
    <div>
      <ul>
        <ProductList/>
      </ul>
    </div>
  );
};

const ProductList = () => {
  return (
    <>
      <ProductName name="Electronics" isStock={true} />
      <ProductName name="Clothes" isStock={true} />
      <ProductName name="Aplliences" isStock={false} />
      <ProductName name="Kitchenware" isStock={false} />
      <ProductName name="Furniture" isStock={true} />
    </>
  );
};

const ProductName = ({name , isStock}) => {
  if(isStock){
    return <li>{name}</li>
  }
};

export function Boxmodel() {
  return (
    <div className="box-border size-32 border-4 p-4 ...">
      <ProductGroup />
    </div>
  );
}