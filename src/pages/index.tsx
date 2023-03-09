import { useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Header, Hero, Row } from "@/components/";
import { API_REQUEST } from "@/services/api_service";
import { GetServerSideProps } from "next";
import { IMovie } from "@/interface/app.interface";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  trending,
  topRated,
  tv_topRated,
  popular,
  documentary,
  family,
  comedy,
  history,
}: HomeProps): JSX.Element {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Movie App | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Hero trending={trending} />
        <section>
          <Row title="Top Rated" movies={topRated} />
          <Row title=" TV Show" movies={tv_topRated} isBig={true} />
          <Row title=" Popular" movies={popular} isBig={true} />
          <Row title=" Documentary" movies={documentary.reverse()} />
          <Row title=" History" movies={history} />
          <Row title=" Comedy" movies={comedy} isBig={true} />
          <Row title=" Family" movies={family.reverse()} />
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const trending = await fetch(API_REQUEST.trending).then((res) => res.json());
  const topRated = await fetch(API_REQUEST.top_rated).then((res) => res.json());
  const tv_topRated = await fetch(API_REQUEST.tv_top_rated).then((res) =>
    res.json()
  );
  const popular = await fetch(API_REQUEST.popular).then((res) => res.json());
  const documentary = await fetch(API_REQUEST.documentary).then((res) =>
    res.json()
  );
  const comedy = await fetch(API_REQUEST.comedy).then((res) => res.json());
  const family = await fetch(API_REQUEST.family).then((res) => res.json());
  const history = await fetch(API_REQUEST.history).then((res) => res.json());

  return {
    props: {
      trending: trending.results,
      topRated: topRated.results,
      tv_topRated: tv_topRated.results,
      popular: popular.results,
      documentary: documentary.results,
      comedy: comedy.results,
      family: family.results,
      history: history.results,
    },
  };
};
interface HomeProps {
  trending: IMovie[];
  topRated: IMovie[];
  tv_topRated: IMovie[];
  popular: IMovie[];
  documentary: IMovie[];
  comedy: IMovie[];
  family: IMovie[];
  history: IMovie[];
}
