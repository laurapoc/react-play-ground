import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Article = () => {
  const params = useParams();

  const [searchParams] = useSearchParams();

  console.log(searchParams.get("page"));

  console.log(params);

  return (
    <div>
      <h2>Article</h2>
    </div>
  );
};

export default Article;
