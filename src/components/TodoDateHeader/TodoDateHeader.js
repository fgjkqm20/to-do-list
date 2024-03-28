import CurrentDate from './CurrentDate.js';
import CurrentDay from './CurrentDay.js';

/**
 * To do List Header Component
 * @return {JSX.Element} TodoDateHeader Component
 */
function TodoDateHeader() {
  return (
    <>
      <CurrentDate />
      <CurrentDay />
      <hr />
    </>
  );
}

export default TodoDateHeader;
