from datetime import datetime
import os
import re

# Ask for the blog post title
title = input("Enter the blog post title: ").strip()

# Convert title to a URL-friendly format
slug = re.sub(r'\W+', '-', title.lower()).strip('-')

# Get today's date
date_stamp = datetime.today().strftime('%Y-%m-%d-%H:%M')

date_str = datetime.today().strftime('%Y-%m-%d')

# Define the file name
filename = f"Content/_posts/{date_str}-{slug}.md"

# Jekyll blog post template
post_content = f"""---
layout: post
title: "{title}"
date: {date_stamp}
categories: []
tags: []
published: false
---

# {title}


"""

# Ensure _posts directory exists
os.makedirs("Content/_posts", exist_ok=True)

# Write the file
with open(filename, "w", encoding="utf-8") as file:
    file.write(post_content)

print(f"Blog post template created: {filename}")
