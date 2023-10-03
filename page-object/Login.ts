import { $ } from '@wdio/globals'


export class Login {
    get email () { return $(`//input[@name = 'email']`) }
    get password () { return $(`//input[@name = 'pass']`) }
    get login () { return $(`//button[@name = 'login']`) }
}