import os
import re

directory = r'e:\git\isurupinthu\gitProgects\superMarket\src'

pattern = re.compile(r'<(\w+)\s+className\s*>')

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.jsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = pattern.sub(r'<\1 className="">', content)
            
            if content != new_content:
                print(f"Fixing {file_path}")
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
