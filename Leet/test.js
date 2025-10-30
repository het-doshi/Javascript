const recipe = [
  { ingredient: "Tomato", quantity: 2 },
  { ingredient: "Onion", quantity: 1 },
   { ingredient: "Onion", quantity: 5 }
];

let result = []


    for(let r of recipe)
    {
       const existing = result.find( item => item.ingredient == r.ingredient )

       if(existing)
       {
          existing.quantity += r.quantity 
       }
       else
       {
          result.push(r)
       }
    }

    console.log(result)


