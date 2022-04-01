import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoInfoConvert'
})
export class VideoInfoConvertPipe implements PipeTransform {

  
  transform(value: string): string {
    const moreThenTenThousand = (Number(value) / 1000).toFixed(2).replace(/.$/,'k');
    const moreThenOneMillion = (Number(value) / 1000000).toFixed(2).replace(/.$/,'M');
    const moreThenOneBillion = (Number(value) / 1000000000).toFixed(2).replace(/.$/,'B');
    
    switch (!!value) {
      case Boolean(Number(value) >= 1000 && Number(value) < 1000000):
        return moreThenTenThousand;
        break;
      case Boolean(Number(value) >= 1000000):
        return moreThenOneMillion;
        break;
      case Boolean(Number(value) >= 1000000000):
        return moreThenOneBillion;
        break;
      default: return value
        break;
    }
  }

}
