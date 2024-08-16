# Cyberlence Assignment

## Description

This github repository contains the code for the Cyberlence assignment. The project is a simple web application that allows users to sign up, sign in, and view their profile details. The project is built using the following technologies:

- **React.js** - A JavaScript library for building user interfaces.

- **Tailwind CSS** - A utility-first CSS framework for building custom designs.
- **Vite** - A fast build tool that provides instant feedback and optimized builds.

The project uses the following AWS services:

- **Amazon Cognito** - A managed service that provides authentication, authorization, and user management.
- **Amazon API Gateway** - A fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.
- **AWS Lambda** - A serverless compute service that lets you run code without provisioning or managing servers.
- **AWS Amplify** - A set of tools and services for building scalable full-stack applications.

## Prerequisites

- **Node.js** (v14+)
- **npm** or **yarn**

## Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/SurajG20/Cyberlence-assignment.git
cd Cyberlence-assignment
```

### 2. Install Dependencies

After cloning the repository, navigate into the project directory and install the necessary dependencies using either npm or yarn:

- **Using npm:**

  ```bash
  npm install
  ```

- **Using yarn:**
  ```bash
  yarn install
  ```

### 3. Create a .env File

Create a .env file in the root directory of the project to store environment variables required by the application.

Add the necessary environment variables inside the .env file, like so:

```
VITE_BASE_URL = YOUR_API_GATEWAY_URL
VITE_REGION = YOUR_AWS_REGION
VITE_USERPOOL_ID = YOUR_USERPOOL_ID
VITE_CLIENT_ID = YOUR_CLIENT_ID

```

### 4. Running the Project

To start the project, use one of the following commands depending on your package manager:

- **Using npm:**

  ```bash
  npm run dev
  ```

- **Using yarn:**
  ```bash
  yarn run dev
  ```

## Submitted By

Submitted by [Suraj Goswami](https://github.com/SurajG20) - Email : Surajgoswami3000@gmail.com

For any queries/doubts, please feel free to reach out to me.
