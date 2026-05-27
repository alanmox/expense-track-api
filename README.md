# Expense Track API

REST API for tracking expenses built with Node.js, Express, and MySQL.

## Prerequisites

- Docker and Docker Compose

## Setup & Run

```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Stop services
docker compose down
```

The API will be available at `http://localhost:5000`.

## Environment Variables

Copy `.env.example` to `.env` and adjust if needed:

```bash
cp .env.example .env
```

| Variable     | Default         |
| ------------ | --------------- |
| `DB_HOST`    | `localhost`     |
| `DB_PORT`    | `3306`          |
| `DB_USER`    | `expense_user`  |
| `DB_PASSWORD`| `expense_pass`  |
| `DB_NAME`    | `expense_track` |

## API Endpoints

| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| POST   | `/expenses`             | Create an expense      |
| GET    | `/expenses`             | List all expenses      |
| GET    | `/expenses?category=`   | Filter by category     |
| DELETE | `/expenses/:id`         | Delete an expense      |
| GET    | `/`                     | Health check           |

### Create an expense

```json
POST /expenses
{
  "amount": 25.50,
  "category": "Food",
  "description": "Lunch"
}
```

## Database

The MySQL database is initialized automatically via Docker Compose. Run the SQL scripts manually if needed:

```bash
docker exec -i expense-track-db mysql -u root -prootpassword expense_track < sql/tables.sql
```
