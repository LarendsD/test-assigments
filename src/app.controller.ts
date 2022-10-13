import { Controller, Get, Headers, Render, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async returnExperiment(
    @Session() session: Record<string, any>,
    @Headers('Device-Token') DeviceToken: string,
  ): Promise<any> {
    const options = await this.appService.returnExperiment(DeviceToken);
    session.options = options;
    return options;
  }

  @Get('stat')
  @Render('table')
  async returnStatistic(): Promise<any> {
    const experiments = await this.appService.returnStat();
    return { experiments, _: require('lodash') };
  }
}
