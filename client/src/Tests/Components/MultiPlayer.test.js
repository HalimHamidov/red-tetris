import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Store";
import MultiPlayer from "../../Components/MultiPlayer";


test("Test MultiPlayer", () => {
  render(
    <Provider store={store}> 
          <MultiPlayer />
    </Provider>
  );
}); 