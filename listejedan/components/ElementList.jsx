import itemsData from "../../app2/Data/items-data";
import Element from "./Element";

const ElementList = () => {
  let elementList = itemsData.map((item) => (
    <Element key={item.id} item={item} />
  ));
  return <ul>{elementList}</ul>;
};

export default ElementList;
