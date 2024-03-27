// @ts-check

/**
 * 할 일 목록에 대한 정보를 담은 객체
 * @typedef {Object} TodoItem
 * @property {number} id - 할 일 ID
 * @property {string} todo - 할 일
 */

/**
 * 할 일 목록을 담은 배열
 * @type {TodoItem[]}
 */
const todoItems = [
  {
    id: 1,
    todo: '할 일 1',
  },
  {
    id: 2,
    todo: '할 일 2',
  },
  {
    id: 3,
    todo: '할 일 3',
  },
];

export { todoItems };
