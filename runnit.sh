#!/usr/bin/bash

#npm run serve --port 8089 --verbose

# npm help config

# /usr/node-v12.17.0-linux-x64/lib/node_modules/serve/bin/serve.js -s dist >/dev/null 2>&1

1) 
git pull origin dev7
or
git pull origin master

2) change the constant for ISCENTOS

3) cd /home/Nancy/html/tokenlife

4)  npm run build
  creates dist dir

plots are in 'static'

systemctl tokenlife.service does this:
#/home/Nancy/anaconda3/bin/python flask_app.py >/dev/null 2>&1


systemctl tokenlifeapp.service does this:
(to serve - you must use /usr/node-v12.17.0-linux-x64/lib/node_modules/serve/bin/serve.js)
# /usr/node-v12.17.0-linux-x64/lib/node_modules/serve/bin/serve.js -s dist


debugging:
sudo netstat -anp | grep node


sudo systemctl status tokenlifeapp
sudo systemctl stop tokenlifeapp
sudo systemctl start tokenlifeapp

Gunicorn run the python part
gunicorn start:
sudo systemctl status tokenlife


todo:
- make refilling the form better
- fix picture at bottom
- better explanations on forms


