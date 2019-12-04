## Generating certificate/key pair for your private Docker registry
```
mkdir certs

openssl req \
  -x509 -newkey rsa:4096 -nodes -sha256 -days 365 \
  -keyout certs/domain.key -out certs/domain.crt
```
