import { FooterProps } from "./model";

const Footer: React.FC<FooterProps> = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Challenge made with Next | React | SASS & SSR
    </div>
  );
};

export default Footer;
