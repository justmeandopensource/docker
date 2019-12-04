## Adding insecure registries

If you want to connect to a private docker registry that is either
* not configured for https
* or configured for https using self-signed certificates

then add these configuration to **/etc/docker/daemon.json**
```
{
  "insecure-registries": ["<ip>:<port>"]
}
```
And restart docker service
```
sudo systemctl restart docker
```
