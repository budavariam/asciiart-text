import React, { useEffect, useState, forwardRef } from 'react'
import figlet from 'figlet'
import { fonts } from "../helpers/fonts.js"
import { layout } from '../helpers/layout.js'
import { outputFormat, fmtValues } from '../helpers/outputFormat.js'

export const Figlet = forwardRef((
  {
    text,
    font = fonts.font_Standard,
    horizontalLayout = layout.default,
    verticalLayout = layout.default,
    width = 80,
    fmt = outputFormat.default,
    whitespaceBreak = true,
    ...props },
  ref
) => {
  const [ascii, setAscii] = useState("")

  useEffect(() => {
    figlet.parseFont(font.name, font.value)
  }, [font])

  useEffect(() => {
    figlet.text(text, {
      font: font.name,
      horizontalLayout,
      verticalLayout,
      width,
      whitespaceBreak,
    }, (err, data) => {
      if (err) {
        console.error("Failed to display figlet text", err)
        setAscii("")
        return err
      }
      setAscii(data)
      const outFormat = fmtValues[fmt.value]
      const result = [outFormat.start]
        .concat(
          data
            .split("\n")
            .map(line => `${outFormat.lineStart}${line}${outFormat.lineEnd}`)
            .join("\n")
          , outFormat.end
        )
      setAscii(result)
    })
  }, [text, font, horizontalLayout, verticalLayout, width, whitespaceBreak, fmt])

  return <pre ref={ref} {...props}>{ascii}</pre>
})