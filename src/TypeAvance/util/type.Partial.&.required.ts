/**
 * Partial:
 * Nos permite colocar todos los parámetros de una interface como opcionales, 
 * sin necesidad que colocar ? parámetro por parámetro.
 */

 interface InterfaceName extends Partial<Interface> {
    statements
}

type TypeName = Partial<TypeOrInterface>;

/**
 * Required:
 * Nos permite colocar todos los parámetros de una interface como obligatorios.
 */

 interface InterfaceName extends Required<Interface> {
    statements
}

type TypeName = Required<TypeOrInterface>;

/**
 * Reutilización de DTOs
 * Podemos reutilizar nuestro DTO normalmente, ya que son interfaces.
 */


