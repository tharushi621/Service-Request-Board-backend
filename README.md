
### 2. Backend

cd backend
npm install

# Copy and fill in your env file
cp .env.example .env
# Edit .env with your MongoDB Atlas URI

npm run dev         # Starts on http://localhost:5000

#### Optional: Seed sample data

npm run seed        # Inserts 10 sample job requests

### 3. Frontend

Open a **new terminal tab**:

cd frontend
npm install

# Copy env file
cp .env.local.example .env.local

npm run dev         # Starts on http://localhost:3000

## API Reference

Base URL: `http://localhost:5000`

| Method   | Endpoint           | Description                                                  |
|----------|--------------------|--------------------------------------------------------------|
| `GET`    | `/api/jobs`        | List all jobs. Supports `?category=`, `?status=`, `?search=` |
| `GET`    | `/api/jobs/:id`    | Get a single job                                             |
| `POST`   | `/api/jobs`        | Create a new job                                             |
| `PATCH`  | `/api/jobs/:id`    | Update job status only                                       | 
| `DELETE` | `/api/jobs/:id`    | Delete a job                                                 |
| `GET`    | `/health`          | Health check                                                 |

### Example: Create a job

```bash
curl -X POST http://localhost:5000/api/jobs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Leaking kitchen tap",
    "description": "Kitchen tap dripping constantly, needs repair.",
    "category": "Plumbing",
    "location": "Glasgow",
    "contactName": "James Reid",
    "contactEmail": "james@example.com"
  }'

## Features

- **Home page** — browse all job requests as cards, filter by category and status, keyword search across title and description
- **New job form** — post a request with client-side validation
- **Job detail page** — view full details, update status via dropdown, delete with confirmation

### Bonus
- Keyword search (MongoDB text index on title + description)
- Seed script (`npm run seed` in `/backend`)

## MongoDB Atlas Setup (quick guide)

1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free **M0** cluster
3. Under **Database Access**, create a user with read/write permissions
4. Under **Network Access**, add `0.0.0.0/0` (allow all) for development
5. Click **Connect → Drivers** and copy the connection string
6. Paste it into `backend/.env` as `MONGODB_URI`, replacing `<password>` with your user's password
