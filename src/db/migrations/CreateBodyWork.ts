import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateBodyWork1648471323839 implements MigrationInterface {
  private bodyWorkTable = new Table({
    name: 'bodyWorks',
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
        name: 'carrier_id',
        type: 'integer',
        isNullable: true,
      },
      { name: 'name', type: 'varchar', length: '255', isNullable: true },
    ],
  });

  private foreingKey = new TableForeignKey({
    columnNames: ['carrier_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'carriers',
    onDelete: 'CASCADE',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.bodyWorkTable);
    await queryRunner.createForeignKey('bodyWorks', this.foreingKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.bodyWorkTable);
  }
}
