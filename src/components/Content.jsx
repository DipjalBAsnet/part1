import PartList from "./partList";
import Part from "./part";

const Content = () => {
  const lists = PartList.map((list) => {
    return (
      <div key={list.id}>
        <Part part={list.part} exercises={list.exercises} />
      </div>
    );
  });
  return lists;
};
export default Content;
