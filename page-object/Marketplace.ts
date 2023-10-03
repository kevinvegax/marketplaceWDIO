import { $ } from '@wdio/globals'

export class Marketplace {
    get crearPublicacion () { return $(`(//span[contains(text(), 'Crear publicación')])`) }

    // Elige tu tipo de publicacion
    get articuloEnVenta () { return $(`(//span[contains(text(), 'Artículo en venta')])`) }

    // Articulo en Venta
    get agregarFotos () { return $(`(//span[contains(text(), 'Agregar fotos')])`) }
    get titulo () { return $(`(//input[@dir='ltr' and @type='text'])[1]`) }
    get precio () { return $(`(//input[@dir='ltr' and @type='text'])[2]`) }



    get agregarFotos2 () { return $(`//input[@type = 'file']`) }
}