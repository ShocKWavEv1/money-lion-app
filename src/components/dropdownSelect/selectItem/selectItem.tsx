import { FiCheck } from "react-icons/fi";
import { SelectItemProps } from "./model";
import s from "./selectItem.module.scss";

const SelectedItem: React.FC<SelectItemProps> = ({ item, selectedItem }) => {
  return (
    <div className={s.list_item_container}>
      <div className={s.list_item_container_check}>
        <FiCheck fontSize="12px" />
      </div>
      {item.label}
    </div>
  );
};

export default SelectedItem;
