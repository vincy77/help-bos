// import {Component, Input, OnInit,trigger, transition, style, animate, state} from '@angular/core';

import {trigger, animate, style, group, animateChild, query, stagger, transition, state, keyframes} from '@angular/animations';

export const toastAnimation = trigger('toastAnimation', [
  transition('* <=> *', [
    // 定义一个状态left
    state('left', style({ 'background-color': '#360', transform: 'translate3d(0,0,0)' })),
    // 定义另外一个状态right
    state('right', style({ 'background-color': '#630', transform: 'translate3d(500px,0,0)' })),
    // 定义运动过程(从left到right状态)
    transition('left=>right', animate(5000, keyframes([
      style({ transform: 'translate3d(10%,0,0)' }),
      style({ transform: 'translate3d(20%,0,0)' }),
      style({ transform: 'translate3d(40%,0,0)' }),
      style({ transform: 'translate3d(50%,0,0)' }),
      style({ transform: 'translate3d(60%,0,0)' }),
      style({ transform: 'translate3d(70%,0,0)' }),
      style({ transform: 'translate3d(80%,0,0)' }),
      style({ transform: 'translate3d(90%,0,0)' }),
      style({ transform: 'translate3d(100%,0,0)' }),
    ]))),
    // 定义运动过程(从right到left)
    transition('right=>left', animate(5000, keyframes([
      style({ transform: 'translate3d(100%,0,0)' }),
      style({ transform: 'translate3d(80%,0,0)' }),
      style({ transform: 'translate3d(70%,0,0)' }),
      style({ transform: 'translate3d(40%,0,0)' }),
      style({ transform: 'translate3d(30%,0,0)' }),
      style({ transform: 'translate3d(0%,0,0)' })
    ]))),
  ])
])
