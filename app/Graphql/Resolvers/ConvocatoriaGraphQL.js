'use strict'

const Convocatoria = use('App/Models/Convocatoria')
const slugify = require('slugify')

class ConvocatoriaGraphQL
{

    async createConvocatoria(_,  { numero_de_convocatoria, observacion } ) {
        return await Convocatoria.create({
            numero_de_convocatoria,
            observacion,
            slug: slugify(numero_de_convocatoria, { lower: true })
        }); 
    }

    async getConvocatorias() {
        const convocatorias = await Convocatoria.all()
        return convocatorias.toJSON()
    }

}

module.exports = new ConvocatoriaGraphQL;