import React from "react";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("Prueba en PrimeraApp component", () => {
  test('Debe mostrar el mensaje, "Hola soy Goku"', () => {
    const saludo = "Hola soy Goku";

    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
