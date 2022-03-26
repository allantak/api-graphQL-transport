import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCarrier1648297760912 implements MigrationInterface {
  private carrierTable = new Table({
    name: 'carrier',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'Empresa',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'carrier',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'services',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'carroceria',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'preço',
        type: 'real',
        isNullable: false,
      },
      {
        name: 'contato',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.carrierTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.carrierTable);
  }
}
