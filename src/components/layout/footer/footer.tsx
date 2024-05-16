import { FooterProps } from "./model";
import s from "./footer.module.scss";

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={s.footer_container}>
      Challenge made with Next | React | SASS & SSR
    </div>
  );
};

export default Footer;
