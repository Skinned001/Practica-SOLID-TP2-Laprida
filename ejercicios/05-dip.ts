// class EmailSender {
//   send(to: string, message: string): void {
//     console.log(`Correo para ${to}: ${message}`);
//   }
// }

// class OrderService {
//   createOrder(customerEmail: string): void {
//     console.log("Pedido creado");

//     const emailSender = new EmailSender();
//     emailSender.send(customerEmail, "Tu pedido fue creado");
//   }
// }

// new OrderService().createOrder("ana@example.com");

// Definir una interfaz `Notifier` con un metodo de envio
interface Notifier {
  send(to: string, msg: string):void 
}



class EmailSender implements Notifier{
  send(to: string, msg: string): void {
    console.log(`Se envió el email a ${to}: msg: ${msg}`)
  }
}
class SmsSender implements Notifier{
  send(to: string, msg: string): void {
    console.log(`Se envió el mensaje a ${to}: msg: ${msg}`)
  }
}

class OrderService{
  private notifier: Notifier;
  constructor(notifier: Notifier){
    this.notifier = notifier
  }

  createOrder(to: string){
    this.notifier.send(to,"Pedido creado")
  }
}

const servicioMails = new OrderService(new EmailSender())
servicioMails.createOrder("agos@example.com")


const servicioSms = new OrderService(new SmsSender())
servicioSms.createOrder("3704968376")