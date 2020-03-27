
export class User{
    private name: string;
    private email: string;
    private password: string;

    constructor(name: string, email:string, password:string){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getName(){
      return this.name; 
    }
    getEmail(){
        return this.email; 
    }
    getPassword(){
        return this.password; 
    }
}