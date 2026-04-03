
**Finance Dashboard**

A responsive and interactive finance dashboard built using React. This project demonstrates data visualization, state management, and role-based UI behavior through a clean and modular interface.

**Features**


**Dashboard Overview**
Summary cards for Total Balance, Income, Expenses, and Savings
Time-based visualization showing recent trends
Category-wise spending breakdown
Transactions Section
Add new transactions using a modal form
Delete transactions
Search transactions by category or type
Filter transactions by income or expense
Role-Based UI
Admin role can add and delete transactions
Viewer role has read-only access
Role switching implemented on the frontend for demonstration
Insights
Highest spending category
Income vs expenses comparison
Dynamic financial observation based on data
Additional Features
Dark mode support
Responsive layout for different screen sizes
Approach

The application is built using React functional components and hooks. State is managed using useState and useOutletContext. The UI is structured into reusable components such as StatCard, TransactionForm, Modal, and TransactionRow to maintain modularity and scalability.

**Focus was placed on:**

Clean component structure
Reusable UI elements
Separation of concerns
Simple and readable logic
Tech Stack
React (Vite)
Tailwind CSS
Recharts
Installation and Setup
Clone the repository:
git clone <your-repository-link>
Navigate to the project folder:
cd finance-dashboard
Install dependencies:
npm install
Start the development server:
npm run dev
Responsiveness

The application is designed to work across different screen sizes. Layout adjustments and modal-based interactions improve usability on smaller screens.

**Assumptions**
Data is managed on the frontend without backend integration
Role-based behavior is simulated
No authentication system is implemented


**Possible Improvements**
Edit functionality for transactions
Pagination for large datasets
Backend API integration
Toast notifications for actions
Data export (CSV/JSON)
Advanced filtering and grouping

**Author**

Gaurav Janghu
