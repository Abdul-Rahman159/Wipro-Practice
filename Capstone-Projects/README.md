✈️ Flight Booking System – Microservices + Angular

A full-stack Flight Booking Application built using Spring Boot Microservices, Angular, and Kafka.
The system allows users to search for flights, book tickets, make payments, and download e-tickets in PDF format.

🚀 Features

🔎 Flight Search – Search flights by source, destination, date & filter by airline.

🎫 Booking – Book flights with passenger details.

💳 Payment – Process payments with card validation.

📑 E-Ticket PDF – Download professional-looking flight tickets.

📢 Kafka Integration – Event-driven communication between services (Booking → Payment).

🛠 Config Server – Centralized configuration management.

🧭 Eureka Service Discovery – All microservices register with Eureka for dynamic service lookup.

🌐 API Gateway – Single entry point for all services, handling routing, load balancing, and security.

📖 Swagger – API documentation for all services.

 

🛠 Tech Stack
Backend

Spring Boot (Microservices)

Spring Cloud Netflix Eureka – Service Registry

Spring Cloud Config – Centralized config

Spring Cloud Gateway – API Gateway

Spring Kafka – Event-driven messaging

Spring Data JPA + MySQL – Database layer

Swagger OpenAPI – API Documentation

Frontend

Angular 19+

Bootstrap 5 for UI

jsPDF for PDF ticket generation

Tools

Kafka

Postman for API testing

GitHub for version control


👨‍💻 Author

Abdul Rahman – Designed & Developed the complete Flight Booking System (Backend + Frontend + Microservices + Kafka)