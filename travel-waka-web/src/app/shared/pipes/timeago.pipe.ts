import { Pipe, PipeTransform } from '@angular/core';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

@Pipe({
  name: 'timeago'
})
export class TimeagoPipe implements PipeTransform {
  constructor() {
    dayjs.extend(relativeTime);
  }

  transform(value: Date, ...args: any[]): any {
    return dayjs(value).fromNow();
  }
}
