import { fireEvent, render, screen } from "../../../utils/testUtils";
import Button from "./Button";

const mockOnClick = jest.fn();

describe("Button", () => {
  test("Class name is attributed correctly.", () => {
    render(
      <Button className="test" variant="primary">
        Test Button
      </Button>
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("test");
  });

  test("Button is disabled correctly.", () => {
    render(
      <Button variant="primary" disabled={true}>
        Test Button
      </Button>
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  test("Button onClick is called correctly.", () => {
    render(
      <Button variant="primary" onClick={mockOnClick}>
        Test Button
      </Button>
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
