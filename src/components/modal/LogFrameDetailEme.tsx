import styled from "styled-components";
import { PopupHeader } from "./modal.styled";
import close from "@assets/icons/closeWhite.svg";
import emergency from "@assets/icons/emergency.svg";
import {
  Pagenation,
  Table,
  TableRow,
} from "@components/logFrame/logFrame.styled";
import CheckLocationButton from "@components/common/CheckLocationButton";
import warning from "@assets/icons/Danger.svg";
import React from "react";
import RedCheckButton from "@components/common/RedCheckButton";

const LogFrameDetailEme = () => {
  const [choosedUser, setChoosedUser] = React.useState<number | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5;
  const handlePageChage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <Wrapper>
      <PopupHeader bgcolor="B50">
        <img src={close} alt="닫기버튼" onClick={() => {}} />
      </PopupHeader>
      <PopupBody>
        <div>
          <Table>
            <thead>
              <TableRow>
                <th>성명</th>
                <th>발생 시간</th>
                <th>사유</th>
                <th>확인 여부</th>
                <th>확인 시간</th>
                <th>확인 위치</th>
              </TableRow>
            </thead>
            <tbody onClick={() => {}}>
              <tr>
                <td>김철수</td>
                <td>24.02.28 14:49:23</td>
                <td>
                  <img src={emergency} alt="응급" />
                  &nbsp;낙상감지
                </td>
                <td
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  확인 전 <RedCheckButton onClick={() => {}} />
                </td>
                <td></td>
                <td>
                  <CheckLocationButton text="당시 위치" img={warning} />
                </td>
              </tr>
            </tbody>
          </Table>
          <Pagenation>
            <button
              onClick={() => handlePageChage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChage(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </Pagenation>
        </div>
        <div>
          {choosedUser !== null ? (
            <div>무언가 있음 ㅇㅇ;</div>
          ) : (
            <div> 열람할 내역을 선택해주세요</div>
          )}
        </div>
      </PopupBody>
    </Wrapper>
  );
};

export default LogFrameDetailEme;

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 830px;
  height: 408px;

  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 0 0 7.2px 7.2px;

  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
`;

const PopupBody = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: calc(100% - 30px);

  div:nth-child(1) {
    grid-column: 1/2;
    padding: 17px;
    position: relative;

    border-right: 1px solid ${({ theme }) => theme.colors.B10};
  }
  div:nth-child(2) {
    grid-column: 2/3;
    border-left: 1px solid ${({ theme }) => theme.colors.B10};
  }
`;
