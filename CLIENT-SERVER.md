# How a request is served in CLIENT-SERVER architecture

> Web browsers communicate with web servers using the HyperText Transfer Protocol (HTTP). When you click a link on a web page, submit a form, or run a search, the browser sends an HTTP Request to the server.

### The request includes:

1. A URL identifying the target server and resource (e.g. an HTML file, a particular data point on the server, or a tool to run).

2. 
> A method that defines the required action (for example, to get a file or to save or update some data). The different methods/verbs and their associated actions are listed below:

- GET: Get a specific resource (e.g. an HTML file containing information about a product, or a list of products).

- PUT: Update an existing resource (or create a new one if it doesn't exist).

- POST: Create a new resource (e.g. add a new article to a wiki, add a new contact to a database). 

- DELETE: Delete the specified resource.

- HEAD: Get the metadata information about a specific resource without getting the body.


> Web servers wait for client request messages, process them when they arrive, and reply to the web browser with an HTTP Response message. 
>> The response contains an HTTP Response status code indicating whether or not the request succeeded (e.g. "200 OK" for success, "404 Not Found" if the resource cannot be found, "403 Forbidden" if the user isn't authorized to see the resource, etc).