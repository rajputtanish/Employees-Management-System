const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Revamp Homepage UI",
        "taskDescription": "Redesign the home page with absolute modern responsiveness.",
        "taskDate": "2026-08-15",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize production queries to decrease page latency.",
        "taskDate": "2026-08-10",
        "category": "Dev"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Auth Timeout Bug",
        "taskDescription": "Resolve session expiry issue reported by the QA team.",
        "taskDate": "2026-08-14",
        "category": "Dev"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "API Integration Documentation",
        "taskDescription": "Document all standard JSON REST endpoints for onboarding.",
        "taskDate": "2026-08-16",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Verify Safari compatibility",
        "taskDescription": "Test the Flexbox properties compatibility on Apple iOS browsers.",
        "taskDate": "2026-08-08",
        "category": "QA"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Perform Security Vulnerability Audit",
        "taskDescription": "Execute automated scans for OWASP vulnerabilities.",
        "taskDate": "2026-08-05",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Deploy Production Hotfix v1.4",
        "taskDescription": "Push secure patch to resolve edge-case payment gateway bugs.",
        "taskDate": "2026-08-15",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Mockup Designs for Dashboard",
        "taskDescription": "Create visual Figma variations of employee performance views.",
        "taskDate": "2026-08-08",
        "category": "Design"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Pris",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Marketing Campaign Dashboards",
        "taskDescription": "Code responsive widgets to track real-time click metrics.",
        "taskDate": "2026-08-18",
        "category": "Dev"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Clickstream Analytics",
        "taskDescription": "Configure dynamic segment tags on click actions.",
        "taskDate": "2026-08-15",
        "category": "Analytics"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Karan",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO Optimizations",
        "taskDescription": "Improve load speeds and refine metadata header tags.",
        "taskDate": "2026-08-19",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Q3 Technical Slide Pitch Deck",
        "taskDescription": "Synthesize visual slide materials for executive planning.",
        "taskDate": "2026-08-04",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Migrate AngularJS components to React",
        "taskDescription": "Refactor legacy components into modern modular JSX views.",
        "taskDate": "2026-08-01",
        "category": "Dev"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem('employees'));
  const adminData = JSON.parse(localStorage.getItem('admin'));

  return { employees: employeesData, admin: adminData };
};