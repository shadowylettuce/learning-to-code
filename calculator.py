print(f"Welcome to Calculator") # Prints welcome message to the calculator

def calculation(num1, num2, operator): # Creates a function named calculation that takes in the parameters num1, num2, and operator
        if operator == "+": # checks whether the operator is +
            return num1 + num2 # returns the addition of the two num given that the operator was +
        elif operator == "-": # checks whether the operator is -
            return num1 - num2 # returns the subtraction of the two num given that the operator was -
        elif operator == "*": # checks whether the operator is *
            return num1 * num2 # returns the multiplication of the two num given that the operator was *
        elif operator == "/": # checks whether the operator is /
            if num2 == 0: # checks if the num2 is 0 because division by 0 is invalid
                return "Error: division by 0" # returns and outputs an error message due to dividing by 0
            return num1 / num2 #returns the division of the two nums given that the operator was /
        else: # after checking each valid operator...
            return "Erorr: invalid operator" # return and print error message
        
def format_result(result): # creates a function called format_result that takes in result as a parameter
    if isinstance(result, float): # checks if result is a float
        if float(result).is_integer(): # checks if result can be made into an integer
            return int(result) # converts result into an integer
        else: # in the case that result can not be made into an integer
            return result # simply return result as a float
    else: # in the case that the result is not a float
        return result # simply return result as a string (since this is the only other thing result can be)
    
while True: # Begin a while loop that continues so long as the function holds true
    num1 = float(input(f"Enter your first number: ")) # defines num1 and takes in the input from the user and converts the string into a float
    operator = input("Enter operator (+, -, *, /): ") # defines operator as an input from the user
    num2 = float(input(f"Enter second number: ")) # defines num2 and takes in the input from the user and converts the string into a float
    result = calculation(num1, num2, operator) # defines result as the result of the function above
   
    if isinstance(result, str): # checks whether the result created by calculation is a string
        print(result) # prints the error message
    else: # in the case where the result wasnt a string
        print(f"{format_result(num1)} {operator} {format_result(num2)} = {format_result(result)}") # prints the calculation while passing num1, num2, and result in the format_result function in order to display the numbers as ints when possible

    again = input("Calculate again? (y/n): ") # defines var again which takes in an input from the user, either y or n
    if again == "n": # should the user choose n...
        break # the while loop breaks and the code stops