import itemsData from "../data/items-data";
import Item from "./Item";

const ItemContainer = () => {
  let itemContainer = itemsData.map((item) => (
    <Item key={item.id} item={item} />
  ));
  return <div>{itemContainer}</div>;
};
export default ItemContainer;
