/* eslint-disable prettier/prettier */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCarrier1648297760912 implements MigrationInterface {
  private carrierTable = new Table({
    name: 'carriers',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isUnique: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'user_id',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'carrier',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'service',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'company',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'price',
        type: 'real',
        isNullable: true,
      },
      {
        name: 'email',
        type: 'varchar',
        length: '100',
        isNullable: false,
      },
      {
        name: 'phone',
        type: 'varchar',
        length: '100',
        isNullable: false,
      },
      {
        name: 'img',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
    ],
  });

  private foreignKey = new TableForeignKey({
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connect()
    await queryRunner.createTable(this.carrierTable);
    await queryRunner.createForeignKey('carriers', this.foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.carrierTable);
    //await queryRunner.dropForeignKey('freights', this.foreignKey);
  }
}
