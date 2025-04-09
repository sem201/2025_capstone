import styled from "styled-components";

const customList = () => {
  return (
    <Wrapper>
      <p>환자목록</p>
      {/* 환자 검색 컨테이너 */}
      <div>
        <div>
          <button></button>
          <input></input>
        </div>
        <button></button>
        <button></button>
      </div>
    </Wrapper>
  );
};

export default customList;

const Wrapper = styled.section``;
