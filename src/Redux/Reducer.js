let initialState = {
  toDo: [
    {
      id: Math.floor(Math.random() * 100),
      description: "HTML5",
      isDone: false,
    },
    {
        id: Math.floor(Math.random() * 100),
        description: "CSS3",
        isDone: false,
      },
      {
        id: Math.floor(Math.random() * 100),
        description: "JavaScript",
        isDone: true,
      },
      {
        id: Math.floor(Math.random() * 100),
        description: "ES6 CodeWars",
        isDone: false,
      },
      {
        id: Math.floor(Math.random() * 100),
        description: "React JS",
        isDone: true,
      },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "AddTask":
      return { ...state, toDo: [...state.toDo, payload] };
    case "DeleteTask":
      return { ...state, toDo: state.toDo.filter((el) => el.id !== payload) };
    case "IsDone":
      return {
        ...state,
        toDo: state.toDo.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case "EditTask":
      return {
        ...state,
        toDo: state.toDo.map((el) =>
          el.id === payload.id
            ? { ...el, description: payload.description }
            : el
        ),
      };
      
    default:
      return state;
  }
};

export default reducer;
