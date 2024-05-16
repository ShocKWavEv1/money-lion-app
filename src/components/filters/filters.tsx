import s from "./filters.module.scss";
import { FiSearch } from "react-icons/fi";

const Filters: React.FC<FilterProps> = ({
  isSticky,
  searchValue,
  setSearchValue,
}) => {
  /*const options: any = [
    { id: 0, label: "Sort by priority", value: "priority" },
    { id: 1, label: "Sort by date", value: "priority" },
    { id: 2, label: "Sort by likes", value: "priority" },
    { id: 3, label: "Sort by comments", value: "priority" },
  ];*/

  return (
    <div className={s.filter_content}>
      <div className={s.filter_text_input}>
        <input
          value={searchValue}
          placeholder="Search by title"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className={s.filter_text_input_icon}>
          <FiSearch fontSize="16px" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
