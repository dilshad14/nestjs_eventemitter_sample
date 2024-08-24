import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getHello', () => {
    it('should return "Hello World!" after a delay', async () => {
      jest.spyOn(appService, 'getHello').mockResolvedValue('Hello World!');
      jest.spyOn(global, 'setTimeout').mockImplementation((cb: Function) => {
        cb();
        return null as unknown as NodeJS.Timeout;
      });
      
      const result = await appController.getHello();
      
      expect(result).toBe('Hello World!');
      expect(appService.getHello).toHaveBeenCalled();
    });

    it('should log the request time', async () => {
      const consoleSpy = jest.spyOn(console, 'log');
      jest.spyOn(appService, 'getHello').mockResolvedValue('Hello World!');
      jest.spyOn(global, 'setTimeout').mockImplementation((cb: Function) => {
        cb();
        return null as unknown as NodeJS.Timeout;
      });

      await appController.getHello();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Request received : ',
        expect.any(String)
      );
    });

    it('should delay for 20 seconds', async () => {
      jest.spyOn(appService, 'getHello').mockResolvedValue('Hello World!');
      //jest.useFakeTimers();

      const promise = appController.getHello();
      jest.advanceTimersByTime(20000);
      const result = await promise;

      expect(result).toBe('Hello World!');
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 20000);
    });
  });
});