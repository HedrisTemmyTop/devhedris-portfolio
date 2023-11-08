import { Helmet } from "react-helmet";
const APP_NAME = "BABALOLA IDRIS TEMITOPE PORTFOLIO";

const Meta = () => {
  return (
    <Helmet>
      <title>devhedris | Portfolio</title>
      <meta name="description" content="Babalola Idris Temitope Portfolio" />
      <meta name="application-name" content={APP_NAME} />
      <meta
        name="keywords"
        content="Devhedris, BABALOLA IDRIS TEMITOPE, Temmy_Top, Hedris_TemmyTop, devhedris portfolio "
      />
      <meta name="author" content="BABALOLA IDRIS TEMITOPE" />
    </Helmet>
  );
};

export default Meta;
