import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUser debe retornar un objetvo v2", () => {
    const nombre = "Matias";
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
