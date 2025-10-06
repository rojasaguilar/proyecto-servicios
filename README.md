# Proyecto desarrollo de servicios web

# En este directorio se integrarán todos los servicios 

# Cada servicio es un proyecto de sap
## Para crear otro servicio, en la carpeta raiz escribir ```cds init servicio-[nombre servicio]```

# Proximamente se implementará orquestador (docker compose)

proyecto-servicios/                     ← 📁 Workspace general (no es CAP)
 ├── gateway/            ← 📦 Proyecto CAP 1 (API Gateway)
 ├── users-service/      ← 📦 Proyecto CAP 2 (Usuarios)
 ├── errors-service/     ← 📦 Proyecto CAP 3 (Errores)
 ├── docker-compose.yml  ← 🧰 Orquestador
 └── README.md