import CommonButton2 from "./CommonButton2";
const SubmitButton = () => {
  return (
    <CommonButton2 onClick={() => alert("제출")}>
      <p>제출하기</p>
    </CommonButton2>
  );
};

export default SubmitButton;
