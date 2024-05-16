import s from "./filters.module.scss";
import { FiSearch } from "react-icons/fi";

const Filters: React.FC<FilterProps> = ({
  isSticky,
  searchValue,
  setSearchValue,
}) => {
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
