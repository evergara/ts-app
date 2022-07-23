/**
 * DTOs: Es una abreviatura para referirnos a Data Transfer Objects u Objeto de Transferencias de datos.
 *      Hay momentos particulares en los que nosotros no necesitamos del todo los tipos, es decir,
 *     hay parámetros que no hacen falta, por ejemplo, mandarlos al momento de la creación de un objeto,
 *     ya que estos son automáticos como el ID o la fecha de creación.
 * Omit y Pick Type son utilty types en TypeScript.
 * Así que podemos omitir algunos parámetros o campos que en ese particular momento no hacen falta,
 * esto no significa que no están el objeto, sino que al momento de la creación solo necesitamos
 *  ciertos parámetros y la API, la base de datos se encargará de insertar lo demás.
 */

interface Employee {
  id: string;
  name: string;
  lastName: string;
  salary: number;
  company: string;
}
// Omit: Con omit podemos omitir las propiedades, campos o llaves que quieramos.
interface CreateEmployee extends Omit<Employee, 'id' | 'company'> {}
//Pick: Es lo contrario de Omit, aquí yo elijo los campos que quiero que estén en mi type o interface.
interface UpdateEmployee
  extends Pick<Employee, 'name' | 'lastName' | 'salary' | 'company'> {}
