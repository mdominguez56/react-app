import React from "react";
import "@testing-library/jest-dom";
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Prueba en PrimeraApp component", () => {
  // test('Debe mostrar el mensaje, "Hola soy Goku"', () => {
  //  const saludo = "Hola soy Goku";
  //  const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //  expect(getByText(saludo)).toBeInTheDocument();
  //});

  test("Debe demostrar el componente correctamente", () => {
    const saludo = "Hola soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
});
