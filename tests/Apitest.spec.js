const { test,expect } = require("@playwright/test");

test('getrequest fetch users',async({request})=>{
    const response=await request.get("https://jsonplaceholder.typicode.com/users");
    expect(await response.ok()).toBeTruthy();
    const body= await response.json();
    await expect(body.length).toBeGreaterThan(0);
    console.log(body[1].username);
})
test.only('post request create user',async({request})=>{
    const response=await request.post("https://jsonplaceholder.typicode.com/users",{
        data:{
            name:'John Doe',
            email:'johndoe@example.com',
            username:'john'
        }
    })
   await expect (response.status()).toBe(201);
    const responsebody=await response.json()
   await expect (responsebody.name).toBe('John Doe');

})