# Week 1 Notes

## A Web server: 
1. Handles Website storage & administration
2. Handles web requests from clients

## Webpage vs Website
Webpage - Document that displays images, text, videos & other content

Website - A collection of webpages that link together

## Web hosting 
Service provided by hosting companies to place webpage files.
1. Shared Hosting
    - Pay for a single shared web server with other renters
2. Virtual Private Hosting
    - Pay for a virtual private server, renters share hardware but do not share the same server. All servers are virtual machines sharing the same hardware
3. Dedicated Hosting
    - Pay for a dedicated physical server
4. Cloud Hosting
    - Pay for a cloud environment. Cloud environment spans across multiple physical & virtual servers. If a server fails, the webpage will run on a different server and stay online

## Internet Protocols
1. Transmission Control Protocol (TCP): For Packet Transfer
    - Protocol used to send packets that must arrive in order such as text or image files
2. User Datagram Protocol (UDP): For Packet Transfer
    - Protocol used to send packets that can tolerate data loss such as voice calls or video streaming
3. Hypertext Transfer Protocol (HTTP): For Webserver Communication
    - Request, Response Protocol used to transfer web resources between client and web server
    - Methods Used: GET (Retrieve), POST (Send), PUT (Update), DELETE (Remove)

## Frameworks vs Libraries
Library - Reusable pieces of code for specific functionality (E.g. Email validation library)

Framework - A coding structure for developers to build with. A framework may use multiple libraries in it. (E.g. Backend framework for sending HTTP requests)

## Application Programming Function (API)
A service, application, or interface offering advanced features with a set of functions and procedures. They are the communication bridge between different systems.

1. Browser API 
    - Built-in API that extends from the browser that extend browser features and simplify complex functions (E.g. DOM API, Geolocation API, Canvas API)
2. REST API 
    - Webserver API that sends and receives data from a centralised database
3. Sensor Based API
    - API used for communication between physical sensors in IoT devices 

