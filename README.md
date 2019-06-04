# get your life back together with this budgeting app.

## Goals:

### Database:

- Models:

  - User: {uuid, name, password, email}

    - minimum pw length 6 chars
    - hash password
    - validate email

  - Bank: {uuid, name, balance}

* Purchase: {uuid, name, cost}
  - belongs to user
  - removes money from bank account balance when a purchase is made

### server

- Routes:
  - login
    - validate user name and password before allowing access to budget
  - purchases

    - /purchases/:userid

### frontend

- login page
- purchases page
