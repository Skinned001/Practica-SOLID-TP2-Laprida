// type PaymentType = "card" | "cash";

// class PaymentProcessor {
//   pay(type: PaymentType, amount: number): void {
//     switch (type) {
//       case "card":
//         console.log(`Pagando $${amount} con tarjeta`);
//         break;
//       case "cash":
//         console.log(`Pagando $${amount} en efectivo`);
//         break;
//       default:
//         throw new Error("Medio de pago no soportado");
//     }
//   }
// }

// new PaymentProcessor().pay("card", 100);

// Definir una interfaz comun para los metodos de pago
interface PaymentMethod {
  pay(amount: number): void
}



// crear una clase por cada uno (tarjeta, efectivo, transferencia)

class Card implements PaymentMethod {
  pay(amount:number): void { 
    console.log(`Pagaste $${amount} con tarjeta`)
  }
}

class Cash implements PaymentMethod{
  pay(amount: number): void {
    console.log(`Pagaste $${amount} en efcetivo`)

  }
}

class Transfer {
  pay(amount:number): void {
    console.log(`Pagaste $${amount} por transferencia`)
  }


}
// `PaymentProcessor` debe recibir un medio de pago y delegar en el, sin `switch`, de modo que agregar uno nuevo no lo modifique
class PaymentProcessor {
  pay(method: PaymentMethod, amount: number): void {
    method.pay(amount)
  }

}



new PaymentProcessor().pay(new Card, 100)
new PaymentProcessor().pay(new Cash, 100)
new PaymentProcessor().pay(new Transfer, 100)