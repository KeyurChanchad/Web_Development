// Download node js from https://nodejs.com
//Node js is server side programing language. It used to run javascript without browser. It is runtime environment of js.

//Take minimal require code from nodejs website
//Run js file by node .\63_nodejs.js

console.log("This is about node js");
// const { table } = require('console');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/pain');
  //   res.end('Hello World this is keyur');
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Before and after pseudo selectore</title>
      <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
      <style>
          body {
              background-color: rgb(66, 61, 61);
              color: blanchedalmond;
              margin: 0px;
              padding: 0px;
          }
  
          header::before {
              content: "";
              background: url('https://source.unsplash.com/collection/190727/1600x900') no-repeat center center/cover;
              position: absolute;
              width: 100%;
              height: 100%;
              z-index: -1;
              top: 0px;
              left: 0px;
              bottom: 0px;;
              opacity: 0.5;
          }
  
          section {
              display: flex;
              flex-direction: column;
              margin: 40px 200px;
              align-items: center;
              height: 200px;
              justify-content: center;
          }
  
          /* section::after{
      content:"This is a content";
  } */
          h2 {
              font-size: 4rem;
              margin-bottom: 30px;
              margin-top: 30px;
          }
  
          p {
              text-align: center;
              font-size: 15px;
              font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
          }
  
          .navigation {
              display: flex;
              font-size: 20px;
          }
          ul li{
              padding: 7px 13px;
          }
          
          
          li a{
              text-decoration: none;
              padding: 2px 8px;
              color: beige;
              border-radius: 10px;        
          }
  
          .navigation li{
              list-style: none;
          }
  
          li a:hover{
              color: grey;
              background-color: beige;
          }
          .container{
              display: flex;
             
          }
          .card{
              border: 2px solid rgb(245, 239, 239);
              margin: 20px 40px ;
               padding: 10px 22px;
              font-size: 25px;
              text-align: center;
              box-shadow: 8px 10px 10px aliceblue;
              width: 450px;
             
          }
          
          article + p{
              margin: 0;
              padding: 0;
          }
  
          div p {
              font-family: 'Dancing Script', cursive;
              font-size: 20px;
          }
      </style>
  </head>
  
  <body>
      <header>
          <nav class="navbar">
              <ul class="navigation">
                  <li> <a href="#">Home</a> </li>
                  <li> <a href="#">Abuot us</a> </li>
                  <li> <a href="#">Servies</a> </li>
                  <li> <a href="#">Contact us</a> </li>
              </ul>
          </nav>
      </header>
      <section>
          <h2>Welcome to coding world</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti suscipit harum magni blanditiis possimus
              architecto sed adipisci doloremque dolorem porro! Quibusdam expedita perferendis deserunt dolore dolorum
              provident molestias quae dolorem similique cum blanditiis numquam, ab sed consequuntur voluptatibus?
              Explicabo, aliquid!</p>
      </section>
      <article class="container">
          <div class="card" id="card-1">
              <h3>Card-1</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quidem in iste. Illo pariatur velit quisquam fuga, explicabo veritatis quod veniam eveniet modi suscipit odio provident ad quia repudiandae, voluptatibus hic facilis dolore sit harum! A natus sit itaque non.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis perferendis cum asperiores itaque unde sit id iure saepe laboriosam! Maiores! </p>
          </div>
          <div class="card" id="card-2">
              <h3>Card-2</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores accusantium natus ea omnis deleniti, sequi eius nobis eaque expedita facilis aspernatur perspiciatis fugiat id sunt? Fugit odio culpa accusamus voluptatibus doloremque officia tempore incidunt, rem eveniet iure. Ducimus, nulla? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis perferendis cum asperiores itaque unde sit id iure saepe laboriosam! Maiores! </p>
          </div>
          <div class="card" id="card-3">
              <h3>Card-3</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores accusantium natus ea omnis deleniti, sequi eius nobis eaque expedita facilis aspernatur perspiciatis fugiat id sunt? Fugit odio culpa accusamus voluptatibus doloremque officia tempore incidunt, rem eveniet iure. Ducimus, nulla?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis perferendis cum asperiores itaque unde sit id iure saepe laboriosam! Maiores!</p>
          </div>
      </article>
      <p>This site to be reserved &reg; for this app.</p>
      
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// In terminal     PS H:\web development full corse\HTML CSS JAVA_SCRIPT>   node  just write node 
                // PS H:\web development full corse\HTML CSS JAVA_SCRIPT>    node .\tut63.js   for open nodejs
                // _ gives privious variable
                // .exit  , 2 time table, .help
                // we can write js in terminal repl 





