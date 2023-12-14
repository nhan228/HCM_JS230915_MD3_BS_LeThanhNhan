# Run server
  + B1 (create node_modules) : npm i
  + B2 (create prisma_migrations) : npm run dbm -> enter 
  + B3 (run server): npm run dev 
  + B4 (test): go to Postman and test 

# Server detail
- Server: http://127.0.0.1:3000/api/users
  + POST: Create a new user ( http://127.0.0.1:3000/api/users ) 
    * Body->raw->obj create (JSON): (name: string, email: string, age: number)
  + GET: List all users ( http://127.0.0.1:3000/api/users )
  + GET: Get a single user by id ( http://127.0.0.1:3000/api/users/:id )
  + PATCH: Update a user by id ( http://127.0.0.1:3000/api/users )
    * Body->raw->obj update (JSON): (name: string, email: string, age: number)
  + DELETE: Delete a user by id ( http://127.0.0.1:3000/api/users/:id )

