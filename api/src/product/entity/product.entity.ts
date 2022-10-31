import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Brand: string;

  @Column()
  exDate: Date;

  @Column()
  title: string;

  @Column()
  discountCode: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  description: string;
}
