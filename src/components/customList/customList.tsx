import styled from "styled-components";
import search from "@assets/icons/Search.svg";
import emergency from "@assets/icons/emergency.svg";
import notNormal from "@assets/icons/notemergency.svg";
import normal from "@assets/icons/normal.svg";
import send from "@assets/icons/Send.svg";

import * as S from "./customList.style";
import { Table, TableRow } from "@components/logFrame/logFrame.styled";
import CheckLocationButton from "@components/common/CheckLocationButton";
import { useState } from "react";
import { useUserStore } from "@store/userStore";
import { UserLocation } from "@custom-types/types";

const customList = () => {
  const userLocations = useUserStore((state) => state.userLocations);
  const setSelectedUser = useUserStore((state) => state.setSelectedUser);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = userLocations.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (type: UserLocation["type"]) => {
    switch (type) {
      case "emergency":
        return emergency;
      case "help":
        return notNormal;
      default:
        return normal;
    }
  };

  const handleLocationCheck = (user: UserLocation) => {
    setSelectedUser(user);
    const dot = document.querySelector(
      `.location-dot[data-id='${user.patientId}']`
    );
    if (dot) {
      let shadowColor = "#3151B3";
      if (user.type === "emergency") shadowColor = "rgb(255, 17, 0)";
      else if (user.type === "help") shadowColor = "#FFA826";
      dot.setAttribute("filter", `drop-shadow(0 0 8px ${shadowColor})`);
    }
  };

  return (
    <Wrapper>
      <S.Title>환자 목록</S.Title>
      <S.InputContainer>
        <input
          type="text"
          placeholder="환자명을 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={search} alt="search" />
      </S.InputContainer>
      <Table>
        <thead>
          <TableRow>
            <th>상태</th>
            <th>성명</th>
            <th>호실</th>
            <th></th>
          </TableRow>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td style={{ paddingLeft: "8px" }}>
                <img src={getStatusIcon(user.type)} alt={user.type} />
              </td>
              <td>{user.name}</td>
              <td>{user.place}</td>
              <td>
                <CheckLocationButton
                  text="위치확인"
                  img={send}
                  onClick={() => handleLocationCheck(user)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default customList;

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
`;
