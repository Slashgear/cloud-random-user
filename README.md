# Random user generator

## Install

```shell script
npm install -g cloud-random-user
```

or

```shell script
npm install -g @slashgear/cloud-random-user
```

## Usage

Generate 100 users:

```shell script
cloud-random-user 
```

Generate 10 users:

```shell script
cloud-random-user 10
```

Generate random user for https://slashgear.github.io/cloud/#/

User structure:

````json
{
    "id": 12121212123123,
    "firstName": "Antoine",
    "lastName": "Caron",
    "birthDay": "2012-07-14",
    "position": {
        "lat": 45.737526,
        "lon": 4.814719,
    }
}
````

Based on https://randomuser.me/

