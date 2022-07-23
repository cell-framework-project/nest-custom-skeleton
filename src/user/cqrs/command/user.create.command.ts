export class UserCreateCommand{
  constructor(
    public readonly nickname: string,
    public readonly email: string,
    public readonly password: string,
    public readonly firstName: string,
    public readonly lastName: string
  ) {  }
}