import { useEffect, useState } from "react";
import {
  getSerieOnair,
  getSeriePopular,
  getSerieToday,
  getTopSeries,
} from "../../services/getData";
import { Background } from "./styles";

import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import SliderDestaque from "../../components/SliderDestaque";

function Series() {
  const [seriesOnAir, setSeriesOnAir] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [seriesToday, setSeriesToday] = useState([]);
  const [seriesPopular, setSeriesPopular] = useState([]);

 

  useEffect(() => {
    async function getAlldata() {
      Promise.all([getTopSeries(), getSerieOnair(), getSerieToday(), getSeriePopular()])
        .then(([seriesOnAir, topSeries, seriesToday, popular]) => {
          setSeriesOnAir(seriesOnAir);
          setTopSeries(topSeries);
          setSeriesToday(seriesToday);
          setSeriesPopular(popular);
        })
        .catch((error) => console.error(error));
    }

    getAlldata();
  }, []);

  return (
    <>
      {seriesToday && (
        <Background $img={getImages(seriesToday.backdrop_path)}>
          {seriesToday && <SliderDestaque info={seriesToday} />}
        </Background>
      )}
      {seriesPopular && <Slider info={seriesPopular} title={"Popular Series"} />}
      {seriesOnAir && <Slider info={seriesOnAir} title={"Top Series"} />}
      {topSeries && <Slider info={topSeries} title={"Melhor avaliado"} />}
    </>
  );
}

export default Series;
