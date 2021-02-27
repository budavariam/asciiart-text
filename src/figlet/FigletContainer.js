import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Checkbox from "@material-ui/core/Checkbox"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
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
        <Grid item xs={2} md={1}>
          <Button size="small" onClick={() => copyToClipboard(ref.current)}>Copy</Button>
        </Grid>
        <Grid item xs={3} md={1}>
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
