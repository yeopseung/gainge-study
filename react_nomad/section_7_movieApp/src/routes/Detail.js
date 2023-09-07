import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// useParams
//  url에서 변수 값을 가져옴
//  http://localhost:3000/movie/:id == http://localhost:3000/movie/53277
//  => {id: '53277'}

function Detail() {
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;
