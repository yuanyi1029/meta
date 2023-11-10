# Week 1 Notes

## Version Control 
Version control is a system that records all changes and modifications to project files for tracking purposes.

Benefits of version control:
- Revision History
- Identity
- Collaboration
- Automation
- Efficiency

Types of Version control systems:
- Centralized version control systems
- Distributed version control systems

Example version control systems:
- Subversion
- Perforce
- AWS Code Commit
- Mercurial
- Git 

## Centralized Version Control Systems
Centralized version control systems is a type of version control system that uses a server to store a main repository of the full history of a codebase. Developers working on projects that uses a centralized version control system needs to pull down the codebase from the server to their local machine and push changes to the server.

Advantages: 
- Easier to learn
- has more access controls for the user

Disadvantages:
- Slower than distributed version control systems (time needed to connect to the server)


## Distributed Version Control Systems
Distributed version control systems are the same Centralized version control systems, except that each local machine is also a server, where all local machines have the full history of a codebase.

Advantages: 
- Faster than centralized version control systems 
(not needed to connect to the server, only connect when pulling and pushing)

Disadvantages:
- Not mentioned

## Development Environment vs Staging Environment vs Production Environment
Development Environment - A localized environment where developers write code for an application

Staging Environment - A intermediary environment where the code for an application can be safely tested for bugs without disrupting services for the end-user, the staging environment should mimic the production environment

Production Environment - An operational environment platform where the final version of a product is deployed and made accessible to end-users

