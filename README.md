# Website - My Portfolio - LeoDG
## Frontend with Tailwind CSS and DevContainer Environment
A frontend from simple project my Website and my portfolio using Tailwind CSS in a DevContainer environment.

<img width="800" height="600" alt="homepage" src="https://github.com/leonardodg/website/blob/main/src/images/leodg.dev.png?raw=true">


## 📋 Features
- ⚡ **Rapid development** Frontend with Tailwind CSS
- 🔄 **Auto-reload** for CSS changes
- 🐳 **DevContainer** for consistent development environment
- 📱 **Responsive design** ready for use
- 🔌 **Port forwarding** configured for easy localhost access

## 🚀 Quick Start

### Prerequisites
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Remote - Containers - VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Installation and Running

1. Clone this repository:
```bash   
   git https://github.com/leonardodg/website.git
   cd website   
```

2. Open the folder in VS Code:
```bash
   code .
```

3. When prompted, click "Reopen in Container" or run the command:
   - Press `F1`   - Type "Remote-Containers: Reopen in Container"
   - Press Enter

4. Inside the DevContainer, install dependencies and start the server:
```bash
   npm install
   npm run build
   npm start
```

5. Access the website in your browser:
```   http://localhost:3000   ```
   
## 🛠 Project Structure

```
.├── .devcontainer/          # DevContainer configuration
 │   ├── Dockerfile          # Docker image definition
 │   └── devcontainer.json   # VS Code environment settings
 ├── public/                 # Built files (served to browser)
 │   ├── css/                # Compiled CSS output
 │   │   └── styles.css      # Generated CSS file
 │   └── index.html          # Compiled HTML file 
 ├── src/                    # Source code 
 │   ├── styles/             # CSS source files
 │   │   └── main.css        # Tailwind CSS entry file
 │   └── index.html          # Source HTML file
 ├── package.json            # Dependencies and npm scripts
 ├── postcss.config.js       # PostCSS configuration
 ├── tailwind.config.js      # Tailwind CSS configuration
 └── README.md               # This file
```
 
 ## 📦 Available Scripts
- ```npm run dev``` - Builds HTML and CSS once
- ```npm run watch``` - Starts development mode with HTML and -CSS watching
- ```npm run build``` - Compiles HTML and CSS files for production 
- ```npm run start``` - Starts - the local HTTP server serving the public folder
 
 ## 🤝 Contributing
 
 <img src="https://avatars.githubusercontent.com/u/1678290?s=400&u=2f875356b82f055057b6e9679c0b66001b9b29f9&v=4" title="LeoDG" >


 ## 📄 License
 This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
 
 ## 📮 Contact
 
LeonardoDG - [@le0dg](https://www.linkedin.com/in/le0dg)

Github Repository Link: [https://github.com/leonardodg/website.git](https://github.com/leonardodg/website.git)

GH-Pages Link: [https://leonardodg.github.io/website](https://leonardodg.github.io/website)

Website Link: [https://leodg.dev](https://leodg.dev)