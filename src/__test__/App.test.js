import { render } from "@testing-library/react";
import App from "../App";

describe("Test in App", () => {
  test("should match with render", () => {
    const rendered = render(<App />);
    expect(rendered).not.toBe(null);
  });
});
