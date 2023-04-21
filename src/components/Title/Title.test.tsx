import { render } from "@testing-library/react";
import { Title } from ".";

describe("Coins list test", () => {
  it("should render", () => {
    render(<Title>My app for listing coins</Title>);
  });
});
