
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
  )
]);

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
  )
]);

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('300ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      [style({ opacity: 1 }), animate('200ms', style({ opacity: 0 }))],
      { optional: true }
    )
  ])
]);
export const listInAnimation = trigger('listInAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('300ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    )
  ])
]);

export const bounceInAnimation = trigger('bounceInAnimation', [
  transition(':enter', [
    style({ transform: 'scale(0.2)' }), animate('200ms cubic-bezier(.22,1.07,.71,1.17)', style({ transform: 'scale(1)' }))]
  )
]);