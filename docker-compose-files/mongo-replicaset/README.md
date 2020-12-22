## Mongodb Replicaset in Docker containers

#### Update /etc/hosts
```
127.0.0.1   localhost   mongo-rs-01 mongo-rs-02 mongo-rs-03
```

#### Bring up the Replicaset
```
$ docker-compose up -d
```

#### Initiate Replicaset
```
$ mongo mongodb://mongo-rs-01:50001 00-init-replicaset.js
```

#### Connecting to Replicaset
```
$ mongo "mongodb://mongo-rs-01:50001,mongo-rs-02:50002,mongo-rs-03:50003/?replicaSet=mongo-rs"
```

#### Import Sample database
```
$ mongoimport --uri "mongodb://mongo-rs-01:50001,mongo-rs-02:50002,mongo-rs-03:50003/test?replicaSet=mongo-rs" --drop sample-dataset/restaurant.json
```
