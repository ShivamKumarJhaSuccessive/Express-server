# HOW REQUEST IS SERVED
>>The client (usually a browser) opens a connection to the server and sends a request.
>>The server processes the request, generates a response, and closes the connection if it finds a Connection: Close header.

>>The request consists of a line indicating a method such as GET or POST, a Uniform Resource Identifier (URI) indicating which resource is being requested, and an HTTP protocol version separated by spaces.

>>This is normally followed by a number of headers, a blank line indicating the end of the headers, and sometimes body data. Headers may provide various information about the request or the client body data. Headers are typically only sent for POST and PUT methods.