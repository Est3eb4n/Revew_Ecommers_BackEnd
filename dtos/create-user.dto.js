export default class CreateUserDTO{
    code;
    name;
    username;
    password;

    constructor(data){
        this.code=data.code;
        this.name=data.name;
        this.username=data.username;
        this.password=data.password;
    }
}