# 12 FACTOR APP

> The **12-Factor App methodology** is a methodology for building SaaS ( "Software as a service") applications. These best practices are designed to enable applications to be built with portability and resilience when deployed to the web.

<br />

## The 12 Factors

1. *Codebase:* 
	There should be exactly one codebase for a deployed service with the codebase being used for many deployments.

2. *Dependencies:*
	All the essential functions and piece of code should be clear with no ambiguity.

3. *Config:*
	Configuration that varies between deployments should be stored in the environment.

4. *Backing Services:*
	All backing services are treated as attached resources and attached and detached by the execution environment.

5. *Build, release, run:*
	The delivery pipeline should strictly consist of build, release, run.

6. *Processes:*
	Applications should be deployed as one or more stateless processes with persisted data stored on a backing service.

7. *Port Binding:*
	Self-contained services should make themselves available to other services by specified ports.

8. *Concurrency:*
	Concurrency is advocated by scaling individual processes.

9. *Disposability:*
	Fast startup and shutdown are advocated for a more resilient system.

10. *Dev/Prod parity:* 
	All environments should be as similar as possible.

11. *Logs:*
	Applications should produce logs as event occurs and leave the execution environment to aggregate.

12. *Admin Processes:*
	Any needed admin tasks should be kept in source control and packaged with the application.