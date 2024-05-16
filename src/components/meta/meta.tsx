import Head from "next/head";
import { MetaProps } from "./model";

const Meta: React.FC<MetaProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={title} key="title" property="og:title" />
      <meta content={description} key="title" property="og:description" />
    </Head>
  );
};

export default Meta;
