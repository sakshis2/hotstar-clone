import React, { useState } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";

import disneyPlus from "../disneyPlusMoviesData.json";

function Home() {
  const [movieData, setMovieData] = useState(disneyPlus);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies movieData={movieData} />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

// useEffect(() => {
//     const q = query(collection(database, "movies"))
//     const unsub = onSnapshot(q, (querySnapshot) => {
//       console.log("Data", querySnapshot.docs.map(d => doc.data()));

//     });
//   }, [])

//new version end of firebase
// const dispatch = useDispatch();

// useEffect(() => {
//     db.collection("movies").onSnapshot((snapshot) => {
//     let tempMovies = snapshot.docs.map((doc)=> {
//         console.log(doc.data());
//     return{id: doc.id, ...doc.data()}

//     })

//     dispatch(setMovies(tempMovies));

//     })

//     },[])
