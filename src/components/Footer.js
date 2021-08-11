const Footer = ({ sort, bubbleSort, selectionSort }) => {
  return (
    <div className='Footer'>
      <button className='red' onClick={sort}>
        Randomize{" "}
      </button>
      <button onClick={bubbleSort}> Bubble Sort</button>
      <button onClick={selectionSort}>Selection Sort</button>
    </div>
  );
};
export default Footer;
