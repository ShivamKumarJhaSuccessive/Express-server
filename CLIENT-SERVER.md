# HOW REQUEST IS SERVED
>>The client (usually a browser) opens a connection to the server and sends a request.
>>The server processes the request, generates a response, and closes the connection if it finds a Connection: Close header.

>>The request consists of a line indicating a method such as GET or POST, a Uniform Resource Identifier (URI) indicating which resource is being requested, and an HTTP protocol version separated by spaces.

>>This is normally followed by a number of headers, a blank line indicating the end of the headers, and sometimes body data. Headers may provide various information about the request or the client body data. Headers are typically only sent for POST and PUT methods.

>>In addition to the client and the server, we also need to understand:

>>Our internet connection: Allows you to send and receive data on the web. It's basically like the street between your house and the shop.
>> TCP/IP: Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the internet. This is like the transport mechanisms that let you place an order, go to the shop, and buy your goods. In our example, this is like a car or a bike (or however else you might get around).
>>DNS: Domain Name Servers are like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's real address before it can retrieve the website. The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place (see below). This is like looking up the address of the shop so you can access it.
>>HTTP: Hypertext Transfer Protocol is an application  protocol  that defines a language for clients and servers to speak to each other. This is like the language you use to order your goods.
>>Component files: A website is made up of many different files, which are like the different parts of the goods you buy from the shop. These files come in two main types:
>>Code files: Websites are built primarily from HTML, CSS, and JavaScript, though you'll meet other technologies a bit later.
>>Assets: This is a collective name for all the other stuff that makes up a website, such as images, music, video, Word documents, and PDFs.
