import React from 'react'

export interface IPracticeTheme {
  color: string,
  fontSize: string,
}

const themeRed: IPracticeTheme = {
  color: 'red',
  fontSize: '20px'
}

const themeBlue: IPracticeTheme = {
  color: 'blue',
  fontSize: '14px'
}

const themes = {
  red: themeRed,
  blue: themeBlue,
}

type ValidThemes = keyof typeof themes

let listener: Array<() => void> = [];

export let current: ValidThemes = 'red'

export function getTheme(): IPracticeTheme {
  return themes[current]
}

export function onThemeChange(callback: () => void) {
  listener.push(callback);
}

export function offThemeChange(callback: () => void) {
  listener = listener.filter(f => f !== callback)
}

export function updateTheme(to: ValidThemes) {
  current = to
  listener.forEach(f => f())
}
