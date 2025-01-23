# funmathfacts-api 
an api that serves random fun facts about how maths is involved in everyday activities and objects.  
_this project is just for testing, practice, and educational purposes on how to use/call an API._

## How to Use 
- start the server by running the script: `node index.js`
- once the server is running, it will be accessible at `http://localhost:3000`

### API Endpoint 
- **GET** `/api/funfacts`
  - Returns a random fun math fact in JSON format.
  - Request: No parameters are required.
  - Example response:
    ```json
    {
      "fact": "The sum of all integers from 1 to 100 is 5050. This sum was famously calculated by mathematician Carl Friedrich Gauss when he was a child."
    }
    ```

---

> **<ins>License</ins>**  
> Feel free to use this project for testing and educational purposes.
