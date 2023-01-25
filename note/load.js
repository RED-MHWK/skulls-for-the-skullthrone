
const response = await fetch('https://dummyjson.com/products');

if(response.status == 200){
    console.log('yes, available')
    const data = await response.json();
    console.log(data);
} else {
    console.log('oh no!')
}