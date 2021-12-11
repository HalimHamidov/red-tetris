import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Store";
import Rooms from "../../Components/Rooms";


test("Test Rooms", () => {
  render(
    <Provider store={store}> 
          <Rooms />
    </Provider>
  );
});