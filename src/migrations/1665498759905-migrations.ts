import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1665498759905 implements MigrationInterface {
  name = 'migrations1665498759905';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "experiments" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "device" varchar NOT NULL, "button_color" varchar NOT NULL, "price" integer NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "experiments"`);
  }
}
