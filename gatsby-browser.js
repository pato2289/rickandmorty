const React = require("react")
const Layout = require("./src/components/layout").default

// Para tener el Layout en cada pagina que se crea
exports.wrapRootElement = ({ element }) => <Layout>{element}</Layout>
