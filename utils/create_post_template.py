from datetime import datetime
import os
import re

# Ask for the blog post title
title = input("Enter the blog post title: ").strip()

# Convert title to a URL-friendly format
slug = re.sub(r'\W+', '-', title.lower()).strip('-')

# Get today's date
now = datetime.now()
date_str = now.strftime('%Y-%m-%d')
date_stamp = now.strftime('%Y-%m-%d %H:%M:%S %z')

# Define the file name
filename = f"_posts/{date_str}-{slug}.md"

# Jekyll blog post template
post_content = f"""---
layout: post
title: "{title}"
date: {date_stamp}
categories: []
tags: []
published: false
---


"""

# Ensure _posts directory exists
os.makedirs("_posts", exist_ok=True)

# Write the file
with open(filename, "w", encoding="utf-8") as file:
    file.write(post_content)

print(f"Blog post template created: {filename}")
