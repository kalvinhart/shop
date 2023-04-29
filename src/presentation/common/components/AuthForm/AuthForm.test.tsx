import { fireEvent, renderWithWrappers, screen } from "../../utils/testUtils";
import AuthForm from "./AuthForm";
import { InputConfig } from "./hooks/useAuthForm";

let inputConfig: InputConfig = {
  email: {
    value: "",
    options: {
      required: true,
      min: 6,
    },
  },
  password: {
    value: "",
    options: {
      required: true,
      min: 8,
    },
  },
};

describe("AuthForm - Login variant", () => {
  test("Login form displays correct heading", () => {
    renderWithWrappers(
      <AuthForm
        type="LOGIN"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const headingElement = screen.getByRole("heading");

    expect(headingElement).toHaveTextContent("Sign In");
  });

  test("Updates email input with correct text", () => {
    renderWithWrappers(
      <AuthForm
        type="LOGIN"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const emailInputElement: HTMLInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });

    fireEvent.change(emailInputElement, { target: { value: "test@test.com" } });

    expect(emailInputElement.value).toBe("test@test.com");
  });

  test("Updates password input with correct text", () => {
    renderWithWrappers(
      <AuthForm
        type="LOGIN"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const passwordInputElement: HTMLInputElement = screen.getByLabelText(/password/i);

    fireEvent.change(passwordInputElement, { target: { value: "testing123" } });

    expect(passwordInputElement.value).toBe("testing123");
  });

  test("Login form displays correct loading text when loading", () => {
    renderWithWrappers(
      <AuthForm
        type="LOGIN"
        loading={true}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const buttonElement = screen.getByRole("button", { name: /signing in.../i });

    expect(buttonElement).toBeInTheDocument();
  });

  test("Login form displays correct link underneath form", () => {
    renderWithWrappers(
      <AuthForm
        type="LOGIN"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const linkElement = screen.getByRole("link", { name: /sign up!/i });

    expect(linkElement).toBeInTheDocument();
  });

  test("Shows password error warning if submitted in invalid state", () => {
    renderWithWrappers(
      <AuthForm
        type="LOGIN"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const emailInputElement: HTMLInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });

    fireEvent.change(emailInputElement, { target: { value: "test@test.com" } });

    const submitButtonElement = screen.getByRole("button", { name: /sign in/i });

    fireEvent.click(submitButtonElement);

    const passwordErrorElement = screen.getByText(/this field is required/i);

    expect(passwordErrorElement).toBeInTheDocument();
  });

  test("Shows email error warning if submitted in invalid state", () => {
    renderWithWrappers(
      <AuthForm
        type="LOGIN"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const passwordInputElement: HTMLInputElement = screen.getByLabelText(/password/i);

    fireEvent.change(passwordInputElement, { target: { value: "testing123" } });

    const submitButtonElement = screen.getByRole("button", { name: /sign in/i });

    fireEvent.click(submitButtonElement);

    const emailErrorElement = screen.getByText(/this field is required/i);

    expect(emailErrorElement).toBeInTheDocument();
  });

  test("Shows both error warnings if submitted in invalid state", () => {
    renderWithWrappers(
      <AuthForm
        type="LOGIN"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const submitButtonElement = screen.getByRole("button", { name: /sign in/i });

    fireEvent.click(submitButtonElement);

    const errorElements = screen.getAllByText(/this field is required/i);

    expect(errorElements.length).toBe(2);
  });
});

describe("AuthForm - Register variant", () => {
  inputConfig = {
    email: {
      value: "",
      options: {
        required: true,
        min: 6,
      },
    },
    password: {
      value: "",
      options: {
        required: true,
        min: 8,
      },
    },
    confirmPassword: {
      value: "",
      options: {
        required: true,
      },
    },
  };

  test("Register form displays correct heading", () => {
    renderWithWrappers(
      <AuthForm
        type="REGISTER"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const headingElement = screen.getByRole("heading");

    expect(headingElement).toHaveTextContent("Register");
  });

  test("Updates email input with correct text", () => {
    renderWithWrappers(
      <AuthForm
        type="REGISTER"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const emailInputElement: HTMLInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });

    fireEvent.change(emailInputElement, { target: { value: "test@test.com" } });

    expect(emailInputElement.value).toBe("test@test.com");
  });

  test("Updates password input with correct text", () => {
    renderWithWrappers(
      <AuthForm
        type="REGISTER"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const passwordInputElement: HTMLInputElement = screen.getByLabelText("Password:");
    fireEvent.change(passwordInputElement, { target: { value: "testing123" } });

    expect(passwordInputElement.value).toBe("testing123");
  });

  test("Updates confirm password input with correct text", () => {
    renderWithWrappers(
      <AuthForm
        type="REGISTER"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const confirmPasswordInputElement: HTMLInputElement =
      screen.getByLabelText(/confirm password/i);

    fireEvent.change(confirmPasswordInputElement, { target: { value: "testing123" } });

    expect(confirmPasswordInputElement.value).toBe("testing123");
  });

  test("Register form displays correct loading text when loading", () => {
    renderWithWrappers(
      <AuthForm
        type="REGISTER"
        loading={true}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const buttonElement = screen.getByRole("button", { name: /registering.../i });

    expect(buttonElement).toBeInTheDocument();
  });

  test("Register form displays correct link underneath form", () => {
    renderWithWrappers(
      <AuthForm
        type="REGISTER"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const linkElement = screen.getByRole("link", { name: /sign in!/i });

    expect(linkElement).toBeInTheDocument();
  });

  test("Shows password error warning if submitted in invalid state", () => {
    renderWithWrappers(
      <AuthForm
        type="REGISTER"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const emailInputElement: HTMLInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });
    fireEvent.change(emailInputElement, { target: { value: "test@test.com" } });

    const confirmPasswordInputElement: HTMLInputElement =
      screen.getByLabelText(/confirm password/i);
    fireEvent.change(confirmPasswordInputElement, { target: { value: "testing123" } });

    const submitButtonElement = screen.getByRole("button", { name: /register account/i });
    fireEvent.click(submitButtonElement);

    const passwordErrorElement = screen.getByText(/this field is required/i);

    expect(passwordErrorElement).toBeInTheDocument();
  });

  test("Shows confirm password error warning if submitted in invalid state", () => {
    renderWithWrappers(
      <AuthForm
        type="REGISTER"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const emailInputElement: HTMLInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });
    fireEvent.change(emailInputElement, { target: { value: "test@test.com" } });

    const passwordInputElement: HTMLInputElement = screen.getByLabelText("Password:");
    fireEvent.change(passwordInputElement, { target: { value: "testing123" } });

    const submitButtonElement = screen.getByRole("button", { name: /register account/i });
    fireEvent.click(submitButtonElement);

    const passwordErrorElement = screen.getByText(/this field is required/i);

    expect(passwordErrorElement).toBeInTheDocument();
  });

  test("Shows email error warning if submitted in invalid state", () => {
    renderWithWrappers(
      <AuthForm
        type="REGISTER"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const passwordInputElement: HTMLInputElement = screen.getByLabelText("Password:");
    fireEvent.change(passwordInputElement, { target: { value: "testing123" } });

    const confirmPasswordInputElement: HTMLInputElement =
      screen.getByLabelText(/confirm password/i);
    fireEvent.change(confirmPasswordInputElement, { target: { value: "testing123" } });

    const submitButtonElement = screen.getByRole("button", { name: /register account/i });
    fireEvent.click(submitButtonElement);

    const emailErrorElement = screen.getByText(/this field is required/i);

    expect(emailErrorElement).toBeInTheDocument();
  });

  test("Shows all error warnings if submitted in invalid state", () => {
    renderWithWrappers(
      <AuthForm
        type="REGISTER"
        loading={false}
        formError={false}
        inputConfig={inputConfig}
        formSubmit={() => {}}
      />
    );

    const submitButtonElement = screen.getByRole("button", { name: /register account/i });
    fireEvent.click(submitButtonElement);

    const errorElements = screen.getAllByText(/this field is required/i);

    expect(errorElements.length).toBe(3);
  });
});
