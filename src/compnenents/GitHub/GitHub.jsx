import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/nikhnick")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res);
//       });
//   }, []);

  return (
    <div className="text-center m-4">
      GitHub followers: {data.followers}
      <img
        className="text-center"
        src={data.avatar_url}
        alt="Avatar"
        width="200px"
      />
    </div>
  );
}

export default GitHub;

export const gitHubInfo = async () => {
    const res = await fetch("https://api.github.com/users/nikhnick")
    return res.json();
}
