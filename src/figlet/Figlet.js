import React, { useEffect, useState, forwardRef } from 'react'
import figlet from 'figlet'
import { fonts } from "../helpers/fonts.js"
import { layout } from '../helpers/layout.js'

export const Figlet = forwardRef(({
  text,
  font = 'Standard',
  fontData = fonts.font_Standard.value,
  horizontalLayout = layout.default,
  verticalLayout = layout.default,
  width = 80,
  whitespaceBreak = true,
  ...props }, ref) => {
  const [ascii, setAscii] = useState('')
  useEffect(() => {
    figlet.parseFont(font, fontData)
  }, [font, fontData])

  useEffect(() => {
    figlet.text(text, {
      font,
      horizontalLayout,
      verticalLayout,
      width,
      whitespaceBreak,
    }, (err, data) => {
      if (err) {
        console.error(err)
        return err
      }
      setAscii(data)
    })
  }, [text, font, horizontalLayout, verticalLayout, width, whitespaceBreak])
  return <pre ref={ref} {...props}>{ascii}</pre>
})