import React, { useEffect, useState } from "react";
import axios from "axios";
import { tokenState } from "../../../src/atoms";
import { useRecoilValue } from "recoil";

function ResultInput({ match }) {
  const [userRole, setUserRole] = useState(null);
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    axios
      .get("https://i9d110.p.ssafy.io:8081/users/myInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.state === "SUCCESS") {
          setUserRole(response.data.user.role);
        }
      })
      .catch((error) => {
        console.error("API 호출 중 에러 발생:", error);
      });
  }, [token]);

  if (userRole !== 2) {
    return null;
  }

  const handleResultInputClick = () => {};

  return <button onClick={handleResultInputClick}>경기 결과입력</button>;
}

export default ResultInput;
