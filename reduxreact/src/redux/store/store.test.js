import store from './store.js';

describe('Redux store', () => {
  it('gets todos', () => {
    const todos = store.getState().todoReducer.todos;
    console.log(todos)
    expect(todos).toEqual([]);
  });
});