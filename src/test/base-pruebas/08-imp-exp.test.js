import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Test en 08-imp-ext / Funciones", () => {
  test("Debe retornar un heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe retornar undefined si Heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Test sobre heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("Test sobre heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
