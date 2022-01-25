import renderer from "react-test-renderer";
import Multiplayer from "../Components/Multiplayer";
import store from "../Store";
import { Provider } from "react-redux";
import rRoom from "../reducers/roomReducer";
import * as aRoom from "../actions/roomAction";
import { checkcollision } from "../gameHelper";
import {updatePlayerPos} from "../Components/Multiplayer";
test("Multiplayer render test ", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Multiplayer />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


