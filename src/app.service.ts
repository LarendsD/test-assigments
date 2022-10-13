import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Experiments } from './entities/experiment.entity';
import generate from './generate/generate';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Experiments)
    private experimentsRepository: Repository<Experiments>,
  ) {}

  async returnStat(): Promise<Experiments[]> {
    return this.experimentsRepository.find();
  }

  async returnExperiment(deviceToken: string): Promise<any> {
    if (!deviceToken) {
      return new NotAcceptableException('No Device-Token header found!');
    }
    const find = await this.experimentsRepository.findOne({
      select: {
        button_color: true,
        price: true,
      },
      where: {
        device: deviceToken,
      },
    });
    if (find) {
      return find;
    }
    const options = generate();
    const newDevice = this.experimentsRepository.create({
      device: deviceToken,
      button_color: options.button_color,
      price: options.price,
    });
    await this.experimentsRepository.insert(newDevice);
    return options;
  }
}
