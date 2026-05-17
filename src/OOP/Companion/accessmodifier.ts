class Bankaccount {
  readonly userId: number;
  public userName: string;
  private userBalance: number;
  protected userPassKey:string;
  //protected is almost similar to private but it can be used in derived class

  constructor(userId: number, userName: string, userBalance: number, userPassKey:string) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
    this.userPassKey=userPassKey;
  }

  addBalance(balance:number) {
    this.userBalance = this.userBalance + balance;
  }
}


class StudentBankAccount extends Bankaccount{
     test(){
        this.userPassKey;
     }
}

const mezbaBhaiAccount = new Bankaccount(221, "Ziad", 4000000,"Z123");

mezbaBhaiAccount.addBalance(100);
mezbaBhaiAccount.addBalance(100);
mezbaBhaiAccount.addBalance(50);

console.log(mezbaBhaiAccount);
