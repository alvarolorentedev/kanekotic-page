---
sidebar_position: 25
---

# ELK Docker

# ![logomakr_5axvtc](https://user-images.githubusercontent.com/3071208/41837679-81e03624-785e-11e8-841c-4bd25a61b5cd.png)

This show how multiple containers can aggregate log to logging infrastructure with docker compose using logstash, elastic search and kibana

## Run

you will need docker installed in your computer, after it :

1. Run

```zsh
docker-compose up
```

2. run to get some logs from httpd

```zsh
repeat 10 curl http://localhost:80/ 
```

3. Kibana:
   - this might take a bit
   - Navigate to http://localhost:5601 
   - Add logstash-* as index with @timestamp as Time-field name
   - Go to Discover 

4. Grafana:
   - Navigate to http://localhost:3000 
   - username and password are admin
   - Navigate and create dashboards

## Architecture

the target architecture would be to allow gathering information from applications but also sync with hadoop to enable having a data lake to improve analytics, and pull directly from google analytics to logstash.

![image](https://user-images.githubusercontent.com/3071208/41893258-66e86d6a-791b-11e8-9e2a-929c723b9f44.png)

(current architecture is missing google analytics and hadoop as seen in TODO list)

## Backlog
- [X] Add kibana container
- [X] Add Grafana container visualization
- [X] Add elasticsearch container
- [X] Add logstash container and configuration
- [X] Add aplication containers
- [X] Add dashboard as code for grafana
- [ ] Add import fron google analytics through logstash and http_poller
- [ ] Add hadoop infrastructure for data analytics extension

## References & further readings

- [docker logging article](https://docs.fluentd.org/v0.12/articles/docker-logging-efk-compose) 
- [gist eunomie](https://gist.github.com/eunomie/e7a183602b8734c47058d277700fdc2d) 
- [http poller](https://www.elastic.co/guide/en/logstash/current/plugins-inputs-http_poller.html)
- [hadoop elastic search](https://www.elastic.co/products/hadoop)
- [hadoop vs elastic search](https://blog.treasuredata.com/blog/2015/08/31/hadoop-vs-elasticsearch-for-advanced-analytics/)

## [Github Repo](https://github.com/kanekotic/ELK-Docker)

### Logo

Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a> https://logomakr.com/5axvTc
