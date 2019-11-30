"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ConvocatoriaSchema extends Schema {
  up() {
    this.create("convocatorias", table => {
      table.increments();
      table.string("numero_de_convocatoria").unique().notNullable();
      table.text("observacion");
      table.string("slug").unique().notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("convocatorias");
  }
}

module.exports = ConvocatoriaSchema;
