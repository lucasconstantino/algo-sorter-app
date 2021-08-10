const Footer = ({ sort, bubbleSort }) => {
  return (
    <div className='Footer'>
      <button onClick={sort}>Randomize </button>
      <button onClick={bubbleSort}> Bubble Sort</button>
    </div>
  );
};
export default Footer;
