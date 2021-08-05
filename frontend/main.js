fetch('https://sheltered-earth-99321.herokuapp.com/get-blogs/')
  .then(response => response.json())
  .then(data => console.log(data));

const token = 'YOUR_TOKEN_HERE';
let = {
   "username": "thapelo",
   "password": "thapelo"
}

fetch('https://sheltered-earth-99321.herokuapp.com/auth', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"username": "thapelo", "password": "thapelo"})
}).then(res => res.json())
  .then(res => {
            console.log(res);
            myStorage = window.localStorage;
            console.log(res["access_token"]);
            myStorage.setItem("jwt-token", res["access_token"]);
            fetch('https://sheltered-earth-99321.herokuapp.com/create-blog/', {
              method: 'post',
              headers: {
                "Authorization": `jwt ${myStorage.getItem("jwt-token")}`,
                "Access-Control-Allow-Origin": '*'
              },
              body: JSON.stringify({"title": "New Blog Post 2 Title", "content": "New Blog Post 2 Content"})
        })
          .then(res => res.json())
          .then(json => console.log(json));
   });