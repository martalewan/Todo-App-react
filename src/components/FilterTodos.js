import './FilterTodos.css';

const FilterTodos = props => (
  <section className="filter-buttons">

    {props.displayDone
      ? (<button className="filter-buttons__hide-done" onClick={() => props.setDisplayDone(false)}>Hide done</button>)
      : (<button className="filter-buttons__show-all" onClick={() => props.setDisplayDone(true)}>Show all</button>)
    }

  </section>
);

export default FilterTodos;
