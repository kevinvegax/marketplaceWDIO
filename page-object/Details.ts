import { $ } from '@wdio/globals'

export class Details {
    get marketplace () { return $(`(//span[contains(text(), 'Marketplace')])[2]`) }
}