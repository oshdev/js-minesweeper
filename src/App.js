import React, { useReducer } from "react";
import "./App.css";
import Field from "./Field";

const createField = layout => (
  <Field
    difficulty={layout.difficulty}
    rows={layout.rows}
    columns={layout.columns}
    mines={layout.mines}
  />
);

const defaultLayout = {
  difficulty: "beginner",
  rows: 1,
  columns: 1,
  mines: 0
};

const initialState = {
  gameState: "welcome",
  layout: {...defaultLayout}
  // field: createField(defaultLayout)
};

const init = state => {
  const newState = {
    ...state,
    field: createField(state.layout)
  };
  return newState;
};

const play = (state, event) => {
  switch (event.type) {
    case "click":
      state.gameState = "in-progress";
      return state;
    case "new":
      debugger;
      console.log('fired');
      return init(event.payload);
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(play, initialState, init);

  return (
    <div className="App" data-testid="App">
      <button
        className="Box"
        data-testid="newGameButton"
        onClick={() => {
          dispatch({ type: "new", payload: { ...initialState } });
        }}
      >
        :)
      </button>
      <br />
      {state.field}
    </div>
  );
};

export default App;
