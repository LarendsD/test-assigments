import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migrations1665676069133 implements MigrationInterface {
  name = 'migrations1665676069133';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'experiments',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isGenerated: true,
            generatedIdentity: 'ALWAYS',
            generationStrategy: 'increment',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'device',
            type: 'character',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'button_color',
            type: 'character',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'integer',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('experiments');
  }
}
