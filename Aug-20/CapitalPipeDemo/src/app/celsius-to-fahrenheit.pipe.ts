import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsiusToFahrenheit',
  standalone: true   // latest Angular me standalone pipe banega
})
export class CelsiusToFahrenheitPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined || isNaN(value)) {
      return '';
    }
    const fahrenheit = (value * 9/5) + 32;
    return `${fahrenheit}F`;
  }
}
