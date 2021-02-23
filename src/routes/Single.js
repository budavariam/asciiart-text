import { useState, useEffect } from "react"
import { Figlet } from '../figlet/Figlet'
import { fonts } from "../helpers/fonts.js"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { layout } from "../helpers/layout";
import { getFavourites, setFavourite } from "../helpers/favourites";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const fontMenuItems = Object.entries(fonts).map(([fontKey, { name }]) => <MenuItem key={fontKey} value={fontKey}>{name}</MenuItem>)
const layoutMenuItems = Object.entries(layout).map(([layoutKey, { name }]) => <MenuItem key={layoutKey} value={layoutKey}>{name}</MenuItem>)

export function Single() {
  const [text, setText] = useState("Type Something")
  const [font, setFont] = useState(() => (fonts.font_Standard))
  const [width, setWidth] = useState(80)
  const [horizontalLayout, setHorizontalLayout] = useState(() => layout.default)
  const [verticalLayout, setVerticalLayout] = useState(() => layout.default)
  const [whitespaceBreak, setWhitespaceBreak] = useState(true)
  const [fav, setFav] = useState(() => getFavourites())

  useEffect(() => {
    // TODO: use useReducer to prevent jsonparse after every render
    if (Boolean(getFavourites()[font.name]) !== fav[font.name]) {
      setFavourite(font.name, fav[font.name])
    }
  }, [font, fav])

  return (
    <form noValidate autoComplete="off">
      <FormControl style={{ minWidth: "110px" }}>
        <InputLabel id="fontlabel">Font</InputLabel>
        <Select labelId="fontlabel" id="fontSelector" value={font.fontKey} onChange={(e) => {
          setFont(fonts[e.target.value])
        }}>
          {fontMenuItems}
        </Select>
      </FormControl>
      <FormControl style={{ minWidth: "110px" }}>
        <InputLabel id="hlayoutlabel">Horizontal layout</InputLabel>
        <Select labelId="hlayoutlabel" id="horizontalLayoutSelector" value={horizontalLayout.value} onChange={(e) => {
          setHorizontalLayout(layout[e.target.value])
        }}>
          {layoutMenuItems}
        </Select>
      </FormControl>
      <FormControl style={{ minWidth: "110px" }}>
        <InputLabel id="vlayoutlabel">Vertical layout</InputLabel>
        <Select labelId="vlayoutlabel" id="verticalLayoutSelector" value={verticalLayout.value} onChange={(e) => {
          setVerticalLayout(layout[e.target.value])
        }}>
          {layoutMenuItems}
        </Select>
      </FormControl>
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={width}
        min={20}
        max={5000}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10)
          if (value >= 20) {
            setWidth(e.target.value)
          }
        }}
      />
      <TextField
        id="outlined-multiline-static"
        label="Text"
        style={{ minWidth: "500px" }}
        multiline
        rows={4}
        variant="outlined"
        value={text}
        onChange={(e) => { setText(e.target.value) }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={whitespaceBreak}
            onChange={(e) => {
              setWhitespaceBreak(e.target.checked)
            }}
            name="whitespaceBreakCheckbox"
            color="primary"
          />
        }
        label="Whitespace Break"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="markFavourite"
            onChange={(e) => {
              setFav((prevFav) => ({ ...prevFav, [font.name]: e.target.checked }))
            }}
            checked={fav[font.name]}
          />}
        label="Favourite"
      />
      <Figlet
        text={text}
        font={font.name}
        fontData={font.value}
        width={parseInt(width, 10)}
        horizontalLayout={horizontalLayout.value}
        verticalLayout={verticalLayout.value}
      />
    </form>)
}
