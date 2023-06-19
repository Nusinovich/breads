const React = require('react')
const Default = require('./layouts/default')

function Index({bakers, breads, id }) {
    return (
      <Default>
        <h2>Index Page</h2>
        <h3>Bakers</h3>
      {/* need to fix*/}
        <ul>
          {
            bakers.map((baker) => {
            return (
              <li key={baker._id}>
                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
              </li>
            )
          })}
        </ul>
        <h3>Breads</h3>
        <ul>
          {breads.map((bread, id) => {
            return (
              <li key={bread.id}>
                <a href={`/breads/${bread.id}`}>{bread.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="newButton">
          <a href="/breads/new">
            <button>Add a new bread</button>
          </a>
        </div>
      </Default>
    );
  }

module.exports = Index


