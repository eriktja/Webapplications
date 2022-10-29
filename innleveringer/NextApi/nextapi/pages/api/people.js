// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const people = [
  {id:1, name: 'John Doe', age: 33},
  {id:2, name: 'Jane Doe', age: 31},
  {id:3, name: 'Per Gynt', age: 60},
  {id:4, name: 'Ola Normann', age: 25},
  {id:5, name: 'Kari Traa', age: 45},
]



export default function handler(req, res) {
  if(req.method === "GET") {
    res.status(200).json(people)
  }
  else if(req.method === "POST"){
    const content = req.body 
    people.push(content)
    res.status(201).json(people)
  }
}

