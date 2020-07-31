const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Fetch your items (blog posts, categories, etc).
  const charactersDetails = doSomeMagic()

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: charactersDetails, // An array of objects
    itemsPerPage: 12, // How many items you want per page
    pathPrefix: "/characters", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve("..."), // Just like `createPage()`
  })
}

exports.createPages = async ({ graphql, actions }) => {
  //usamos el metodo createPage
  const { createPage } = actions
  //le indicamos a partir de que diseño (el que hacemos en template)
  const characterTemplate = path.resolve(`src/templates/Character.js`)
  //definimos un resultado y una llamada asincrona que espere el resultado de graphql con el query
  const result = await graphql(`
    query {
      RickAndMorty {
        characters(page: 3) {
          results {
            id
            name
            species
            gender
            image
            episode {
              episode
              name
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  //si no hay erorres, traigo la data y hago un forEach por cada nodo
  const characters = result.data.RickAndMorty.characters.results

  characters.forEach(character => {
    //createPage es un objeto con el path y el componente que lo resuelve
    createPage({
      path: `/${character.id}`,
      component: characterTemplate,
      context: { character: character },
    })
  })
}
