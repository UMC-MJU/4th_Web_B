import React from "react";
import { useParams } from "react-router-dom";

const Params  = () => {
  let { params } = useParams();

  return (
    <div className="test">
      <p>현재 페이지의 파라미터는 {params} 입니다.</p>
    </div>
  );
};

export default Params;


//여기 usePramas 사용하려고 했는데 다음주에 hook 사용할 때 써야겠다..