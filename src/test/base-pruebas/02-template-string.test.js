import "@testing-library/jest-dom";

import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-strings", () => {
  test("getSaludo debe de retornar Hola Matias", () => {
    const nombre = "Matias";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  // getSaludo debe retornar Hola Carlos! si no hay argumento nombre
  test("getSaludo debe retornar Hola Carlos! si no hay argumento nombre", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos");
  });
});
