class User {
    id:number;
    lastName:string;
    firstName:string;
    age:number;

    displayInfos():string {
        return "id : " + this.id + " last Name : " + this.lastName + " first Name : " + this.firstName + " age : " + this.age;
    }
}
// TODO This feature could evolve after client’s feedbacks
