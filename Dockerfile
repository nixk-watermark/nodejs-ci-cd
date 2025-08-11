# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --only=production

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
