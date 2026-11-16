# Ejercicio 1:

## Que responsabilidades tiene `UserManager`?

Tiene cuatro responsabilidades: coordinar el flujo de registro, validar que el email tenga un @, almacenar los usuarios en un arreglo y generar el mensaje de envío de correos.


## Que ocurre si cambia la forma de guardar datos?

Tendria que abrir y modificar esta misma clase y al hacerlo se corre el riesgo de romper la validación del email o el envío de correos, ya que todo el código está mezclado en el mismo lugar.


## Que clase podria encargarse de enviar correos?

La clase independiente llamada EmailService, que se dedique exclusivamente a manejar los mensajes de salida.

# Ejercicio 2:

## Que parte debe modificarse para agregar pago con transferencia?

Se modifica el punto donde el sistema decide que hacer según el tipo de pago (por ejemplo, el `switch` o `if` de `PaymentProcessor`), porque cada nuevo medio obliga a tocar esa lógica.

## Como podriamos representar un medio de pago?

Como una interfaz común, por ejemplo `PaymentMethod`, con un método `pay(amount)`, y clases concretas como `Card`, `Cash` y `Transfer`.

## Que comportamiento comun tienen todos los medios de pago?

Todos deben poder ejecutar el pago de una cantidad: `pay(amount)`.

# Ejercicio 3:

## Por que el area final no coincide con lo que espera `resizeRectangle`?

Porque `Square` cambia el ancho y alto juntos, así que al cambiar uno se altera el otro y el área no resulta como la esperada.

## Es siempre correcto modelar un cuadrado como un rectangulo por herencia?

No. Un cuadrado no es totalmente sustituible por un rectángulo porque sus invariantes cambian al modificar ancho o alto.

## Que abstraccion comun podriamos usar?

Una interfaz o contrato común como `Shape` con `area()`.

# Ejercicio 4:

## Que metodo no necesita `SimplePrinter`?

`scan()`.

## Que problema causa implementar metodos que lanzan errores?

Oculta la falta de soporte y fuerza a manejar excepciones innecesarias; además rompe la idea de interfaces claras y responsables.

## Como separar las capacidades de una impresora?

Dividiendo la interfaz en `Printer`, `Scanner` y `Fax`, y que cada clase implemente solo lo que realmente soporta.

# Ejercicio 5:

## Que dependencia concreta crea `OrderService`?

Crea directamente `EmailSender` al instanciarlo dentro de la clase.

## Como probarias la clase sin enviar un correo?

Inyectando un `Notifier` falso o mock por constructor y verificando que se llame al método `send`, sin enviar un correo real.

## Que contrato comun podrian implementar el correo y el SMS?

Una interfaz `Notifier` con un método `send(to, message)`.