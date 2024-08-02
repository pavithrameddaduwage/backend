import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  team?: string;

  @Column({ nullable: true })
  department?: string;

  @Column({ nullable: true })
  contact?: string;

  @Column({ nullable: true })
  url?: string;

  @Column({ default: false })
  under_development?: boolean;
}
