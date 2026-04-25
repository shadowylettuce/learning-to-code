import anthropic
from dotenv import load_dotenv
import os

load_dotenv()

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

def generate_study_guide(topic):
    message = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=1024,
        system ="You are an expert teacher who creates clear cheat sheets and teaches his student with a learn by doing approach",
        messages=[
            {
                "role": "user",
                "content": f"Create a structured study guide using tables for key concepts with examples, use case and practice problems for the following topic: {topic}. Include a list of important terms and their definitions."
            }
        ]
    )
    return message.content[0].text

topic = input("Enter a topic to study: ")
result = generate_study_guide(topic)
filename = topic.replace(" ", "_") + ".md" 
# Built in function that replaces one thing with another: "Discrete Mathematics".replace(" ", "_") return "Discrete_Mathematics"
print("\n" + result)
print(f"Writing to file: {filename}")
print(f"Result Length: {len(result)}")
with open(filename, "w", encoding = "utf-8") as f:
    f.write(result)

# "open(filename, "w", encoding = "utf-8")" = opens the file and the "w" means write mode. This returns a file object
# "with... as f:" = open this, call it f, run the indented block and close it when done. W/o this you would have to manually close the file or risk corrupting it
# "f.write(result)" = calls the write method on the file object putting my string into the file

print("Done Writing.")