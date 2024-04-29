## 🚀 Quick start

To get the system set up on your own laptop, first Download the latest version of Visual Studio Code (if you do not already have it)
Once VS Code is opened, you should go to Terminal -> New Terminal
In the terminal, run the command 
```
git clone https://github.com/dhruv575/business.thedp.com.git
```
Once that is done, go ahead and run these commands
```
cd business.thedp.com
code .
```
This should then open up a new visual studio code window where you should see a business.thedp.com folder on the left
The next step should be running
```
npm install
```
After which you should run 
```
npm audit fix
```
At this point, you should be ready to go! Run
```
npm run start
```
and then navigate to localhost:http://localhost:8000/ on your browser to view the website. Whenever you make any changes, you should just save any of the .js files and your website should automatically recompile

## 🔨 For some Mac M1 Users:
There may be a bug related to the package `sharp` during installation which require you to install `libvips` along with other configurations for path variables. If you do encounter this errors, please:

```
brew install vips pkg-config glib zlib  
export LDFLAGS="-L/opt/homebrew/opt/zlib/lib"  
export CPPFLAGS="-I/opt/homebrew/opt/zlib/include"
export PKG_CONFIG_PATH="/opt/homebrew/opt/zlib/lib/pkgconfig"
export NODE_OPTIONS=--openssl-legacy-provide
```

Everything should be good to go after this and run `npm install` again.


The website should be running @ `localhost:8000` 
- Note: the website automatically reloads when changes are made, so you do not need to restart the server

## ✏️ Updating Project/Team/Department Information

Go to `src/json/` and look for the relevant file. When adding a project, simply copy the same format as the previous projects, and add it at the bottom of the JSON file. Make sure you do not have a comma at the end of your new project.

When adding or editing departments, changes must be made at both `src/json/departments.json` and `src/json/products.json` for the time being. Should be fixed soon

`src/json/team.json` is organized by people's positions (i.e. Managers, Senior Consultanta, Team Members). If you would like to update out old members, cut them from their current place and add them under the "alumni" section in the JSON. 

## 🤗 Publishing Your Changes

When you think you are ready to publish to the main page, run the commands
```
git add .
git commit -m"DESCRIBE WHATEVER CHANGES YOU MADE HERE"
git push
```
Within about 5 minutes of git push being run, you should see the changes up on the website.