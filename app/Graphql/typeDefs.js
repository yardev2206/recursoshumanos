module.exports = `

    type Convocatoria {
        id: ID
        numero_de_convocatoria: String!
        observacion: String
        slug: String!
    }

    # Query Root
    type Query {
        getConvocatorias: [Convocatoria]
    }

    # Mutation Root
    type Mutation {
        createConvocatoria(numero_de_convocatoria: String, observacion: String): Convocatoria
    }

`
