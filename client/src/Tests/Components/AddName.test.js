import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import AddName from "../../Components/AddName";
import store from "../../Store";


test("Test AddName", () => {
  render(
    <Provider store={store}> 
          <AddName />
    </Provider>
  );
});