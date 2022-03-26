import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFreight1648227544756 implements MigrationInterface {
  private freightTable = new Table({
    name: 'freights',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'origem',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'destino',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'preço',
        type: 'real',
        isNullable: false,
      },
      {
        name: 'produto',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'peso',
        type: 'float',
        isNullable: false,
      },
      {
        name: 'Especie',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'ratreador_flag',
        type: 'boolean',
        isNullable: false,
      },
      {
        name: 'agenciamento_flag',
        type: 'boolean',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'carrier',
        type: 'varchar',
        isNullable: false,
      },
      {
        name: 'data_entrega',
        type: 'timestamp',
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.freightTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.freightTable);
  }
}
