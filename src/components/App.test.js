import App from "./App";

jest.mock("../services/unsplash");

it("fetches images from unsplash and renders them on mount", done => {
  const wrapper = shallow(<App />);

  expect(wrapper.find("Image").length).toEqual(1);
});
