import { EmptyStateProps } from "./model";
import s from "./emptyState.module.scss";
import Image from "next/image";

const EmptyState: React.FC<EmptyStateProps> = ({ title, description }) => {
  return (
    <div className={s.empty_state_container}>
      <div style={{ width: "100%", height: "450px" }}>
        <Image
          src="https://illustrations.popsy.co/gray/crashed-error.svg"
          alt="No results found"
          width={20}
          height={50}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={s.empty_state_title}>{title}</div>
      <div className={s.empty_state_description}>{description}</div>
    </div>
  );
};

export default EmptyState;
