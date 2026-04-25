name = "Carlos"
age = 20
gpa = 3.5 # These are called floats not doubles
is_student = True
classes = ["Discrete Mathematics", "Probability and Statistcs", "Problem Solving with Computer II", "Foundation of Circuits and Systems"]  
# Use [] for list in python



#len() is used to get the number of items in an object

def introduce(name, classes, gpa):
    result = (f"{name} is taking {len(classes)} classes this quarter and his GPA is: {gpa}")
    return result

output = introduce(name, classes, gpa)
print(output)

