
export class User {
    private name: string;
    private lastname: string;
    private birthday: Date;
    private sex: string;
    private residence: string;
    private username: string;
    private email: string;
    private password: string;

    constructor(name: string, lastname: string, birthday: Date, sex: string,
                residence: string, username: string, email: string, password: string) {
        this.name = name;
        this.lastname = lastname;
        this.birthday = birthday;
        this.sex = sex;
        this.residence = residence;
        this.username = username;
        this.email = email;
        this.password = password;
    }

  getName() {
    return this.name;
  }
  getLastname(): string {
    return this.lastname;
  }
  getBirthday(): Date {
    return this.birthday;
  }
  getSex(): string {
    return this.sex;
  }
  getResidence(): string {
    return this.residence;
  }
  getUsername(): string {
    return this.username;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
}
