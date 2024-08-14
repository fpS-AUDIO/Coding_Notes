# Supabase Documentation

## 1. Introduction to Supabase

### What is Supabase?

Supabase is an open-source alternative to Firebase, providing all the backend services you need to build a modern application. It is built on top of PostgreSQL and offers real-time capabilities, authentication, and storage solutions.

### Key Features

- **Real-time Database**: Built on PostgreSQL with real-time updates.
- **Authentication**: Supports email, password, and third-party OAuth providers.
- **Storage**: File storage with easy integration.
- **Edge Functions**: Serverless functions that run close to your users.

### Supabase vs. Firebase

- **Open-source**: Supabase is open-source, while Firebase is proprietary.
- **Database**: Supabase uses PostgreSQL, Firebase uses NoSQL.
- **Flexibility**: Supabase provides more flexibility with SQL, Firebase is easier for rapid development with NoSQL.

## 2. Setting Up Supabase

### Creating a Project

1. Sign up at [Supabase](https://supabase.io).
2. Create a new project.
3. Note down the `API URL` and `anon key`.

### Install JS library

```cmd
npm install @supabase/supabase-js
```

### Connecting to the Database

Use the provided API URL and anon key to connect to the database. Here’s an example in JavaScript:

```javascript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xyzcompany.supabase.co";
const supabaseAnonKey = "public-anon-key";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Setting up Environment Variables

Store your keys in environment variables for security:

```bash
SUPABASE_URL=https://xyzcompany.supabase.co
SUPABASE_ANON_KEY=public-anon-key
```

Then access them in your code:

```javascript
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

## 3. Database Management

### Creating and Managing Tables

You can create tables directly in the Supabase dashboard or via SQL:

```sql
CREATE TABLE profiles (
  id uuid PRIMARY KEY,
  username text UNIQUE,
  avatar_url text,
  website text
);
```

### Inserting Data

Insert data using the Supabase client:

```javascript
const { data, error } = await supabase.from("profiles").insert([
  {
    username: "JohnDoe",
    avatar_url: "http://example.com/avatar.png",
    website: "http://example.com",
  },
]);
```

### Querying Data

Querying data with filters:

```javascript
const { data, error } = await supabase
  .from("profiles")
  .select("*")
  .eq("username", "JohnDoe");
```

### Updating Data

Updating records:

```javascript
const { data, error } = await supabase
  .from("profiles")
  .update({ website: "http://newwebsite.com" })
  .eq("id", "user-uuid");
```

### Deleting Data

Deleting records:

```javascript
const { data, error } = await supabase
  .from("profiles")
  .delete()
  .eq("id", "user-uuid");
```

## 4. Auth Management

### User Authentication

Sign up a new user:

```javascript
const { user, session, error } = await supabase.auth.signUp({
  email: "user@example.com",
  password: "securepassword",
});
```

### Managing Users

Retrieve the current user:

```javascript
const user = supabase.auth.user();
```

Sign in an existing user:

```javascript
const { user, session, error } = await supabase.auth.signIn({
  email: "user@example.com",
  password: "securepassword",
});
```

### Setting up OAuth Providers

Configure OAuth providers like Google, GitHub:

```javascript
const { user, session, error } = await supabase.auth.signIn({
  provider: "github",
});
```

## 5. Real-time Subscriptions

### Setting Up Real-time Listeners

Listen to real-time changes in a table:

```javascript
const mySubscription = supabase
  .from("profiles")
  .on("*", (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();
```

### Handling Real-time Events

Handle specific events like insert, update, delete:

```javascript
const mySubscription = supabase
  .from("profiles")
  .on("INSERT", (payload) => {
    console.log("New profile!", payload);
  })
  .subscribe();
```

## 6. Storage Management

### Uploading Files

Upload files to storage:

```javascript
const { data, error } = await supabase.storage
  .from("avatars")
  .upload("public/avatar1.png", file);
```

### Retrieving Files

Retrieve a file’s URL:

```javascript
const { publicURL, error } = supabase.storage
  .from("avatars")
  .getPublicUrl("public/avatar1.png");
```

### Managing Buckets

Create or manage buckets:

```javascript
const { data, error } = await supabase.storage.createBucket("avatars", {
  public: true,
});
```

## 7. Edge Functions (Serverless)

### Writing Functions

Create a new function:

```sql
create function hello_world() returns text as $$
begin
  return 'Hello, world!';
end;
$$ language plpgsql;
```

### Deploying Functions

Deploy your function via the CLI:

```bash
supabase functions deploy hello_world
```

### Using Functions in your App

Call the function from your app:

```javascript
const { data, error } = await supabase.rpc("hello_world");
```

## 8. Common Patterns and Best Practices

### Structuring Database Relationships

Use foreign keys to create relationships between tables:

```sql
CREATE TABLE posts (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES profiles(id),
  content text
);
```

### Handling Errors

Always check for errors after a query:

```javascript
const { data, error } = await supabase.from("profiles").select("*");
if (error) {
  console.error("Error:", error);
}
```

### Optimizing Performance

Use indexes to speed up queries:

```sql
CREATE INDEX ON profiles (username);
```

## 9. Example Projects

### To-Do List Application

A simple to-do list using Supabase:

- **Tables**: `tasks` with columns `id`, `user_id`, `task`, `is_complete`.
- **Real-time**: Listen for new tasks.
- **Auth**: Allow users to sign in and manage their tasks.

### Chat Application

A real-time chat application:

- **Tables**: `messages` with columns `id`, `user_id`, `message`, `created_at`.
- **Real-time**: Listen for new messages.
- **Auth**: Allow users to sign in and join chat rooms.
