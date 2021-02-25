import { Button, Card, CardActions, CardContent, Checkbox, FormControl, FormControlLabel, Grid, Paper, Typography } from "@material-ui/core"
import { useRef } from "react"
import { copyToClipboard } from "../helpers/clipboard"
import { Figlet } from "./Figlet"
import LazyLoad from 'react-lazyload'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import { FavouriteContextConsumer, FAVOURITE_ACTIONS } from "../favourites/FavouriteContext"

export const FigletContainer = (props) => {
  const ref = useRef(null)
  return <LazyLoad height={200}>
    <Card variant="outlined" style={{ marginBottom: "1em" }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.font.name}
        </Typography>
        <Paper variant="outlined" style={{ overflow: 'auto' }} >
          <Figlet {...props} ref={ref} />
        </Paper>
      </CardContent>
      <CardActions>
        <Grid item xs={1}>
          <Button size="small" onClick={() => copyToClipboard(ref.current)}>Copy</Button>
        </Grid>
        <Grid item xs={2}>
          <FavouriteContextConsumer>
            {(ctxValue) => (
              <FormControl fullWidth>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="markFavourite"
                      onChange={(e) => {
                        ctxValue.actionDispatch({
                          type: FAVOURITE_ACTIONS.SET_FAVOURITE,
                          name: props.font.fontKey,
                          value: e.target.checked,
                        })
                      }}
                      checked={ctxValue.favourites[props.font.fontKey] || false}
                    />}
                  label="Favourite"
                />
              </FormControl>
            )}
          </FavouriteContextConsumer>
        </Grid>
      </CardActions>
    </Card>
  </LazyLoad>
}
