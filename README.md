# Proyecto desarrollo de servicios web

# En este directorio se integrarán todos los servicios 

# Cada servicio es un proyecto de sap
## Para crear otro servicio, en la carpeta raiz escribir ```cds init servicio-[nombre servicio]```

# Proximamente se implementará orquestador (docker compose)

proyecto-servicios/      ← 📁 Workspace general (no es CAP)<br />
 ├── gateway/            ← 📦 Proyecto CAP 1 (API Gateway)<br />
 ├── users-service/      ← 📦 Proyecto CAP 2 (Usuarios)<br />
 ├── errors-service/     ← 📦 Proyecto CAP 3 (Errores)<br />
 ├── docker-compose.yml  ← 🧰 Orquestador<br />
 └── README.md<br />