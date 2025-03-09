import { render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';

test("App コンポーネントが正常にレンダリングされる", () => {
  render(<App />);

  expect(screen.getByText("おはよう")).toBeInTheDocument();
});