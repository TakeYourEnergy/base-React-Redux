import "./App.scss";
import Likes from "./likes/likes";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import Title from "./title/title";
import Comments from "./comments/comments";
import Spin from "./loader/loader";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="wrap">
          <Spin />
          <div className="card">
            <div className="card-image">
              <img src="./sea.jpg" alt="surfing" />
              <Title />
              <Likes />
            </div>
            <Comments />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
