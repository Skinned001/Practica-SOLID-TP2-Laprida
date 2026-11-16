interface User {
  username: string;
  email: string;
}

// class UserManager {
//   users: User[] = [];

//   register(username: string, email: string): string {
//     if (!email.includes("@")) {
//       throw new Error("El correo no es valido");
//     }

//     this.users.push({ username, email });
//     return this.sendWelcomeEmail(email);
//   }

//   private sendWelcomeEmail(email: string): string {
//     return `Email enviado a ${email}`;
//   }
// }


//separo las responsabilidaes en
//UserValidator -> para que valide el mail 
//UserRepository -> para que guarde el user en una base de datos (o en este caso un array )
//EmailService para que envie el mensaje de bienvenida con el email
//y UserRegistrationService que es en donde se unifican todas las clases para usarlas a la vez 

class UserValidator{
  
  validateEmail(email:string) {
    if (!email.includes("@")) {
      throw new Error("El correo no es válido");
      
    } return email
  }
  
}

class UserRepository { 
  user: User[] = [];

  save({username, email }: User) {
    this.user.push({username, email })
  } 

}

class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

class UserRegistrationService {

  //traigo las 3 herramientas que necesito 
  validator: UserValidator;
  repository: UserRepository;
  emailService: EmailService;


  constructor() {
    this.validator = new UserValidator();
    this.repository = new UserRepository();
    this.emailService = new EmailService()
  }

  register(username: string, email: string): string{

    this.validator.validateEmail(email)
    this.repository.save({username, email})
    return this.emailService.sendWelcomeEmail(email)
  } 

}

const registroService = new UserRegistrationService();

const usuario = registroService.register("Agos", "agos@gmail.com");
console.log(usuario); 


