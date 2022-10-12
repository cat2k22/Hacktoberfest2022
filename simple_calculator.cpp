# include <iostream>
using namespace std;

int main() {

  char x;
  float num1, num2;

  cout << "Enter operator: +, -, *, /: ";
  cin >> x;

  if(x=='+' ||x=='-' || x=='/' || x=='*'){
    cout << "Enter two operands: ";
  cin >> num1 >> num2;
    switch(x) {

    case '+':
      cout << num1 << " + " << num2 << " = " << num1 + num2;
      break;

    case '-':
      cout << num1 << " - " << num2 << " = " << num1 - num2;
      break;

    case '*':
      cout << num1 << " * " << num2 << " = " << num1 * num2;
      break;

    default:
      // If the operator is other than +, -, * or /, error message is shown
      cout << num1 << " / " << num2 << " = " << num1 / num2;
      break;
  }
  }else{
      cout << "ERROR ! Our simple calculator performs the 4 basic mathematical operations ( + , - , * , / )only.";

  }
  return 0;
}
