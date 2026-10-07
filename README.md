# 🩸 Blood Donor Inventory System

A backend application for managing **blood donors, blood inventory, and blood availability** using **Java, Spring Boot, JPA/Hibernate, MySQL, and REST APIs**.

The system helps manage donor records and blood stock digitally, making it easier to maintain blood inventory and retrieve blood availability information quickly.

---

## 🚀 Features

* Add and manage blood donor records
* Store donor information digitally
* Manage blood inventory
* Track blood groups and available units
* Search and retrieve blood availability
* Update blood stock
* RESTful APIs for backend operations
* MySQL database integration
* JPA/Hibernate for database operations
* Layered architecture using Controller, Service, and Repository

---

## 🛠️ Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* REST APIs

### Database

* MySQL

### Tools

* Maven
* IntelliJ IDEA / Eclipse
* Postman
* Git & GitHub

---

## 🏗️ Architecture

The application follows a layered architecture:

```text
                 Client
                   │
                   ▼
            REST Controllers
                   │
                   ▼
              Services
                   │
                   ▼
             Repositories
                   │
                   ▼
                MySQL
```

### Request Flow

```text
Client
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
MySQL Database
```

---

## 📂 Project Structure

```text
src/
├── main/
│   ├── java/
│   │   └── com/example/bloodbank/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       ├── entity/
│   │       └── ...
│   │
│   └── resources/
│       └── application.properties
│
└── test/
```

---

## 🩸 Blood Inventory

The system manages blood stock based on blood groups such as:

```text
A+
A-
B+
B-
AB+
AB-
O+
O-
```

Inventory information can be used to track:

* Blood group
* Available units
* Donor information
* Stock updates
* Blood availability

---

## 🔌 REST API

The application exposes REST APIs for managing donors and blood inventory.

Example operations:

| Method | Operation                |
| ------ | ------------------------ |
| POST   | Add donor                |
| GET    | Get donors               |
| GET    | Get donor by ID          |
| PUT    | Update donor             |
| DELETE | Delete donor             |
| POST   | Add blood inventory      |
| GET    | Get blood inventory      |
| GET    | Check blood availability |
| PUT    | Update inventory         |

> API endpoints may vary depending on the current implementation.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Java 17+
* Maven
* MySQL
* Git
* Postman (optional)

---

### 1. Clone the Repository

```bash
git clone https://github.com/pradipyadav18/blood-donor-inventory-system.git

cd blood-donor-inventory-system
```

---

### 2. Create MySQL Database

Create a database in MySQL:

```sql
CREATE DATABASE bloodbank;
```

---

### 3. Configure Database

Update your `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/bloodbank
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Replace `your_password` with your MySQL password.

---

### 4. Run the Application

Using Maven:

```bash
mvn spring-boot:run
```

Or run the main Spring Boot application from your IDE.

The application will start on:

```text
http://localhost:8080
```

---

## 🧪 API Testing

You can test the REST APIs using **Postman**.

Example:

```http
GET http://localhost:8080/...
```

You can perform operations such as:

```text
Create Donor
      ↓
Store Donor Information
      ↓
Manage Blood Inventory
      ↓
Check Blood Availability
      ↓
Update Blood Stock
```

---

## 📊 Key Benefits

* Reduces dependency on manual blood records
* Provides centralized donor and inventory management
* Makes blood availability information easier to retrieve
* Provides structured REST APIs for system operations
* Uses relational database storage for reliable data management

---

## 🔮 Future Improvements

* JWT-based authentication and authorization
* Admin dashboard
* Donor search by location
* Blood request management
* Email/SMS notifications
* Blood donation history
* Blood expiry tracking
* Docker deployment
* React-based frontend
* Role-based access control

---

## 👨‍💻 Author

**Pradip Yadav**

B.E. Computer Engineering | 2026 Graduate

GitHub: [@pradipyadav18](https://github.com/pradipyadav18)

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
