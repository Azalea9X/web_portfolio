#!/bin/bash

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo "Node.js is not installed. Please install it first."
  exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
  echo "npm is not installed. Please install it first."
  exit 1
fi

# Create a new Vite.js project folder if it doesn't exist
if [ ! -d "vite-app" ]; then
  mkdir vite-app
fi

# Move into the Vite.js project folder
cd vite-app

# Check if the Vite.js project already exists
if [ ! -d "my-vite-project" ]; then
  # Create a new Vite.js project with React
  echo "Creating a new Vite.js project with React..."
  npx create-vite@latest my-vite-project --template react
fi

# Move into the Vite.js project directory
cd my-vite-project

# Modify the Vite.js code as needed
# For example, if you want to add a new route, you can edit src/routes/index.js

# Build the Vite.js project
echo "Building the Vite.js project..."
npm install
npm run build

# Move back to the Vite.js project folder
cd ..

# Move back to the previous directory (Sails.js project root)
cd ..

# Copy the Vite.js project's built files into the Sails.js project's public directory
echo "Copying Vite.js build files to Sails.js public directory..."
cp -r vite-app/my-vite-project/dist/* sails_test_react/assets/

# Modify the Sails.js layout view to include the Vite.js app
echo "Modifying Sails.js layout view to include Vite.js app..."
echo '<div id="app"></div>' > sails_test_react/views/layout.ejs

# Update the Sails.js asset pipeline to include the Vite.js app
echo "Updating Sails.js asset pipeline to include Vite.js app..."
echo '  "js/dependencies/**/*.js",' >> sails_test_react/tasks/pipeline.js
echo '  "js/production.js",' >> sails_test_react/tasks/pipeline.js
echo '  "js/app.js",' >> sails_test_react/tasks/pipeline.js

# All done!
echo "Vite.js project has been integrated into your Sails.js project."
