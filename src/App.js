import "./App.css";
import Likes from "./likes/likes";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import Title from "./title/title";
import Comments from "./comments/comments";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="wrap">
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
