import { useState, useEffect } from "react"
import { fonts } from "../helpers/fonts.js"
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import { layout } from "../helpers/layout"
import { getFavourites, setFavourite } from "../helpers/favourites"
import { Checkbox, FormControlLabel, Paper } from "@material-ui/core"
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Grid from '@material-ui/core/Grid'
import { FigletContainer } from "../figlet/FigletContainer"

const fontMenuItems = Object.entries(fonts).map(([fontKey, { name }]) => <MenuItem key={fontKey} value={fontKey}>{name}</MenuItem>)
const layoutMenuItems = Object.entries(layout).map(([layoutKey, { name }]) => <MenuItem key={layoutKey} value={layoutKey}>{name}</MenuItem>)

export function FigletControls({ items = null }) {
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
            <Grid container spacing={3}>
                {items === null &&
                    <Grid item xs={2}>
                        <FormControl fullWidth>
                            <InputLabel id="fontlabel">Font</InputLabel>
                            <Select labelId="fontlabel" id="fontSelector" variant="filled" value={font.fontKey} onChange={(e) => {
                                setFont(fonts[e.target.value])
                            }}>
                                {fontMenuItems}
                            </Select>
                        </FormControl>
                    </Grid>
                }
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="hlayoutlabel">Horizontal layout</InputLabel>
                        <Select labelId="hlayoutlabel" id="horizontalLayoutSelector" value={horizontalLayout.value} onChange={(e) => {
                            setHorizontalLayout(layout[e.target.value])
                        }}>
                            {layoutMenuItems}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="vlayoutlabel">Vertical layout</InputLabel>
                        <Select labelId="vlayoutlabel" id="verticalLayoutSelector" value={verticalLayout.value} onChange={(e) => {
                            setVerticalLayout(layout[e.target.value])
                        }}>
                            {layoutMenuItems}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
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
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
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
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
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
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            id="outlined-multiline-static"
                            label="Text"
                            multiline
                            rows={4}
                            variant="outlined"
                            value={text}
                            onChange={(e) => { setText(e.target.value) }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>

                    {items === null
                        ? <FigletContainer
                            text={text}
                            font={font.name}
                            fontData={font.value}
                            width={parseInt(width, 10)}
                            horizontalLayout={horizontalLayout.value}
                            verticalLayout={verticalLayout.value}
                        />
                        : items.length > 0
                            ? items.map((currentFont) => (
                                <FigletContainer
                                    text={text}
                                    font={currentFont.name}
                                    fontData={currentFont.value}
                                    width={parseInt(width, 10)}
                                    horizontalLayout={horizontalLayout.value}
                                    verticalLayout={verticalLayout.value}
                                />
                            ))
                            : <Paper>No items available</Paper>
                        }
                </Grid>
            </Grid>
        </form>)
}
