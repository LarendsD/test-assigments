import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1665676069133 implements MigrationInterface {
  name = 'migrations1665676069133';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "experiments" ("id" SERIAL NOT NULL, "device" character varying NOT NULL, "button_color" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_aafe1321d916fac58ba06ad8178" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "experiments"`);
  }
}
