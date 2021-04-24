import { useQuery } from "react-query";
import Chapter from "components/organism/Chapter/Chapter";
import Card from "components/organism/Card/Card";
import Loading from "components/atoms/Loading/Loading";
import { ICard } from "types/types";
import { fetchCard } from "queries/fetch";

const Portfolio = () => {
  const { isLoading, data } = useQuery<ICard[]>("portfolioCard", fetchCard);
  if (isLoading) {
    return <Loading />;
  } // @ts-ignore: Unreachable code error
  if (data?.error) {
    return <div></div>;
  }
  if (data) {
    return (
      <Chapter
        id="portfolio"
        title="Portfolio"
        description="Tutaj znajdują się moje projekty niekomercyjne"
      >
        <>
          {data?.map((props) => {
            return <Card key={props.id} {...props} />;
          })}
        </>
      </Chapter>
    );
  }
  return <div>404</div>;
};

export default Portfolio;
