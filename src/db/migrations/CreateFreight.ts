import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateFreight1648227544756 implements MigrationInterface {
  private freightTable = new Table({
    name: 'freights',
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
        isNullable: true,
      },
      {
        name: 'origin',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'destination',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'price',
        type: 'real',
        isNullable: true,
      },
      {
        name: 'product',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'weight',
        type: 'float',
        isNullable: true,
      },
      {
        name: 'species',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'note',
        type: 'text',
        isNullable: true,
      },
      {
        name: 'tracker_flag',
        type: 'boolean',
        isNullable: true,
      },
      {
        name: 'agencying_flag',
        type: 'boolean',
        isNullable: true,
      },
      {
        name: 'delivery_date',
        type: 'timestamp',
        isNullable: true,
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
        name: 'bodyWork',
        type: 'varchar',
        length: '100',
        isNullable: false,
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
    await queryRunner.createTable(this.freightTable);
    await queryRunner.createForeignKey('freights', this.foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.freightTable);
    //await queryRunner.dropForeignKey('freights', this.foreignKey);
  }
}
