import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

  @Get()
  @Render('form')
  getForm(
    @Query('email') email: string,
    @Query('jelszo') jelszo: string,
    @Query('jelszo2') jelszo2: string,
  ): object {
    const errors: any = {};
    const regexe = /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const regexj = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/;
    if (!regexe.test(email)) {
      errors.email = 'Helytelen az email cím!';
    }
    if (!regexj.test(jelszo)) {
      errors.password1 = 'Helytelen a jelszó!';
    }
    if (jelszo !== jelszo2) {
      errors.password2 = 'A két jelszó nem azonos!';
    }
    return { email, jelszo, jelszo2, errors };
  }
}
