fetch('https://jsonplaceholder.typicode.com/users');
then(weather => {
    return weather.json();
})
.then(body  => {
console.log(body);
})
