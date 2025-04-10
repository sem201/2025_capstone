import Test from "@components/Test";

const TestPage = () => {
  const currentPositions = [
    { row: 2, col: 2 },
    { row: 5, col: 4 },
    { row: 8, col: 1 },
  ];
  return (
    <>
      <h2>현재위치</h2>
      <Test currentPositions={currentPositions} />
    </>
  );
};

export default TestPage;
