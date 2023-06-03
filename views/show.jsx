const React = require('react')
const Default = require('./layouts/default')

function Show ({bread}) {
  console.log(bread.name)
    return (
     <Default>
        <h2>{bread.name}</h2>
        <p>
          {
            bread.hasGluten
            ? <span> Does </span>
            : <span> Does NOT </span>
          }
          have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <li><a href="/breads">Go home</a></li>
      </Default>
      
    )
}

module.exports = Show
