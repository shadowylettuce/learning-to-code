# name = "Carlos"
# age = 20
# gpa = 3.5 # These are called floats not doubles
# is_student = True
# classes = ["Discrete Mathematics", "Probability and Statistcs", "Problem Solving with Computer II", "Foundation of Circuits and Systems"]  
# # Use [] for list in python



# #len() is used to get the number of items in an object

# def introduce(name, classes, gpa):
#     result = (f"{name} is taking {len(classes)} classes this quarter and his GPA is: {gpa}")
#     return result

# output = introduce(name, classes, gpa)
# print(output)

# def grade_check(gpa): # Actual function doing the heavy lifting
#     if gpa >= 3.5:
#         return "Dean's List"
#     elif gpa >= 2.0:
#         return "Good Standing"
#     else:
#         return "Academic Probation"
    
# print(grade_check(gpa)) # Get the output of the function and display it

# def print_classes(classes):
#     for index, value in enumerate(classes, start = 1):
#         print(f"{index}: {value}")

# # instead of classes[index] use {value}
# # instead of {index + 1} in the print statement, tell enumerate to start at 1.

# print_classes(classes)

student = {
    "name": "Carlos",
    "age": 20,
    "gpa": 3.5,
    "classes": ["Discrete Mathematic", "Probability and Statistics"]
}

print(student["gpa"])
student["is_student"] = True
student["gpa"] = 3.8

print(student)

# List vs dictionary = access by position vs access by meaning