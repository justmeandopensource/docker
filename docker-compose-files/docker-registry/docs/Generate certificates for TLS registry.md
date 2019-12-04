## Generating certificate/key pair for your private Docker registry
```
mkdir certs
```
Copy below content to __openssl.conf__

_Update **Docker Server IP** with the IP address of your server where you will be running docker registry_
```
[ req ]
distinguished_name = req_distinguished_name
x509_extensions     = req_ext
default_md         = sha256
prompt             = no
encrypt_key        = no

[ req_distinguished_name ]
countryName            = "GB"
localityName           = "London"
organizationName       = "Just Me and Opensource"
organizationalUnitName = "YouTube"
commonName             = "<Docker Server IP>"
emailAddress           = "test@example.com"

[ req_ext ]
subjectAltName = @alt_names

[alt_names]
DNS = "<Docker Server IP>"
```
Generate the certificate and private key
```
openssl req \
 -x509 -newkey rsa:4096 -days 365 -config openssl.conf \
 -keyout certs/domain.key -out certs/domain.crt
```
To verify your certificate
```
openssl x509 -text -noout -in certs/domain.crt
```
