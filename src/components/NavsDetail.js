// import React, { useState, useEffect } from "react";

// import "../Styles/NavsDetail.css";
// import Axios from "axios";
// import { BASE_URL, API_KEY } from "../API";

// export default function NavsDetail() {
//   const { id } = useParams();

//   const [movie, setMovie] = useState(null);

//   const fetchNavsDetail = (id) => {
//     return Axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
//       .then((response) => setMovie(response.data))
//       .catch((err) => console.log(err));
//   };
//   useEffect(fetchNavsDetail, []);

//   return <div></div>;
// }
