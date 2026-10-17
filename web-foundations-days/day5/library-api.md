
# Library Books REST API

## Resource Information

- **Resource:** Books
- **Base URL:** `https://api.example.com`

## 1. List All Books

- **Method:** GET
- **Path:** `/books`
- **Description:** Retrieves all books in the library.
- **Request body:** None
- **Success status:** `200 OK`

## 2. Get One Book

- **Method:** GET
- **Path:** `/books/{id}`
- **Description:** Retrieves a single book using its ID.
- **Request body:** None
- **Success status:** `200 OK`

## 3. Create a Book

- **Method:** POST
- **Path:** `/books`
- **Description:** Creates a new book in the library.
- **Example request body:**

```json
{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "year": 1958
}
```

- **Success status:** `201 Created`

## 4. Update a Book

- **Method:** PUT
- **Path:** `/books/{id}`
- **Description:** Replaces the details of an existing book.
- **Example request body:**

```json
{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "year": 1958
}
```

- **Success status:** `200 OK`

## 5. Delete a Book

- **Method:** DELETE
- **Path:** `/books/{id}`
- **Description:** Deletes a book using its ID.
- **Request body:** None
- **Success status:** `204 No Content`

## 6. List Books by Author

- **Method:** GET
- **Path:** `/books?author=Chinua%20Achebe`
- **Description:** Retrieves books written by the specified author using a query parameter.
- **Request body:** None
- **Success status:** `200 OK`

## Error Codes

### 400 Bad Request

- **Meaning:** The request contains invalid or missing information.
- **Example:** Creating a book without the required title or author.

### 404 Not Found

- **Meaning:** The requested resource does not exist.
- **Example:** Requesting `/books/9999` when no book has that ID.
