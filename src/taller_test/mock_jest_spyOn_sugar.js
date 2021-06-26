import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  // store the original implementation
  const originalAdd = math.add;//se crea uan constante para guardar la funcion add original que puede ser usa en otro lado del codigo
  // mock add with the original implementation
  math.add = jest.fn(originalAdd);//se crea un mock utilizando la constante que tiene la funcion original
  // spy the calls to add
  expect(app.doAdd(1, 2)).toEqual(3);//se crean las comparaciones, (al pasarle a la suma los valores 1,2 se espera que sea igual a 3)
  expect(math.add).toHaveBeenCalledWith(1, 2);//evaluamos que se esten mandando los valores 1 y 2 en la funcion 
  // override the implementation
  math.add.mockImplementation(() => "mock");//se sobre escribe el metodo add 
  expect(app.doAdd(1, 2)).toEqual("mock");//evaluamos el metodo
  expect(math.add).toHaveBeenCalledWith(1, 2);//evalumaos que se esten pasando los valores 1 y 2 al metodo original
  // restore the original implementation
  math.add = originalAdd;//restauramos la funcion original 
  expect(app.doAdd(1, 2)).toEqual(3);//evaluamos 
});