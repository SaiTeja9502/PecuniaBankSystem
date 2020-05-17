export class Login
{
    userId:number;
    userName:string;
    password:string;
    designation:string;
    public constructor(userId:number,userName:string,password:string,designation:string)
    {
	    this.userId = userId;
    	this.userName = userName;
    	this.password = password;
    	this.designation = designation;
    }
}