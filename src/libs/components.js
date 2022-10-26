import { now } from 'lodash'
import monstersPic from '../monster.jpg'

export function hello() {
  const el = document.createElement('div')
  el.innerText = 'hello'
  return el
}

export function monsters() {
  const el = document.createElement("img");
  el.src = monstersPic;
  return el;
}

export function date() {
  const el = document.createElement('div')
  el.innerText = now()
  return el
}