import { Button, Card, CardActions, CardContent, Paper, Typography } from "@material-ui/core"
import { useRef } from "react"
import { copyToClipboard } from "../helpers/clipboard"
import { Figlet } from "./Figlet"
import LazyLoad from 'react-lazyload';

export const FigletContainer = (props) => {
  const ref = useRef(null)
  return <LazyLoad height={200}>
    <Card variant="outlined" style={{marginBottom: "1em"}}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.font}
        </Typography>
        <Paper variant="outlined" style={{ overflow: 'auto' }} >
          <Figlet {...props} ref={ref} />
        </Paper>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => copyToClipboard(ref.current)}>Copy</Button>
      </CardActions>
    </Card>
  </LazyLoad>
}
