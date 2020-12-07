
# Backend Structure

This is an outline for how the structure of the backend should look.

## End Points

Endpoints

- POST /login",
- POST /register",
- GET /logout",
- POST /verify",
- GET /potions",
- POST /potion/",
- PUT /potion/<uuid>",
- DELETE /potion/<uuid>",
- GET /requests",
- GET /request/<uuid>",
- POST /request",
- PUT /request/<uuid>",
- DELETE /request/<uuid>"

## Endpoint Structure

POST /login
```
{
    string username;
    string password;
}
```

POST /register
```
{
    string username;
    string email;
    string password
}
```

POST /verify
```
{
    string verificationCode
}
```

GET /potions?start=<start>

    This will return the list of potions starting with the newest potion that has
    been added, with a limit of 25. If start is specified, this is the index we should
    start at.

GET /potion/<uuid>

    This will return the information for just 1 potion

POST /potion
```
{
    int state;
    any[] ingredients;
    any[] wants;
    int amount;
    int potionBottleType;
}
```

    This will create a new potion in the database.

PUT /potion/<uuid>
```
{
    int state;
    any[] ingredients;
    boolean hidden;
    any[] wants;
    int amount;
    int potionBottleType;
}
```

    This will update a potion in the database.

DELETE /potion/<uuid>

    This will delete the potion from the database.

GET /requests?start=<start>

    This will request where the user is the requester or requestee, with a limit of 25.
    If start is specified, this is the index we should start at.

GET /request/<uuid>

    This will return just the data for one request

POST /request
```
{
    User requester;
    User requestee;
    Potion potion;
}
```

    This will create a new request for a potion.

PUT /request/<uuid>
```
{
    User requester;
    User requestee;
    boolean hidden;
    Potion potion;
}
```

    This will update a request.

DELETE /request/<uuid>

    This will delete a request.

## Classes

```
class User {
    private string uuid;
    private string username;
    private string email;
    private string verificationCode;
    private Date created;
    private Date lastModified;
    private int userGroup;
}
```

```
class Potion {
    private string uuid;
    private User user;
    private User creator;
    
    private Date created;
    private Date lastModified;

    // 0 = for trade
    // 1 = for want
    private int state;

    private boolean hidden;
    
    private any[] ingredients = {
        private string uuid;
        private string itemUuid;
        private int amount;
    };
    private any[] wants = {
        private string uuid;
        private string itemUuid;
        private int amount;
    };

    // How many mL
    private int amount;
    private int potionBottleType;
}
```

```
class Item {
    private string uuid;
    private string name;

    // 0 = ingredient, 1 = other item
    private int itemType;
}
```

```
class Request {
    private string uuid;
    private User requester;
    private User requestee;
    private Potion potion;
    private Date created;
    private boolean hidden;
}
```
