const Footer = ({
  sort,
  bubbleSort,
  selectionSort,
  displayNum,
  displayArrayCount,
}) => {
  return (
    <div className='Footer'>
      <button onClick={sort}>Randomize </button>
      <button onClick={bubbleSort}> Bubble Sort</button>
      <button onClick={selectionSort}>Selection Sort</button>
      <div className='displayDiv'> Number of comparisons {displayNum}</div>
      <div className='displayDiv'>
        Number of Access's to Array {displayArrayCount}
      </div>
    </div>
  );
};
export default Footer;
