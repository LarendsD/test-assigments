# <a href='https://github.com/appbooster/test-assignments/blob/master/tasks/backend.md'>Test task</a> from <a href='https://appbooster.com/'>Appbooster</a>

# System for AB-tests

## How it works:
1. You sending GET-request on main page with header 'Device-Token'
2. In response server will send options list
3. Full statistics about all devices and options may see on route /stat 

## Available <a href='https://test-assigments.onrender.com'>online</a>

## Local setup:
1. Clone this repo locally
2. In local repo directory run this in command line:
```bash
make setup
```
### To start in normal mode, enter:
```bash
make start
```
### To start in development mode, enter:
```bash
make start-dev
```
### Started app will available in link below:
```bash
localhost:3000
```

### Run tests:
```bash
make start-test
```

### Run e2e-tests:
```bash
make test-e2e
```
