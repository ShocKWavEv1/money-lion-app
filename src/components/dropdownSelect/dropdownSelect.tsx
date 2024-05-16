import { FiChevronDown } from "react-icons/fi";
import { DropdownSelectProps } from "./model";
import s from "./dropdownSelect.module.scss";
import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickoutside";
import SelectedItem from "./selectItem/selectItem";

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref: any = useRef();

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useClickOutside(ref, handleClickOutside);

  return (
    <div
      aria-hidden="true"
      ref={ref}
      className={s.filter_sort_container}
      onClick={() => setIsOpen(!isOpen)}
    >
      Sort By
      <div className={s.filter_sort_icon}>
        <FiChevronDown fontSize="20px" />
      </div>
      {isOpen && (
        <div className={s.filter_sort_container}>
          {options.map((item: any, idx: number) => {
            return (
              <SelectedItem key={item.label} item={item} selectedItem="" />
            );
          })}
          <div className={s.filter_clean_sort}>Clear filter</div>
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
